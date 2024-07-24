import axios from 'axios';

export const serverCaller = axios.create({baseURL: "http://localhost:8305"});