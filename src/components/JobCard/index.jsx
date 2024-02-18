import React from "react";
import dayjs from "dayjs";

function JobCard() {
  const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2024-02-04", "day");
  return (
    <div>
      <div>
        <div>
          <h1>Job Name - Company</h1>
          <p>Job type | Experience | Location</p>
          <div>
            {skills.map((skill) => {
              <p>{skill}</p>;
            })}
          </div>
        </div>
        <div>
          <p>Posted {diffInDays} ago</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
