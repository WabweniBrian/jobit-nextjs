import { jobs } from "../../../data/jobs";

export default function handler(req, res) {
  const { id } = req.query;
  const job = jobs.find((job) => Number(job.id) === Number(id));
  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
}
