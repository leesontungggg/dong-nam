const Button = (props: any) => {
  const { text, className = "" } = props;
  return (
    <button
      className={`${className} rounded-full px-4 py-2 bg-base-300 text-black`}
      onClick={props.onClick}
    >
      {text}
    </button>
  );
};

export default Button;
