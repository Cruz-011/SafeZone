import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.X:8080', // substitui pelo IP da máquina com backend
});

export default api;
