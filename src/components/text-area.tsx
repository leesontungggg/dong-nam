const TextArea = ({ className }: any) => {
  return (
    <textarea
      className={`${className} textarea textarea-bordered`}
      placeholder="Bio"
    ></textarea>
  );
};

export default TextArea;
