import { Link } from "react-router-dom";

export default function Jobs() {
  const jobs = [
    { id: 1, title: "Frontend Developer" },
    { id: 2, title: "Backend Developer" },
  ];

  return (
    <div>
      <h1>Available Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <Link to={`/jobs/${job.id}`}>{job.title}</Link>
        </div>
      ))}
    </div>
  );
}
