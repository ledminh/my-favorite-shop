import type { OrderStatus } from "@/types";

export const title = "My Favorite Shop Online";

export const description = "";

export const author = "Minh Le";

export const slogan = "Discover a World of Wonders!";
export const shopIntro =
  "Embark on a journey through our vast selection of must-have treasures!";

export const copyright = {
  holder: "Minh Le",
  link: "https://www.ledminh.dev",
};

export const contactInfo = {
  address_line1: "1234 Main St",
  address_line2: "Anytown, USA 12345",
  phone: "123-456-7890",
  email: "minh.le@ledminh.dev",
};

export const orderStatuses: Record<
  OrderStatus,
  { short: string; long: string }
> = {
  processing: {
    short: "Processing",
    long: "Your order is being processed.",
  },
  shipped: {
    short: "It's on the way!",
    long: "Your order has shipped and will be with you soon.",
  },
  delivered: {
    short: "Delivered",
    long: "Your order has been delivered.",
  },
};

export const itemsPerPage = 10;

export const categoryFolder = "/shop/";
export const productFolder = "/product/";

export const shippingFee = 5;
