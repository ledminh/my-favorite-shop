import ListWrapper from "./ListWrapper";
import Item from "./Item";
import Category from "@/components/Shop/Category";

export default function Skeleton() {
  return (
    <ListWrapper>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <Item key={index}>
            <Category type="Card" skeleton={true} />
          </Item>
        ))}
    </ListWrapper>
  );
}
