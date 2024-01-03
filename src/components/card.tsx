const Card = (props: any) => {
  const { items = [], actions } = props;
  // const handleActionClick = () => {
  //   handleAction();
  // }

  return (
    <>
      {items.map((item: any) => (
        <div className="h-1/3 card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.url} alt={item.alt} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={item.handleActionClick}
                className="btn btn-primary"
              >
                {actions}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
