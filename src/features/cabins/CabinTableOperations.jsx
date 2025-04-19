import Filter from "../../ui/Filter";
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
  return (
    <TableOperations>
      <Filter filterField="discount" options={FILTERS} />
    </TableOperations>
  );
}

export default CabinTableOperations;
