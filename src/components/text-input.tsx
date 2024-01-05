const TextInput = ({
  placeholder = "Text here",
  className = "",
  onChange,
}: any) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`${className} bg-base-200 text-black input input-bordered w-full`}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
