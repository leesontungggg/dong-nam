const Select = (props: any) => {
  const { className, options = [], title, onSelect } = props;

  return (
    <select
      className={`${className} select select-bordered w-full max-w-xs`}
      onChange={(e) => {
        onSelect(e.target.value);
      }}
    >
      <option disabled selected>
        {title}
      </option>
      {options.map((option: any) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Select;
