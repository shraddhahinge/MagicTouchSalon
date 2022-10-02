import {
  Box,
  Flex,
  Container,
  Image,
  Heading,
  Text,
  Input,
  Button,
} from "theme-ui";
import { keyframes } from "@emotion/core";

import React from "react";

import VideoBtn from "components/video-btn";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import BannerBG from "assets/banner-bg-1-1.png";
import BannerTextLine from "assets/banner-text-line.png";
import BannerPattern from "assets/banner-pattern.png";
import BannerImage1 from "images/banner1.jpg";
import BannerImage2 from "images/banner2.jpg";
import BannerImage3 from "images/banner3.jpg";

import PartnerImage from "assets/brands.svg";
import bannerIcon1 from "images/banner-icon-1-1.png";
import bannerIcon2 from "images/banner-icon-1-2.png";
import bannerIcon3 from "images/banner-icon-1-3.png";
import bannerIcon4 from "images/banner-icon-1-4.png";
import bannerIcon5 from "images/banner-icon-1-5.png";
import bannerIcon6 from "images/banner-icon-1-6.png";
import icon1 from "images/banner-small-icon-1.png";
import icon2 from "images/banner-small-icon-2.png";
import icon3 from "images/banner-small-icon-3.png";
import icon4 from "images/banner-small-icon-4.png";
import icon5 from "images/banner-small-icon-5.png";
import { Carousel } from "react-responsive-carousel";
import { Link } from "components/link";

const SMALL_LOGO = [
  {
    image: icon1,
  },
  {
    image: icon2,
  },
  {
    image: icon3,
  },
  {
    image: icon4,
  },
  {
    image: icon5,
  },
  // {
  //   image: ImageSix,
  // },
];
const backgroundImagesAnimation = () => {
  return (
    <>
      <Image
        sx={styles.bannerIcon1}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon1}
      />
      <Image
        sx={styles.bannerIcon2}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon2}
      />
      <Image
        sx={styles.bannerIcon3}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon3}
      />
      <Image
        sx={styles.bannerIcon4}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon4}
      />
      <Image
        sx={styles.bannerIcon5}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon5}
      />

      <Image
        sx={styles.bannerIcon6}
        className="bannerIcon"
        alt="banner icon"
        src={bannerIcon6}
      />
    </>
  );
};
const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        {/* {backgroundImagesAnimation()} */}

        <Flex sx={styles.banner.row}>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>
              {/* <Box sx={styles.banner.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                Trused by over 4,332 clients
              </Box> */}
              <Heading as="h3">
                Get Glowing The World Needs Your <span>MAGIC</span>
              </Heading>
              <Flex sx={styles.iconContainer}>
                {SMALL_LOGO.map(({ image }) => (
                  <Image src={image} sx={styles.iconContainer.smallIcon} />
                ))}
              </Flex>
              <Box sx={styles.banner.button}>
                {/* <Button variant="primary" sx={styles.button}>
                  Book an appointment
                </Button> */}
                <Link
                  path="https://wa.me/message/65QA2BVUCYMAF1"
                  ml={2}
                  target="_blank"
                  label="Book an appointment"
                  sx={styles.headerBtn}
                  variant="buttons.primary"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.imageBox}>
              <Box sx={styles.banner.imageInner}>
                <Image src={BannerImage2} alt="banner image" />
                {/* <VideoBtn path="L9jU-IIN0ng" /> */}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;
const styles = {
  banner: {
    overflowX: "hidden",
    // paddingTop: ["100px", "150px"],
    // height: "100vh",
    // paddingBottom: ["0px", null, "80px"],
    // backgroundImage: [
    //   // "linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)",
    //   // "linear-gradient( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% )",
    //   "linear-gradient( -180deg,   #451676 50%, #4A00E0 50%)",
    //   // `url(${BannerBG})`,
    // ],
    //     background: #8E2DE2;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: "rgb(0,119,182)",
    background:
      "linear-gradient(0deg, rgba(0,119,182,1) 0%, rgba(69,22,118,1) 71%)",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    container: {
      maxWidth: ["100%", null, null, null, null, "1240px", "1440px"],
    },
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, "block", null, "block"],
    },
    row: {
      flexWrap: "wrap",
      display: "flex",
      flexDirection: ["column-reverse", null, null, null, "row"],
      alignItems: "center",
      marginLeft: "-15px",
      marginRight: "-15px",
    },
    col: {
      pl: "15px",
      pr: "15px",
      flex: ["1 1 100%", null, "0 0 50%"],
    },
    content: {
      paddingRight: [0, 0, 0, 0, "40px", 0, 0],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      // height: "100vh",
      h3: {
        lineHeight: 1.18,
        color: "#ffffff",
        fontWeight: "bold",
        position: "relative",
        width: "100%",
        fontSize: ["28px", "35px", null, "45px", null, "50px", "85px"],
        maxWidth: ["500px", null, null, null, null, null, "100%"],
        span: {
          color: "primary",
        },
        "&:before": {
          content: '""',
          width: ["290px", null, null, null, null, "260px", "381px"],
          height: "15px",
          backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          bottom: "-15px",
          // right: ["15px", null, null, null, null, "100px", "100px"],
          display: ["none", null, null, null, null, "block"],
        },
      },
      p: {
        lineHeight: 2.33,
        color: "#02073E",
        marginTop: ["10px", null, null, "35px"],
        fontSize: ["15px", "18px"],
        pr: ["15px", 0],
        br: {
          display: ["none", null, null, null, null, "block"],
        },
      },
    },
    stars: {
      marginTop: ["0", null, null, null, null, "40px"],
      marginBottom: "20px",
      display: "flex",
      color: "#ffffff",
      fontSize: ["15px"],
      alignItems: "center",
      lineHeight: 1,
      svg: {
        color: "primary",
        "+svg": {
          marginLeft: ["3px", null, "5px"],
        },
        "&:last-of-type": {
          marginRight: "10px",
          //   color: "rgba(2, 7, 62, 0.2)",
        },
      },
    },
    button: {
      position: "relative",
      width: "80%",
      maxWidth: ["480px", null, null, "520px"],
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      marginTop: ["15px", "40px"],
      height: ["45px", null, null, "55px", null, null, "70px"],
      marginBottom: ["20px", "30px", null, null, "40px"],
    },
    partner: {
      display: "flex",
      flexDirection: ["column", null, null, null, null, "row"],
      alignItems: ["flex-start", null, null, null, null, "center"],
      color: "rgba(2, 7, 62,.6)",
      fontSize: ["15px", null, "16px"],
      span: {
        display: ["block", null, "inline-block"],
      },
      img: {
        marginLeft: ["0", "0px", null, null, null, "20px"],
        mt: ["20px", null, null, null, null, "0"],
      },
    },
    imageBox: {
      display: "flex",
      justifyContent: ["flex-start", null, null, "flex-end"],
      marginTop: ["60px", null, null, "0"],
    },
    imageInner: {
      position: "relative",
      pb: 10,
      "&:before": {
        content: '""',
        width: "100%",
        height: "90%",
        border: "2px solid #FFDC6B",
        borderRadius: "5px",
        top: "30px",
        left: "30px",
        position: "absolute",
        zIndex: 2,
        display: ["none", null, "block"],
        "@media(max-width: 991px)": {
          left: "10px",
          top: "15px",
          height: "calc(100% - 15px)",
        },
      },
      "&:after": {
        content: '""',
        width: "302px",
        height: "347px",
        backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: "center",
        top: "-30px",
        right: "-73px",
        position: "absolute",
        zIndex: 1,
        "@media(max-width: 991px)": {
          right: "-10px",
        },
      },
      img: {
        position: "relative",
        zIndex: 9,
        maxWidth: "100%",
        height: "90%",
      },

      ".videoBtn": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 10,
      },
    },
  },
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    // border: "2px solid red",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#FCF2E8",
    // display: ["none", null, null, null, "inline-block"],
  },
  bannerIcon1: {
    top: "20%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "20%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "10%",
    right: "5%",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "10%",
    left: "5%",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "25%",
    left: "50%",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon6: {
    bottom: "25%",
    right: "50%",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  iconContainer: {
    my: "50px",
    smallIcon: {
      mx: "10px",
      width: "80px",
      height: "80px",
      objectFit: "contain",
    },
  },
};
