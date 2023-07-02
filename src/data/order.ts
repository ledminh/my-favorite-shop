import { OrderedProduct, Order } from "@/types";
import getProducts from "./products";
import { faker } from "@faker-js/faker";

export function getOrder(orderID: string): Order {
  const orderedProducts: OrderedProduct[] = getProducts(4).map((product) => {
    return {
      ...product,
      quantity: faker.number.int({ min: 1, max: 10 }),
      selectedVariant: product.variants ? product.variants[0] : undefined,
    };
  });

  return {
    id: orderID,
    shippingAddress: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      streetAddress: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zip: faker.location.zipCode(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
    },
    orderedProducts,
    shippingFee: 6,
    taxes: 8,
    paymentInfo: {
      cardType: "Visa",
      lastFourDigits: "1234",
      expireDate: new Date(),
    },
  };
}
