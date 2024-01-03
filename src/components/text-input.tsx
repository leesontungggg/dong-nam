const TextInput = ({ className, onChange }: any) => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className={`${className} input input-bordered w-full max-w-xs`}
      onChange={onChange}
    />
  );
};

export default TextInput;
