import List from "./ListWrapper";
import Product from "./Product";

export default function Skeleton() {
  return (
    <List>
      {[...Array(8)].map((_, i) => (
        <Product key={i} skeleton />
      ))}
    </List>
  );
}
