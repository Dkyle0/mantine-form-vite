/// <reference types="vite/client" />

interface IFormValuesUP {
  name: string;
  nickname: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

interface IFormValuesIN {
  email: string;
  password: string;
}
