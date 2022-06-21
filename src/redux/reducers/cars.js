const CREATE_CAR = 'carStore/cars/CREATE_CARS';
const GET_CARS = 'carStore/cars/GET_CARS';

const initialState = [];

export const getCars = (payload) => ({
  type: GET_CARS,
  payload,
});

export const createCar = (payload) => ({
  type: CREATE_CAR,
  payload,
});

export const addCarToAPI = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3001/api/v1/cars', {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createCar(data));
};

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
    case CREATE_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carsReducer;
