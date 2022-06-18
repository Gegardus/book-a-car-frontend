// import { getCars } from './cars';

const CARS_URL = 'https://rent-a-car-backend-dejan.herokuapp.com/api/v1';
const GET_CARS = 'carStore/cars/GET_CARS';

const carsState = [];

export const getCars = (payload) => ({
  type: GET_CARS,
  payload,
});

export const getCarsFromAPI = () => async (storing) => {
  const result = await fetch(`${CARS_URL}/cars/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  const carsData = await result.json();

  const cars = carsData.map((data) => ({
    id: data.id,
    carName: data.name,
    carFuel: data.fuel,
    carType: data.car_type,
  }));
  storing(getCars(cars));
};

// reducer

const carsReducer = (state = carsState, action) => {
  switch (action.type) {
    case GET_CARS:
      return [...action.payload];
    default:
      return state;
  }
};

export default carsReducer;
