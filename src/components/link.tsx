const Link = (props: any) => {
  const { className, text = "", href = "/" } = props;

  return (
    <a className={`${className} link`} href={href}>
      {text}
    </a>
  );
};

export default Link;
