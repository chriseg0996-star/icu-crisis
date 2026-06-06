// ICU Crisis — internationalization (EN / ES)
(function(global){
'use strict';

function detectLang(){
  try{
    const s=localStorage.getItem('icuLang');
    if(s==='en'||s==='es')return s;
  }catch(e){}
  return (navigator.language||'').toLowerCase().startsWith('es')?'es':'en';
}

let _lang=detectLang();

function getLang(){return _lang;}

function setLang(code){
  if(code!=='en'&&code!=='es')return;
  _lang=code;
  try{localStorage.setItem('icuLang',code);}catch(e){}
  document.documentElement.lang=code;
}

function t(key,params){
  const pack=I18N[_lang]||I18N.en;
  let s=pack[key];
  if(s===undefined)s=I18N.en[key];
  if(s===undefined)return key;
  if(params)Object.keys(params).forEach(k=>{s=s.split('{'+k+'}').join(String(params[k]));});
  return s;
}

const I18N={
en:{
  'menu.sub':'CLINICAL SIMULATION',
  'menu.desc':'Diagnose and manage ICU patients under time pressure. No diagnosis spoilers. Pure clinical reasoning.',
  'menu.play':'PLAY',
  'menu.credit':'Made by Christopher Godines',
  'menu.disclaimer':'Medical simulation for educational purposes only. Not for clinical decision-making.',
  'menu.ready':'Ready to diagnose?',
  'menu.levelsDone':'Levels Completed: {n}/30',
  'menu.bestScore':'Best Score: {n}',
  'lac.trend':'Lac trend',
  'goal.lacTrend':'trend',
  'pause.title':'PAUSED',
  'pause.resume':'RESUME',
  'pause.restart':'RESTART',
  'pause.quit':'QUIT',
  'modal.diagnostics':'Diagnostics',
  'modal.pocus':'🩺 Lung POCUS',
  'modal.echo':'❤️ Echo',
  'modal.labs':'🧪 Labs',
  'action.fluids':'Fluids',
  'action.fluidsSub':'+500ml',
  'action.norepi':'Norepi',
  'action.norepiSub':'vasopressor',
  'action.diuretic':'Diuretic',
  'action.diureticSub':'furosemide',
  'action.fio2':'FiO₂',
  'action.peep':'PEEP',
  'action.suction':'Suction',
  'action.suctionSub':'airway',
  'action.abg':'ABG',
  'action.abgSub':'~15s',
  'action.diagnostics':'Diagnostics',
  'action.diagnosticsSub':'menu',
  'tier.foundations':'FOUNDATIONS',
  'tier.intermediate':'INTERMEDIATE',
  'tier.overlap':'OVERLAP',
  'tier.complex':'COMPLEX',
  'tier.challenge':'CHALLENGE',
  'tier.master':'MASTER',
  'brief.title':'ADMISSION BRIEF — Level {n}',
  'brief.patient':'Patient',
  'brief.status':'Status',
  'brief.exam':'Exam Findings',
  'brief.concern':'What worries me',
  'brief.accept':'ACCEPT PATIENT',
  'lvl.header':'LVL {n}',
  'phase.stable':'STABLE',
  'phase.declining':'DECLINING',
  'phase.unstable':'UNSTABLE',
  'phase.crashing':'CRASHING',
  'problem.stable':'STABLE',
  'problem.hemo':'HEMODYNAMIC',
  'problem.oxy':'OXYGENATION',
  'problem.airway':'AIRWAY',
  'tag.neOn':'NE ON',
  'tag.diuresis':'DIURESIS',
  'game.patientAccepted':'Patient accepted. VC: VT 6, PEEP 8, FiO₂ 40%.',
  'game.stabTrend':'Vitals trending toward stability...',
  'game.stabilizing':'Patient stabilizing.',
  'game.fluidBolus':'Fluid bolus +500ml (total: {n}ml).',
  'game.preloadOk':'Transient preload response.',
  'game.preloadMin':'Minimal fluid response.',
  'game.neStart':'Norepinephrine STARTED.',
  'game.neStop':'Norepinephrine STOPPED.',
  'game.neRespond':'MAP responding (+{n}).',
  'game.neTrend':'MAP trend improving.',
  'game.suctionOk':'Suction: thick secretions cleared.',
  'game.suctionMin':'Suction: minimal secretions.',
  'game.diureticInfusing':'Already infusing.',
  'game.diureticGiven':'Furosemide 40mg IV.',
  'game.diureticOk':'Urine output increasing. Crackles improving.',
  'game.diureticMin':'Minimal diuretic response.',
  'game.fio2Set':'FiO₂ → {n}%.',
  'game.fio2Tox':' ⚠ Toxicity risk.',
  'game.fio2Max':'FiO₂ max.',
  'game.fio2Ra':'FiO₂ at RA.',
  'game.peepSet':'PEEP → {n}.',
  'game.peepWatch':' ⚠ Watch MAP.',
  'game.peepMax':'PEEP max.',
  'game.peepMin':'PEEP min.',
  'game.chestDecomp':'Chest decompressed. Stabilizing.',
  'game.abgDrawn':'ABG drawn...',
  'game.abgResult':'ABG → pH {ph} | PaO₂ {pao2} | PaCO₂ {paco2} | Lac {lac} | P/F {pf}',
  'game.airwaysClear':'Airways cleared.',
  'alert.mapArrest':'MAP {n} — Imminent arrest.',
  'alert.spo2Crit':'SpO₂ {n}% — Critical.',
  'alert.mapLac':'MAP supported but lactate rising — perfusion inadequate.',
  'alert.mapVol':'MAP low on vasopressor — volume-depleted?',
  'alert.mapNoSupport':'MAP {n} — No hemodynamic support.',
  'alert.noFluidResp':'No MAP response to fluids — alternate cause?',
  'alert.spo2Airway':'SpO₂ refractory — airway pressures elevated.',
  'alert.spo2Crackles':'SpO₂ refractory — crackles noted.',
  'alert.spo2Fio2':'Oxygenation not improving despite FiO₂.',
  'alert.peakResist':'Peak pressures rising — resistive pattern.',
  'alert.ventAlarm':'Vent alarming. Elevated pressures.',
  'alert.cannotVent':'Cannot ventilate!',
  'alert.blines':'B-lines increasing — extravascular lung water.',
  'alert.cracklesInc':'Crackles increasing.',
  'alert.warmShock':'Low SVR pattern. Warm shock.',
  'alert.compWater':'Low compliance + lung water.',
  'alert.compResist':'Compliance preserved, pressures high — resistive.',
  'alert.rvStrain':'RV strain pattern detected.',
  'alert.co2Ret':'CO₂ retention noted.',
  'alert.worsening':'Trajectory worsening.',
  'alert.decomp':'Decompensating.',
  'arrest.map':'Refractory hypotension → PEA arrest',
  'arrest.spo2':'Severe hypoxemia → Cardiac arrest',
  'win.stabilized':'Patient stabilized through correct treatment.',
  'win.survived':'Patient survived the full window.',
  'end.win':'CASE RESOLVED',
  'end.lose':'CARDIAC ARREST',
  'end.diagnosis':'DIAGNOSIS:',
  'end.time':'Time: {m}m {s}s | Grade: {grade} ({score})',
  'end.mapPct':'MAP≥65: {n}%',
  'end.spoPct':'SpO₂≥90: {n}%',
  'end.fluids':'Fluids: {n}ml | NE: {ne}',
  'end.suctions':'Suctions: {ok}ok/{bad}bad | Diuretics: {n}',
  'end.peak':'Peak lac: {lac} | Lung injury: {li}',
  'end.levels':'LEVELS',
  'end.next':'NEXT →',
  'end.retry':'RETRY',
  'end.neNone':' — ',
  'abg.dualFail':'Dual failure: oxygenation + perfusion deficit.',
  'abg.o2Airway':'Oxygenation impaired — airway resistance pattern.',
  'abg.o2Edema':'Low P/F with compliance drop — alveolar flooding pattern.',
  'abg.o2Shunt':'Hypoxemia with preserved compliance — shunt or dead space?',
  'abg.o2Refract':'Shunt physiology — refractory to FiO₂.',
  'abg.perfFail':'Oxygenation adequate but perfusion failing.',
  'abg.co2Retain':'CO₂ retention — ventilatory failure or air trapping.',
  'abg.acidResp':'Acidemia — respiratory component.',
  'abg.acidMet':'Acidemia — metabolic, check perfusion.',
  'abg.ok':'Gas exchange acceptable. Monitor trends.',
  'diag.pocus.ordered':'Lung POCUS ordered...',
  'diag.echo.ordered':'Bedside Echo ordered...',
  'diag.labs.ordered':'Labs Panel ordered...',
  'event.plug.msg':'⚠ Sudden SpO₂ drop! Peak pressures spiking!',
  'event.plug.clue':'HIGH PRESSURE alarm. Cannot ventilate.',
  'event.pneumo.msg':'⚠ Acute desaturation! Unilateral findings!',
  'event.pneumo.clue':'Absent breath sounds. Tracheal deviation?',
  'event.vaso.msg':'⚠ MAP crashing! Warm shock!',
  'event.vaso.clue':'Wide pulse pressure. Flash cap refill.',
  'event.bleed.msg':'⚠ Sudden tachycardia! Pressure dropping!',
  'event.bleed.clue':'Drain output increasing. Check Hb.',
  'l1.clue1':'Bilateral crackles on exam.',
  'l1.clue2':'CXR: bilateral infiltrates.',
  'l1.clue3':'Hypoxemia — consider diuresis.'
},
es:{
  'menu.sub':'SIMULACIÓN CLÍNICA',
  'menu.desc':'Diagnostica y maneja pacientes de UCI bajo presión. Sin spoilers del diagnóstico. Razonamiento clínico puro.',
  'menu.play':'JUGAR',
  'menu.credit':'Hecho por Christopher Godines',
  'menu.disclaimer':'Simulación médica solo con fines educativos. No usar para decisiones clínicas.',
  'menu.ready':'¿Listo para diagnosticar?',
  'menu.levelsDone':'Niveles completados: {n}/30',
  'menu.bestScore':'Mejor puntuación: {n}',
  'lac.trend':'Tend. lactato',
  'goal.lacTrend':'tendencia',
  'pause.title':'PAUSA',
  'pause.resume':'CONTINUAR',
  'pause.restart':'REINICIAR',
  'pause.quit':'SALIR',
  'modal.diagnostics':'Diagnóstico',
  'modal.pocus':'🩺 POCUS pulmonar',
  'modal.echo':'❤️ Eco',
  'modal.labs':'🧪 Labs',
  'action.fluids':'Fluidos',
  'action.fluidsSub':'+500 ml',
  'action.norepi':'Norepi',
  'action.norepiSub':'vasopresor',
  'action.diuretic':'Diurético',
  'action.diureticSub':'furosemida',
  'action.fio2':'FiO₂',
  'action.peep':'PEEP',
  'action.suction':'Succión',
  'action.suctionSub':'vía aérea',
  'action.abg':'GSA',
  'action.abgSub':'~15 s',
  'action.diagnostics':'Diagnóstico',
  'action.diagnosticsSub':'menú',
  'tier.foundations':'FUNDAMENTOS',
  'tier.intermediate':'INTERMEDIO',
  'tier.overlap':'SUPERPOSICIÓN',
  'tier.complex':'COMPLEJO',
  'tier.challenge':'DESAFÍO',
  'tier.master':'MAESTRO',
  'brief.title':'RESUMEN DE INGRESO — Nivel {n}',
  'brief.patient':'Paciente',
  'brief.status':'Estado',
  'brief.exam':'Hallazgos al examen',
  'brief.concern':'Lo que me preocupa',
  'brief.accept':'ACEPTAR PACIENTE',
  'lvl.header':'NIV {n}',
  'phase.stable':'ESTABLE',
  'phase.declining':'EN DECLIVE',
  'phase.unstable':'INESTABLE',
  'phase.crashing':'CRÍTICO',
  'problem.stable':'ESTABLE',
  'problem.hemo':'HEMODINÁMICO',
  'problem.oxy':'OXIGENACIÓN',
  'problem.airway':'VÍA AÉREA',
  'tag.neOn':'NE ON',
  'tag.diuresis':'DIURESIS',
  'game.patientAccepted':'Paciente aceptado. VM: VT 6, PEEP 8, FiO₂ 40%.',
  'game.stabTrend':'Signos vitales tendiendo a estabilidad...',
  'game.stabilizing':'Paciente estabilizándose.',
  'game.fluidBolus':'Bolo de fluidos +500 ml (total: {n} ml).',
  'game.preloadOk':'Respuesta transitoria de precarga.',
  'game.preloadMin':'Respuesta mínima a fluidos.',
  'game.neStart':'Norepinefrina INICIADA.',
  'game.neStop':'Norepinefrina DETENIDA.',
  'game.neRespond':'PAM respondiendo (+{n}).',
  'game.neTrend':'Tendencia de PAM mejorando.',
  'game.suctionOk':'Succión: secreciones espesas eliminadas.',
  'game.suctionMin':'Succión: secreciones mínimas.',
  'game.diureticInfusing':'Ya en infusión.',
  'game.diureticGiven':'Furosemida 40 mg IV.',
  'game.diureticOk':'Diuresis aumentando. Crepitantes mejorando.',
  'game.diureticMin':'Respuesta mínima al diurético.',
  'game.fio2Set':'FiO₂ → {n}%.',
  'game.fio2Tox':' ⚠ Riesgo de toxicidad.',
  'game.fio2Max':'FiO₂ máximo.',
  'game.fio2Ra':'FiO₂ en aire ambiente.',
  'game.peepSet':'PEEP → {n}.',
  'game.peepWatch':' ⚠ Vigilar PAM.',
  'game.peepMax':'PEEP máximo.',
  'game.peepMin':'PEEP mínimo.',
  'game.chestDecomp':'Tórax descomprimido. Estabilizando.',
  'game.abgDrawn':'GSA en proceso...',
  'game.abgResult':'GSA → pH {ph} | PaO₂ {pao2} | PaCO₂ {paco2} | Lac {lac} | P/F {pf}',
  'game.airwaysClear':'Vías aéreas despejadas.',
  'alert.mapArrest':'PAM {n} — Paro inminente.',
  'alert.spo2Crit':'SpO₂ {n}% — Crítico.',
  'alert.mapLac':'PAM mantenida pero lactato en ascenso — perfusión inadecuada.',
  'alert.mapVol':'PAM baja con vasopresor — ¿depleción de volumen?',
  'alert.mapNoSupport':'PAM {n} — Sin soporte hemodinámico.',
  'alert.noFluidResp':'Sin respuesta de PAM a fluidos — ¿otra causa?',
  'alert.spo2Airway':'SpO₂ refractaria — presiones de vía aérea elevadas.',
  'alert.spo2Crackles':'SpO₂ refractaria — crepitantes presentes.',
  'alert.spo2Fio2':'Oxigenación sin mejoría a pesar de FiO₂.',
  'alert.peakResist':'Presiones pico en ascenso — patrón resistivo.',
  'alert.ventAlarm':'Alarma del ventilador. Presiones elevadas.',
  'alert.cannotVent':'¡No se puede ventilar!',
  'alert.blines':'Líneas B en aumento — agua extravascular pulmonar.',
  'alert.cracklesInc':'Crepitantes en aumento.',
  'alert.warmShock':'Patrón de RVS baja. Shock cálido.',
  'alert.compWater':'Compliance baja + agua pulmonar.',
  'alert.compResist':'Compliance conservada, presiones altas — resistivo.',
  'alert.rvStrain':'Patrón de sobrecarga de VD detectado.',
  'alert.co2Ret':'Retención de CO₂ detectada.',
  'alert.worsening':'Trayectoria empeorando.',
  'alert.decomp':'Descompensación.',
  'arrest.map':'Hipotensión refractaria → paro en AESP',
  'arrest.spo2':'Hipoxemia severa → paro cardíaco',
  'win.stabilized':'Paciente estabilizado con tratamiento correcto.',
  'win.survived':'Paciente sobrevivió el tiempo límite.',
  'end.win':'CASO RESUELTO',
  'end.lose':'PARO CARDÍACO',
  'end.diagnosis':'DIAGNÓSTICO:',
  'end.time':'Tiempo: {m}m {s}s | Calificación: {grade} ({score})',
  'end.mapPct':'PAM≥65: {n}%',
  'end.spoPct':'SpO₂≥90: {n}%',
  'end.fluids':'Fluidos: {n} ml | NE: {ne}',
  'end.suctions':'Succiones: {ok} ok/{bad} mal | Diuréticos: {n}',
  'end.peak':'Lac pico: {lac} | Lesión pulmonar: {li}',
  'end.levels':'NIVELES',
  'end.next':'SIGUIENTE →',
  'end.retry':'REINTENTAR',
  'end.neNone':' — ',
  'abg.dualFail':'Doble falla: oxigenación + déficit de perfusión.',
  'abg.o2Airway':'Oxigenación deteriorada — patrón de resistencia de vía aérea.',
  'abg.o2Edema':'P/F bajo con caída de compliance — patrón de llenado alveolar.',
  'abg.o2Shunt':'Hipoxemia con compliance conservada — ¿shunt o espacio muerto?',
  'abg.o2Refract':'Fisiología de shunt — refractaria a FiO₂.',
  'abg.perfFail':'Oxigenación adecuada pero perfusión fallando.',
  'abg.co2Retain':'Retención de CO₂ — falla ventilatoria o atrapamiento aéreo.',
  'abg.acidResp':'Acidemia — componente respiratorio.',
  'abg.acidMet':'Acidemia — metabólica, revisar perfusión.',
  'abg.ok':'Intercambio gaseoso aceptable. Monitorear tendencias.',
  'diag.pocus.ordered':'POCUS pulmonar solicitado...',
  'diag.echo.ordered':'Eco solicitada...',
  'diag.labs.ordered':'Panel de laboratorio solicitado...',
  'event.plug.msg':'⚠ ¡Caída súbita de SpO₂! ¡Presiones pico disparándose!',
  'event.plug.clue':'Alarma de ALTA PRESIÓN. No se puede ventilar.',
  'event.pneumo.msg':'⚠ ¡Desaturación aguda! ¡Hallazgos unilaterales!',
  'event.pneumo.clue':'Ausencia de murmullo vesicular. ¿Desviación traqueal?',
  'event.vaso.msg':'⚠ ¡PAM en caída! ¡Shock cálido!',
  'event.vaso.clue':'Presión de pulso amplia. Llenado capilar flash.',
  'event.bleed.msg':'⚠ ¡Taquicardia súbita! ¡Presión cayendo!',
  'event.bleed.clue':'Drenaje en aumento. Revisar Hb.',
  'l1.clue1':'Crepitantes bilaterales al examen.',
  'l1.clue2':'Rx: infiltrados bilaterales.',
  'l1.clue3':'Hipoxemia — considerar diuresis.'
}
};

const LEVEL1_BRIEF={
en:{
  pt:'64F, admitted for shortness of breath',
  hx:'Bilateral crackles, CXR shows bilateral infiltrates, fluid overload suspected',
  vitals:[{t:'MAP 72',c:'ok'},{t:'SpO₂ 89%',c:'w'},{t:'HR 98',c:'ok'},{t:'Lac 1.2',c:'ok'}],
  exam:'▸ Crackles throughout both lungs\n▸ Mild peripheral edema\n▸ Elevated JVP',
  concern:'Hypoxemia from pulmonary edema. Needs diuresis.'},
es:{
  pt:'Mujer 64 años, ingresa por disnea',
  hx:'Crepitantes bilaterales, Rx con infiltrados bilaterales, sospecha de sobrecarga hídrica',
  vitals:[{t:'MAP 72',c:'ok'},{t:'SpO₂ 89%',c:'w'},{t:'HR 98',c:'ok'},{t:'Lac 1.2',c:'ok'}],
  exam:'▸ Crepitantes en ambos campos pulmonares\n▸ Edema periférico leve\n▸ YVP elevada',
  concern:'Hipoxemia por edema pulmonar. Requiere diuresis.'}
};

function getLevel1Brief(){
  return LEVEL1_BRIEF[_lang]||LEVEL1_BRIEF.en;
}

const PATH_L10N={
es:{
edema:{
  name:'Edema pulmonar',
  desc:'Edema pulmonar cardiogénico/no cardiogénico.\nClaves: crepitantes, líneas B, caída de compliance, responde a PEEP.\nÓptimo: diuréticos + PEEP. Los fluidos empeoran.',
  clues:['Compliance menor a la esperada.','Líneas B en POCUS.','Rx: opacidades bilaterales.'],
  cases:[
    {pt:'Mujer 68 años, intubada hace 2 h por insuficiencia respiratoria hipoxémica',hx:'Antec de ICC (FE 30%). Recibió 2 L SS en urgencias',vitals:[{t:'MAP 70',c:'ok'},{t:'SpO₂ 91%',c:'w'},{t:'HR 98',c:'ok'},{t:'Lac 1.4',c:'ok'}],exam:'▸ Crepitantes bilaterales, YVP elevada\n▸ Presión meseta 24, compliance límite\n▸ Rx: opacidades bilaterales, redistribución vascular',concern:'Oxigenación empeorando a pesar de intubación\nRecibió fluidos antes de UCI'},
    {pt:'Hombre 55 años, POP1 colectomía, intubación emergente',hx:'4 L cristaloide intraoperatorio. Temp 37.4°C',vitals:[{t:'MAP 68',c:'w'},{t:'SpO₂ 93%',c:'ok'},{t:'HR 102',c:'ok'},{t:'Lac 1.6',c:'ok'}],exam:'▸ Crepitantes bibasales, matidez en bases\n▸ Edema periférico +2\n▸ Rx: opacidades difusas bilaterales',concern:'Requerimientos de O₂ en ascenso\nBalance hídrico positivo grande en quirófano'}]},
airway:{
  name:'Obstrucción de vía aérea',
  desc:'Obstrucción progresiva por secreciones.\nClaves: presiones pico en ascenso, ruidos de gorgoteo, caídas agudas de SpO₂.\nÓptimo: succión. FiO₂/PEEP son medidas temporales.',
  clues:['Rhoncus a la auscultación.','Alarmas de alta presión en ventilador.','Secreción mucoide en TET.'],
  cases:[
    {pt:'Hombre 71 años, intubado tras aspiración presenciada',hx:'GCS 7. Material copioso aspirado al intubar',vitals:[{t:'MAP 72',c:'ok'},{t:'SpO₂ 94%',c:'ok'},{t:'HR 95',c:'ok'},{t:'Lac 1.2',c:'ok'}],exam:'▸ Ruidos respiratorios gruesos, rhoncus\n▸ Gorgoteo audible en TET\n▸ Vent: alarmas intermitentes de alta presión',concern:'Alarmas recurrentes del ventilador\nDificultad para mantener volúmenes tidales'},
    {pt:'Mujer 58 años, intubada hace 6 h por obnubilación',hx:'Material purulento espeso al intubar. AP: diabetes',vitals:[{t:'MAP 74',c:'ok'},{t:'SpO₂ 95%',c:'ok'},{t:'HR 92',c:'ok'},{t:'Lac 1.1',c:'ok'}],exam:'▸ Ruidos transmitidos de vía aérea superior\n▸ Onda de flujo en diente de sierra\n▸ Presiones pico elevadas intermitentemente',concern:'Dificultad intermitente para ventilar\nRT reporta resistencia en vía aérea'}]},
sepsis:{
  name:'Shock séptico',
  desc:'Shock distributivo por infección.\nClaves: taquicardia, presión de pulso amplia, lactato en ascenso, colapso de PAM.\nÓptimo: fluidos + vasopresores temprano.',
  clues:['Extremidades calientes pese a PAM baja.','Temp 38.5°C.','Hemocultivos: bacilos gramnegativos.'],
  cases:[
    {pt:'Hombre 62 años, transferido de piso por hipotensión persistente',hx:'1 L SS en piso sin respuesta. Temp 39.1°C. Antibióticos hace 1 h',vitals:[{t:'MAP 62',c:'w'},{t:'SpO₂ 96%',c:'ok'},{t:'HR 112',c:'w'},{t:'Lac 2.2',c:'w'}],exam:'▸ Extremidades calientes, pulsos bounding\n▸ Llenado capilar flash\n▸ Presión de pulso amplia (98/42)\n▸ Rodillas moteadas. Pulmones claros',concern:'PAM sin respuesta al volumen inicial\nLactato en ascenso en control'},
    {pt:'Mujer 45 años, intubada por inestabilidad hemodinámica',hx:'Infección de herida postquirúrgica. Temp 38.8°C. Leucocitos 24 mil',vitals:[{t:'MAP 58',c:'w'},{t:'SpO₂ 95%',c:'ok'},{t:'HR 118',c:'w'},{t:'Lac 3.1',c:'w'}],exam:'▸ Periferias calientes vasodilatadas\n▸ Taquicardia, presión de pulso amplia\n▸ Llenado capilar tardío en rodillas\n▸ Pulmones claros bilateralmente',concern:'Hemodinamia deteriorándose rápidamente\nSignos de malperfusión de órgano diana'}]},
pe:{
  name:'Embolia pulmonar',
  desc:'TEP agudo con sobrecarga de VD.\nClaves: desaturación súbita, taquicardia, dilatación de VD en eco, pulmones normales.\nÓptimo: evitar exceso de fluidos, vasopresores cautelosos.',
  clues:['Taquicardia de inicio súbito.','Caída de SpO₂ con pulmones claros.','Patrón de sobrecarga de VD en ECG.'],
  cases:[
    {pt:'Mujer 52 años, POP3 reemplazo de cadera, deterioro súbito',hx:'Estaba bien. Disnea y taquicardia agudas hace 30 min',vitals:[{t:'MAP 68',c:'w'},{t:'SpO₂ 88%',c:'w'},{t:'HR 120',c:'w'},{t:'Lac 1.8',c:'ok'}],exam:'▸ Pulmones claros bilateralmente\n▸ YVP elevada\n▸ P2 fuerte, heave de VD\n▸ Edema unilateral de pierna',concern:'Desaturación súbita con pulmones claros\nPatrón agudo de sobrecarga de corazón derecho'}]},
copd:{
  name:'Exacerbación de EPOC',
  desc:'Atrapamiento aéreo e hiperinsuflación.\nClaves: espiración prolongada, auto-PEEP, CO₂ en ascenso, sibilancias.\nÓptimo: reducir FR, permitir espiración, broncodilatadores (implícito).',
  clues:['Fase espiratoria prolongada.','Auto-PEEP detectado en ventilador.','PaCO₂ en ascenso.'],
  cases:[
    {pt:'Hombre 69 años, EPOC conocida, intubado por insuficiencia respiratoria',hx:'Usa O₂ domiciliario. Llegó con sibilancias. Intubado tras falla de BiPAP',vitals:[{t:'MAP 74',c:'ok'},{t:'SpO₂ 90%',c:'w'},{t:'HR 108',c:'ok'},{t:'Lac 1.5',c:'ok'}],exam:'▸ Sibilancias difusas, espiración prolongada\n▸ Tórax en tonel\n▸ Vent: flujo no llega a cero antes del siguiente respiro\n▸ PEEP intrínseco medido en 6',concern:'Difícil de ventilar\nAire atrapado, alarmas de autociclado del ventilador'}]},
cardiogenic:{
  name:'Shock cardiogénico',
  desc:'Fallo de bomba con bajo gasto.\nClaves: extremidades frías, YVP elevada, edema pulmonar, bajo GC.\nÓptimo: fluidos cautelosos (a menudo dañinos), vasopresores, diuréticos.',
  clues:['Extremidades frías moteadas.','YVP marcadamente elevada.','Ritmo de galope a la auscultación.'],
  cases:[
    {pt:'Hombre 72 años, encontrado inconsciente, intubado en urgencias',hx:'AP: miocardiopatía isquémica, FE 20%. Omitió medicamentos x3 días',vitals:[{t:'MAP 58',c:'w'},{t:'SpO₂ 89%',c:'w'},{t:'HR 110',c:'w'},{t:'Lac 3.5',c:'w'}],exam:'▸ Extremidades frías, moteadas\n▸ YVP hasta lóbulos de la oreja\n▸ Galope S3, crepitantes bilaterales\n▸ Rx: cardiomegalia, edema pulmonar',concern:'Shock con periferias frías\nFalla hemodinámica y de oxigenación'}]},
hypovolemic:{
  name:'Shock hipovolémico',
  desc:'Depleción de volumen por hemorragia o pérdida de fluidos.\nClaves: taquicardia, YVP plana, respuesta a fluidos.\nÓptimo: reanimación agresiva con fluidos.',
  clues:['Yugulares planas.','Taquicardia con presión de pulso estrecha.','Diuresis en descenso.'],
  cases:[
    {pt:'Hombre 38 años, intubado tras MVC con trauma abdominal',hx:'Esplenectomía hace 4 h. Recibió 2 U GRE. Ahora re-declinando',vitals:[{t:'MAP 55',c:'w'},{t:'SpO₂ 95%',c:'ok'},{t:'HR 128',c:'w'},{t:'Lac 4.1',c:'w'}],exam:'▸ Periferias frías, pulso filiforme\n▸ YVP plana\n▸ Abdomen distendido, firme\n▸ Drenaje con output creciente',concern:'PAM declinando de nuevo post-cirugía\nAlta sospecha de pérdida activa'}]},
rvfail:{
  name:'Fallo de VD / Sobrecarga volumétrica',
  desc:'Fallo de corazón derecho con congestión venosa.\nClaves: YVP elevada, hepatomegalia, hipotensión resistente a fluidos.\nÓptimo: diuréticos, evitar PEEP alto, vasopresores cautelosos.',
  clues:['YVP marcadamente elevada.','Hepatomegalia con hígado pulsátil.','Mala respuesta a fluidos.'],
  cases:[
    {pt:'Mujer 61 años, hipertensión pulmonar conocida, intubada por síncope',hx:'Disnea empeorando x1 semana. Sildenafil y diuréticos en casa',vitals:[{t:'MAP 62',c:'w'},{t:'SpO₂ 90%',c:'w'},{t:'HR 105',c:'ok'},{t:'Lac 2.4',c:'w'}],exam:'▸ YVP elevada, edema periférico +3\n▸ Hígado pulsátil a la palpación\n▸ Pulmones: crepitantes dispersos base derecha\n▸ Heave de VD palpable',concern:'Hipotensión con signos de congestión derecha\nFluidos en piso — sin mejoría'}]},
mixed:{
  name:'Patología mixta',
  desc:'Múltiples problemas concurrentes superpuestos.\nNingún tratamiento domina.',
  clues:['Presentación compleja.','Rx: opacidad bilateral + debris en vía aérea.','Lactato levemente elevado.'],
  cases:[
    {pt:'Hombre 73 años, intubado por hipoxia empeorando',hx:'Ingresado hace 3 d por neumonía. Múltiples bolos de fluido. Febril de nuevo',vitals:[{t:'MAP 66',c:'w'},{t:'SpO₂ 93%',c:'ok'},{t:'HR 104',c:'ok'},{t:'Lac 2.1',c:'w'}],exam:'▸ Crepitantes + rhoncus dispersos\n▸ Secreciones en TET\n▸ Periferias tibias borderline\n▸ Rx: opacidad bilateral',concern:'Hallazgos múltiples superpuestos\nPatología dominante poco clara'}]}
}
};

function getPathEntry(key,basePath){
  const base=basePath[key];
  if(!base)return null;
  if(_lang==='en')return base;
  const loc=PATH_L10N.es[key];
  if(!loc)return base;
  return Object.assign({},base,{name:loc.name,desc:loc.desc,clues:loc.clues,cases:loc.cases});
}

function getPathKeys(basePath,keys){
  return keys.map(k=>getPathEntry(k,basePath)).filter(Boolean);
}

function runDiagPocus(p){
  const r=[];
  if(p.pulmonaryEdema>20)r.push(_lang==='es'?'Líneas B: múltiples bilaterales':'B-lines: multiple bilateral');
  else r.push(_lang==='es'?'Líneas A predominantes':'A-lines predominant');
  if(p.secretions>30)r.push(_lang==='es'?'Patrón de consolidación':'Consolidation pattern noted');
  if(p._hasPneumo)r.push(_lang==='es'?'Deslizamiento pleural ausente a la derecha':'Absent lung sliding on right');
  else r.push(_lang==='es'?'Deslizamiento pleural bilateral presente':'Lung sliding present bilaterally');
  const prefix=_lang==='es'?'POCUS: ':'POCUS: ';
  return prefix+r.join('. ');
}

function runDiagEcho(p){
  const r=[],rvs=p.rvStrain||(p._hasPneumo?30:0),es=_lang==='es';
  if(p.cardiacOutput<50)r.push(es?'Función VI: reducida (FE ~25-30%)':'LV function: reduced (EF ~25-30%)');
  else if(p.cardiacOutput<65)r.push(es?'Función VI: levemente reducida':'LV function: mildly reduced');
  else r.push(es?'Función VI: globalmente conservada':'LV function: grossly preserved');
  if(rvs>25)r.push(es?'VD dilatado, desviación septal':'RV dilated, septal bowing');
  else r.push(es?'VD tamaño normal':'RV normal size');
  if(p.totalFluids>2000&&p.pulmonaryEdema<10)r.push(es?'VCI pletórica, >2 cm':'IVC plethoric, >2cm');
  else if(p.perfusion<50)r.push(es?'VCI colapsando >50%':'IVC collapsing >50%');
  else r.push(es?'VCI intermedia':'IVC intermediate');
  return (es?'Eco: ':'Echo: ')+r.join('. ');
}

function runDiagLabs(p){
  const wbc=Math.round(8+p.infection*.2+Math.random()*3);
  const hb=p.bleed>15?Math.round((12-p.bleed*.08)*10)/10:Math.round((13.5+Math.random())*10)/10;
  const cr=p.perfusion<50?Math.round((1.2+(60-p.perfusion)*.02)*10)/10:Math.round((0.9+Math.random()*.3)*10)/10;
  return 'Labs: WBC '+wbc+'k | Hb '+hb+' | Cr '+cr+' | Lac '+p.lactate.toFixed(1);
}

function interpretABG(patient,ph,paco2,pf){
  const oF=pf<200,pF=patient.lactate>2.5,acid=ph<7.30,hiCo2=paco2>50;
  if(oF&&pF)return t('abg.dualFail');
  if(oF&&!pF){
    if(patient.secretions>30)return t('abg.o2Airway');
    if(patient.pulmonaryEdema>20)return t('abg.o2Edema');
    if(patient.rvStrain>25)return t('abg.o2Shunt');
    return t('abg.o2Refract');
  }
  if(!oF&&pF)return t('abg.perfFail');
  if(hiCo2)return t('abg.co2Retain');
  if(acid)return t(paco2>45?'abg.acidResp':'abg.acidMet');
  return t('abg.ok');
}

function getPhaseName(phase){
  return t(['','phase.stable','phase.declining','phase.unstable','phase.crashing'][phase]||'phase.stable');
}

function getProblemLabel(id){
  const m={ok:'problem.stable',hemo:'problem.hemo',oxy:'problem.oxy',airway:'problem.airway'};
  return t(m[id]||'problem.stable');
}

function getEventMsg(id){return t('event.'+id+'.msg');}
function getEventClue(id){return t('event.'+id+'.clue');}

function getL1Clues(){
  return [t('l1.clue1'),t('l1.clue2'),t('l1.clue3')];
}

global.I18N=I18N;
global.t=t;
global.getLang=getLang;
global.setLang=setLang;
global.getLevel1Brief=getLevel1Brief;
global.getPathEntry=getPathEntry;
global.runDiagPocus=runDiagPocus;
global.runDiagEcho=runDiagEcho;
global.runDiagLabs=runDiagLabs;
global.interpretABG=interpretABG;
global.getPhaseName=getPhaseName;
global.getProblemLabel=getProblemLabel;
global.getEventMsg=getEventMsg;
global.getEventClue=getEventClue;
global.getL1Clues=getL1Clues;

document.documentElement.lang=_lang;
})(typeof window!=='undefined'?window:globalThis);
