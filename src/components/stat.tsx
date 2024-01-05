const Stat = (props: any) => {
  const { className = "", result = {} } = props;

  return (
    <>
      <div className={`${className} stats shadow"`}>
        <div className="stat bg-base-300">
          <div className="text-black font-medium stat-title">
            {result.title}
          </div>
          <div className="text-black stat-value">{result.total}</div>
          <div className="text-black stat-desc">{result.percentage}</div>
        </div>
      </div>
    </>
  );
};

export default Stat;
