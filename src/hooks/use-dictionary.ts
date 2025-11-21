'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import en from '@/locales/en.json';
import fa from '@/locales/fa.json';

const dictionaries = { en, fa };

export const useDictionary = () => {
  const { language } = useLanguage();
  const [dictionary, setDictionary] = useState(dictionaries[language]);

  useEffect(() => {
    setDictionary(dictionaries[language]);
  }, [language]);

  return dictionary;
};
