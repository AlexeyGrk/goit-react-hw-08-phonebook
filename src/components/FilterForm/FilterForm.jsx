import { memo } from "react";
import { FilterInput } from "./FilterForm.styled";

const FilterForm = ({ handleNameFilter }) => {
  return <FilterInput onChange={handleNameFilter} type="text" />;
};

export default memo(FilterForm);
