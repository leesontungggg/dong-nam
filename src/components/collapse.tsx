const Collapse = (props: any) => {
    const { items = [] } = props;

    return (
        <>
            {items.map((item: any) => (
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
    {item.title}
  </div>
  <div className="collapse-content"> 
    <p>{item.description}</p>
  </div>
</div>))}
        </>
    );
}

export default Collapse;