import LoadMore from "components/Button/loadMore";
import  Modal  from "../Modal/carsModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/Auto/Slice/favoriteSlice";
import { openModal } from "../../redux/Auto/Slice/modalSlise";
import { fetchCars } from "../../redux/Auto/autoOperation";
import {
  getCars,
  getError,
  getFiltered,
  getIsLoading,
} from "../../redux/Auto/selector";

import { Title} from "./catalogCars.styled";

const img = 'https://collection.cloudinary.com/dyyssd0kc/f0c5e33510383ecff3716b2f74cabceb';

const CatalogCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFiltered);
  const error = useSelector(getError);
  const favorites = useSelector((state) => state.favorites);
  const [displayCount, setdisplayCount] = useState(12);

  useEffect(() => {
    // получаем список автомобилей при монтировании компонента
    dispatch(fetchCars());
  }, [dispatch]);

  const handleButtonLoadMore = () => {
    setdisplayCount(displayCount + 12);
    dispatch(LoadMore());
  };

  const favoriteToggle = (carId) => {
    dispatch(toggleFavorite(carId));
  };

  const handleOpenModal = (car) => {
    dispatch(openModal());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error..{error}</div>;
  }
  const filteredCars = cars.filter((car) => car.make === filter);

  return (
    <div>
      <Title>Каталог Авто</Title>
      <ul>
        {cars.slice(0, displayCount).map((car) => (
          <li key={car.id}>
            <h2>{car.make}</h2>
            <img src={img} alt={`${car.make} ${car.model}`} width="300px" height="200px" />
            <p>{`${car.year} ${car.make} ${car.model}`}</p>
            <p>Type: {car.type}</p>
            <p>Description: {car.description}</p>
            <p>Fuel Consumption: {car.fuelConsumption}</p>
            <p>Engine Size: {car.engineSize}</p>
            <p>
              Accessories:{" "}
              {Array.isArray(car.accessories)
                ? car.accessories.join(", ")
                : "N/A"}
            </p>
            <p>
              Functionalities:{" "}
              {Array.isArray(car.functionalities)
                ? car.functionalities.join(", ")
                : "N/A"}
            </p>
            <p>Rental Price: {car.rentalPrice} per hour</p>
            <p>Rental Company: {car.rentalCompany}</p>
            <p>Address: {car.address}</p>
            <p>Rental Conditions: {car.rentalConditions}</p>
            <p>Mileage: {car.mileage}</p>

            <button
              onClick={() => favoriteToggle(car.id)}
              style={{ color: favorites.includes(car.id) ? "red" : "black" }}
            >
              &#9829; Улюблене
            </button>

            {/* Кнопка Learn more */}
            <button onClick={() => handleOpenModal(car)}>Learn more</button>

            {/* Посилання на Rental car */}
            <a href={`tel:+380730000000`}>Rental car</a>
          </li>
        ))}
      </ul>
      {filteredCars.length > displayCount && (
        <LoadMore onClick={handleButtonLoadMore} />
      )}
      <Modal />
    </div>
  );
};

export default CatalogCars;
