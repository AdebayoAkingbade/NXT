import React from "react";
import "./table.scss";

const Transactions: React.FC<any> = ({ data, query, setQuery, loading }) => {
  return (
    <div className="transaction-page">
      <div className="add-more-btn-wrapper">
        <button
          type="button"
          onClick={() => {
            setQuery({ page: query.page ? parseInt(query.page) + 1 : 2 });
          }}
        >
          More
        </button>
      </div>
      <div className="table-wrapper">
        {loading && <p>Loading...</p>}
        {data.length && !loading ? (
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key: any) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((transaction: any) => (
                <tr key={transaction.id}>
                  {Object.values(transaction).map((key: any) => (
                    <td key={key}>{key}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Transactions;
