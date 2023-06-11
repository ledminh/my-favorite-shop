import type { Product } from "@/types";

const products = getProducts(20);

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getProducts(num: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < num; i++) {
    const id = `${generateRandomNumber(1000, 999999)}`;

    const images: { src: string; alt: string }[] = [];

    for (let j = 0; j < 3; j++) {
      images.push({
        src: `https://picsum.photos/seed/${i + 1}${j}/300/300`,
        alt: `Nail Polish ${i + 1} ${j + 1}`,
      });
    }

    products.push({
      id,
      link: `/shop/nail-polish/${id}`,
      name: `Nail Polish ${i + 1}`,
      price: i * 10,
      description: `Description of Nail Polish ${i + 1}.`,
      mainImageID: 0,
      images,
    });
  }

  return products;
}

export default products;
