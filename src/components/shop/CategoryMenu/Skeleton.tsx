import { Button } from "@/theme/basics";

import Category from "@/components/shop/Category";
import Wrapper from "@/components/shop/CategoryMenu/Wrapper";

const Skeleton = () => (
  <>
    <Wrapper type="sm">
      <Button size="sm" color="secondary" border="square">
        CHANGE CATEGORY
      </Button>
    </Wrapper>
    <Wrapper type="md">
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} index={index} />
        ))}
    </Wrapper>
    <Wrapper type="lg">
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} />
        ))}
    </Wrapper>
  </>
);

export default Skeleton;
