import { useSelector } from "react-redux";
import { favoritesCars} from "../../redux/favorites/selector";
import CatalogCars from "components/Auto/catalogCars";


const Favorite = () => {
  const favorites = useSelector(favoritesCars);

   return (
     <>
       <ul>
         {favorites.map((carId, index) => (
           <li key={`${carId}-${index}`}>
             <CatalogCars carId={carId} />
           </li>
         ))}
       </ul>
     </>
   );
};

export default Favorite;
