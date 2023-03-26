import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  // Use the pathname of the current route to determine if the link should be active
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={` ${isActive ? "active" : ""}`}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
