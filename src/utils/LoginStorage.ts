import { IUser } from "../model/user";

const LoginStorage: ILoginStorage = (() => {
  const USER_KEY = "userInfo";

  return {
    saveUserSession: (user: IUser) => {
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    },

    getUserSession: () => {
      const userInfo = localStorage.getItem(USER_KEY);
      if (userInfo) {
        return JSON.parse(userInfo);
      }
      return null;
    },

    removeSession: () => {
      localStorage.removeItem(USER_KEY);
    },
  };
})();

interface ILoginStorage {
  saveUserSession: (user: IUser) => void;
  getUserSession: () => IUser | null;
  removeSession: () => void;
}

export default LoginStorage;
