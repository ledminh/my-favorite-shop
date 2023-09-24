import Image from "next/image";
import Link from "next/link";
import {
  ComponentWithChildren,
  OrderedProduct as OrderedProductType,
} from "@/types";
import getPrice, { ItemType } from "@/utils/getPrice";

type Props = {
  orderedProduct: OrderedProductType;
};

const OrderedProduct = ({ orderedProduct }: Props) => {
  const { intro, quantity } = orderedProduct;

  const name = orderedProduct.selectedVariant
    ? orderedProduct.name + " (" + orderedProduct.selectedVariant.name + ")"
    : orderedProduct.name;

  const price = orderedProduct.selectedVariant
    ? getPrice(orderedProduct.selectedVariant)
    : getPrice(orderedProduct as ItemType);

  const mainImage = orderedProduct.images.find(
    (image) => image.id === orderedProduct.mainImageID
  );

  const productName = orderedProduct.selectedVariant
    ? orderedProduct.name + " - " + orderedProduct.selectedVariant.name
    : orderedProduct.name;

  if (!mainImage) throw new Error(`Main image not found for product ${name}`);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageWrapper>
      <Content>
        <h3 className="text-gray-900">{productName}</h3>
        <p>{intro}</p>
      </Content>

      <MetaData>
        <p>${price.toFixed(2).toLocaleString()}</p>
        <p className="text-xs">Qty: {quantity}</p>
        <div className="w-full h-[1px] bg-gray-800 my-2" />
        <p className="text-xs">
          ${(quantity * price).toFixed(2).toLocaleString()}
        </p>
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
  <div className="relative h-20 overflow-hidden rounded-md basis-20">
    {children}
  </div>
);

const Content: ComponentWithChildren = ({ children }) => (
  <div className="flex-auto space-y-1 basis-2/3">{children}</div>
);

const MetaData: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-col items-end font-medium text-gray-900 basis-14">
    {children}
  </div>
);
