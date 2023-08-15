import { atom } from 'recoil';

export const selectedLangIdState = atom({
  key: 'selectedLangIdState',
  default: 1,
});

export const localeState = atom({
  key: 'localeState',
  default: localStorage.getItem('locale') ?? 'ko',
});
