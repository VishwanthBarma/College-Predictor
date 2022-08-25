import { ThreeBounce } from "better-react-spinkit";
import React, { useState } from "react";
import { data } from "../../asserts/data";
import CollegeCard from "./CollegeCard";

function StudentForm() {
  const [caste, setCaste] = useState(null);
  const [rank, setRank] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (caste == null) return;
    const sortedColleges = [...data].sort((a, b) => a[caste] - b[caste]);
    const filteredColleges = [...sortedColleges].filter(
      (item) => item[caste] >= rank
    );
    setColleges(filteredColleges);
    setLoading(false);
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 text-center justify-center mx-auto"
      >
        <select
          required
          onChange={(e) => setCaste(e.target.value)}
          value={caste}
          className="text-slate-200 outline-none p-2 h-12 w-52 rounded-xl bg-black"
        >
          <option selected>Select caste</option>
          <option value="oc_boys">OC</option>
          <option value="bca_boys">BC_A</option>
          <option value="bcb_boys">BC_B</option>
          <option value="bcc_boys">BC_C</option>
          <option value="bcd_boys">BC_D</option>
          <option value="bce_boys">BC_E</option>
          <option value="sc_boys">SC</option>
          <option value="st_boys">ST</option>
          <option value="ews_boys">EWS</option>
        </select>
        <input
          required
          onChange={(e) => setRank(parseInt(e.target.value))}
          type="number"
          min="1"
          placeholder="Enter your rank"
          value={rank}
          className="bg-neutral-800 w-52 outline-none py-2 px-5 rounded-xl"
        ></input>
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 w-52 active:bg-sky-400 rounded-xl py-2"
        >
          Submit
        </button>
      </form>

      <hr className="text-white bg-white my-5"></hr>

      <div className="flex flex-col space-y-3 justify-center text-center">
        {colleges.length != 0 &&
          colleges.map((item, index) => (
            <CollegeCard
              key={index}
              code={item.inst_code}
              college_name={item.inst_name}
              branch_name={item.branch_name}
              rank={item[caste]}
            />
          ))}
        {loading && (
          <div className="flex mt-5">
            <ThreeBounce size={30} color="orange" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentForm;
