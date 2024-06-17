interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const LoginLabel = ({ children, ...props }: Props): React.ReactElement => {
  return <label {...props}>{children}</label>;
};

export default LoginLabel;
