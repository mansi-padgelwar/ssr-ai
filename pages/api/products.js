// pages/api/products.js

import products from "../../data/products";

export default (req, res) => {
  res.status(200).json(products);
};
