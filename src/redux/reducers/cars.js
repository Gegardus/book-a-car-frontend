// const CARS_URL = 'https://rent-a-car-backend-dejan.herokuapp.com/api/v1';
const CARS_URL = 'http://127.0.0.1:3001';
const GET_CARS = 'carStore/cars/GET_CARS';

const initialState = [];

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
    carModel: data.car_model,
    carDescription: data.description,
    carType: data.car_type,
    carImg: data.photo,
    carTransmission: data.transmission,
    rentPrice: data.price_per_day,
  }));
  storing(getCars(cars));
};

// reducer

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return [...action.payload];
    default:
      return state;
  }
};

export default carsReducer;
