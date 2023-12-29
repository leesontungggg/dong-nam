const Button = (props: any) => {
  const { text, className } = props;
  return (
    <button className={`${className} bg-[#00A259]`} onClick={props.onClick}>
      {text}
    </button>
  );
};

export default Button;
