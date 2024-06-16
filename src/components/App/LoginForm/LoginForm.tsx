import { useState } from "react";
import { UserCredentialsStructure } from "../../../types";

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
    <form autoComplete="off" onSubmit={handleLoginSubmit}>
      <label>
        {" "}
        Username
        <input type="text" id="username" onChange={onChangeUserData} />
      </label>
      <label>
        {" "}
        Password
        <input type="text" id="password" onChange={onChangeUserData} />
      </label>
      <button type="submit" disabled={isDisabled}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
