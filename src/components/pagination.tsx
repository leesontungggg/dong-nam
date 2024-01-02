const Pagination = (props: any) => {
  const { className, items = [] } = props;

  return (
    <div className={`${className} join`}>
      {items.map((item: any) => {
        return (
          <button
            className={`${className} join-item btn`}
            onClick={item.onClick}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
