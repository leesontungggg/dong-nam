const Breadcrumbs = (props: any) => {
  const { items = [], className } = props;

  return (
    <div className={`${className} text-sm breadcrumbs`}>
      <ul>
        {items.map((item: any) => (
          <li key={item}>
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
