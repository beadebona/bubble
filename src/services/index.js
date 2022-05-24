import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-fake-store.herokuapp.com/',
});
