import 'server-only'

const dictionaries = {
  cs: () => import("./cs.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
