import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants';

export default (hostels = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...hostels, action.payload];
    case UPDATE:
      return hostels.map((hostel) => (hostel.id === action.payload.id ? action.payload : hostel));
    case DELETE:
      return hostels.filter((hostel) => hostel.id !== action.payload);
    default:
      return hostels;
  }
};
