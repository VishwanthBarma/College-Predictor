import { useRouter } from "next/router";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function collegedetails() {
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
        <h1 className="font-semibold text-lg">College Details</h1>
      </div>

      <div className="p-10">
        {/* Search Bar */}

        {/* Get All college lists */}

        {/* sort by */}
      </div>
    </div>
  );
}

export default collegedetails;
