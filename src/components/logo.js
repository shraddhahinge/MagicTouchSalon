import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import LogoDark from "images/logo1.jpg";

export default function Logo({ className }) {
  return (
    <Link path="/" sx={styles.link}>
      <Image
        sx={styles.image}
        className={className}
        src={LogoDark}
        alt="startup landing logo"
      />
    </Link>
  );
}
const styles = {
  link: {
    variant: "links.logo",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  image: {
    width: 250,
    // height: 100,
    objectFit: "contain",
    transition: "all 0.4s ease",

    "&.sticky": {
      width: 150,
    },
  },
};
