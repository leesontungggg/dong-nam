const Select = (props: any) => {
  const { className, options = [], title } = props;

  return (
    <select className={`${className} select select-bordered w-full max-w-xs`}>
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
