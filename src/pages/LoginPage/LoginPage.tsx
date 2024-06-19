import LoginForm from "../../components/LoginForm/LoginForm";
import useUserApi from "../../hooks/useUserApi/useUserApi";
import { UserCredentialsStructure } from "../../types";

const LoginPage = (): React.ReactElement => {
  const { getUserLogin } = useUserApi();

  const handleUserLogin = async (userCredentials: UserCredentialsStructure) => {
    const token = await getUserLogin(userCredentials);

    if (token) {
      console.log("You have logged in");
    }
  };

  return (
    <section className="flex flex-col bg-stone-100 w-full h-screen mt-0">
      <div className="flex justify-center content-center items-center bg-white mt-0 h-11">
        <img
          src="https://i.ibb.co/RCJJy57/login-header-logo.png"
          alt="Shopping bag drawing logo"
          width="32px"
          height="32px"
        />
      </div>
      <div className="flex-col self-center m-10 bg-white p-5 border-solid border-gray-200 border-2 rounded-md w-2/3 flex justify-left max-w-575px ">
        <h1 className="text-2xl weight font-semibold sm:text-32px">
          Log in to your account
        </h1>
        <LoginForm actionOnClick={handleUserLogin} />
      </div>
    </section>
  );
};

export default LoginPage;
