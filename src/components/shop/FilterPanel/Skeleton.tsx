import Wrapper from "@/components/Shop/FilterPanel/Wrapper";

import Section from "@/components/Shop/FilterPanel/Section";
import Label from "@/components/Shop/FilterPanel/Label";
import Select from "@/components/Shop/FilterPanel/Select";

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
