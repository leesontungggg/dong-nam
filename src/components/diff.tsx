// Diff component shows a side-by-side comparison of two items.

const Diff = (props: any) => {
  const { items = [], className = "" } = props;

  return (
    <>
      {items.map((item: any) => (
        <div className={`${className} diff aspect-[16/9]`}>
          <div className="diff-item-1">
            <img alt={item.alt1} src={item.url1} />
          </div>
          <div className="diff-item-2">
            <img alt={item.alt2} src={item.url2} />
          </div>
          <div className="diff-resizer"></div>
        </div>
      ))}
    </>
  );
};

export default Diff;
