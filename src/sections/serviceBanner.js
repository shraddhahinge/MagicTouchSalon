import React, { useEffect, useState } from "react";
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
import BannerImage from "images/cuts.jpg";
import { Link } from "components/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function ServiceBanner() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [tabItems, setTabItems] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    let serviceList = localStorage.getItem("selectedService");
    let parseList = JSON.parse(serviceList);
    let tabData = parseList.find((x) => x.id == activeTab);
    setTabItems(tabData?.items);
    setImage(tabData?.image);
    setData(parseList);
  }, []);

  const handleOnTabClick = (id) => {
    setActiveTab(id);
    let tabData = data.find((x) => x.id == id);
    console.log(tabData?.items);
    setImage(tabData?.image);

    setTabItems(tabData?.items);
  };

  return (
    <Box sx={styles.banner}>
      <Container sx={styles.container}>
        <Box sx={styles.layout}>
          <Box sx={styles.layout.titleContainer}>
            <Flex sx={styles.layout.flexTitles}>
              {data?.map(({ id, title }) => (
                <Text
                  onClick={() => handleOnTabClick(id)}
                  as="h3"
                  key={id}
                  className={id == activeTab ? "active" : ""}
                >
                  {title}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box sx={styles.layout.content}>
            <Flex sx={styles.layout.contentRow}>
              <Box sx={styles.col}>
                {/* <Box> */}
                {tabItems?.map(({ name, price, id }) => (
                  <Box sx={styles.priceContainer} key={id}>
                    <Text as="p">{name}</Text>
                    <Text as="p">{price}/-</Text>
                  </Box>
                ))}
                {/* </Box> */}
                <Box sx={styles.layout.button}>
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

              <Box sx={styles.col}>
                <Box sx={styles.col.imageContainer}>
                  <Image src={image || BannerImage} alt="image" />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
const styles = {
  banner: {
    // border: "1px solid red",
    overflowX: "hidden",
    paddingTop: "100px",
    // height: "100vh",
    // background: "rgb(0,119,182)",
    // background:
    //   "linear-gradient(0deg, rgba(0,119,182,1) 0%, rgba(69,22,118,1) 71%)",
    // backgroundPosition: "left top",
    // backgroundRepeat: "no-repeat",
  },
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    // border: "2px solid red",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#FCF2E8",
    display: "inline-block",
  },
  container: {
    // border: "1px solid black",
  },
  layout: {
    // marginY: "20px",
    titleContainer: {
      borderBottom: "2px solid #343D48",
    },
    flexTitles: {
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "100%",
      overflowX: "scroll",
      h3: {
        fontSize: [20, 20, 20, 25, 25, 25],
        // width: "300px",
        // overflow: "hidden",
        cursor: "pointer",
        color: "black",
        padding: 10,
        "&:hover, &.active ": {
          color: "primary",

          borderBottom: "2px solid rgb(239, 158, 72)",
          borderBottomColor: "rgb(239, 158, 72)",
        },
      },
    },
    content: {
      marginTop: "20px",
    },
    contentRow: {
      flexWrap: "wrap",
    },
    button: {
      position: "relative",
      width: "100%",
      maxWidth: ["480px", null, null, "520px"],
      // boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      // marginTop: ["15px", "40px"],
      height: ["45px", null, null, "55px", null, null, "70px"],
      marginBottom: ["20px", "30px", null, null, "40px"],
    },
  },

  col: {
    flex: ["1 1 100%", null, "0 0 50%"],
    // border: "1px solid red",

    p: {
      fontSize: 20,
      color: "#343D48",
    },
    // justifyContent: "space-between",
    imageContainer: {
      display: "flex",
      justifyContent: "center",

      img: {
        width: "80%",
        height: 500,
        objectFit: "cover",
        // textAlign: "center",
        // mx: "auto",
        // border: "1px solid blue",
      },
    },
  },
  priceContainer: {
    // width: "50%",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
};
export default ServiceBanner;
