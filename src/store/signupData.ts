import { atom } from 'recoil';

interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  password: string;
}

export default atom<SignupData>({
  key: 'signupData',
  default: {
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    password: '',
  },
});
