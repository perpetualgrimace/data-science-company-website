export default function Table(props) {
  const { data } = props;
  const columns = Object.keys(data);

  return (
    <table className="table">
      <thead className="table-thead">
        <tr className="table-tr">
          {columns.map((column) => (
            <th className="table-th">{column}</th>
          ))}
        </tr>
      </thead>

      <tbody className="table-tbody">
        {Array.isArray(data[columns[0]])
          ? data[columns[0]].map((row, rowIndex) => (
              <tr className="table-tr" key={`row ${rowIndex} (${row})`}>
                {columns.map((column, colIndex) => (
                  <td
                    className="table-td"
                    key={`row ${rowIndex}, column ${colIndex}`}
                  >
                    {data[[column]][rowIndex]}
                  </td>
                ))}
              </tr>
            ))
          : columns.map((column, i) => (
              <td className="table-td" key={`column ${i}`}>
                {data[[column]]}
              </td>
            ))}
      </tbody>
    </table>
  );
}
