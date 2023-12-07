import { useSelector } from 'react-redux';
import { getCars } from '../redux/Auto/selector';

const Favorite = () => {

    // Отримати список улюблених авто зі store
  const favoriteCars = useSelector(getCars);

  return (
    <div>
      <h2>Favorite Cars</h2>
      {favoriteCars.map((car) => (
        <div key={car.id}>
          <h3>{car.make} {car.model}</h3>
          {/* Додайте інші відомості про автомобіль, які вам необхідні */}
        </div>
      ))}
    </div>
  );
}

export default Favorite;