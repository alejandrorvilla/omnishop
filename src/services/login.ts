import { ILogin } from "../model/login";

export function login(user: ILogin) {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/auth/login", {
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
