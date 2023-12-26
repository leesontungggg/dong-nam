const SwapText = ({ handleOn, handleOff }: any) => {
  const handleToggleOn = () => {
    handleOn();
  };

  const handleToggleOff = () => {
    handleOff();
  };

  return (
    <div className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
      <label className="swap">
        <input type="checkbox" />{" "}
        <div className="swap-on" onClick={handleToggleOn}>
          ON
        </div>{" "}
        <div className="swap-off" onClick={handleToggleOff}>
          OFF
        </div>
      </label>
    </div>
  );
};

export default SwapText;
