import { IUser } from "../model/user";

export function signin(user: IUser) {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          reject(response.status);
        }
        resolve(response.json());
      })
      .catch((error) => reject(error));
  });
}