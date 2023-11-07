// pages/index.js

import Link from "next/link";
import "/app/globals.css";

export default function Home({ products }) {
  return (
    <div>
      <h1 className="text-xl text-blue">Product  Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
