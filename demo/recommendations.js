// PoolChem recommendation engine.
// Phase 3 extraction from Index.html. Behavior preserved exactly.
// Depends on globals declared in Index.html: poolSettings,
// fmtPoolCtx, fmtFloz, fmtOz, fmtLbs, fmtLiquid, fmtDrain
// Depends on chemistry.js: fcRange, fcRangeLabel, R

const BLOG_BASE     = 'https://poolchemtracker.com/blog/';
const EXPLAINED_BASE = 'https://poolchemtracker.com/explained/';
const BLOG_LINKS = {
  'shock':        EXPLAINED_BASE + 'breakpoint-chlorination',
  'cc-high':      BLOG_BASE + 'what-causes-high-combined-chlorine',
  'ph-high':      BLOG_BASE + 'pool-ph-too-high',
  'ph-low':       BLOG_BASE + 'ideal-pool-ph-level',
  'ph-swg':       BLOG_BASE + 'pool-ph-keeps-rising',
  'ta-low':       BLOG_BASE + 'pool-alkalinity-vs-ph',
  'ta-high':      BLOG_BASE + 'how-to-lower-pool-alkalinity',
  'cya-low':      BLOG_BASE + 'fc-cya-chart-chlorine-levels',
  'cya-high':     BLOG_BASE + 'liquid-chlorine-vs-tablets',
  'fc-low':       BLOG_BASE + 'how-to-raise-pool-chlorine',
  'fc-high':      BLOG_BASE + 'pool-chlorine-levels-chart',
  'ch-low':       BLOG_BASE + 'calcium-hardness-in-pools',
  'ch-scale':     BLOG_BASE + 'pool-scale-calcium-deposits',
  'ch-balance':   BLOG_BASE + 'calcium-hardness-in-pools',
  'phos':         EXPLAINED_BASE + 'phosphates',
};

function buildRecs(r) {
  const GALLON = poolSettings.gallons || 18000;
  const SCALE  = GALLON / 18000;
  const issues = [];
  const cc = (r.tc != null && r.fc != null) ? Math.round((r.tc - r.fc) * 100) / 100 : null;
  const acidConc = poolSettings.acidConc || 14.5;
  const acidScale = 14.5 / acidConc;
  const acidLabel = acidConc === 31.45 ? '31.45%' : '14.5%';
  const fcR = fcRange(r.cya);
  const fcMin = fcR.min;
  const fcTarget = fcR.target;

  // 0. SHOCK — always first
  if (cc !== null && cc > 0.5) {
    const shockTarget = Math.round((r.cya != null ? r.cya : 40) * 0.4);
    const shockOz = Math.max(0, (shockTarget - r.fc) * GALLON / 10000 * 128 / 10);
    issues.push({ order:0, icon:'🚨', priority:'critical', treatment:'Shock & Maintain', linkKey:'shock',
      amount: shockOz > 0 ? `~${fmtLiquid(shockOz)} Liquid Chlorine (10%) to start` : `Already at/above shock — hold level`,
      context:`Based on: CC = ${cc} ppm (TC − FC). Raise FC from ${r.fc} to ${shockTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:'Eliminates chloramines at breakpoint chlorination.',
      note:`CC > 0.5 ppm — active chloramine buildup. Add the starting dose, then retest in a few hours and re-dose to hold FC at ${shockTarget} ppm. Continue until CC drops below 0.5 ppm and FC holds overnight (loses less than 1 ppm). Do not add other chemicals until complete.`,
      why:'Combined chlorine above 0.5 ppm causes eye/skin irritation and blocks sanitizer effectiveness.' });
  } else if (cc !== null && cc > 0.2) {
    const boostOz = 2.5 * GALLON / 10000 * 128 / 10;
    issues.push({ order:0, icon:'⚡', priority:'critical', treatment:'Boost Chlorine', linkKey:'cc-high',
      amount:`~${fmtLiquid(boostOz)} Liquid Chlorine (10%)`,
      context:`Based on: CC = ${cc} ppm (TC − FC). Raise FC by ~2.5 ppm. ${fmtPoolCtx(GALLON)}`,
      effect:'Helps oxidize forming chloramines.',
      note:`CC is ${cc} ppm — early chloramine formation. Monitor closely and retest in 4–6 hrs.`,
      why:'Combined chlorine above 0.2 ppm indicates chloramines are beginning to form.' });
  }

  // 1 & 2. pH and TA — special case: if pH high AND TA low, raise TA first
  // Muriatic acid lowers both pH and TA, so adding it when TA is already low makes things worse.
  // Exception: raise TA with baking soda first, then address pH.
  const phR = R('ph');
  const taR = R('ta');
  const taTarget = Math.round((taR.min + taR.max) / 2);
  const taLowAndPhHigh = r.ta != null && r.ta < taR.min && r.ph != null && r.ph > phR.max;
  const phHighAndTaHigh = r.ph != null && r.ph > phR.max && r.ta != null && r.ta > taR.max;

  if (r.ph != null && r.ph > phR.max) {
    const oz = Math.round((r.ph - phR.target) / 0.1 * ((r.ta || 80) / 10) * 4.17 * SCALE * acidScale);
    issues.push({ order: taLowAndPhHigh ? 2 : 1, icon:'⬇️', priority:'high', treatment:`Muriatic Acid (${acidLabel})`, linkKey:'ph-high',
      amount:`~${fmtFloz(oz)}`,
      context:`Based on: pH ${r.ph} → target ${phR.target}. ${fmtPoolCtx(GALLON)}`,
      effect:`Lowers pH by ~${(r.ph - phR.target).toFixed(1)} units.`,
      note: taLowAndPhHigh
        ? 'Raise TA first (step above) — muriatic acid lowers TA too, which would worsen your low TA. Add acid only after TA is corrected.'
        : 'Add slowly near return jet with pump running. Wait 4–6 hrs before retesting.',
      why:`High pH reduces chlorine effectiveness and promotes scale.${poolSettings.swg ? ' For SWG pools, electrolysis naturally raises pH over time — a regular weekly acid dose helps manage this.' : ''}` });
  }
  const taIsLow = r.ta != null && r.ta < taR.min;
  const phCritical = r.ph != null && r.ph < 7.0;
  if (r.ph != null && r.ph < phR.min && (phCritical || (!taIsLow && !poolSettings.swg))) {
    const oz = Math.round((phR.target - r.ph) / 0.1 * 11 * SCALE);
    issues.push({ order:1, icon:'⬆️', priority: phCritical ? 'critical' : 'high', treatment:'pH Up (Sodium Carbonate)', linkKey:'ph-low',
      amount:`~${fmtOz(oz)}`,
      context:`Based on: pH ${r.ph} → target ${phR.target}. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises pH by ~${(phR.target - r.ph).toFixed(1)} units.`,
      note: phCritical
        ? `pH below 7.0 is actively corrosive to plaster, grout, and metal fittings. We're recommending pH Up even though your SWG or low TA would normally raise pH on their own — they're too slow at this level. Dissolve in a bucket of pool water first, then pour around the pool edge.`
        : 'Dissolve in bucket of pool water first, then pour around pool edge. Alternative: aerate the pool (point return jets upward, run a fountain or spa feature) to raise pH without adding chemicals — works best when TA is in range.',
      why:'Low pH is corrosive to pool surfaces, equipment, and irritating to swimmers.' });
  }
  if (poolSettings.swg && r.ph != null && r.ph >= 7.0 && r.ph < phR.min) {
    issues.push({ order:1, icon:'ℹ️', priority:'low', treatment:'Monitor pH', linkKey:'ph-swg',
      amount:'No action needed now',
      context:`Based on: pH ${r.ph}, normal range ${phR.min}–${phR.max}.`,
      effect:'Your SWG will naturally raise pH over the next few days through electrolysis.',
      note:'pH is below the normal range but above the corrosive threshold (7.0). Retest in 2–3 days — SWG operation should bring pH back into range on its own. Want to speed it up? Aerate the pool — point return jets upward or run a fountain to push CO₂ off-gassing. If pH stays below the range after a week, or drops below 7.0, dose pH Up.',
      why:'SWG pools naturally drift pH upward over time. Mild dips into the low-7s typically self-correct.' });
  }

  // 2. TA — before pH when pH is high and TA is low (see exception above)
  if (r.ta != null && r.ta < taR.min) {
    const lbs = Math.round(((taTarget - r.ta) / 10) * 2.5 * SCALE * 10) / 10;
    issues.push({ order: taLowAndPhHigh ? 1 : 2, icon:'⬆️', priority:'high', treatment:'Baking Soda (TA+)', linkKey:'ta-low',
      amount:`~${fmtLbs(lbs)}`,
      context:`Based on: TA ${r.ta} → target ${taTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises TA by ~${taTarget - r.ta} ppm.`,
      note: taLowAndPhHigh
        ? 'Raise TA before lowering pH — baking soda raises TA without significantly dropping pH. Dissolve in a bucket of pool water first, then pour around the pool edge with pump running. Then use acid to address pH in the next step.'
        : 'Dissolve in a bucket of pool water first, then pour around the pool edge with pump running. Retest pH after, as TA affects pH.',
      why: taLowAndPhHigh
        ? 'TA is very low and pH is high — muriatic acid would lower both, making TA worse. Raise TA first with baking soda, then address pH.'
        : 'Low alkalinity causes pH to swing widely. Fix after pH is stable.' });
  }
  if (r.ta != null && r.ta > taR.max) {
    const taOz = Math.round((r.ta - taTarget) / 10 * 100 * SCALE * acidScale);
    issues.push({ order:2, icon:'⬇️', priority:'high', treatment:`Muriatic Acid for TA (${acidLabel})`, linkKey:'ta-high',
      amount:`~${fmtFloz(taOz)}`,
      context:`Based on: TA ${r.ta} → target ${taTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Lowers TA by ~${r.ta - taTarget} ppm — may require multiple treatments with aeration.`,
      note: phHighAndTaHigh
        ? 'Your pH acid dose (step above) will also lower TA. Add the pH dose first, then aerate to raise pH back — this is the standard TA-lowering cycle. Retest both before adding more acid.'
        : 'Add acid with pump running, aerate to raise pH back, then retest. Do not rush.',
      why:'High alkalinity locks pH in place and can cause cloudy water.' });
  }

  // 3. CYA — before chlorine (protects chlorine from UV)
  const cyaR = R('cya');
  const cyaTarget = Math.round((cyaR.min + cyaR.max) / 2);
  const cyaLow = r.cya != null && r.cya < cyaR.min;
  if (cyaLow) {
    const oz = Math.round(((cyaTarget - r.cya) / 10) * 24 * SCALE);
    const fcAlsoLow = r.fc != null && r.fc < fcMin;
    issues.push({ order:3, icon:'⬆️', priority: fcAlsoLow ? 'critical' : 'medium', treatment:'CYA / Stabilizer', linkKey:'cya-low',
      amount:`~${fmtOz(oz)}`,
      context:`Based on: CYA ${r.cya} → target ${cyaTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises CYA by ~${cyaTarget - r.cya} ppm.`,
      note: fcAlsoLow
        ? 'Fix CYA before adding chlorine — your FC target depends on CYA. Add in skimmer sock, run pump 24 hrs, then retest and adjust chlorine.'
        : 'Add in skimmer sock, run pump 24 hrs. Retest CYA before adjusting chlorine.',
      why:'CYA protects chlorine from UV breakdown. Without adequate CYA, chlorine dissipates rapidly in sunlight.' });
  }
  const chR = R('ch');
  const lsiR = R('lsi');
  const bothNeedDrain = r.cya != null && r.cya > cyaR.max + 10 && r.ch != null && r.ch > chR.max && r.lsi != null && r.lsi > lsiR.max;

  if (r.cya != null && r.cya > cyaR.max + 10) {
    const drainPct = Math.min(Math.round((1 - cyaR.max / r.cya) * 100), 50);
    const drainGal = Math.round(GALLON * drainPct / 100 / 100) * 100;
    issues.push({ order:3, icon:'💧', priority:'medium', treatment:'Partial Drain & Refill', linkKey:'cya-high',
      amount:fmtDrain(drainGal, drainPct),
      context:`Based on: CYA ${r.cya} ppm, target ${cyaR.min}–${cyaR.max} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Dilutes CYA by ~${drainPct}% — may need multiple cycles.`,
      note: bothNeedDrain
        ? `Only way to reduce CYA. Your calcium hardness also needs a drain (next step) — combine both into one: use whichever drain percentage is larger. Refill with fresh water and retest. If you use chlorine tablets (trichlor), switch to liquid chlorine — tabs add CYA with every dose.`
        : `Only way to reduce CYA. Refill with fresh water and retest. If you use chlorine tablets (trichlor), switch to liquid chlorine — tabs add CYA with every dose.`,
      why:'High CYA reduces chlorine effectiveness — "chlorine lock".' });
  }

  // 4. Chlorine — CYA-adjusted target (downgrade if CYA needs fixing first)
  // Skip if any CC-triggered chlorine rec is already firing — those doses cover FC deficiency too
  const isShocking = cc !== null && cc > 0.5;
  const isAddingChlorineForCC = cc !== null && cc > 0.2;
  if (r.fc != null && r.fc < fcMin && !isAddingChlorineForCC) {
    const needed = (fcTarget - r.fc) * GALLON / 10000;
    const ozNeeded = needed * 128 / 10;
    issues.push({ order:4, icon:'🧴', priority:'critical', treatment:'Liquid Chlorine (10%)', linkKey:'fc-low',
      amount:`~${fmtLiquid(ozNeeded)}`,
      context:`Based on: FC ${r.fc} ppm → target ${fcTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises FC by ~${(fcTarget - r.fc).toFixed(1)} ppm.`,
      note: cyaLow ? `Fix CYA first (step above) — your FC target will change once CYA is corrected.` : `Minimum FC is ${fcMin} ppm. Add in evening, run pump 4+ hrs.`,
      why:`FC below ${fcMin} ppm cannot effectively sanitize the pool.` });
  }

  if (r.fc != null && r.fc > fcR.max + 2 && !isShocking) {
    issues.push({ order:4, icon:'⚠️', priority:'high', treatment:'Reduce Chlorine Exposure', linkKey:'fc-high',
      amount:'Stop adding chlorine — wait for levels to drop',
      context:`Based on: FC ${r.fc} ppm, target ${fcRangeLabel(r.cya)}.`,
      effect:'FC will naturally decrease through UV exposure and swimmer usage.',
      note:`Do not swim until FC drops to ${fcR.max} ppm. If you have an SWG, turn output down or off temporarily. Retest in 24 hrs.`,
      why:`FC significantly above the normal range (${fcRangeLabel(r.cya)}) can cause skin and eye irritation.` });
  }

  // 5. CH, Salt, Copper — secondary parameters
  const chTarget = Math.round((chR.min + chR.max) / 2);
  if (r.ch != null && r.ch < chR.min) {
    const lbs = Math.round(((chTarget - r.ch) / 10) * 1.7 * SCALE * 10) / 10;
    issues.push({ order:5, icon:'⬆️', priority:'medium', treatment:'Calcium Hardness Plus', linkKey:'ch-low',
      amount:`~${fmtLbs(lbs)}`,
      context:`Based on: CH ${r.ch} → target ${chTarget} ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises CH by ~${chTarget - r.ch} ppm.`,
      note:'Add slowly with pump running. Does not significantly affect pH.',
      why:'Low calcium causes water to leach calcium from plaster and equipment.' });
  }
  if (r.ch != null && r.ch > chR.max && r.lsi != null && r.lsi > lsiR.max) {
    const drainGal = Math.round(GALLON * 0.2 / 100) * 100;
    issues.push({ order:5, icon:'💧', priority:'medium', treatment:'Partial Drain & Refill (for CH)', linkKey:'ch-scale',
      amount:fmtDrain(drainGal, 20),
      context:`Based on: CH ${r.ch} ppm, target ${chR.min}–${chR.max} ppm. LSI ${r.lsi >= 0 ? '+' : ''}${r.lsi.toFixed(2)} (scale-forming).`,
      effect:'Dilutes CH by ~20% — may need multiple cycles.',
      note: bothNeedDrain
        ? 'You also need to drain for high CYA (step above) — combine both into one drain, using whichever percentage is larger. Only way to lower calcium hardness. Refill with fresh water and retest.'
        : 'Only way to lower calcium hardness. Drain and refill with fresh water, then retest.',
      why:'High calcium with scale-forming LSI causes deposits on surfaces, tiles, heater elements, and plumbing.' });
  } else if (r.ch != null && r.ch > chR.max && (r.lsi == null || r.lsi <= lsiR.max)) {
    issues.push({ order:5, icon:'ℹ️', priority:'low', treatment:'Monitor Calcium Hardness', linkKey:'ch-balance',
      amount:'No action needed now',
      context:`Based on: CH ${r.ch} ppm (above ${chR.max} range)${r.lsi != null ? `, but LSI is ${r.lsi >= 0 ? '+' : ''}${r.lsi.toFixed(2)} (balanced)` : ''}.`,
      effect:'CH is above the typical range but your LSI is balanced — no scale risk currently.',
      note:'Keep an eye on CH over time. If LSI trends above +0.3 or you notice scale deposits, a partial drain may be needed.',
      why:'Calcium hardness above range is only a concern when LSI indicates scale-forming conditions.' });
  }
  if (r.salt != null && r.salt < 2700 && poolSettings.swg) {
    const lbs = Math.round(((3200 - r.salt) / 100) * 15 * SCALE);
    issues.push({ order:5, icon:'🧂', priority:'medium', treatment:'Pool Salt',
      amount:`~${fmtLbs(lbs)}`,
      context:`Based on: Salt ${r.salt} → target 3200 ppm. ${fmtPoolCtx(GALLON)}`,
      effect:`Raises salt by ~${3200 - r.salt} ppm.`,
      note:'Broadcast around pool, brush to dissolve, run pump 24 hrs before retesting.',
      why:'Low salt reduces your SWG\'s ability to generate chlorine effectively.' });
  }
  if (r.salt != null && r.salt > 4500 && poolSettings.swg) {
    const drainGal = Math.round(GALLON * 0.1 / 100) * 100;
    issues.push({ order:5, icon:'🧂', priority:'medium', treatment:'Reduce Salt Level',
      amount:`${fmtDrain(drainGal, 10)} and refill`,
      context:`Based on: Salt ${r.salt} ppm, typical range 2700–4000 ppm.`,
      effect:'Dilutes salt by ~10% — retest after refilling.',
      note:'Check your manufacturer\'s specs for the recommended range. High salt can damage the SWG cell and void the warranty.',
      why:'Excess salt accelerates corrosion of metal fittings and pool equipment.' });
  }
  if (r.iron != null && r.iron > 0.3) {
    issues.push({ order:5, icon:'🟤', priority:'medium', treatment:'Metal Sequestrant (for Iron)',
      amount:'Per product label',
      context:`Based on: Iron ${r.iron} ppm, target <0.3 ppm.`,
      effect:'Binds iron ions to prevent staining and discoloration.',
      note:'Add with pump running. Avoid shocking for 48 hrs after treatment — oxidation can cause iron to precipitate and stain.',
      why:'Elevated iron causes brown/rust staining on pool surfaces and can turn water cloudy or brown.' });
  }
  if (r.copper != null && r.copper > 0.2) {
    issues.push({ order:5, icon:'🔵', priority:'medium', treatment:'Metal Sequestrant (for Copper)',
      amount:'Per product label',
      context:`Based on: Copper ${r.copper} ppm, target <0.2 ppm.`,
      effect:'Binds copper ions to prevent staining.',
      note:'Add with pump running. Do not shock immediately after. Retest in 48 hrs.',
      why:'Elevated copper causes blue/green staining on surfaces and can turn hair green.' });
  }

  // 6. Phosphates — always last
  if (r.phos != null && r.phos > 200) {
    issues.push({ order:6, icon:'ℹ️', priority:'low', treatment:'Monitor Phosphates', linkKey:'phos',
      amount:'No action needed unless algae issue',
      context:`Based on: Phosphates ${r.phos} ppb (above the 200 ppb reference level).`,
      effect:'Elevated phosphates are not a direct water-quality problem on their own.',
      note:'Phosphates feed algae, but maintaining FC in your target range prevents algae regardless of phosphate levels. Phosphate remover is only worth using if you have an active algae bloom and can\'t keep FC up. The cheaper and more effective approach: keep up with chlorination.',
      why:'Algae growth is controlled by chlorine, not by removing its food source.' });
  }

  // Sort by priority (critical first), then by treatment order within each priority
  const priorityWeight = { critical: 0, high: 1, medium: 2, low: 3 };
  issues.sort((a, b) => (priorityWeight[a.priority] - priorityWeight[b.priority]) || (a.order - b.order));
  issues.forEach((rec, i) => { rec.step = i + 1; });
  return issues;
}
