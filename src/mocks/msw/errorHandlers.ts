import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_RUL;

const errorHandlers = [
  http.post(`${apiURL}/user/login`, () => HttpResponse.error()),
];

export default errorHandlers;
