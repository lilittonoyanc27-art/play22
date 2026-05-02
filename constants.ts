export interface SolerQuestion {
  sentence: string;
  translation: string;
  options: string[];
  correct: string;
  explanation: string;
  category: "candy" | "magic" | "star";
  icon: string;
}

export const SOLER_CONJUGATION = [
  { subject: "Yo", conjugation: "suelo", note: "O -> UE" },
  { subject: "Tú", conjugation: "sueles", note: "O -> UE" },
  { subject: "Él/Ella/Ud.", conjugation: "suele", note: "O -> UE" },
  { subject: "Nosotros/as", conjugation: "solemos", note: "Պահպանում է O-ն" },
  { subject: "Vosotros/as", conjugation: "soléis", note: "Պահպանում է O-ն" },
  { subject: "Ellos/as/Uds.", conjugation: "suelen", note: "O -> UE" }
];

export const RACE_DATA: SolerQuestion[] = [
  {
    sentence: "Yo ____ leer antes de dormir.",
    translation: "Ես սովորաբար կարդում եմ քնելուց առաջ:",
    options: ["suelo", "sueles", "solemos"],
    correct: "suelo",
    explanation: "Yo -> suelo. O-ն դառնում է UE:",
    category: "magic",
    icon: "📖"
  },
  {
    sentence: "¿Tú ____ desayunar temprano?",
    translation: "Դու սովորաբար շո՞ւտ ես նախաճաշում:",
    options: ["sueles", "suele", "suelo"],
    correct: "sueles",
    explanation: "Tú -> sueles. Երկրորդ դեմք:",
    category: "candy",
    icon: "☕"
  },
  {
    sentence: "Él ____ jugar al fútbol los sábados.",
    translation: "Նա սովորաբար ֆուտբոլ է խաղում շաբաթ օրերը:",
    options: ["suele", "suelo", "suelen"],
    correct: "suele",
    explanation: "Él -> suele. Երրորդ դեմք:",
    category: "star",
    icon: "⚽"
  },
  {
    sentence: "Nosotros ____ ir al parque.",
    translation: "Մենք սովորաբար այգի ենք գնում:",
    options: ["solemos", "suelen", "suelo"],
    correct: "solemos",
    explanation: "Nosotros -> solemos. Այստեղ O-ն չի փոխվում:",
    category: "magic",
    icon: "🌳"
  },
  {
    sentence: "Ellos ____ estudiar en la biblioteca.",
    translation: "Նրանք սովորաբար սովորում են գրադարանում:",
    options: ["suelen", "suele", "solemos"],
    correct: "suelen",
    explanation: "Ellos -> suelen.",
    category: "star",
    icon: "📚"
  },
  {
    sentence: "Vosotros ____ comer mucha fruta.",
    translation: "Դուք սովորաբար շատ միրգ եք ուտում:",
    options: ["soléis", "suelen", "solemos"],
    correct: "soléis",
    explanation: "Vosotros -> soléis.",
    category: "candy",
    icon: "🍎"
  },
  {
    sentence: "Ella ____ cantar en el coro.",
    translation: "Նա սովորաբար երգում է երգչախմբում:",
    options: ["suele", "sueles", "suelo"],
    correct: "suele",
    explanation: "Ella -> suele.",
    category: "magic",
    icon: "🎶"
  },
  {
    sentence: "Ustedes ____ viajar en verano.",
    translation: "Դուք (հոգնակի) սովորաբար ճամփորդում եք ամռանը:",
    options: ["suelen", "suele", "solemos"],
    correct: "suelen",
    explanation: "Ustedes -> suelen.",
    category: "star",
    icon: "✈️"
  },
  {
    sentence: "Mis gatos ____ dormir mucho.",
    translation: "Իմ կատուները սովորաբար շատ են քնում:",
    options: ["suelen", "suele", "solemos"],
    correct: "suelen",
    explanation: "Mis gatos (ellos) -> suelen.",
    category: "magic",
    icon: "🐱"
  },
  {
    sentence: "¿Usted ____ tomar café?",
    translation: "Դուք (հարգալից) սովորաբար սուրճ խմո՞ւմ եք:",
    options: ["suele", "suelo", "suelen"],
    correct: "suele",
    explanation: "Usted -> suele.",
    category: "candy",
    icon: "☕"
  },
  {
    sentence: "Nosotras ____ hablar español.",
    translation: "Մենք (աղջիկներով) սովորաբար իսպաներեն ենք խոսում:",
    options: ["solemos", "suelen", "suelo"],
    correct: "solemos",
    explanation: "Nosotras -> solemos.",
    category: "star",
    icon: "🗣️"
  },
  {
    sentence: "Mi madre ____ cocinar paella.",
    translation: "Մայրս սովորաբար պաելյա է պատրաստում:",
    options: ["suele", "suelo", "sueles"],
    correct: "suele",
    explanation: "Mi madre (ella) -> suele.",
    category: "candy",
    icon: "🥘"
  },
  {
    sentence: "Yo no ____ salir por la noche.",
    translation: "Ես սովորաբար գիշերը դուրս չեմ գալիս:",
    options: ["suelo", "suele", "solemos"],
    correct: "suelo",
    explanation: "Yo -> suelo.",
    category: "magic",
    icon: "🌙"
  },
  {
    sentence: "Los niños ____ jugar en el patio.",
    translation: "Երեխաները սովորաբար խաղում են բակում:",
    options: ["suelen", "suele", "podemos"],
    correct: "suelen",
    explanation: "Los niños (ellos) -> suelen.",
    category: "star",
    icon: "🎠"
  },
  {
    sentence: "¿Qué ____ hacer los domingos?",
    translation: "Ի՞նչ ես սովորաբար անում կիրակի օրերը:",
    options: ["sueles", "suele", "suelo"],
    correct: "sueles",
    explanation: "Tú (ենթադրյալ) -> sueles.",
    category: "candy",
    icon: "📅"
  }
];
