const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservation/DELETE_RESERVATION';
// const BASE_URL = 'http://localhost:3001/api/v1';
const BASE_URL = 'https://book-a-car-backend-production.up.railway.app/api/v1';

const initialState = [];

export const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const getReservations = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const addReservationToAPI = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/reservations/`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createReservation(data));
};

export const getReservationsFromAPi = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/reservations/`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(getReservations(data));
};

export const deleteReservationFromApi = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${BASE_URL}/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteReservation(id));
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case GET_RESERVATIONS:
      return action.payload;
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};
export default reservationsReducer;
