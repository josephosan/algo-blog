export type Language = 'en' | 'fa';

export type LocalizedString = {
  [key in Language]: string;
};

export type LocalizedStringArray = {
  [key in Language]: string[];
}

export interface Post {
  slug: string;
  title: LocalizedString;
  date: string;
  category: LocalizedString;
  content: LocalizedString;
  excerpt: LocalizedString;
  tags: LocalizedStringArray;
}
