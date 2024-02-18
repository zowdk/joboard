import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";
import { useState } from "react";
import { collection,query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config"


function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = asynch() => {
    //import db from firestore
    const q = query(collection(db, "jobs"));
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
3;
