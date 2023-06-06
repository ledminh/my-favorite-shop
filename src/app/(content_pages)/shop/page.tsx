import { H2, H3 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import { Category } from "@/components/Shop/Category";

// An array of categories with images from picsum.photos

const categories = [
  {
    id: "1",
    name: "Nail Polish",
    description: "A wide range of nail polish colors",
    link: "/shop/nail-polish",
    image: {
      src: "https://picsum.photos/seed/1/300/300",
      alt: "Nail Polish",
    },
  },
  {
    id: "2",
    name: "Nail Care",
    description: "A wide range of nail care products",
    link: "/shop/nail-care",
    image: {
      src: "https://picsum.photos/seed/2/300/300",
      alt: "Nail Care",
    },
  },
  {
    id: "3",
    name: "Nail Tools",
    description: "A wide range of nail tools",
    link: "/shop/nail-tools",
    image: {
      src: "https://picsum.photos/seed/3/300/300",
      alt: "Nail Tools",
    },
  },
  {
    id: "4",
    name: "Nail Art",
    description: "A wide range of nail art products",
    link: "/shop/nail-art",
    image: {
      src: "https://picsum.photos/seed/4/300/300",
      alt: "Nail Art",
    },
  },
  {
    id: "5",
    name: "Nail Extensions",
    description: "A wide range of nail extensions",
    link: "/shop/nail-extensions",
    image: {
      src: "https://picsum.photos/seed/5/300/300",
      alt: "Nail Extensions",
    },
  },
  {
    id: "6",
    name: "Nail Accessories",
    description: "A wide range of nail accessories",
    link: "/shop/nail-accessories",
    image: {
      src: "https://picsum.photos/seed/6/300/300",
      alt: "Nail Accessories",
    },
  },
];

function getCategories() {
  return categories;
}

export default function Shop() {
  const categories = getCategories();

  return (
    <Wrapper>
      <Intro>
        <H2>Explore our wide range of nail care categories</H2>
      </Intro>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              name={category.name}
              description={category.description}
              link={category.link}
              image={category.image}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

/************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col w-full h-full ">{children}</div>;
};

const Intro: ComponentWithChildren = ({ children }) => {
  return (
    <div className="px-2 py-4 my-12 font-semibold text-center border-double border-y-8 border-red-950">
      {children}
    </div>
  );
};

const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 gap-4 mx-auto mb-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
