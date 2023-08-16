import { atom } from 'recoil';

export const localeState = atom({
  key: 'localeState',
  default: localStorage.getItem('locale') ?? 'ko',
});
