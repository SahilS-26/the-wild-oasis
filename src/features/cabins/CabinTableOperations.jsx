import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  const FILTERS = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "No discount",
      value: "no-discount",
    },
    {
      id: 3,
      name: "With discount",
      value: "with-discount",
    },
  ];

  const SORT_OPTIONS = [
    {
      value: "name-asc",
      label: "Sort by name (A-Z)",
    },
    {
      value: "name-desc",
      label: "Sort by name (Z-A)",
    },
    {
      value: "regularPrice-asc",
      label: "Sort by price (low first)",
    },
    {
      value: "regularPrice-desc",
      label: "Sort by price (high first)",
    },
    {
      value: "maxCapacity-asc",
      label: "Sort by capacity (low first)",
    },
    {
      value: "maxCapacity-desc",
      label: "Sort by capacity (high first)",
    },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={FILTERS} />
      <SortBy options={SORT_OPTIONS} />
    </TableOperations>
  );
}

export default CabinTableOperations;
