import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import { tokenMock, userMock } from "../../mocks/userMock/userMock";
import { server } from "../../mocks/msw/node";
import errorHandlers from "../../mocks/msw/errorHandlers";

describe("Given a useUserApi custom hook with a getUserLogin function", () => {
  describe("When it receives correct user credentials", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getUserLogin },
        },
      } = renderHook(() => useUserApi());

      const token = await getUserLogin(userMock);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When it receives incorrect userCredentials", () => {
    test("Then it should throw an error", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getUserLogin },
        },
      } = renderHook(() => useUserApi());

      const spy = vi.spyOn(console, "log");

      await getUserLogin(userMock);

      expect(spy).toHaveBeenCalled();
    });
  });
});
