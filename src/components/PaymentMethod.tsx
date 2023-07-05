// Being used on confirmation page and order page

import { PaymentInfo } from "@/types";
import { VisaIcon, MasterCardIcon } from "@/theme/Icons";

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

export default PaymentMethod;
