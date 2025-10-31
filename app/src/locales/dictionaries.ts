import en from './en.json';
import fa from './fa.json';

export type Dictionary = typeof en;
export type Language = 'en' | 'fa';

export const dictionaries = {
  en,
  fa,
};
