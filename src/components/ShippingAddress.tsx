// Being used on confirmation page and order page

import { ShippingAddress } from "@/types";

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

export default ShippingAddress;
