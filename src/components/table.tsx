const Table = (props: any) => {
    const { head = {} } = props;
    const { body = [] } = props;

    return (
        <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
            <th></th>
            <th>{head.title1}</th>
            <th>{head.title2}</th>
            <th>{head.title3}</th>
                  </tr>
                </thead>
                <tbody>
                  {body.map((body: any) => (
                  <tr>
            <th>{body.number}</th>
            <td>{body.title}</td>
            <td>{body.description}</td>
            <td>{body.note}</td>
                  </tr>))}
                  {/* row 2
                  <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
                  </tr>
                  {/* row 3 
                  <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
                  </tr>  */}
                </tbody>
              </table>
            </div>
        </div>
    );
}

export default Table;