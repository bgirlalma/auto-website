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

import {
  Title,
  FlexContainer,
  TitleCar,
  Desc,
  FlexTitle,
  TitleTree,
  FlextTitleBox,
  DescMachine,
} from "./catalogCars.styled";

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
      <FlexContainer>
        {cars.slice(0, displayCount).map((car) => (
          <li key={car.id}>
            <img
              src={img}
              alt={`${car.make} ${car.model}`}
              width="300px"
              height="200px"
            />

            <FlexTitle>
              <TitleCar>{`${car.make},`}</TitleCar>

              <Desc>{`${car.model}`}</Desc>

              <TitleTree>{`${car.rentalPrice}`}</TitleTree>
            </FlexTitle>

            <FlextTitleBox>
              <DescMachine>{`${car.city} | `}</DescMachine>
              <DescMachine>{`${car.country} | `}</DescMachine>
              <DescMachine>{`${car.rentalConditions} | `}</DescMachine>
              <DescMachine>{`${car.accessories} | `}</DescMachine>
              <DescMachine>{`${car.functionalities} | `}</DescMachine>
              <DescMachine>{`${car.mileage} | `}</DescMachine>
            </FlextTitleBox>

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
      </FlexContainer>
      {filteredCars.length > displayCount && (
        <LoadMore onClick={handleButtonLoadMore} />
      )}
      <Modal />
    </div>
  );
};

export default CatalogCars;
