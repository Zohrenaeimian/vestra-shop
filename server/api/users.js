import { readDb, stripPassword } from "./db.js";

export function getUsers(query = {}) {
  const { phoneNumber, password } = query;
  let users = [...readDb().users];

  if (phoneNumber) {
    users = users.filter((user) => user.phoneNumber === phoneNumber);
  }

  if (password) {
    users = users.filter((user) => user.password === password);
  }

  return users.map(stripPassword);
}

export function getUserById(userId) {
  const user = readDb().users.find((item) => Number(item.id) === Number(userId));

  if (!user) {
    return null;
  }

  return stripPassword(user);
}
