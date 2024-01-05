const Collapse = (props: any) => {
  const { items = [], className = "" } = props;

  return (
    <>
      {items.map((item: any) => (
        <div
          tabIndex={0}
          className={`${className} collapse collapse-arrow border border-base-300 bg-base-200`}
        >
          <div className="collapse-title text-xl font-medium   text-black">
            {item.title}
          </div>
          <div className="collapse-content">
            <p className="text-black">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapse;
