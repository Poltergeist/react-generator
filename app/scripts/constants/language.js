export var en = {
  generator: {
    title: 'Shadowrun Generator',
    subline: 'This is a web-based Shadowrun Generator',
    stepOne: 'Step One',
    priorityTable: {
      categories: 'Categories'
    }
  }
};

const lang = {
  en: en
};
export function getLanguage() {
  let language;
  try {
    language = lang[navigator.language] ? navigator.language : 'en';
  } catch (e) {
    // catch error
  } finally {
    language = 'en';
  }
  return language;
}
