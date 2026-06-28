
export const PHRASE_CATEGORIES = [
  { id: 'greetings',       icon: '👋', name: { en: 'Greetings',       fil: 'Bati',          zh: '问候',       ta: 'வாழ்த்துக்கள்' } },
  { id: 'emergencies',     icon: '🆘', name: { en: 'Emergencies',     fil: 'Emergency',     zh: '紧急',       ta: 'அவசரம்' } },
  { id: 'work',            icon: '💼', name: { en: 'At work',         fil: 'Sa trabaho',    zh: '工作',       ta: 'வேலை' } },
  { id: 'getting_around',  icon: '🚉', name: { en: 'Getting around',  fil: 'Paglalakbay',   zh: '出行',       ta: 'பயணம்' } },
  { id: 'shopping',        icon: '💸', name: { en: 'Shopping',        fil: 'Pamimili',      zh: '购物',       ta: 'கடை' } },
]

export const PHRASES = [
  { id: 'p_hello',     category: 'greetings', en: 'Hello',                fil: 'Kamusta',                zh: '你好',                 ta: 'வணக்கம்',                 tip: 'Use to greet anyone, any time of day.' },
  { id: 'p_thanks',    category: 'greetings', en: 'Thank you very much',  fil: 'Maraming salamat',       zh: '非常感谢',            ta: 'மிக்க நன்றி',            tip: 'Shows real gratitude — stronger than a plain "thanks".' },
  { id: 'p_yes',       category: 'greetings', en: 'Yes',                  fil: 'Oo',                     zh: '是的',                 ta: 'ஆம்',                    tip: 'A clear way to agree or confirm.' },
  { id: 'p_no',        category: 'greetings', en: 'No',                   fil: 'Hindi',                  zh: '不是',                 ta: 'இல்லை',                  tip: 'Use to refuse or disagree. "No, thank you" sounds softer.' },
  { id: 'p_excuse',    category: 'greetings', en: 'Excuse me / Sorry',    fil: 'Pasensya na po',         zh: '不好意思',            ta: 'மன்னிக்கவும்',            tip: 'Use to get someone\'s attention politely, or to apologise.' },
  { id: 'p_name',      category: 'greetings', en: 'My name is…',          fil: 'Ako po si…',             zh: '我叫……',              ta: 'என் பெயர்…',              tip: 'Say this when introducing yourself, then say your name.' },

  { id: 'p_help',      category: 'emergencies', en: 'Please help me!',                 fil: 'Tulungan nyo po ako!',              zh: '请帮帮我！',        ta: 'எனக்கு உதவுங்கள்!',              tip: 'Use in an emergency or when you urgently need help.' },
  { id: 'p_hospital',  category: 'emergencies', en: 'I need to go to the hospital.',   fil: 'Kailangan ko pong pumunta sa ospital.', zh: '我需要去医院。', ta: 'எனக்கு மருத்துவமனை செல்ல வேண்டும்.', tip: 'Use if you are sick or hurt and need to see a doctor.' },
  { id: 'p_police',    category: 'emergencies', en: 'Please call the police.',         fil: 'Patawag po ng pulis.',               zh: '请帮我报警。',      ta: 'காவல்துறையை அழைக்கவும்.',        tip: 'Use if you are in danger or see a crime happening.' },
  { id: 'p_lost',      category: 'emergencies', en: "I'm lost. Can you help me?",      fil: 'Naligaw po ako. Pwede nyo akong tulungan?', zh: '我迷路了。你能帮我吗？', ta: 'நான் வழிதவறிவிட்டேன். எனக்கு உதவ முடியுமா?', tip: 'Use when you do not know where you are and need directions.' },

  { id: 'p_paid',      category: 'work', en: 'When will I be paid?',              fil: 'Kailan ako babayaran?',           zh: '我什么时候能拿到工资？',  ta: 'எனக்கு சம்பளம் எப்போது கிடைக்கும்?', tip: 'Ask politely to find out your payday.' },
  { id: 'p_restday',   category: 'work', en: 'Which day is my rest day?',         fil: 'Anong araw ang rest day ko?',     zh: '我的休息日是哪天？',     ta: 'எனது ஓய்வு நாள் எந்த நாள்?',        tip: 'Use to confirm your weekly rest day with your employer.' },
  { id: 'p_unwell',    category: 'work', en: "I'm not well. May I rest?",         fil: 'Hindi po ako maganda ang pakiramdam. Pwede po akong magpahinga?', zh: '我不舒服，可以休息吗？', ta: 'எனக்கு உடம்பு சரியில்லை. ஓய்வெடுக்கலாமா?', tip: 'Use to tell your employer you are sick and need to rest.' },
  { id: 'p_phone',     category: 'work', en: 'May I use my phone?',              fil: 'Pwede ko bang gamitin ang telepono ko?', zh: '我可以用一下手机吗？', ta: 'என் ஃபோனை பயன்படுத்தலாமா?',     tip: 'Use to politely ask permission to use your own phone.' },

  { id: 'p_mrt',       category: 'getting_around', en: 'Where is the MRT station?', fil: 'Saan po ang istasyon ng MRT?',  zh: '地铁站在哪里？',      ta: 'MRT நிலையம் எங்கே?',            tip: 'Use to ask the way to the nearest train station.' },
  { id: 'p_getto',     category: 'getting_around', en: 'How do I get to…?',        fil: 'Paano po ako makakapunta sa…?', zh: '我怎么去……？',        ta: '…எப்படி போவது?',                 tip: 'Use to ask for directions, then say the name of the place.' },
  { id: 'p_showmap',   category: 'getting_around', en: 'Can you show me on the map?', fil: 'Pwede po nyo bang ipakita sa mapa?', zh: '可以在地图上指给我看吗？', ta: 'வரைபடத்தில் காட்டலாமா?',  tip: 'Use to ask someone to point out a place on a map or phone.' },

  { id: 'p_howmuch',   category: 'shopping', en: 'How much is this?',    fil: 'Magkano po ito?',        zh: '这个多少钱？',     ta: 'இது எவ்வளவு?',          tip: 'Use to ask the price of something before buying.' },
  { id: 'p_receipt',   category: 'shopping', en: 'May I have a receipt?', fil: 'Pwede po bang makahingi ng resibo?', zh: '可以给我收据吗？', ta: 'ரசீது கொடுங்கள்?',  tip: 'Use to ask for a receipt — handy for tracking your spending.' },
  { id: 'p_expensive', category: 'shopping', en: 'That is too expensive.', fil: 'Masyado pong mahal.',  zh: '太贵了。',          ta: 'மிகவும் விலை அதிகம்.', tip: 'Use to say a price is too high — you can then walk away politely.' },
]

export function getPhraseText(phrase, lang) {
  return phrase[lang] || phrase.en
}
