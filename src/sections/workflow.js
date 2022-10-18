import { Heading, Box, Text, Container, Grid, Image } from "theme-ui";
import BlockTitle from "components/block-title";
import React from "react";

import ArrowOdd from "assets/arrow-odd.png";
import ArrowEven from "assets/arrow-even.png";
import ImageOne from "images/collage1.png";
import ImageTwo from "images/collage5.png";
import ImageThree from "images/collage6.png";
import ImageFour from "images/collage2.png";
import ImageFive from "images/collage4.png";
import ImageSix from "images/collage3.png";
import brush from "images/brush.png";
const workflowData = [
  {
    title: "Get your hair on",
    image: ImageOne,
    list: ["Fruit Cleanup", "Full hand wax", "Threading"],
    price: 599,
  },
  {
    title: "Beauty is our duty",
    image: ImageTwo,
    list: ["Anti-Tan Cleanup", "Oxy Bleach", "Threading"],
    price: 699,
  },
  {
    title: "Fancy Feet",
    image: ImageThree,
    list: ["Vita C-Facial", "Tan/Bleach", "Threading"],
    price: 999,
  },
  {
    title: "Give your eyes a lift with mascara",
    image: ImageFour,
    list: ["Vita C-Cleanup", "Hand Full Wax", "Threading"],
    price: 999,
  },
  // {
  //   title: "Indulge your nails",
  //   image: ImageFive,
  //   list: ["Basic nail color", "Printed nail art", "Artifical nail art"],
  //   price: 999,
  // },
  // {
  //   title:
  //     "Convert your web layout theming easily with sketch zeplin extension",
  //   image: ImageSix,
  //   list: ["Basic nail color", "Printed nail art", "Artifical nail art"],
  //   price: 999,
  // },
];

const WorkFlow = () => {
  return (
    <Box as="section" id="package" sx={styles.workflow}>
      <Container>
        <BlockTitle
          sx={styles.workflow.blockTitle}
          tagline="Best combo package"
          heading="We brought you daily best combo packages"
        />

        <Grid gap="50px 54px" columns={4} sx={styles.workflow.grid}>
          {workflowData.map((item, index) => (
            <Box sx={styles.workflow.card} key={index}>
              <Box sx={styles.workflow.image}>
                <Image src={item.image} alt={"heading"} className="img" />
              </Box>
              <Box sx={styles.workflow.content}>
                {/* <Heading as="h3">{item.title}</Heading> */}
                <Grid gap={2} columns={2} sx={styles.workflow.pointsContainer}>
                  {item?.list?.map((l) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Image src={brush} alt="points image" />
                      <Text as="p">{l}</Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
              <Text as="h2">{`${item.price}/-`}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkFlow;

const styles = {
  workflow: {
    background: "linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)",
    position: "relative",
    pt: "50px",
    pb: "100px",

    "@media screen and (max-width: 1366px)": {
      pb: "100px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "60px",
      paddingTop: "60px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
      p: {
        color: "#edab12",
      },
    },
    // grid: {
    //   pt: 20,
    //   "@media screen and (max-width: 1366px)": {
    //     pt: 0,
    //   },
    //   "@media screen and (max-width: 1200px)": {
    //     gridGap: "50px 30px",
    //   },
    //   "@media screen and (max-width: 992px)": {
    //     gridTemplateColumns: "repeat(2,1fr)",
    //     gridGap: "50px 50px",
    //   },
    //   "@media screen and (max-width: 480px)": {
    //     gridTemplateColumns: "repeat(1,1fr)",
    //     gridGap: "35px 0",
    //   },
    // },
    // card: {
    //   display: "flex",
    //   flexDirection: "column",
    //   position: "relative",
    //   border: "1px solid red",
    // "&::before": {
    //   position: "absolute",
    //   content: '""',
    //   top: 0,
    //   left: 75,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: "center center",
    //   width: 215,
    //   height: 60,
    //   "@media screen and (max-width: 1366px)": {
    //     left: 75,
    //   },
    //   "@media screen and (max-width:1200px)": {
    //     display: "none",
    //   },
    // },
    // "&:nth-of-type(2n-1)::before": {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // "&:nth-of-type(2n)::before": {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    // "&:last-child::before": {
    //   display: "none",
    // },
    // },
    grid: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      gridGap: "30px",
      gridTemplateColumns: [
        "1fr",
        "1fr",
        "1fr",
        "1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
      ],
    },
    card: {
      width: 350,
      height: 400,

      display: "flex",
      my: 10,
      mx: "auto",
      flexDirection: "column",

      // alignItems: "center",
      justifyContent: "space-between",

      backgroundColor: "#FFFFFF",

      borderRadius: 10,
      boxShadow: "0px 5px 10px rgb(69 88 157 / 20%)",
      transition: "all 0.4s ease",
      // cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        boxShadow: " 10px 10px 24px rgba(69, 88, 157, 0.10)",
        transform: "scale(1.1)",
      },
      h2: {
        // marginTop: "auto",
        fontWeight: "200",
        textAlign: "center",
        color: "black",
      },
    },
    // image: {
    //   borderBottom: "1px solid black",
    //   img: {
    //     // width: 250,
    //     // height: 250,
    //     // objectFit: "contain",
    //   },
    // },
    pointsContainer: {
      mb: "10px",
    },
    content: {
      // textAlign: "center",

      px: "10px",

      h3: {
        color: "#0F2137",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: 1,
        // py: 10,
      },
      p: {
        fontSize: "16px",
        lineHeight: 1,
        pl: 1,

        color: "#343D48",
      },
      img: {
        width: 15,
        height: 15,
      },
    },
    iconBox: {
      width: "70px",
      height: "70px",
      borderRadius: "40%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: "center",
      color: "black",
      boxShadow: "0px 14px 20px rgba(76, 119, 171, 0.1)",
      "@media screen and (max-width: 560px)": {
        width: "50px",
        height: "50px",
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      "@media screen and (max-width: 480px)": {
        mb: 20,
      },
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: "-5px",
      title: {
        fontSize: 22,
        color: "black",
        lineHeight: 1.55,
        fontWeight: 500,
        mb: "15px",
        "@media screen and (max-width: 1200px)": {
          fontSize: 20,
          lineHeight: 1.4,
        },
        "@media screen and (max-width: 480px)": {
          fontSize: "18px",
          lineHeight: 1.45,
          mb: "10px",
        },
      },

      subTitle: {
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "1.73",
        color: "#343D48",
        "@media screen and (max-width: 480px)": {
          fontSize: "15px",
          lineHeight: "1.85",
        },
      },
    },
  },
};
