import React from "react";
import dayjs from "dayjs";

function JobCard() {
  const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2024-02-04", "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">Job Name - Company</h1>
          <p>Job type | Experience | Location</p>
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p
                key={skill}
                className="text-grey-500 py-1 px-2 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays} days ago</p>
          <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
