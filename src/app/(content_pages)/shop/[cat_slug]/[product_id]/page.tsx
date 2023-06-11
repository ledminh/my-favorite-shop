import Section from "@/components/Section";
import products from "@/data/products";

import Gallery from "@/components/product/Gallery";

type Props = {
  params: {
    cat_slug: string;
    product_id: string;
  };
};

export default function ProductPage({ params }: Props) {
  //   const product = getProduct(params.product_id);

  const images: { id: string; src: string; alt: string }[] = [];

  for (let j = 0; j < 3; j++) {
    images.push({
      id: `image-${j}`,
      src: `https://picsum.photos/seed/${j}/300/300`,
      alt: `Nail Polish ${j + 1}`,
    });
  }

  return (
    <>
      {/* HEADER */}
      <Section>
        <Gallery images={images} />
      </Section>
    </>
  );
}

/**********************
 * Styles
 */

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
