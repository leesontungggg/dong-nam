const Select = (props: any) => {
  const { className = "", options = [], title, onSelect } = props;

  return (
    <select
      className={`${className} bg-base-300 text-black select select-bordered w-full max-w-xs`}
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      <option className="text-slate-700" disabled selected>
        {title}
      </option>
      {options.map((option: any) => (
        <option className="text-black">{option}</option>
      ))}
    </select>
  );
};

export default Select;
