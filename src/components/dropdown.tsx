const Dropdown = (props: any) => {
  const { className = "", title, options = [] } = props;
  return (
    <>
      <div className={`${className} dropdown`}>
        <div
          tabIndex={0}
          role="button"
          className=" btn m-1 bg-base-300 text-black"
        >
          {title}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {options.map((option: any) => (
            <li>
              <a className=" text-black" href={option.href}>
                {option.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
