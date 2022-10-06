import { Box, Flex, Text, Grid, Heading, Container, Image } from "theme-ui";
import React from "react";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import ImageOne from "images/facility-1.png";
import ImageTwo from "images/facility-2.png";

const CtaThree = () => {
  return (
    <Box as="section" sx={styles.ctaThree}>
      <Container>
        <Flex sx={styles.ctaThree.row}>
          <Box sx={styles.ctaThree.colTwo}>
            <Box className="my-auto">
              <Box sx={styles.ctaThree.content}>
                <BlockTitle
                  sx={styles.ctaThree.blockTitle}
                  tagline="maintenance"
                  heading={"Customer comfort is our first priority"}
                />
                <Text as="p">
                  {
                    "Maintaining high standards of hygiene in our salon is vital to prevent the risks of cross contamination. It is our team responsibility that all salon staff understand the importance of personal hygiene when working in a hair or beauty salon. "
                  }
                </Text>
                <Link
                  path="#"
                  sx={styles.headerBtn}
                  label="Book an appointment"
                  variant="buttons.primary"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.ctaThree.colOne}>
            <Grid sx={styles.ctaThree.grid}>
              <Box sx={styles.ctaThree.box}>
                {/* <Heading as="h3" sx={styles.ctaThree.color1}>
                  80K+
                </Heading> */}
                <Image
                  sx={{ width: 80, height: 80 }}
                  src={ImageOne}
                  alt="content image"
                />

                <Text as="p">{"Sanitized"}</Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Image
                  sx={{ width: 80, height: 80 }}
                  src={ImageTwo}
                  alt="content image"
                />

                <Text as="p">{"Hygenic"}</Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaThree;

const styles = {
  ctaThree: {
    paddingTop: [0, null, null, null, 50, 120],
    paddingBottom: [120, null, null, null, 100, 220],
    row: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: ["column", null, null, null, "row-reverse"],
    },
    colOne: {
      flex: ["0 0 100%", null, null, null, "0 0 55%"],
      paddingRight: ["0", null, null, null, null, "34px"],
    },
    colTwo: {
      flex: ["0 0 100%", null, null, null, "0 0 45%"],
      display: "flex",
      pl: ["0", null, null, null, "40px", "0"],
      ".my-auto": {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
      },
      "@media(max-width:991px)": {
        flex: "0 0 100%",
        marginTop: "0px",
        marginBottom: "45px",
        textAlign: "center",
      },
    },
    grid: {
      display: "grid",
      gridGap: "45px",
      gridTemplateColumns: "1fr 1fr",
      "@media(max-width:1199px)": {
        gridGap: "30px",
      },
      "@media(max-width:425px)": {
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
      },
    },
    blockTitle: {
      h3: {
        fontSize: ["24px", null, null, "30px", "36px", null, "48px"],
        lineHeight: ["1.44", null, null, null, null, null, "1.15"],
        lineHeight: 1.44,
        maxWidth: ["275px", "450px", null, null, "100%"],
        marginLeft: ["auto", null, null, null, "0"],
        marginRight: ["auto", null, null, null, "0"],
        whiteSpace: ["normal", null, null, null, "pre-line"],
      },
      p: {
        color: "#edab12",
      },
    },
    content: {
      "@media(min-width:1025px)": {
        paddingLeft: "41px",
      },
      "> p": {
        whiteSpace: ["normal", null, null, null, "pre-line"],
        fontSize: ["15px", null, null, "16px", null, "18px"],
        lineHeight: ["2", null, null, null, null, "2.33"],
        color: "#02073E",
        marginBottom: "30px",
        marginTop: "25px",
        "@media(max-width:425px)": {
          whiteSpace: "normal",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginTop: "20px",
          marginBottom: "20px",
        },
      },
      "@media(max-width:991px)": {
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "20px",
      },
    },
    box: {
      boxShadow: "0px 25px 100px rgba(69, 88, 157, 0.08)",
      borderRadius: "10px",
      textAlign: "center",
      position: "relative",
      paddingTop: "95.5px",
      paddingBottom: "95.5px",
      "&:nth-of-type(1)": {
        top: "70px",
      },
      "&:nth-of-type(3)": {
        top: "70px",
      },
      "@media(max-width:1199px)": {
        paddingTop: "35.5px",
        paddingBottom: "35.5px",
        "&:nth-of-type(1)": {
          top: "40px",
        },
        "&:nth-of-type(3)": {
          top: "40px",
        },
      },
      "@media(max-width:425px)": {
        "&:nth-of-type(1)": {
          top: "0px",
        },
        "&:nth-of-type(3)": {
          top: "0px",
        },
      },
      h3: {
        margin: 0,
        fontSize: "36px",
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: "-1.5px",
        "@media(min-width:1281px)": {
          fontSize: "55px",
        },
        "@media(min-width:1441px)": {
          fontSize: "72px",
        },
      },
      "> p": {
        margin: 0,
        marginTop: "7px",
        fontSize: "18px",
        color: "#0F2137",
        lineHeight: 1.39,
        letterSpacing: "-0.5px",
        opacity: 0.7,
        whiteSpace: "pre-line",
        "@media(max-width:575px)": {
          fontSize: "15px",
          lineHeight: 1.65,
        },
      },
    },
    color1: {
      color: "#EF9E48",
    },
    color2: {
      color: "#FF753A",
    },
    color3: {
      color: "#FA578E",
    },
    color4: {
      color: "#E682FF",
    },
  },
  headerBtn: {
    color: "#edab12",
    "&:hover": {
      backgroundColor: "#edab12",
    },
  },
};
