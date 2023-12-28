const Badge = (props: any) => {
  const { title } = props;
  return (
    <>
      <span className="badge">{title}</span>
    </>
  );
};

export default Badge;
