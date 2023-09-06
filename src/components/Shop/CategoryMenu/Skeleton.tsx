import { Button } from "@/theme/basics";

import Category from "@/components/Shop/Category";
import Wrapper from "@/components/Shop/CategoryMenu/Wrapper";

const Skeleton = () => (
  <>
    <Wrapper type="sm">
      <Button size="sm" color="secondary" border="square">
        CHANGE CATEGORY
      </Button>
    </Wrapper>
    <Wrapper type="md">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} />
        ))}
    </Wrapper>
    <Wrapper type="lg">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Category key={index} type="Block" skeleton={true} />
        ))}
    </Wrapper>
  </>
);

export default Skeleton;
