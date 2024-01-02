const Link = (props: any) => {
  const { className, items = [] } = props;

  return (
    <>
      {items.map((item: any) => (
        <a className={`${className} link`} href={item.href}>
          {item.text}
        </a>
      ))}
    </>
  );
};

export default Link;
