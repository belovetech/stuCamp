import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/hostels';

export const fetchHostels = () => axios.get(url);
export const createHostel = (newPost) => axios.post(url, newPost);
export const updateHostel = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteHostel = (id) => axios.delete(`${url}/${id}`);
