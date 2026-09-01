import { getProductById } from "../../server/api/products.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const product = getProductById(req.query.id);

  if (!product) {
    return res.status(404).json({ detail: "محصول پیدا نشد" });
  }

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  return res.status(200).json(product);
}
