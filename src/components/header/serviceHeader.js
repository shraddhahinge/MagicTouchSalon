import Logo from "components/logo";
import { Box, Container } from "theme-ui";
import React from "react";
import { Link } from "components/link";

function Header() {
  return (
    <Box sx={styles.header}>
      <Container sx={styles.container}>
        <Logo className={"sticky"} />
        <Link
          path="/"
          ml={2}
          label="Contact Us"
          sx={styles.headerBtn}
          variant="buttons.primary"
        />
      </Container>
    </Box>
  );
}

export default Header;

const styles = {
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#451676",
    // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#FCF2E8",
  },
};
