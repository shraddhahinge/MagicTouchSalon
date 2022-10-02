import { Box, Container, Image } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import PopularCard from "components/popular-card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ImageOne from "images/studio1.jpg";
import ImageTwo from "images/studio2.jpg";
import ImageThree from "images/studio3.jpg";
import ImageFour from "images/studio4.jpg";
import ImageFive from "images/studio5.jpg";
import ImageSix from "images/studio6.jpg";

import { boolean } from "boolean";

const popularCourseData = [
  {
    title:
      "Professional graphic design tutorial full course with exercise file",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    image: ImageOne,
    expanded: true,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 4,
    expanded: false,
    image: ImageTwo,

    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    image: ImageThree,

    expanded: false,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "Adobe illustrator vector art design mockup",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: false,
    image: ImageFour,

    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    image: ImageFive,
  },
  {
    image: ImageSix,
  },
];
const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";
const mainGroupId = "Main";
const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: boolean("showStatus", true, tooglesGroupId),
  showIndicators: boolean("showIndicators", true, tooglesGroupId),
  infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
  showThumbs: boolean("showThumbs", true, tooglesGroupId),
  useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
  autoPlay: boolean("autoPlay", true, tooglesGroupId),
  stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
  swipeable: boolean("swipeable", true, tooglesGroupId),
  dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
  emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
  autoFocus: boolean("autoFocus", false, tooglesGroupId),
  thumbWidth: 100,
  selectedItem: 0,
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
});
const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Our Salon"
          heading="Take a load off, Sit back & relax"
        />

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
          thumbWidth={100}
          selectedItem={0}
          interval={2000}
          transitionTime={500}
          swipeScrollTolerance={5}
          className="carouselContainer"
        >
          {popularCourseData.map((course, index) => (
            <Box sx={styles.image}>
              <Image src={course?.image} alt="image" />
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    background: "linear-gradient(180deg, #fcbf49 0%, #eae2b7 100%)",

    py: ["100px"],
    "@media(max-width: 575px)": {
      paddingBottom: "60px",
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
  },
  image: {
    display: "flex",
    alignItems: "center",
    // border: "3px solid red",
    height: 600,
    // borderRadius: 10,
    img: {
      // boxShadow: "10px 25px 10px rgb(69 88 157 / 20%)",
      width: "100%",
      height: 600,
      mx: "auto",
      objectFit: "contain",
      // border: "3px solid blue",
    },
  },
};
