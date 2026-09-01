import { readDb } from "./db.js";

function parseBoolean(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
}

export function getProducts(query = {}) {
  const { category, gender, search, isNew, isBestSeller } = query;
  let products = [...readDb().products];

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (gender) {
    products = products.filter((product) => product.gender === gender);
  }

  const isNewFilter = parseBoolean(isNew);
  if (isNewFilter === true) {
    products = products.filter((product) => product.isNew);
  }

  const isBestSellerFilter = parseBoolean(isBestSeller);
  if (isBestSellerFilter === true) {
    products = products.filter((product) => product.isBestSeller);
  }

  if (search) {
    const words = search.toLowerCase().split(/\s+/).filter(Boolean);
    products = products.filter((product) => {
      const title = String(product.title || "").toLowerCase();
      return words.every((word) => title.includes(word));
    });
  }

  return products;
}

export function getProductById(productId) {
  const product = readDb().products.find(
    (item) => Number(item.id) === Number(productId)
  );

  if (!product) {
    return null;
  }

  return product;
}
