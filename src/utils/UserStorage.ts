import { IUser } from "../model/user";

const UserStorage: IUserStorage = (() => {
  const USER_KEY = "userInfo";

  return {
    saveUserInfo: (user: IUser) => {
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    },

    getUserInfo: () => {
      const userInfo = localStorage.getItem(USER_KEY);
      if (userInfo) {
        return JSON.parse(userInfo);
      }
      return null;
    },
  };
})();

interface IUserStorage {
  saveUserInfo: (user: IUser) => void;
  getUserInfo: () => IUser | null;
}

export default UserStorage;
