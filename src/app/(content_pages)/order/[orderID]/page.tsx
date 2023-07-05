import { ComponentWithChildren, OrderStatus, OrderedProduct } from "@/types";
import { orderStatuses } from "@/theme/metadata";
import Link from "next/link";
import { getOrder } from "@/data/order";

import Image from "next/image";
import Product from "@/components/shop/ProductList/Product";

type OrderPageProps = {
  params: {
    orderID: string;
  };
};

export default function OrderPage({ params }: OrderPageProps) {
  const { orderID } = params;

  const order = getOrder(orderID);
  const { orderedProducts } = order;

  return (
    <Wrapper>
      <Header orderID={orderID} status="processing" />

      <div className="mt-8 border-t border-gray-600">
        <h2 className="sr-only">Order Summary</h2>
        <OrderList orderedProducts={orderedProducts} />
        <CustomerInfo />
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
  orderedProducts: OrderedProduct[];
};

const OrderList = ({ orderedProducts }: OrderListProps) => {
  return (
    <>
      <h3 className="sr-only">Items</h3>
      {orderedProducts.map((orderedProduct) => (
        <ProductTab key={orderedProduct.id} orderedProduct={orderedProduct} />
      ))}
    </>
  );
};

type ProductTabProps = {
  orderedProduct: OrderedProduct;
};

const ProductTab = ({ orderedProduct }: ProductTabProps) => {
  const image = getImage(orderedProduct);

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
          {orderedProduct.name}
        </Link>

        <dl className="flex flex-wrap items-center justify-between text-sm">
          <div className="flex basis-[45%]">
            <dt className="font-medium text-gray-900">Quantity</dt>
            <dd className="ml-2 text-gray-700">{orderedProduct.quantity}</dd>
          </div>
          <div className="flex basis-[45%] justify-end">
            <dt className="font-medium text-gray-900">Total</dt>
            <dd className="ml-2 text-gray-700">
              {(orderedProduct.price * orderedProduct.quantity).toFixed(2)}
            </dd>
          </div>
          <div className="flex basis-full">
            <dt className="font-medium text-gray-900">Price</dt>
            <dd className="ml-2 text-gray-700">
              ${orderedProduct.price.toFixed(2)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

const CustomerInfo = () => (
  <div className="sm:ml-40 sm:pl-6">
    <h3 className="sr-only">Your information</h3>

    <h4 className="sr-only">Addresses</h4>
    <dl className="grid grid-cols-2 py-10 text-sm gap-x-6">
      <div>
        <dt className="font-medium text-gray-900">Shipping address</dt>
        <dd className="mt-2 text-gray-700">
          <address className="not-italic">
            <span className="block">Kristin Watson</span>
            <span className="block">7363 Cynthia Pass</span>
            <span className="block">Toronto, ON N3Y 4H8</span>
          </address>
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">Billing address</dt>
        <dd className="mt-2 text-gray-700">
          <address className="not-italic">
            <span className="block">Kristin Watson</span>
            <span className="block">7363 Cynthia Pass</span>
            <span className="block">Toronto, ON N3Y 4H8</span>
          </address>
        </dd>
      </div>
    </dl>

    <h4 className="sr-only">Payment</h4>
    <dl className="grid grid-cols-2 py-10 text-sm border-t border-gray-200 gap-x-6">
      <div>
        <dt className="font-medium text-gray-900">Payment method</dt>
        <dd className="mt-2 text-gray-700">
          <p>Apple Pay</p>
          <p>Mastercard</p>
          <p>
            <span aria-hidden="true">••••</span>
            <span className="sr-only">Ending in </span>1545
          </p>
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">Shipping method</dt>
        <dd className="mt-2 text-gray-700">
          <p>DHL</p>
          <p>Takes up to 3 working days</p>
        </dd>
      </div>
    </dl>

    <h3 className="sr-only">Summary</h3>

    <dl className="pt-10 space-y-6 text-sm border-t border-gray-200">
      <div className="flex justify-between">
        <dt className="font-medium text-gray-900">Subtotal</dt>
        <dd className="text-gray-700">$36.00</dd>
      </div>
      <div className="flex justify-between">
        <dt className="flex font-medium text-gray-900">
          Discount
          <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
            STUDENT50
          </span>
        </dt>
        <dd className="text-gray-700">-$18.00 (50%)</dd>
      </div>
      <div className="flex justify-between">
        <dt className="font-medium text-gray-900">Shipping</dt>
        <dd className="text-gray-700">$5.00</dd>
      </div>
      <div className="flex justify-between">
        <dt className="font-medium text-gray-900">Total</dt>
        <dd className="text-gray-900">$23.00</dd>
      </div>
    </dl>
  </div>
);

/*****************************
 * Utils
 */

function getImage(orderedProduct: OrderedProduct) {
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
