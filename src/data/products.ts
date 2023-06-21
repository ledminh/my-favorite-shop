import type { Product } from "@/types";
import { faker } from "@faker-js/faker";

let products: Product[] = [];

export default function getProducts(numProducts?: number) {
  if (products.length === 0) {
    products = _getProducts(numProducts !== undefined ? numProducts : 20);
  }

  return products;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _getProducts(num: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < num; i++) {
    const id = `${generateRandomNumber(1000, 999999)}`;

    const images: { id: string; src: string; alt: string }[] = [];

    for (let j = 0; j < 3; j++) {
      images.push({
        id: `image-${generateRandomNumber(1000, 999999)}`,
        src: `https://picsum.photos/seed/${i + 1}${j}/300/300`,
        alt: `Nail Polish ${i + 1} ${j + 1}`,
      });
    }

    const introLength = generateRandomNumber(50, 100);
    const intro = faker.commerce.productDescription().slice(0, introLength);

    products.push({
      id,
      link: `/product/${id}`,
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()) / 10,
      intro: intro,
      description: faker.commerce.productDescription(),
      mainImageID: images[0].id,
      images,
    });

    if (i % 3 === 0) {
      products[i].promotion = {
        type: "discount",
        discountPercent: 20,
        description: "Independent day discount: 20%",
      };
    }

    if (i === 2) {
      products[i].promotion = {
        type: "sale",
        salePrice: 10,
        description: "Sale $10",
      };
    }
  }

  return products;
}
