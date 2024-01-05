const Loading = ({ className = "" }: any) => {
  return (
    <span
      className={`${className} bg-black loading loading-spinner loading-lg`}
    ></span>
  );
};

export default Loading;
