import { useState } from "react";

const Hamburger = (props: any) => {
  const { handleOn, handleOff, className = "" } = props;

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    if (!isOn) {
      handleOn();
    } else {
      handleOff();
    }
    setIsOn(!isOn);
  };

  return (
    <>
      <label
        className={`${className} mix-blend-multiply btn btn-circle swap swap-rotate bg-black text-black`}
      >
        <input type="checkbox" onClick={handleToggle} />

        {/* hamburger icon */}
        <svg
          className="mix-blend-difference swap-off fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="mix-blend-difference swap-on fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </>
  );
};

export default Hamburger;
