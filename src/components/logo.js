/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoSvg from "components/icons/logo";
import LogoImage from "assets/images/logo.JPG";
import Image from "./image";
export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg /> */}

      <Image src={LogoImage} className={isSticky ? "stickyLogo" : "logoImg"} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    maxWidth: [null, null, null, 185, null, "none"],
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
    ".logoImg": {
      width: [150, null, null, null, 250],
      // height: 100,
      objectFit: "contain",
    },
    ".stickyLogo": {
      transition: "all 0.3s ease-in-out 0s",
      width: 100,
      // height: 100,
      objectFit: "contain",
    },
  },
};
