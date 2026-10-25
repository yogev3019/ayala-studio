/* AK Studio — brand details for Ayala Kedem NAILS, used by the shared Studio core (render.js, app.js).
   Lilac Milk palette (A-012), Varela Round (A-014), signature logo (A-011). */
window.BRAND = {
  APP: 'AK Studio',
  KEY: 'ak-studio-v1',
  FILE_PREFIX: 'AK',
  SHARE_TITLE: 'Ayala Kedem NAILS',
  SIGN: 'איילה',
  HEART: '💜',
  HANDLE_HINT: 'ayala.kedem.nails',
  CLIENT_NOTES_HINT: 'צורה וגוון מועדפים, אירוע, רגישויות',
  PHOTO_BIAS: 0.4, // new portrait photo starts a little higher (hands usually sit above the middle)
  FONT: 'Varela Round', HW: 400, BW: 400, // one weight: headings stand out by size
  COL: { bg: '#FCFAFE', surface: '#EDE5F6', accent: '#F3CFDC', primary: '#7E6A9A', text: '#3A3046' },
  THEMES: {
    milk: { name: 'חלב', bg: '#FCFAFE', text: '#3A3046', accent: '#7E6A9A', logo: 'light', row: '#EDE5F6', rgb: '252,250,254', btn: '#7E6A9A', btnText: '#FCFAFE' },
    mist: { name: 'לילך', bg: '#EDE5F6', text: '#3A3046', accent: '#7E6A9A', logo: 'light', row: '#FCFAFE', rgb: '237,229,246', btn: '#7E6A9A', btnText: '#FCFAFE' },
    blush: { name: 'ורוד', bg: '#F3CFDC', text: '#3A3046', accent: '#6E5A8B', logo: 'light', row: '#FCFAFE', rgb: '243,207,220', btn: '#7E6A9A', btnText: '#FCFAFE' },
    lilac: { name: 'לילך כהה', bg: '#7E6A9A', text: '#FCFAFE', accent: '#F3CFDC', logo: 'dark', row: 'rgba(252,250,254,.16)', rgb: '126,106,154', btn: '#FCFAFE', btnText: '#3A3046' },
  },
  DEFAULT_THEME: {
    'story:window': 'mist', 'story:full': 'mist', 'post:band': 'milk', 'post:window': 'mist', 'slots:main': 'mist',
    'video:full': 'mist', 'video:window': 'mist', 'video:clean': 'milk',
    'prices:main': 'milk', 'promo:main': 'lilac', 'shade:main': 'mist', 'review:main': 'mist', 'tip:main': 'milk',
  },
  PLACEHOLDER: { stops: ['#F6E3EC', '#E4D6F0', '#CBB8DF'], label: '#7E6A9A' },
  TILES: ['photo', 'video', 'slots', 'prices', 'promo', 'shade', 'review', 'tip'],
  SVC_SUGGEST: ['בניית ציפורניים', 'לק ג׳ל', 'מילוי', 'הסרה', 'עיצוב לציפורן', 'מניקור', 'פדיקור', 'לק ג׳ל ברגליים', 'חיזוק', 'פרנץ׳'],
  PHRASES: ['עבודה חדשה ✨', 'הגוון של השבוע'], // her ready caption phrases (editable in the app)
  SERVICE_CHIP: name => 'עבודה חדשה · ' + name,
  TIPS: [
    ['איך שומרים על הג׳ל יותר זמן?', ['שמן לציפורניים, כל ערב', 'כפפות לכלים ולניקיון', 'לא פותחות קופסאות עם הציפורניים']],
    ['איך מתכוננים לתור?', ['מגיעות בלי לק ישן, אם אפשר', 'חושבות מראש על צורה וגוון', 'אפשר להביא תמונת השראה']],
    ['מתי מגיעים למילוי?', ['כשרואים רווח ליד העור', 'לא מחכות שציפורן תישבר', 'קובעות את התור הבא כבר ביציאה']],
  ],
  SHADES: [['#F3CFDC', 'ורוד בלט'], ['#C9B5DB', 'לילך'], ['#9B8CC4', 'לבנדר'], ['#B784A7', 'מוב'], ['#D9A3A0', 'ורוד עתיק'], ['#E8D5C4', 'ניוד'],
    ['#F4EFEA', 'לבן חלבי'], ['#F08A7E', 'קורל'], ['#D7263D', 'אדום'], ['#8E1B3A', 'בורדו'], ['#C7A27C', 'זהב'], ['#2E2A3B', 'שחור']],
  // AK Studio 1.0 stored no phrases: start her list from the defaults
  migrate(S) { if (!Array.isArray(S.biz.phrases)) S.biz.phrases = this.PHRASES.slice(); },
};
