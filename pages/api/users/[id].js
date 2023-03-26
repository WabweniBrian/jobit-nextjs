import { users } from "../../../data/users";

export default function handler(req, res) {
  const { id } = req.query;
  const user = users.find((user) => Number(user.id) === Number(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}
