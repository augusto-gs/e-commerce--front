interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const LoginInput = (props: Props): React.ReactElement => {
  return <input {...props} />;
};

export default LoginInput;
