import LoginForm from "../../components/App/LoginForm/LoginForm";

const LoginPage = (): React.ReactElement => {
  return (
    <section className="flex flex-col bg-stone-100 w-full h-screen mt-0">
      <div className="flex justify-center content-center items-center bg-white mt-0 h-11">
        <img
          src="../../public/images/login-header-logo.png"
          alt="Shopping bag drawing logo"
          width="32px"
          height="32px"
        />
      </div>
      <div className="self-center m-10 bg-white p-2 border-solid border-gray-200 border-2 rounded-md h-96 w-2/3 flex justify-left max-w-575px">
        <h1 className="text-2x1 weight font-semibold">
          Log in to your account
        </h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
