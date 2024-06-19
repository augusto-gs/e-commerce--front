import axios from "axios";
import { UserCredentialsStructure } from "../../types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useUserApi = () => {
  const getUserLogin = async (
    userCredentials: UserCredentialsStructure,
  ): Promise<string | undefined> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>("auth/login", {
        username: userCredentials.username,
        password: userCredentials.password,
      });

      return token;
    } catch (error) {
      console.log(error);
    }
  };

  return { getUserLogin };
};

export default useUserApi;
