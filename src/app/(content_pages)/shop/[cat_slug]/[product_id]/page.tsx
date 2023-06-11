import products from "@/data/products";

type Props = {
  params: {
    cat_slug: string;
    product_id: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.product_id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

/**********************
 * Utils
 */

function getProduct(id: string) {
  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new Error(`Product with id "${id}" not found`);
  }

  return product;
}
