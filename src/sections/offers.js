import { Heading, Box, Container, Image, Flex } from "theme-ui";
import React from "react";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import offer1 from "images/offer1.jpeg";
import offer2 from "images/offer2.jpeg";

const Offers = () => {
  const OFFER_DATA = [
    {
      image: offer1,
    },
    {
      image: offer2,
    },
  ];
  return (
    <Box as="section" sx={styles.ctaBox}>
      <Container>
        <BlockTitle
          sx={styles.blockTitle}
          tagline="Pamper yourself"
          heading={"Best Exclusive Offers"}
        />
        <Flex sx={styles.imageContainer}>
          {OFFER_DATA.map(({ image }) => (
            <Image src={image} style={{ height: 300, width: 300 }} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Offers;

const styles = {
  ctaBox: {
    textAlign: "center",
    paddingTop: 70,
    // paddingBottom: [80, null, null, null, 150],

    button: {
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  },
  blockTitle: {
    marginBottom: [20, null, null, 30],
    p: {
      // color: "#edab12",
      color: "#edab12",
    },
    h3: {
      fontSize: ["24px", null, null, "36px", null, "36px"],
      lineHeight: 1.15,
      letterSpacing: ["-0.5px", null, null, "-1.5px"],
      whiteSpace: ["normal", null, null, null, null, "pre-line"],
    },
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    img: {
      margin: 10,
    },
  },
};
