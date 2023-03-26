import { meetups } from "../../../data/meetups";

export default function handler(req, res) {
  const { id } = req.query;
  const meetup = meetups.find((meetup) => Number(meetup.id) === Number(id));
  if (meetup) {
    res.status(200).json(meetup);
  } else {
    res.status(404).json({ message: "Meetup not found" });
  }
}
