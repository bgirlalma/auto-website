import LoadMore from "components/Button/loadMore";
import  Modal  from "../Modal/carsModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../redux/Auto/Slice/favoriteSlice";
import { openModal } from "../../redux/Auto/Slice/modalSlise";
import { fetchCars } from "../../redux/Auto/autoOperation";
import {
  getCars,
  getError,
  getFiltered,
  getIsLoading,
} from "../../redux/Auto/selector";

import {
  Containet,
  Title,
  FlexContainer,
  ButtonLikeCards,
  Img,
  TitleCar,
  Desc,
  FlexTitle,
  TitleTree,
  FlextTitleBox,
  DescMachine,
  CardList,
  ButtonCards,
} from "./catalogCars.styled";

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
    dispatch(toggleFavorites(carId));
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
    <Containet>
      <Title>Каталог Авто</Title>
      <FlexContainer>
        {cars.slice(0, displayCount).map((car) => (
          <CardList key={car.id}>
            <ButtonLikeCards
              onClick={() => favoriteToggle(car.id)}
              style={{ color: favorites.includes(car.id) ? "red" : "black" }}
            >
              &#9829;
            </ButtonLikeCards>
            <Img
              src={car.img}
              alt={`${car.make} ${car.model}`}
            />

            <FlexTitle>
              <TitleCar>{`${car.make},`}</TitleCar>

              <Desc>{`${car.model}`}</Desc>

              <TitleTree>{`${car.rentalPrice}`}</TitleTree>
            </FlexTitle>

            <FlextTitleBox>
              <DescMachine>{`${car.city} `}</DescMachine>
              <DescMachine>{`${car.country} `}</DescMachine>
              <DescMachine>{`${car.rentalConditions} `}</DescMachine>
              <DescMachine>{`${car.accessories}`}</DescMachine>
              <DescMachine>{`${car.functionalities}`}</DescMachine>
              <DescMachine>{`${car.make}`}</DescMachine>
              <DescMachine>{`${car.mileage}`}</DescMachine>
            </FlextTitleBox>

            {/* Кнопка Learn more */}
            <ButtonCards onClick={() => handleOpenModal(car)}>
              Learn more
            </ButtonCards>

            {/* Посилання на Rental car */}
            <a href={`tel:+380730000000`}>Rental car</a>
          </CardList>
        ))}
      </FlexContainer>
      {filteredCars.length > displayCount && (
        <LoadMore onClick={handleButtonLoadMore} />
      )}
      <Modal />
    </Containet>
  );
};

export default CatalogCars;
