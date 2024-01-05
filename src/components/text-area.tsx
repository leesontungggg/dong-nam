const TextArea = ({
  placeholder = "Text here",
  className = "",
  onChange,
}: any) => {
  return (
    <textarea
      onChange={onChange}
      className={`${className} bg-base-200 text-black textarea textarea-bordered`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
