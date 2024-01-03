const Breadcrumbs = (props: any) => {
  const { className, items = [] } = props;

  return (
    <div className={`${className} text-sm breadcrumbs p-4 rounded-lg`}>
      <ul>
        {items.map((item: any) => (
          <li
            key={item.name}
            className="before:!w-2 before:!h-2 before:!opacity-100 before:!border-black"
          >
            <a className="cursor-pointer text-black" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
