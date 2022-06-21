import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';
import { removeCarFromAPI } from '../../redux/reducers/cars';
import './delete.css';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeCarFromAPI(id));
    window.location.reload();
  };

  return (
    <section className="Delete-page">
      <Hamburger />
      <div className="navbar">
        <Sidebar />
      </div>
      <div>
        <div className="header">
          <h1>Delete Items</h1>
        </div>
        {cars.map((car) => (
          <div key={car.id}>
            <img src={car.carImg} alt="delete" />
            <div>{car.carModel}</div>
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
