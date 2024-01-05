const Table = (props: any) => {
  const { head = {}, body = [], className = "" } = props;

  return (
    <div className={`${className} bg-base-300 overflow-x-auto`}>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th className="text-black">{head.title1}</th>
            <th className="text-black">{head.title2}</th>
            <th className="text-black">{head.title3}</th>
          </tr>
        </thead>
        <tbody>
          {body.map((body: any) => (
            <tr>
              <th className="text-black">{body.number}</th>
              <td className="text-black">{body.title}</td>
              <td className="text-black">{body.description}</td>
              <td className="text-black">{body.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
