const Accordion = (props: any) => {
  const { className = "", items = [] } = props;
  return (
    <>
      {items.map((item: any, index: any) => (
        <div
          className={`${className} collapse collapse-arrow max-w-screen md:max-w-screen-md bg-base-300`}
        >
          <input
            type="radio"
            name="my-accordion-1"
            checked
            // {`${index === 0 && "checked"}`}
          />
          <div className=" collapse-title text-xl font-medium text-black">
            {item.title}
          </div>
          <div className=" collapse-content text-black">{item.description}</div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
