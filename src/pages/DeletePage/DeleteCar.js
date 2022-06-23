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
    <div className="homepage">
      <div className="h-screen flex bg-white">
        <div className="hidden lg:flex lg:flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col min-w-0 flex-1 mt-32 lg:mt-1">
          {/* Hamburger for mobile */}
          <Hamburger />
          <div className="flex flex-col items-center">
            <h1 className="title">Remove car</h1>
          </div>
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.carImg} alt="delete" className="car rounded-full w-40 h-40 m-auto blob"/>
              <div className="flex justify-end space-x-1 font-serif text-lg mr-4">              
                <button className="bg-yellow-300 text-black p-1 rounded-md" onClick={() => handleDelete(car.id)} type="button">
                  Remove
                </button>
                <div className="bg-green-500 text-white p-1 rounded-md font-semibold">{car.carModel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
