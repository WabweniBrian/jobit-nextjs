import { jobs } from "../../../data/jobs";

export default function handler(req, res) {
  res.status(200).json(jobs);
}
