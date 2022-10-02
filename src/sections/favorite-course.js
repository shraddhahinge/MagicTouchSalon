import { Box, Grid, Container, Flex } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import FavoriteCard from "components/favorite-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICE_MENU_DETAILS } from "data/service.data";

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" id="service" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="We can serve you better"
          heading="What do you want to do?"
        />
        {/* <Swiper {...FavoriteCarousel} sx={styles.carousel}> */}
        <Grid sx={styles.grid}>
          {SERVICE_MENU_DETAILS.map((service, index) => (
            // <SwiperSlide key={index}>
            <FavoriteCard
              key={service.id}
              title={service.title}
              image={service.image}
              list={service?.list}
              logo={service?.logo}
              navigate={service?.navigate}
            />
            // </SwiperSlide>
          ))}
        </Grid>
        {/* </Swiper> */}
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ["60px", null, null, "80px", "110px"],
    pb: [null, null, null, "30px", "50px", "100"],
    container: {
      maxWidth: 1440,
      "@media(max-width:1440px)": {
        maxWidth: 1240,
      },
      ".swiper-container": {
        pb: "30px",
        overflow: [null, null, null, null, null, "visible"],
      },
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "30px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 30,
      "@media(max-width: 991px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 575px)": {
        gridTemplateColumns: "1fr",
      },
    },
    col: {
      display: "flex",
    },
  },
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
};
