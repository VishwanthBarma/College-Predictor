import { useRouter } from "next/router";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import StudentForm from "../components/Predictor/StudentForm";

function Collegepredictor() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <button
          onClick={router.back}
          className="absolute left-5 active:opacity-50"
        >
          <BsFillArrowLeftCircleFill className="h-8 w-8" />
        </button>
        <h1 className="font-semibold text-lg">College Predictor</h1>
      </div>
      <div className="flex flex-col items-center m-3 justify-center">
        <StudentForm />
      </div>
    </div>
  );
}

export default Collegepredictor;
