import React from "react";

function CollegeCard({ code, college_name, branch_name, rank }) {
  return (
    <div className="flex items-center text-sm bg-neutral-800 p-2 rounded-xl">
      <h1 className="p-3 bg-neutral-900 rounded-xl">{code}</h1>
      <div className="flex flex-col flex-1 mx-2">
        <h1 className="font-semibold my-gradient-text">{college_name}</h1>
        <hr className="text-slate-400 my-1"></hr>
        <h1 className="font-semibold">{branch_name}</h1>
      </div>
      <h1 className="p-3 bg-neutral-900 rounded-xl">{rank}</h1>
    </div>
  );
}

export default CollegeCard;
