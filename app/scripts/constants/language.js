export var en = {
  generator: {
    title: 'Shadowrun Generator',
    subline: 'This is a web-based Shadowrun Generator',
    stepOne: 'Step One',
    priorityTable: {
      categories: 'Categories'
    }
  }
}

export function getLanguage() {
  let language;
  try {
    language = this[navigator.language] ? navigator.language: 'en';
  } catch(e) {
  } finally {
    language = 'en';
  }
  return language;
}
