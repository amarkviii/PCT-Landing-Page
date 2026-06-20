// PoolChem chemistry module.
// Phase 1 extraction from Index.html. Behavior preserved exactly.
// Depends on globals defined in Index.html: isPro(), poolSettings.
// All declarations live in the global lexical scope (classic script),
// matching the behavior of the original inline declarations.

// ── FC / CYA RANGE ──
const FC_OFFSET = { cold:2, temperate:3, mountain:3, coastal:3, tropical:4, desert:4 };
function fcRange(cya) {
  if (cya == null || cya < 20) return { min: 1, max: 3, target: 2 };
  const climateKey = isPro() ? (poolSettings.climate || 'temperate') : 'temperate';
  const offset = FC_OFFSET[climateKey] || 3;
  const ratio = poolSettings.swg ? 0.05 : 0.075;
  const min = Math.round(cya * ratio * 10) / 10;
  const max = Math.round((min + offset) * 10) / 10;
  const target = Math.round((min + max) / 2 * 10) / 10;
  return { min, max, target };
}

function fcRangeLabel(cya) {
  const r = fcRange(cya);
  return `${r.min}–${r.max} ppm`;
}

// ── CLIMATE RANGES ──
const CLIMATE_DATA = {
  temperate: { label:'Temperate (Baseline)', ph:{min:7.4,max:7.6,target:7.4}, ta:{min:60,max:80}, cya:{min:40,max:70}, ch:{min:200,max:400}, lsi:{min:-0.2,max:0.2} },
  desert:    { label:'Desert / Arid',        ph:{min:7.6,max:7.8,target:7.6}, ta:{min:50,max:70}, cya:{min:70,max:80}, ch:{min:350,max:650}, lsi:{min:0.0,max:0.3} },
  tropical:  { label:'Tropical / Humid',     ph:{min:7.4,max:7.7,target:7.5}, ta:{min:70,max:90}, cya:{min:50,max:70}, ch:{min:250,max:400}, lsi:{min:-0.2,max:0.2} },
  coastal:   { label:'Coastal',              ph:{min:7.5,max:7.8,target:7.6}, ta:{min:70,max:90}, cya:{min:50,max:70}, ch:{min:250,max:450}, lsi:{min:-0.1,max:0.3} },
  mountain:  { label:'Mountain / High Alt.',  ph:{min:7.4,max:7.7,target:7.5}, ta:{min:60,max:80}, cya:{min:60,max:80}, ch:{min:200,max:400}, lsi:{min:-0.2,max:0.2} },
  cold:      { label:'Cold / Seasonal',      ph:{min:7.4,max:7.6,target:7.4}, ta:{min:70,max:90}, cya:{min:30,max:60}, ch:{min:200,max:350}, lsi:{min:-0.3,max:0.0} },
};

function getClimate() {
  const key = isPro() ? (poolSettings.climate || 'temperate') : 'temperate';
  return CLIMATE_DATA[key];
}

function R(param) {
  return getClimate()[param];
}

// ── LSI CALC ──
// Exact formulas matching user's spreadsheet:

// Temp Factor: polynomial fit to APSP/Taylor reference table (°F)
// TF = -0.00001316×T² + 0.00453862×T − 0.07390709
// Max error vs reference table: ±0.001 — no stepped jumps at bucket boundaries
function tempFactor(tempF) {
  return -0.00001316 * tempF * tempF + 0.00453862 * tempF - 0.07390709;
}

// LSI = pH + TempFactor + TDSFactor + CalciumFactor + AlkFactor − 12.1
// TempFactor    = polynomial fit to APSP reference table (°F)
// TDSFactor     = 0.012 × log10(salt_ppm)
// CalciumFactor = log10(CH − 0.4)
// AlkFactor     = log10(corrTA), corrTA = MAX(TA − CYA/3, 1)
function computeLSI(ph, tempF, ta, ch, cya, salt) {
  ph    = parseFloat(ph)    || 0;
  tempF = parseFloat(tempF) || 0;
  ta    = parseFloat(ta)    || 0;
  ch    = parseFloat(ch)    || 0;
  cya   = parseFloat(cya)   || 0;
  salt  = parseFloat(salt)  || 0;
  const corrTA = Math.max(ta - (cya / 3), 1);
  const tf   = tempFactor(tempF);
  const tdsF = (salt > 0)      ? 0.012 * Math.log10(salt) : 0;
  const caF  = (ch - 0.4 > 0)  ? Math.log10(ch - 0.4)    : 0;
  const alkF = Math.log10(corrTA);
  const lsi  = ph + tf + tdsF + caF + alkF - 12.1;
  return { lsi: isNaN(lsi) ? null : lsi, corrTA, tf, tdsF, caF, alkF };
}

// ── POOL HEALTH SCORE ──
// 5 components, 20 pts each = 100 max
// Only scored if data is available; result scaled to components present
function calcHealthScore(r) {
  if (!r) return null;
  const components = [];

  // FC (20pts) — dynamic range based on CYA
  if (r.fc != null) {
    const fcR = fcRange(r.cya);
    let pts;
    if (r.fc >= fcR.min && r.fc <= fcR.max) pts = 20;
    else if (r.fc > fcR.max && r.fc <= fcR.max + 2) pts = Math.round(20 * (fcR.max + 2 - r.fc) / 2);
    else if (r.fc >= fcR.min - 0.5 && r.fc < fcR.min) pts = Math.round(20 * (r.fc - (fcR.min - 0.5)) / 0.5);
    else pts = 0;
    const tip = pts < 20 ? (r.fc < fcR.min ? `Raise FC to ${fcRangeLabel(r.cya)}` : `Lower FC to ${fcRangeLabel(r.cya)}`) : null;
    components.push({ label:'Free Chlorine', pts, max:20, tip });
  }

  // pH (20pts) — linear decay from climate target
  if (r.ph != null) {
    const phR = R('ph');
    const phTarget = phR.target;
    const halfRange = (phR.max - phR.min) / 2;
    const dist = Math.abs(r.ph - phTarget);
    let pts;
    if (dist <= halfRange)      pts = 20;
    else if (dist <= halfRange + 0.3) pts = Math.round(20 * (1 - (dist - halfRange) / 0.3));
    else                              pts = 0;
    const tip = pts < 20 ? (r.ph < phTarget ? `Raise pH closer to ${phTarget}` : `Lower pH closer to ${phTarget}`) : null;
    components.push({ label:'pH', pts, max:20, tip });
  }

  // CYA (20pts) — climate-adjusted range, gradual decay outside
  if (r.cya != null) {
    const cyaR = R('cya');
    let pts;
    if (r.cya >= cyaR.min && r.cya <= cyaR.max)                pts = 20;
    else if (r.cya < cyaR.min && r.cya >= cyaR.min - 15)       pts = Math.round(20 * (r.cya - (cyaR.min - 15)) / 15);
    else if (r.cya > cyaR.max && r.cya <= cyaR.max + 15)       pts = Math.round(20 * ((cyaR.max + 15) - r.cya) / 15);
    else                                                         pts = 0;
    const tip = pts < 20 ? (r.cya < cyaR.min ? `Raise CYA to ${cyaR.min}–${cyaR.max} ppm` : `Lower CYA to ${cyaR.min}–${cyaR.max} ppm`) : null;
    components.push({ label:'CYA', pts, max:20, tip });
  }

  // Combined Chlorine (20pts) — CC = TC - FC, target < 0.2 ppm
  if (r.tc != null && r.fc != null) {
    const cc = Math.round((r.tc - r.fc) * 100) / 100;
    let pts;
    if (cc <= 0.2)      pts = 20;
    else if (cc <= 0.5) pts = 10;
    else if (cc <= 1.0) pts = 5;
    else                pts = 0;
    const tip = pts < 20 ? `Reduce CC (currently ${cc} ppm) below 0.2 ppm` : null;
    components.push({ label:'Combined Chlorine', pts, max:20, tip });
  }

  // LSI (20pts) — climate-adjusted ideal range
  if (r.lsi != null) {
    const lsiR = R('lsi');
    const lsiMid = (lsiR.min + lsiR.max) / 2;
    const lsiHalf = (lsiR.max - lsiR.min) / 2;
    const dist = Math.abs(r.lsi - lsiMid);
    let pts;
    if (dist <= lsiHalf)          pts = 20;
    else if (dist <= lsiHalf * 2) pts = Math.round(20 * (1 - (dist - lsiHalf) / lsiHalf));
    else                          pts = 0;
    const tip = pts < 20 ? `Bring LSI to ${lsiR.min >= 0 ? '+' : ''}${lsiR.min.toFixed(1)} to ${lsiR.max >= 0 ? '+' : ''}${lsiR.max.toFixed(1)} (currently ${r.lsi >= 0 ? '+' : ''}${r.lsi.toFixed(2)})` : null;
    components.push({ label:'LSI Balance', pts, max:20, tip });
  }

  if (!components.length) return null;
  const maxPossible = components.length * 20;
  const raw = components.reduce((a, b) => a + b.pts, 0);
  const total = Math.round((raw / maxPossible) * 100);
  return { total, components };
}

function healthScoreColor(score) {
  if (score == null) return 'var(--muted)';
  if (score >= 85) return 'var(--good)';
  if (score >= 65) return '#ffd700';
  if (score >= 40) return 'var(--warn)';
  return 'var(--danger)';
}

function healthScoreLabel(score) {
  if (score == null) return '—';
  if (score >= 85) return 'Excellent';
  if (score >= 65) return 'Good';
  if (score >= 40) return 'Needs Work';
  return 'Poor';
}
