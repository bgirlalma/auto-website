import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { toggleFavorites } from "../redux/Auto/Slice/favoriteSlice";
import { openModal } from "../redux/Auto/Slice/modalSlise";
import { getCars } from "../redux/Auto/selector";

const Favorite = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  // Получаем список избранных авто из localStorage
  const favoritesFromStorageRaw = localStorage.getItem("favorites");
  const favoritesFromStorage = JSON.parse(favoritesFromStorageRaw) || [];

  // Отображаем только избранные авто из localStorage
  const favoriteCars = cars.filter((car) =>
    favoritesFromStorage.includes(car.id)
  );

  // при клике на кнопку открываем модальное окно
  const handleOpenModal = (car) => {
    dispatch(openModal());
  };

  // переключение статуса избранного с помощью id используя локальный стейт
  const favoriteToggle = (carId) => {
    const updateFavorites = favoritesFromStorage.includes(carId)
      ? favoritesFromStorage.filter((id) => id !== carId)
      : [...favoritesFromStorage, carId];

    // обновляем состояние в Redux
    dispatch(toggleFavorites(carId));

    // обновляем состояние в localStorage
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  };

  return (
    <div></div>
      <h2>Favorite Cars</h2>
      {favoriteCars.map((car) => (
        <div key={car.id}>
          <button onClick={() => favoriteToggle(car.id)}>
            <FaHeart
              fill={
                favoritesFromStorage.includes(car.id) ? "#ff0000" : "#3470ff"
              }
              width="18"
              height="18"
            />
          </button>
          <img src={car.img} alt={`${car.make} ${car.model}`} />

          <div>
            <h2>{`${car.make},`}</h2>
            <p>{`${car.model}`}</p>
            <p>{`${car.rentalPrice}`}</p>
          </div>

          <div>
            <p>{`${car.city} `}</p>
            <p>{`${car.country} `}</p>
            <p>{`${car.rentalConditions} `}</p>
            <p>{`${car.accessories}`}</p>
            <p>{`${car.functionalities}`}</p>
            <p>{`${car.make}`}</p>
            <p>{`${car.mileage}`}</p>
          </div>

          <button type="button" onClick={() => handleOpenModal(car)}>
            Learn more
          </button>

          <button>
            <a href={`tel:+380730000000`}>Rental car</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
