import CatalogCars from "components/Auto/catalogCars";
import FormCars from "components/Form/formCars";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/Auto/Slice/filterSlice";


const Catalog = () => {
  const dispatch = useDispatch()
    const filterCars = (selectedMake) => {
      dispatch(setFilter(selectedMake));
    };
    return (
      <div>
        <FormCars onChange={filterCars} />
        <CatalogCars />
      </div>
    );
}

export default Catalog;