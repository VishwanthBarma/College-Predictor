import { ThreeBounce } from "better-react-spinkit";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import { data } from "../asserts/data";
import DisplayTable from "../components/Table/DisplayTable";

function Collegedetails() {
  const router = useRouter();
  const [colleges, setColleges] = useState(data);
  const [loading, setLoading] = useState(false);
  const [caste, setCaste] = useState("default");
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const sortAsc = (arr, field) => {
    if (field == "default") return [...data];

    return [...arr].sort((a, b) => a[field] - b[field]);
  };

  // Form Handle Submit - Function

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const sortedColleges = sortAsc(colleges, caste);
    setColleges(sortedColleges);
    setLoading(false);
  };

  return (
    <div className="lg:px-44 xl:px-64">
      <div className="flex items-center justify-center p-4">
        <button
          onClick={router.back}
          className="absolute left-5 active:opacity-50"
        >
          <BsFillArrowLeftCircleFill className="h-8 w-8" />
        </button>
        <h1 className="font-semibold text-lg">College Details</h1>
      </div>

      <div className="p-5">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-neutral-800 rounded-xl items-center flex flex-col p-4"
        >
          <div className="flex items-center space-x-2 mt-2">
            <label className="font-semibold">Sort Rank By Caste : </label>
            <select
              onChange={(e) => setCaste(e.target.value)}
              value={caste}
              className="text-slate-200 outline-none p-2 h-10 w-36 rounded-xl bg-black"
            >
              <option value="default">default</option>
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
          </div>
          <button
            type="submit"
            className="bg-sky-500 p-3 w-full hover:bg-sky-600 active:bg-sky-400 rounded-xl font-semibold mt-3"
          >
            Submit
          </button>
        </form>

        <hr className="my-2 text-slate-300"></hr>

        <div className="flex flex-col items-center justify-center mt-5">
          {!loading ? (
            <>
              <button
                onClick={handlePrint}
                className="w-full mb-4 active:bg-rose-400 hover:bg-rose-600 font-semibold bg-rose-500 p-2 rounded-xl"
              >
                Get PDF
              </button>
              <DisplayTable data={colleges} ref={componentRef} />
            </>
          ) : (
            <div className="flex mt-5">
              <ThreeBounce size={30} color="orange" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collegedetails;
