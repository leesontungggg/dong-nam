const Skeleton = ({ className }: any) => {
  return (
    <div className={`${className} flex flex-col gap-4 w-52`}>
      <div className={`${className} skeleton h-32 w-full`}></div>
      <div className={`${className} skeleton h-4 w-28`}></div>
      <div className={`${className} skeleton h-4 w-full`}></div>
      <div className={`${className} skeleton h-4 w-full`}></div>
    </div>
  );
};

export default Skeleton;
