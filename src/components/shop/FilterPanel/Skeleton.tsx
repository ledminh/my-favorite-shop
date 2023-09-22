import Wrapper from "@/components/shop/FilterPanel/Wrapper";

import Section from "@/components/shop/FilterPanel/Section";
import Label from "@/components/shop/FilterPanel/Label";
import Select from "@/components/shop/FilterPanel/Select";

export default function Skeleton() {
  return (
    <Wrapper>
      <Section>
        <Label htmlFor="sortBy">Sort by</Label>
        <Select id="sortBy" name="sortBy">
          <option value="placeholder"></option>
        </Select>
      </Section>
      <Section>
        <Label htmlFor="orderBy">Order by</Label>
        <Select id="orderBy" name="orderBy">
          <option value="placeholder"></option>
        </Select>
      </Section>
    </Wrapper>
  );
}
