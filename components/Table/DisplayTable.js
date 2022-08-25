import { ThreeBounce } from "better-react-spinkit";
import React, { useEffect, useState } from "react";

export const DisplayTable = React.forwardRef(({ data }, ref) => {
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    getKeys();
  }, []);

  const getKeys = () => {
    setTableHeaders(Object.keys(data[0]));
  };

  const RenderRows = ({ item }) =>
    tableHeaders.map((value) => <td>{item[value]}</td>);

  return (
    <div className="r-h2 px-2 overflow-auto w-screen xl:flex xl:justify-center">
      <div ref={ref}>
        {tableHeaders.length != 0 ? (
          <table>
            <thead>
              <tr>
                {tableHeaders.map((key, index) => (
                  <th key={key}>{key.toUpperCase()}</th>
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
