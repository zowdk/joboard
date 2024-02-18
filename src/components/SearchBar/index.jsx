import React, { useState } from "react";

function SearchBar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    await props.fetchJobsCustom(jobCriteria);
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      {/* --- job role --- */}
      <select
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name="title"
        value={jobCriteria.title}
        id=""
      >
        <option value="" disabled hidden>
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
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name="type"
        value={jobCriteria.type}
        id=""
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>
      {/* --- job location --- */}
      <select
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name="location"
        value={jobCriteria.location}
        id=""
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="On-site">On-site</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Remote">Remote</option>
      </select>
      {/* --- Experience level--- */}
      <select
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        name="experience"
        value={jobCriteria.experience}
        id=""
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Entry Level">Entry Level</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      {/* --- Search btn--- */}

      <button
        onClick={search}
        className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
