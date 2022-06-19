const GET_CARS = 'carStore/cars/GET_CARS';

const initialState = [];

export const getCars = (payload) => ({
  type: GET_CARS,
  payload,
});

export const getCarsFromAPI = () => async (storing) => {
  const result = await fetch('http://localhost:3001/api/v1/cars', {
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
