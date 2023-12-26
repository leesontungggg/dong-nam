const Dropdown = (props: any) => {
  const { title } = props;
  const { options = [] } = props;
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {title}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {options.map((option: any) => (
            <li>
              <a href={option.href}>{option.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
