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
      category: {
        id: `category-${generateRandomNumber(1000, 999999)}`,
        name: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        link: `/category/${id}`,
        image: {
          src: `https://picsum.photos/seed/${i + 1}/300/300`,
          alt: `Category ${i + 1}`,
        },
      },
      link: `/product/${id}`,
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()) / 10,
      intro: intro,
      description: faker.commerce.productDescription(),
      mainImageID: images[0].id,
      images,
    });

    // Add promotion
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

    // Add variants
    if (i === 0) {
      products[i].variants = [
        {
          id: "variant-1",
          name: "Variant 1",
          price: 10,
          shown: true,
        },
        {
          id: "variant-2",
          name: "Variant 2",
          price: 20,
          shown: true,
        },
        {
          id: "variant-3",
          name: "Variant 3",
          price: 30,
          shown: true,
        },
      ];
    }
  }

  return products;
}
