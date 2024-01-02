const TextInput = ({ className }: any) => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className={`${className} input input-bordered w-full max-w-xs`}
    />
  );
};

export default TextInput;
