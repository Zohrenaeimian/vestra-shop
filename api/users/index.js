import { getUsers } from "../../server/api/users.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    const users = getUsers(req.query);
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    return res.status(501).json({
      detail: "ثبت‌نام در نسخه دمو آنلاین فعال نیست. از حساب‌های موجود استفاده کنید.",
    });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
