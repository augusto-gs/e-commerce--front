import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_URL;

const errorHandlers = [
  http.post(`${apiURL}/auth/login`, () => HttpResponse.error()),
];

export default errorHandlers;
