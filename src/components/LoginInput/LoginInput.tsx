interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const LoginInput = (props: Props): React.ReactElement => {
  return (
    <input
      className="border-solid border border-gray-300 rounded-md-12px h-45px p-5 text-black mt-3"
      {...props}
    />
  );
};

export default LoginInput;
