import { useSelector } from "react-redux";
import { favoritesCars, totalFavorites} from "../../redux/favorites/selector";
import CatalogCars from "components/Auto/catalogCars";


const Favorite = () => {
  const favorites = useSelector(favoritesCars);
   const totalCars = useSelector(totalFavorites);

  const cardLine = [5, 6, 7, 9, 10, 11];
  const isFav = cardLine.includes(totalCars)

   return (
     <>
       <ul
         className={`mb-[100px] pt-[20px] md:pt-[50px]  flex justify-center gap-[16px] sm:gap-[16px] mx-auto ${
           isFav ? "md:justify-start" : "md:justify-center"
         }  md:items-center flex-wrap md:gap-[29px]`}
       >
         {favorites.map((car) => {
           const { id } = car;

           return (
             <li key={id}>
               <CatalogCars carId={car} />
             </li>
           );
         })}
       </ul>
     </>
   );
};

export default Favorite;
