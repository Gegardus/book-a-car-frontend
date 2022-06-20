import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';
import { getCarsFromAPI } from '../../redux/reducers/cars';
import { deleteCarFromAPI } from '../../redux/reducers/deleteCars';
import './delete.css';

const DeleteCar = () => {
  const fetchedCars = useSelector((state) => state.cars);
  const cars = fetchedCars.data;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCarFromAPI(id));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getCarsFromAPI());
  }, []);

  return (
    <section className="Delete-page">
      <Hamburger />
      <div className="navbar">
        <Sidebar />
      </div>
      <div>
        <h1 className="header">Delete Items</h1>
        {cars.map((car) => (
          <div key={car.id}>
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
            />
            <div>{car.model}</div>
            <button onClick={() => handleDelete(car.id)} type="button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeleteCar;
