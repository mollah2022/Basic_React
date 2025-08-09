import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  return <h1>Details for Job ID: {id}</h1>;
}
