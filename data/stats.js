import { BiEnvelope, BiFile } from "react-icons/bi";
import { FiBriefcase, FiUsers } from "react-icons/fi";

export const stats = [
  {
    id: 1,
    icon: <FiBriefcase />,
    number: 256,
    title: "Job Views",
    percentage: 15,
    increment: true,
    cardBg: "#C7F4C2",
  },
  {
    id: 2,
    icon: <FiUsers />,
    number: 1245,
    title: "Job Applications",
    percentage: 4,
    increment: true,
    cardBg: "#D7D0FF",
  },
  {
    id: 3,
    icon: <BiFile />,
    number: 23365,
    title: "Posted Jobs",
    percentage: 10,
    increment: false,
    cardBg: "#FDDD8C",
  },
  {
    id: 4,
    icon: <BiEnvelope />,
    number: 123,
    title: "Unread Messages",
    percentage: 10,
    increment: false,
    cardBg: "#FFBBD7",
  },
];
