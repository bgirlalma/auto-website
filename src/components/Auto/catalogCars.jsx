import  Modal  from "../Modal/carsModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../redux/Auto/Slice/favoriteSlice";
import { openModal } from "../../redux/Auto/Slice/modalSlise";
import { fetchCars } from "../../redux/Auto/autoOperation";
import { FaHeart } from "react-icons/fa";
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
  RentlaButton,
  FilterButton,
} from "./catalogCars.styled";

const CatalogCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFiltered);
  const error = useSelector(getError);
  const [displayCount, setdisplayCount] = useState(12);

  const favoritesFromStorageRaw = localStorage.getItem("favorites");
 let favoritesFromStorage;
 try {
   favoritesFromStorage = JSON.parse(favoritesFromStorageRaw);
 } catch (error) {
   favoritesFromStorage = [];
 }
  const [favorites, setFavorites] = useState(favoritesFromStorage);

  useEffect(() => {
    // получаем список автомобилей при монтировании компонента
    dispatch(fetchCars());
  }, [dispatch]);


  useEffect(() => {
    // При изменении избранных сохраняем их в локальное хранилище
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // фильтруем карточки по имени
   const filteredAndSlicedCars = cars
     .filter((car) => (filter ? car.make === filter : true))
     .slice(0, displayCount);

  // при клике может появляться только 12 карточек
  const handleButtonLoadMore = () => {
    setdisplayCount(displayCount + 12);
  };

  // переключение статуса избранного с помощью id используя локальный стейт
  const favoriteToggle = (carId) => {
    const updateFavorites = favorites.includes(carId)
      ? favorites.filter((id) => id !== carId)
      : [...favorites, carId];

    // обновляем состояние в Redux
    dispatch(toggleFavorites(carId));

    // обновляем состояние в локальном хранилище
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  // по клику на кнопку открываем модальное окно
    const handleOpenModal = (car) => {
      dispatch(openModal());
    };

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error..{error}</div>;
    }

  return (
    <Containet>
      <Title>Каталог Авто</Title>
      <FlexContainer>
        {filteredAndSlicedCars.slice(0, displayCount).map((car) => (
          <CardList key={car.id}>
            <ButtonLikeCards onClick={() => favoriteToggle(car.id)}>
              <FaHeart
                fill={favorites.includes(car.id) ? "#fff" : "#3470ff"}
                width="18"
                height="18"
              />
            </ButtonLikeCards>
            <Img src={car.img} alt={`${car.make} ${car.model}`} />

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

            <ButtonCards type="button" onClick={() => handleOpenModal(car)}>
              Learn more
            </ButtonCards>

            <RentlaButton>
              <a href={`tel:+380730000000`}>Rental car</a>
            </RentlaButton>
          </CardList>
        ))}
      </FlexContainer>
      {cars.length > displayCount && (
        <FilterButton type="button" onClick={handleButtonLoadMore}>
          Load More
        </FilterButton>
      )}
      <Modal />
    </Containet>
  );
};

export default CatalogCars;
