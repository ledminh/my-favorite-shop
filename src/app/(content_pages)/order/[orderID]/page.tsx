import {
  ComponentWithChildren,
  OrderStatus,
  OrderedProduct,
  WithID,
} from "@/types";
import { orderStatuses } from "@/theme/metadata";
import Link from "next/link";
import { getOrder } from "@/data/orders";

import Image from "next/image";
import getPrice, { ItemType } from "@/utils/getPrice";
import ShippingAddress from "@/components/ShippingAddress";

type OrderPageProps = {
  params: {
    orderID: string;
  };
};

export const revalidate = 0;

export default async function OrderPage({ params }: OrderPageProps) {
  const { orderID } = params;
  const order = await getOrder(orderID);

  const { orderedProducts, shippingFee, taxes } = order;

  const subtotal = orderedProducts.reduce((acc, oP) => {
    if (oP.selectedVariant) {
      return acc + getPrice(oP.selectedVariant) * oP.quantity;
    }
    return acc + getPrice(oP as ItemType) * oP.quantity;
  }, 0);

  return (
    <Wrapper>
      <Header orderID={orderID} status="processing" />
      <div className="mt-8 border-t border-gray-600 md:flex md:justify-between md:items-start md:gap-5">
        <h2 className="sr-only">Order Summary</h2>
        <div className="basis-[45%]">
          <OrderList orderedProducts={orderedProducts} />
        </div>
        <div className="flex flex-col gap-10 mb-10 basis-[45%]">
          <div className="pb-4 border-b border-gray-600">
            <Summary
              subtotal={subtotal}
              shippingFee={shippingFee}
              taxes={taxes}
            />
          </div>
          <div className="flex items-start justify-between">
            <ShippingAddress shippingAddress={order.shippingAddress} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

/*********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="px-4 sm:px-6 lg:px-8">{children}</div>
);

/************************
 * Components
 */

type HeaderProps = {
  orderID: string;
  status: OrderStatus;
};

const Header = ({ orderID, status }: HeaderProps) => {
  const { short, long } = orderStatuses[status];

  return (
    <div className="mt-8">
      <p className="text-4xl font-bold tracking-tight sm:text-4xl">{short}</p>
      <p className="mt-4 text-base text-gray-500">{long}</p>
      <dl className="mt-8 text-sm font-medium">
        <dt className="text-gray-900">Tracking number</dt>
        <dd className="mt-2 text-blue-600">{orderID}</dd>
      </dl>
    </div>
  );
};

type OrderListProps = {
  orderedProducts: WithID<OrderedProduct>[];
};

const OrderList = ({ orderedProducts }: OrderListProps) => {
  return (
    <div>
      <h3 className="sr-only">Items</h3>
      {orderedProducts.map((orderedProduct) => (
        <ProductTab key={orderedProduct.id} orderedProduct={orderedProduct} />
      ))}
    </div>
  );
};

type ProductTabProps = {
  orderedProduct: WithID<OrderedProduct>;
};

const ProductTab = ({ orderedProduct }: ProductTabProps) => {
  const image = getImage(orderedProduct);

  const productName = orderedProduct.selectedVariant
    ? orderedProduct.name + " - " + orderedProduct.selectedVariant.name
    : orderedProduct.name;

  return (
    <div className="flex items-center justify-between gap-3 py-4 border-b border-gray-400">
      <div className="w-[90px] h-[90px] relative flex items-center justify-center rounded-md overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-4 basis-full">
        <Link href={orderedProduct.link} className="font-medium text-gray-900">
          {productName}
        </Link>

        <dl className="flex flex-wrap items-center justify-between text-sm">
          <div className="flex basis-[45%]">
            <dt className="font-medium text-gray-900">Quantity</dt>
            <dd className="ml-2 text-gray-700">{orderedProduct.quantity}</dd>
          </div>
          <div className="flex basis-[45%] justify-end">
            <dt className="font-medium text-gray-900">Total</dt>
            <dd className="ml-2 text-gray-700">
              {(
                getPrice(
                  orderedProduct.selectedVariant
                    ? orderedProduct.selectedVariant
                    : (orderedProduct as ItemType)
                ) * orderedProduct.quantity
              ).toLocaleString()}
            </dd>
          </div>
          <div className="flex basis-full">
            <dt className="font-medium text-gray-900">Price</dt>
            <dd className="ml-2 text-gray-700">
              $
              {getPrice(
                orderedProduct.selectedVariant
                  ? orderedProduct.selectedVariant
                  : (orderedProduct as ItemType)
              ).toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

type SummaryProps = {
  subtotal: number;
  shippingFee: number;
  taxes: number;
};

const Summary = ({ subtotal, shippingFee, taxes }: SummaryProps) => {
  return (
    <>
      <h3 className="sr-only">Summary</h3>

      <dl className="pt-10 space-y-6 text-sm border-t border-gray-200">
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Subtotal</dt>
          <dd className="text-gray-700">${subtotal.toLocaleString()}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="flex font-medium text-gray-900">Taxes</dt>
          <dd className="text-gray-700">${taxes.toLocaleString()}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Shipping</dt>
          <dd className="text-gray-700">${shippingFee.toLocaleString()}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium text-gray-900">Total</dt>
          <dd className="text-gray-900">
            ${(subtotal + shippingFee + taxes).toLocaleString()}
          </dd>
        </div>
      </dl>
    </>
  );
};

/*****************************
 * Utils
 */

function getImage(orderedProduct: WithID<OrderedProduct>) {
  // if orderedProduct has a variant, use the variant image
  if (orderedProduct.selectedVariant) {
    return orderedProduct.selectedVariant.image;
  }

  const image = orderedProduct.images.find(
    (img) => img.id === orderedProduct.mainImageID
  );

  if (!image) {
    throw new Error(
      `Could not find main image for ordered product ${orderedProduct.id}`
    );
  }

  return image;
}
