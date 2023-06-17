import metadata from "@/theme/metadata";
import { ComponentWithChildren } from "@/types";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const { contactInfo } = metadata;

export default function ContactInfo() {
  return (
    <Wrapper>
      <Line>
        <dt className="flex-none">
          <ScreenReaderOnly>Address</ScreenReaderOnly>
          <BuildingOffice2Icon
            className="w-6 text-gray-400 h-7"
            aria-hidden="true"
          />
        </dt>
        <dd>
          {contactInfo.address_line1}
          <br />
          {contactInfo.address_line2}
        </dd>
      </Line>
      <Line>
        <dt className="flex-none">
          <ScreenReaderOnly>Telephone</ScreenReaderOnly>
          <PhoneIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
        </dt>
        <dd>
          <Link className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
            {contactInfo.phone}
          </Link>
        </dd>
      </Line>
      <Line>
        <dt className="flex-none">
          <ScreenReaderOnly>Email</ScreenReaderOnly>
          <EnvelopeIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
        </dt>
        <dd>
          <Link className="hover:text-gray-900" href="mailto:hello@example.com">
            {contactInfo.email}
          </Link>
        </dd>
      </Line>
    </Wrapper>
  );
}

/*****************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
    {children}
  </dl>
);

const Line: ComponentWithChildren = ({ children }) => (
  <div className="flex gap-x-4">{children}</div>
);

const ScreenReaderOnly: ComponentWithChildren = ({ children }) => (
  <span className="sr-only">{children}</span>
);
