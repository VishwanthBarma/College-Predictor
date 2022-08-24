import { ThreeBounce } from "better-react-spinkit";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Sample from "../components/Sample";
import { DisplayTable } from "../components/Table/DisplayTable";
import data from "../public/collegedata.json";

function collegedetails() {
  const router = useRouter();
  const [colleges, setColleges] = useState(data);
  const [courses, setCourses] = useState([]);
  const [casts, setCasts] = useState([]);
  const [selectCasts, setSelectCasts] = useState(false);
  const [selectCourses, setSelectCourses] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(false);
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCourseSelect = (e) => {
    e.target.value == "1" ? setSelectCourses(true) : setSelectCourses(false);
  };

  const handleCastSelect = (e) => {
    e.target.value == "1" ? setSelectCasts(true) : setSelectCasts(false);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleCasts = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCasts({ options: value });
  };

  const hanldeCourses = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCourses({ options: value });
  };

  // Form Handle Submit - Function

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (courses.length == 0 && casts.length == 0 && sortBy == "default") {
      setColleges(data);
    }

    if (sortBy == "asc") {
      const sorted = [...colleges].sort((a, b) => a.oc_boys - b.oc_boys);
      setColleges(sorted);
    } else if (sortBy == "des") {
      const sorted = [...colleges].sort((a, b) => b.oc_boys - a.oc_boys);
      setColleges(sorted);
    }

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
          <div className="flex space-x-4 p-2">
            <select
              onChange={(e) => handleCourseSelect(e)}
              className="bg-black rounded-xl flex-1 h-10 w-36 outline-none"
            >
              <option value="0" selected>
                all courses
              </option>
              <option value="1">select course</option>
            </select>

            {selectCourses && (
              <select
                multiple={true}
                onChange={(e) => hanldeCourses(e)}
                className="text-slate-200 outline-none p-2 rounded-xl bg-black h-10 w-36"
              >
                <option value="CSE">CSE</option>
                <option value="CSM">CSM</option>
                <option value="CIC">CIC</option>
                <option value="CSD">CSD</option>
                <option value="CSO">CSO</option>
                <option value="AIM">AIM</option>
                <option value="INF">INF</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MEC">MEC</option>
                <option value="CIV">CIV</option>
                <option value="BIO">BIO</option>
                <option value="MIN">MIN</option>
                <option value="PHM">PHM</option>
              </select>
            )}
          </div>
          <div className="flex space-x-4 p-2">
            <select
              onChange={(e) => handleCastSelect(e)}
              className="bg-black rounded-xl flex-1 h-10 w-36 outline-none"
            >
              <option value="0" selected>
                all casts
              </option>
              <option value="1">select casts</option>
            </select>

            {selectCasts && (
              <select
                onChange={(e) => handleCasts(e)}
                multiple={true}
                className="text-slate-200 outline-none p-2 rounded-xl bg-black h-10 w-36"
              >
                <option value="oc">OC</option>
                <option value="bca">BC_A</option>
                <option value="bcb">BC_B</option>
                <option value="bcc">BC_C</option>
                <option value="bcd">BC_D</option>
                <option value="bce">BC_E</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="ews">EWS</option>
              </select>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <label className="font-semibold">Sort Rank : </label>
            <select
              className="text-slate-200 outline-none p-2 h-10 w-36 rounded-xl bg-black"
              onChange={(e) => handleSort(e)}
            >
              <option value="default">default</option>
              <option value="asc">asc</option>
              <option value="des">des</option>
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

export default collegedetails;
