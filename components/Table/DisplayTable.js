import React from "react";

function DisplayTable({ data }) {
  return (
    <div className="overflow-scroll r-h2">
      <table>
        <thead>
          <tr>
            <th>INST CODE</th>
            <th>INST NAME</th>
            <th>PLACE</th>
            <th>DIST</th>
            <th>BRANCH</th>
            <th>BRANCH NAME</th>
            <th>OC BOYS</th>
            <th>OC GIRLS</th>
            <th>BC_A BOYS</th>
            <th>BC_A GIRLS</th>
            <th>BC_B BOYS</th>
            <th>BC_B GIRLS</th>
            <th>BC_C BOYS</th>
            <th>BC_C GIRLS</th>
            <th>BC_D BOYS</th>
            <th>BC_D GIRLS</th>
            <th>BC_E BOYS</th>
            <th>BC_E GIRLS</th>
            <th>SC BOYS</th>
            <th>SC GIRLS</th>
            <th>ST BOYS</th>
            <th>ST GIRLS</th>
            <th>EWS GEN OU</th>
            <th>EWS GIRLS OU</th>
            <th>TUITION FEE</th>
            <th>AFFILIATED</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list) => (
            <tr>
              <td>{list.inst_code}</td>
              <td>{list.inst_name}</td>
              <td>{list.place}</td>
              <td>{list.dist}</td>
              <td>{list.branch}</td>
              <td>{list.branch_name}</td>
              <td>{list.oc_boys}</td>
              <td>{list.oc_girls}</td>
              <td>{list.bca_boys}</td>
              <td>{list.bca_girls}</td>
              <td>{list.bcb_boys}</td>
              <td>{list.bcb_girls}</td>
              <td>{list.bcc_boys}</td>
              <td>{list.bcc_girls}</td>
              <td>{list.bcd_boys}</td>
              <td>{list.bcd_girls}</td>
              <td>{list.bce_boys}</td>
              <td>{list.bce_girls}</td>
              <td>{list.sc_boys}</td>
              <td>{list.sc_girls}</td>
              <td>{list.st_boys}</td>
              <td>{list.st_girls}</td>
              <td>{list.ews_gen_ou}</td>
              <td>{list.ews_gen_ou}</td>
              <td>{list.tuition_fee}</td>
              <td>{list.affiliated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
