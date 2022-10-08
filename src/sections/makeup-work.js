import { Box, Text, Flex, Image, Container } from "theme-ui";
import React from "react";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import ctaTwoImage from "assets/free-course.png";
import { Carousel } from "react-responsive-carousel";
import ImageOne from "images/makeup-1.jpeg";
import ImageTwo from "images/makeup-2.jpeg";
import ImageThree from "images/makeup-3.jpeg";
import ImageFour from "images/makeup-4.jpeg";
import ImageFive from "images/makeup-5.jpeg";
import ImageSix from "images/makeup-6.jpeg";
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
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        {/* <BlockTitle
          sx={styles.ctaTwo.blockTitle}
          tagline="Our Salon"
          heading="Place to glowup & feel calmness"
        /> */}
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline="Anuradha's Makeup Artist"
                heading={"Beauty begins the moment you decide to be yourself."}
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                Anuradha is been certified Makeup Artist. She has 5+ years of
                experience in varieties of makeup. She has done{" "}
                <span>
                  {" "}
                  Bridal Makeup(Maharastrain, Christian, Punjabi, Rajasthani),
                  HD Makeup, Eye Makeup, Editorial Makeup, Traditional Makeup,
                  Party Makeup, etc
                </span>
                . Her results are always best when it comes to makeup. She shows
                her makeup skills on{" "}
                <span>
                  {" "}
                  Runway Walk events, Wedding Seasons, Modal Shoots, and Festive
                  Events
                </span>
                . In her words{" "}
                <span>
                  {" "}
                  "To me, the essence of truly modern makeup is the freedom to
                  be yourself, to express who you are."
                </span>
              </Text>
              {/* <Link
                path="#"
                label="Explore details"
                variant="buttons.primary"
              /> */}
            </Box>
          </Box>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    background: "linear-gradient(180deg, #fff1e6 0%, #f0efeb 100%)",

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
      paddingRight: [null, null, null, null, "50px"],
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
      p: {
        color: "#edab12",
      },
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
