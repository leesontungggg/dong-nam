const SwapText = (props: any) => {
  const { handleOn, handleOff, className = "" } = props;

  const handleToggleOn = () => {
    handleOn();
  };

  const handleToggleOff = () => {
    handleOff();
  };

  return (
    <div
      className={`${className} preview border-base-300 bg-base-300 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] `}
    >
      <label className="swap">
        <input type="checkbox" />{" "}
        <div className="swap-on text-black" onClick={handleToggleOn}>
          ON
        </div>{" "}
        <div className="swap-off text-black" onClick={handleToggleOff}>
          OFF
        </div>
      </label>
    </div>
  );
};

export default SwapText;
