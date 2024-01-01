const Stat = (props: any) => {
    const { result = {} } = props;

    return (
        <>
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-title">Total Page Views</div>
    <div className="stat-value">{result.total}</div>
    <div className="stat-desc">{result.percentage}</div>
  </div>
  
</div>
        </>
    );
}

export default Stat;