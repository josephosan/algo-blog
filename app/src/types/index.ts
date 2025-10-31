export interface Post {
  slug: string;
  date: string;
  title: {
    en: string;
    fa: string;
  };
  category: {
    en: string;
    fa: string;
  };
  content: {
    en: string;
    fa: string;
  };
  excerpt: {
    en: string;
    fa: string;
  };
  tags: {
    en: string[];
    fa: string[];
  };
}
