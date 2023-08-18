import { atom } from 'recoil';

export type ModalTypes = 'USER' | 'LANG' | null;

export default atom<ModalTypes>({
  key: 'modalType',
  default: null,
});
