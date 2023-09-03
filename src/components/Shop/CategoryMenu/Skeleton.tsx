import { Button } from "@/theme/basics";

import Category from "@/components/Shop/Category";
import MoreButton from "@/components/Shop/CategoryMenu/MoreButton";
import Wrapper from "@/components/Shop/CategoryMenu/Wrapper";

const Skeleton = () => (
  <>
    <Wrapper type="sm">
      <Button size="sm" color="secondary" border="square">
        CHANGE CATEGORY
      </Button>
    </Wrapper>
    <Wrapper type="md">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} />
        ))}
      <MoreButton setIsMenuOpen={() => {}} />
    </Wrapper>
    <Wrapper type="lg">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} />
        ))}
      <MoreButton setIsMenuOpen={() => {}} />
    </Wrapper>
  </>
);

export default Skeleton;
