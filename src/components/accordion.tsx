const Accordion = (props: any) => {
  const { items = [], className } = props;
  return (
    <>
      {items.map((item: any, index: any) => (
        <div className={`${className} collapse collapse-arrow bg-blue-600`}>
          <input
            type="radio"
            name="my-accordion-2"
            // checked={`${index === 0 && "checked"}`}
          />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">{item.description}</div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
