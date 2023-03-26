import { jobs } from "../../../../data/jobs";

export default function handler(req, res) {
  const { searchTerm } = req.query;
  const searchedJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (searchedJobs.length) {
    res.status(200).json(searchedJobs);
  } else {
    res.status(404).json([]);
  }
}
