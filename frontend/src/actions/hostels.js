import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants';
import * as api from '../api';

export const getHostels = () => async (dispatch) => {
    try {
      const { data } = await api.fetchHostels();

      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createHostel = (hostel) => async (dispatch) => {
    try {
      const { data } = await api.createHostel(hostel);

      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateHostel = (id, hostel) => async (dispatch) => {
    try {
      const { data } = await api.updateHostel(id, hostel);

      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteHostel = (id) => async (dispatch) => {
    try {
      await api.deleteHostel(id);

      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
