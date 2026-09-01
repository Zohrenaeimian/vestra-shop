import { getUserById } from "../../server/api/users.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const user = getUserById(req.query.id);

  if (!user) {
    return res.status(404).json({ detail: "کاربر پیدا نشد" });
  }

  return res.status(200).json(user);
}
