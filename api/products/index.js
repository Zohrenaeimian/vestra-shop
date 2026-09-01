import { getProducts } from "../../server/api/products.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const products = getProducts(req.query);
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  return res.status(200).json(products);
}
