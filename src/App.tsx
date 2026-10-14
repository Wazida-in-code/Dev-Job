import { Suspense } from "react";
import "./App.css";
import MainComponents from "./components/MainComponents";
import type { JobPromiseType } from "./JobsTypes";

const jobsPromise : Promise<JobPromiseType[]> = fetch("/jobs.json").then((res) => res.json());

function App() {
  return (
    <div>
      <Suspense fallback={"Loading"}>
        <MainComponents jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
}

export default App;
