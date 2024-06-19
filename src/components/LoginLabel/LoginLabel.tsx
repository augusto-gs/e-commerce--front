interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const LoginLabel = ({ children, ...props }: Props): React.ReactElement => {
  return (
    <label
      className="flex flex-col text-base text-neutral-100 font-thin mb-5"
      {...props}
    >
      {children}
    </label>
  );
};

export default LoginLabel;
