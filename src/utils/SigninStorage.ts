import { ILogin } from "../model/login";
import { IUser } from "../model/user";

const SigninStorage: ISigninStorage = (() => {
  const SIGNIN_KEY = "users";

  return {
    signinUser: (user: IUser) => {
      let newUsers: IUser[] = [];
      let usersStorage = localStorage.getItem(SIGNIN_KEY);
      try {
        newUsers = JSON.parse(usersStorage);
        if (newUsers.find((userStorage) => user.email === userStorage.email))
          return false;
      } catch {
        newUsers = [];
      } finally {
        newUsers.push(user);
        localStorage.setItem(SIGNIN_KEY, JSON.stringify(newUsers));
      }
      return true;
    },

    getUserInfo: (data: ILogin) => {
      const usersStorage = localStorage.getItem(SIGNIN_KEY);
      try {
        const users: IUser[] = JSON.parse(usersStorage);
        return users.find(
          (userStorage) =>
            userStorage.email === data.username &&
            userStorage.password === data.password
        );
      } catch {
        return null;
      }
    },
  };
})();

interface ISigninStorage {
  signinUser: (user: IUser) => boolean;
  getUserInfo: (data: ILogin) => null | IUser;
}

export default SigninStorage;
