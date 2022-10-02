import { Box, Text, Flex, Image, Container } from "theme-ui";
import React from "react";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import ctaTwoImage from "assets/free-course.png";
import { Carousel } from "react-responsive-carousel";
import ImageOne from "images/user1.jpg";
import ImageTwo from "images/user2.jpg";
import ImageThree from "images/user3.jpg";
import ImageFour from "images/user4.jpg";
import ImageFive from "images/user5.jpg";
import ImageSix from "images/user6.jpg";
const ImageData = [
  {
    image: ImageOne,
  },
  {
    image: ImageTwo,
  },
  {
    image: ImageThree,
  },
  {
    image: ImageFour,
  },
  {
    image: ImageFive,
  },
  {
    image: ImageSix,
  },
];

const CtaTwo = () => {
  return (
    <Box as="section" id="about" sx={styles.ctaTwo}>
      <Container>
        {/* <BlockTitle
          sx={styles.ctaTwo.blockTitle}
          tagline="Our Salon"
          heading="Place to glowup & feel calmness"
        /> */}
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Carousel
              showArrows
              showStatus={false}
              autoPlay
              infiniteLoop
              stopOnHover
              swipeable
              dynamicHeight
              useKeyboardArrows
              emulateTouch
              // centerMode
              // centerSlidePercentage={80}
              // thumbWidth={100}
              showThumbs={false}
              selectedItem={0}
              interval={2000}
              transitionTime={500}
              swipeScrollTolerance={5}
            >
              {ImageData.map(({ image }) => (
                <Image src={image} sx={styles.ctaTwo.img} alt="cta two image" />
              ))}
            </Carousel>
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline="About Us"
                heading={"Hello, I am Anuradha, a MAKEUP & BEAUTY Artist"}
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                <span>Magic Touch</span> has been founded by{" "}
                <span>Anuradha Bangal</span>, who has worked in Beauty Industry
                for 12 years. During the early stage of her career, she has done
                a <span>Basic to Advance Beauty Course</span>, later she did a
                diploma in the{" "}
                <span>
                  Association of Beauty Therapy and Cosmetology (ABTC)
                </span>
                . Also, she is certified in{" "}
                <span>Makeup, Hair-Chemical & Nail Studio.</span>
                It is been 9 years since her Beauty Salon is been running
                successfully with <span>5000+ clients trusted</span>. Soon she
                is going to start Academy in her studio.
              </Text>
              {/* <Link
                path="#"
                label="Explore details"
                variant="buttons.primary"
              /> */}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
    paddingBottom: "100px",
    "@media(min-width: 1200px)": {
      paddingTop: "100px",
    },
    "@media(max-width:1024px)": {
      paddingBottom: 80,
    },
    row: {
      flexWrap: "wrap",
    },
    col: {
      flex: "0 0 50%",
      "@media(max-width:1024px)": {
        flex: "0 0 100%",
      },
    },
    img: {
      maxWidth: "100%",
      // height: 300,
      objectFit: "cover",
      // position: "relative",
      // right: "220px",
      // bottom: "45px",
      "@media(max-width:1024px)": {
        maxWidth: "100%",
        right: "auto",
        bottom: "auto",
      },
    },
    content: {
      paddingLeft: "114px",
      "@media(max-width:1024px)": {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      },
      "@media(max-width:575px)": {
        maxWidth: "91%",
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ["24px", null, null, "36px", null, "48px"],
        lineHeight: 1.15,
        letterSpacing: ["-0.5px", null, null, "-1.5px"],
        whiteSpace: ["normal", null, null, null, null, "pre-line"],
      },
    },
    text: {
      fontSize: [15, null, null, 18],
      lineHeight: 2.33,
      color: "black",
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ["normal", null, null, null, "pre-line"],
      span: {
        color: "#edab12",
        fontWeight: "bold",
      },
    },
  },
};
