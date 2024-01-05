const Link = (props: any) => {
  const { className = "", text = "", href = "/" } = props;

  return (
    <a
      className={`${className} text-black underline hover:text-blue-400 link`}
      href={href}
    >
      {text}
    </a>
  );
};

export default Link;
