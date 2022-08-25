import { ThreeBounce } from "better-react-spinkit";
import React, { useEffect, useState } from "react";

const DisplayTable = React.forwardRef(({ data }, ref) => {
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const getKeys = () => {
      setTableHeaders(Object.keys(data[0]));
    };
    getKeys();
  }, []);

  const RenderRows = ({ item }) =>
    tableHeaders.map((value, index) => <td key={index}>{item[value]}</td>);

  return (
    <div className="r-h2 px-2 overflow-auto w-screen xl:flex xl:justify-center">
      <div ref={ref}>
        {tableHeaders.length != 0 ? (
          <table>
            <thead>
              <tr>
                {tableHeaders.map((key, index) => (
                  <th key={index}>{key.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <>
                  <tr>
                    <RenderRows item={item} />
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center mt-5">
            <ThreeBounce size={30} color="orange" />
          </div>
        )}
      </div>
    </div>
  );
});

DisplayTable.displayName = "DisplayTable";

export default DisplayTable;
