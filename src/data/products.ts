import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    link: "/shop/nail-polish/1",
    name: "Nail Polish 1",
    price: 10,
    description: "Description of Nail Polish 1",
    image: {
      src: "https://picsum.photos/seed/1/300/300",
      alt: "Nail Polish 1",
    },
  },
  {
    id: "2",
    link: "/shop/nail-polish/2",
    name: "Nail Polish 2",
    price: 20,
    description: "Description of Nail Polish 2",
    image: {
      src: "https://picsum.photos/seed/2/300/300",
      alt: "Nail Polish 2",
    },
  },
];

export default products;
