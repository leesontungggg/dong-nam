const Menu = (props: any) => {
  const { className = "", items = [] } = props;

  return (
    <ul
      className={`${className} menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box`}
    >
      {items.map((item: any) => (
        <li>
          <a className="text-black" href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
