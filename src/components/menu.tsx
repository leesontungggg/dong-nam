const Menu = (props: any) => {
  const { className, items = [] } = props;
  return (
    <div>
      <ul
        className={`${className} menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box`}
      >
        {items.map((item: any) => (
          <li>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
