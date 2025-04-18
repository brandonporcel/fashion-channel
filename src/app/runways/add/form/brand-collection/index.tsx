import SelectBrand from "./select-brand";
import SelectCollection from "./select-collection";

function SelectBrandCollection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <SelectBrand />
      <SelectCollection />
    </div>
  );
}

export default SelectBrandCollection;
