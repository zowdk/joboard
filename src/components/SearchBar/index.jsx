import React from "react";

function SearchBar() {
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      {/* --- job role --- */}
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name=""
        id=""
      >
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backent Developer">Backend Developer</option>
        <option value="FullStack Developer">Fullstack Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      {/* --- job type --- */}
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name=""
        id=""
      >
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Remote">Remote</option>
        <option value="Remote/ Hybrid">Remote/ Hybrid</option>
        <option value="Internship">Internship</option>
        <option value="Student">Student</option>
      </select>
      {/* --- job location --- */}
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name=""
        id=""
      >
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="East Jutland">East Jutland</option>
        <option value="South Jutland">South Jutland</option>
        <option value="North Jutland">North Jutland</option>
        <option value="Fyn">Fyn</option>
        <option value="West Jutland">West Jutland</option>
        <option value="Zetland">Zeatland</option>
        <option value="Capital Region">Capital Region</option>
        <option value="Bornholm">Bornholm</option>
      </select>
      {/* --- Experience level--- */}
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name=""
        id=""
      >
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Entry Level">Entry Level</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      {/* --- Search btn--- */}

      <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
