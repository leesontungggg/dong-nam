const Badge = (props: any) => {
  const { title, className = "" } = props;
  return (
    <>
      <span className={`${className} badge text-black bg-base-300`}>
        {title}
      </span>
    </>
  );
};

export default Badge;
