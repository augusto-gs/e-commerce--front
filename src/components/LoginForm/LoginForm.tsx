import { useState } from "react";
import { UserCredentialsStructure } from "../../types";
import LoginInput from "../LoginInput/LoginInput";
import LoginLabel from "../LoginLabel/LoginLabel";

interface LoginFormProps {
  actionOnClick: (userCredentials: UserCredentialsStructure) => void;
}

const LoginForm = ({ actionOnClick }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] =
    useState<UserCredentialsStructure>(initialUserCredentials);

  const { username, password } = userCredentials;

  const isDisabled = username !== "" && password !== "";

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    actionOnClick(userCredentials);

    setUserCredentials(initialUserCredentials);
  };

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form
      className="flex flex-col"
      autoComplete="off"
      onSubmit={handleLoginSubmit}
    >
      <LoginLabel htmlFor="username">
        Username
        <LoginInput id="username" onChange={onChangeUserData} />
      </LoginLabel>
      <LoginLabel htmlFor="password">
        Password
        <LoginInput onChange={onChangeUserData} id="password" />
      </LoginLabel>
      <button type="submit" disabled={!isDisabled}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
