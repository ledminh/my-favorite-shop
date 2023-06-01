import FullHeader from "./FullHeader";
import SimpleHeader from "./SimpleHeader";

type Props = {
  full?: boolean;
};

export default function Header({ full }: Props) {
  if (full) {
    return <FullHeader />;
  }

  return <SimpleHeader />;
}
