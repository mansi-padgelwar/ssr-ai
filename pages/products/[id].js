// pages/products/[id].js

import { useRouter } from "next/router";
import products from "../../data/products";

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2 className="bg-blue-500 text-white p-4">{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const product = products.find((p) => p.id === parseInt(id));

  return {
    props: { product },
  };
}
