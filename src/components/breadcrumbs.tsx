const Breadcrumbs = (props: any) => {
  const { className, items = [] } = props;

  return (
    <div className={`${className} text-sm breadcrumbs`}>
      <ul>
        {items.map((item: any) => (
          <li key={item.name}>
            <a className="cursor-pointer" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
