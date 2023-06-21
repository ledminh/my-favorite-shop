import Image from "next/image";
import Link from "next/link";
import { ComponentWithChildren, Product as ProductType } from "@/types";

type Props = {
  product: ProductType;
};

const OrderedProduct = ({ product }: Props) => {
  const mainImage = product.images.find(
    (image) => image.id === product.mainImageID
  );

  if (!mainImage)
    throw new Error(`Main image not found for product ${product.name}`);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </ImageWrapper>
      <Content>
        <h3 className="text-gray-900">
          <Link href={product.link}>{product.name}</Link>
        </h3>
        <p>{product.intro}</p>
      </Content>

      <MetaData>
        <p>${product.price}</p>
        <p className="text-xs">Qty: 4</p>
      </MetaData>
    </Wrapper>
  );
};

export default OrderedProduct;

/***********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="flex py-6 space-x-6">{children}</div>
);

const ImageWrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative basis-20 h-20 rounded-md overflow-hidden">
    {children}
  </div>
);

const Content: ComponentWithChildren = ({ children }) => (
  <div className="basis-2/3 flex-auto space-y-1">{children}</div>
);

const MetaData: ComponentWithChildren = ({ children }) => (
  <div className="basis-14 flex flex-col items-end font-medium text-gray-900">
    {children}
  </div>
);