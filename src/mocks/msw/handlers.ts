import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VOTE_API_URL;

const handlers = [
  http.post(`${apiURL}/auth/login`, () =>
    HttpResponse.json({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFhYmE4NWFlMWNmZjg2Y2FjMTZmZjIiLCJuYW1lIjoiQXVndXN0byBHb21leiIsImlhdCI6MTcwNjI3MjEzMCwiZXhwIjoxNzA4ODY0MTMwfQ.cDYCydtNUdocAkb7y7xwLBGPNrcl8K-WhMIW15RhLTE",
    }),
  ),
];

export default handlers;
