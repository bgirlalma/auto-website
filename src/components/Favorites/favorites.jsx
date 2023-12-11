import { useSelector } from "react-redux";
import { favoritesCars} from "../../redux/favorites/selector";
import CatalogCars from "components/Auto/catalogCars";

const Favorite = () => {
  const favorites = useSelector(favoritesCars);

   return (
     <>
       <ul>
         {favorites.map((carId, index) => {
           return (
             <li key={`${carId}-${index}`}>
               <CatalogCars car={carId} />
             </li>
           );
         })}
       </ul>
     </>
   );
};

export default Favorite;
