import { jsx, Container, Flex, Button, Box, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import { IoIosUnlock } from "react-icons/io";
import { NavLink, Link } from "components/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "components/logo";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
export default function Header({ className }) {
  return (
    <DrawerProvider>
      <Box sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo className={className} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              // <ScrollLink
              //   activeClass="active"
              //   className="navLink"
              //   sx={styles.nav.navLink}
              //   to={path}
              //   spy={true}
              //   smooth={true}
              //   offset={-100}
              //   duration={500}
              //   key={i}
              // >
              <Text sx={styles.nav.navLink}>
                <a href={`#${path}`}>{label}</a>
              </Text>
              // </ScrollLink>
            ))}
          </Flex>

          <Link
            path="/#subscribe"
            ml={2}
            label="Contact Us"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer />
        </Container>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    // border: "2px solid red",
    color: "#edab12",
    backgroundColor: "#FCF2E8",
    display: ["none", null, null, null, "inline-block"],
    "&:hover": {
      backgroundColor: "#edab12",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    // py: '25px',
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    "&.sticky": {
      backgroundColor: "#451676",
      color: "text",
      // py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    maxWidth: "1430px",
    // border: "2px solid white",
    "@media(max-width:1440px)": {
      maxWidth: "1230px",
    },
    "@media screen and (max-width: 991px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 991px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      // color: "#02073E",
      color: "white",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      a: {
        textDecoration: "none",
        color: "white",
        "&:hover, &.active": {
          color: "#edab12",
        },
      },
      ":last-child": {
        mr: "0",
      },
    },
  },
};
