import Image from "next/image";
import {
  ComponentWithChildren,
  Order as OrderType,
  ShippingAddress,
  PaymentInfo,
} from "@/types";

import ConfirmHeroImage from "@/assets/images/confirm-hero-image.jpg";

import { getOrder } from "@/data/order";

import Link from "next/link";
import OrderedProductList from "@/components/confirmation/OrderedProductList";
import Header from "@/components/confirmation/Header";
import { getPrice } from "@/utils/getPrice";
import { MasterCardIcon, VisaIcon } from "@/theme/Icons";

type Props = {
  params: {
    orderID: string;
  };
};

export default async function Confirmation({ params }: Props) {
  const { orderID } = params;
  const order = await getOrderAsync(orderID);

  const { orderedProducts, shippingFee, taxes, shippingAddress, paymentInfo } =
    order;

  const subTotal = orderedProducts.reduce(
    (total, orderedProduct) =>
      total +
      getPrice(orderedProduct.selectedVariant || orderedProduct) *
        orderedProduct.quantity,
    0
  );

  return (
    <Wrapper>
      <HeroImage>
        <Image
          src={ConfirmHeroImage}
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
        />
      </HeroImage>

      <Content>
        <Header orderID={orderID} />
        <TrackingNumber number={orderID} />
        <OrderedProductList orderedProducts={orderedProducts} />
        <Total subTotal={subTotal} shipping={shippingFee} taxes={taxes} />

        <Footer>
          <ShippingAddress shippingAddress={shippingAddress} />
          <PaymentMethod paymentInfo={paymentInfo} />
        </Footer>

        <Navigation>
          <Link
            href="/shop"
            className="flex justify-end gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500 group"
          >
            Continue Shopping
            <span
              aria-hidden="true"
              className="inline-block transition-all duration-200 group-hover:translate-x-1"
            >
              {" "}
              &rarr;
            </span>
          </Link>
        </Navigation>
      </Content>
    </Wrapper>
  );
}

/****************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative lg:min-h-full">{children}</div>
);

const HeroImage: ComponentWithChildren = ({ children }) => (
  <div className="relative overflow-hidden h-80 lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
    {children}
  </div>
);

const Content: ComponentWithChildren = ({ children }) => (
  <div className="px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
    <div className="lg:col-start-2">{children}</div>
  </div>
);

const Footer: ComponentWithChildren = ({ children }) => (
  <dl className="grid grid-cols-2 mt-16 text-sm text-gray-600 gap-x-4">
    {children}
  </dl>
);

const Navigation: ComponentWithChildren = ({ children }) => (
  <div className="py-6 mt-16 text-right border-t border-gray-200">
    {children}
  </div>
);

/*******************
 * Components
 */

type TrackingNumberProps = {
  number: string;
};

const TrackingNumber = ({ number }: TrackingNumberProps) => (
  <dl className="mt-16 text-sm font-medium">
    <dt className="text-gray-900">Tracking number</dt>
    <dd className="mt-2 text-blue-600">{number}</dd>
  </dl>
);

type TotalProps = {
  subTotal: number;
  shipping?: number;
  taxes?: number;
};

const Total = ({ subTotal, shipping = 8, taxes = 4.3 }: TotalProps) => (
  <dl className="pt-6 space-y-6 text-sm font-medium text-gray-500 border-t border-gray-200">
    <div className="flex justify-between">
      <dt>Subtotal</dt>
      <dd className="text-gray-900">${subTotal.toFixed()}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Shipping</dt>
      <dd className="text-gray-900">${shipping.toFixed(2)}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-gray-900">${taxes.toFixed(2)}</dd>
    </div>

    <div className="flex items-center justify-between pt-6 text-gray-900 border-t border-gray-200">
      <dt className="text-base">Total</dt>
      <dd className="text-base">${(subTotal + shipping + taxes).toFixed(2)}</dd>
    </div>
  </dl>
);

type ShippingAddressProps = {
  shippingAddress: ShippingAddress;
};

const ShippingAddress = ({ shippingAddress }: ShippingAddressProps) => {
  const { firstName, lastName, streetAddress, city, state, zip, phone, email } =
    shippingAddress;

  return (
    <div>
      <dt className="font-medium text-gray-900">Shipping Address</dt>
      <dd className="mt-2">
        <address className="not-italic">
          <div className="block">
            <span className="font-semibold">Name: </span>
            <span>{firstName + " " + lastName}</span>
          </div>
          <div className="block">
            <span className="font-semibold">Addr: </span>
            <span>{streetAddress}</span>
          </div>
          <div className="block">{city + ", " + state + ", " + zip}</div>
          <div className="block">
            <span className="font-semibold">Phone: </span>
            <span>{phone}</span>
          </div>
          <div className="block">
            <span className="font-semibold">Email: </span>
            <span>{email}</span>
          </div>
        </address>
      </dd>
    </div>
  );
};

type PaymentMethodProps = {
  paymentInfo: PaymentInfo;
};

const PaymentMethod = ({ paymentInfo }: PaymentMethodProps) => {
  const { cardType, lastFourDigits, expireDate } = paymentInfo;

  const expireMonth = expireDate.getMonth() + 1;
  const expireYear = expireDate.getFullYear();

  return (
    <div>
      <dt className="font-medium text-gray-900">Payment Information</dt>
      <dd className="mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
        <div className="flex-none">
          {/* <VisaIcon className="w-auto h-6" /> */}
          {cardType === "Visa" ? (
            <VisaIcon className="w-auto h-6" />
          ) : (
            <MasterCardIcon className="w-12 h-10" />
          )}
          <p className="sr-only">
            {cardType === "Visa" ? "Visa" : "MasterCard"}
          </p>
        </div>
        <div className="flex-auto">
          <p className="text-gray-900">Ending with {lastFourDigits}</p>
          <p>
            Expires {expireMonth} / {expireYear}
          </p>
        </div>
      </dd>
    </div>
  );
};

/***********************
 * Utilities
 */

type GetOrderAsync = (orderID: string) => Promise<OrderType>;

const getOrderAsync: GetOrderAsync = (orderID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = getOrder(orderID);

      resolve(products);
    }, 1000);
  });
};
