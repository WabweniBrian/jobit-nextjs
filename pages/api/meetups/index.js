import { meetups } from "../../../data/meetups";

export default function handler(req, res) {
  res.status(200).json(meetups);
}
