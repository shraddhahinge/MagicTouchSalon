import ImageOne from "images/service-1.jpg";
import ImageTwo from "images/service-2.jpg";
import ImageThree from "images/service-3.jpg";
import ImageFour from "images/service-4.jpg";
import ImageFive from "images/service-5.jpg";
import ImageSix from "images/service-5.jpg";
import LogoOne from "images/service-logo-1.png";
import LogoTwo from "images/service-logo-2.png";
import LogoThree from "images/service-logo-3.png";
import LogoFour from "images/service-logo-4.png";
import LogoFive from "images/service-logo-5.png";
import CutImage from "images/cuts.jpg";
import StylingImage from "images/styling.jpg";
import ColoringImage from "images/hairColor.jpeg";
import HairTreatImage from "images/hairTreat.jpg";
import FacialImage from "images/facial.jpeg";
import BleachImage from "images/Bleach.jpeg";
import ThreadingImage from "images/threading.jpeg";
import ChemicalPeel from "images/chemicalPeel.jpeg";
import DTanImage from "images/dTan.jpeg";
import HydraImage from "images/hydraFacial.jpeg";
import ManicureImage from "images/manicure.jpeg";
import PedicureImage from "images/pedicure.jpg";
import WaxingImage from "images/waxing.jpeg";
import BodyPolishing from "images/bodyPolishing.jpeg";
export const SERVICE_MENU_DETAILS = [
  {
    id: 101,
    title: "Get your hair on",
    navigate: true,
    image: ImageOne,
    logo: LogoOne,

    list: [
      {
        id: 1,
        title: "Cuts",
        image: CutImage,
        items: [
          {
            name: "Hair Cut",
            price: 250,
            id: 11,
          },
          {
            name: "Hair Cut",
            price: 250,
            id: 12,
          },
          {
            name: "Hair Cut",
            price: 250,
            id: 13,
          },
        ],
      },
      {
        id: 2,
        title: "Styling",
        image: StylingImage,
        items: [
          {
            name: "Hair Blow Dry",
            price: 250,
            id: 21,
          },
          {
            name: "Hair Ironing",
            price: 500,
            id: 22,
          },
          {
            name: "Hair Tongs",
            price: 600,
            id: 23,
          },
          {
            name: "Hair Wash + Conditioner",
            price: 200,
            id: 24,
          },
        ],
      },
      {
        id: 3,
        title: "Coloring",
        image: ColoringImage,
        items: [
          {
            name: "Highlights per strip",
            price: 250,
            id: 31,
          },
          {
            name: "Global per strip",
            price: 250,
            id: 32,
          },
        ],
      },
      {
        id: 4,
        title: "Treatment",
        image: HairTreatImage,
        items: [
          {
            name: "Hair Keratin",
            price: 250,
            id: 41,
          },
          {
            name: "Hair Smootening",
            price: 250,
            id: 42,
          },
          {
            name: "Hair Protein",
            price: 250,
            id: 43,
          },
          {
            name: "Hair Botox",
            price: 250,
            id: 44,
          },
          {
            name: "Hair Aqua Gold",
            price: 250,
            id: 45,
          },
          {
            name: "Hair Anti-Dandruff Treatment(Per Sitting)",
            price: 500,
            id: 46,
          },
          {
            name: "Hair Spa Loreal",
            price: 1000,
            id: 47,
          },
        ],
      },
    ],
  },
  {
    id: 102,
    title: "Beauty is our duty",
    navigate: true,
    image: ImageTwo,
    logo: LogoTwo,
    list: [
      {
        id: 1,
        title: "Facial",
        image: FacialImage,
        items: [
          {
            name: "Herbal Facial",
            price: 800,
            id: 11,
          },
          {
            name: "Fruit Facial",
            price: 850,
            id: 12,
          },
          {
            name: "Chocolate Facial",
            price: 850,
            id: 13,
          },
          {
            name: "VLCC Whitening Facial",
            price: 850,
            id: 14,
          },
          {
            name: "VLCC Instant Glow Facial",
            price: 850,
            id: 15,
          },
          {
            name: "VLCC Nourishment Facial",
            price: 850,
            id: 16,
          },
          {
            name: "Anti tan Facial",
            price: 1000,
            id: 17,
          },
          {
            name: "Wine Facial",
            price: 1000,
            id: 18,
          },
          {
            name: "Anti-Aging Facial",
            price: 1000,
            id: 19,
          },
          {
            name: "Sensitive Skin",
            price: 1000,
            id: 111,
          },
          {
            name: "Aloe Vera Facial",
            price: 1000,
            id: 112,
          },
          {
            name: "A.H.A Facial",
            price: 1000,
            id: 113,
          },
          {
            name: "VLCC Pearl Facial",
            price: 1000,
            id: 114,
          },
          {
            name: "Richfeel Pearl Facial",
            price: 1000,
            id: 115,
          },
          {
            name: "Shahnaz Gold Facial",
            price: 1000,
            id: 116,
          },
          {
            name: "Richfeel Diamond Facial",
            price: 1000,
            id: 117,
          },
          {
            name: "Chery's Oxy Blast",
            price: 1000,
            id: 118,
          },
          {
            name: "Chery's Glovite Facial",
            price: 1000,
            id: 119,
          },
          {
            name: "Chery's Tan Clear Facial",
            price: 1000,
            id: 121,
          },
          {
            name: "O3+ All Skin Type Facial",
            price: 2500,
            id: 122,
          },
        ],
      },
      {
        id: 2,
        title: "Cleanup",
        image: BleachImage,
        items: [
          {
            name: "Herbal Cleanup",
            price: 300,
            id: 21,
          },
          {
            name: "Fruit Cleanup",
            price: 350,
            id: 22,
          },
          {
            name: "Anti tan Cleanup",
            price: 350,
            id: 23,
          },
          {
            name: "Chocolate Cleanup",
            price: 350,
            id: 24,
          },
          {
            name: "Wine Cleanup",
            price: 400,
            id: 25,
          },
          {
            name: "Anti-Aging Cleanup",
            price: 350,
            id: 26,
          },
          {
            name: "Sensitive Skin",
            price: 350,
            id: 27,
          },
          {
            name: "Acne Cleanup",
            price: 350,
            id: 28,
          },
          {
            name: "Saffron Cleanup",
            price: 350,
            id: 29,
          },
          {
            name: "Cucumber Cleanup",
            price: 350,
            id: 211,
          },
          {
            name: "Banana Cleanup",
            price: 350,
            id: 212,
          },
          {
            name: "Almond Kesar Cleanup",
            price: 350,
            id: 213,
          },
          {
            name: "Lotus All Skin Type",
            price: 400,
            id: 214,
          },
          {
            name: "A.H.A Cleanup",
            price: 400,
            id: 215,
          },
          {
            name: "VLCC Whitening Cleanup",
            price: 400,
            id: 216,
          },
          {
            name: "VLCC Instant Glow Cleanup",
            price: 400,
            id: 217,
          },
          {
            name: "VLCC Pearl Cleanup",
            price: 500,
            id: 218,
          },
          {
            name: "Shahnaz Gold Cleanup",
            price: 500,
            id: 219,
          },
          {
            name: "Shahnaz Diamond Cleanup",
            price: 500,
            id: 221,
          },
          {
            name: "O3+ All Skin Type Cleanup",
            price: 1000,
            id: 222,
          },
        ],
      },
      {
        id: 3,
        title: "Bleach",
        image: FacialImage,
        items: [
          {
            name: "Oxy Bleach (Face)",
            price: 300,
            id: 31,
          },
          {
            name: "Cherils Bleach (Face)",
            price: 350,
            id: 32,
          },
          {
            name: "Gold Bleach (Face)",
            price: 400,
            id: 33,
          },
          {
            name: "Pearl Bleach (Face)",
            price: 400,
            id: 34,
          },
          {
            name: "Oxy Bleach (Back) FULL",
            price: 400,
            id: 35,
          },
          {
            name: "Cherils Bleach (Back) FULL",
            price: 800,
            id: 36,
          },
          {
            name: "Gold Bleach (Back) FULL",
            price: 800,
            id: 37,
          },
          {
            name: "Pearl Bleach (Back) FULL",
            price: 800,
            id: 38,
          },

          {
            name: "Oxy Bleach (Back) HALF",
            price: 200,
            id: 39,
          },
          {
            name: "Cherils Bleach (Back) HALF",
            price: 400,
            id: 311,
          },
          {
            name: "Gold Bleach (Back) HALF",
            price: 400,
            id: 312,
          },
          {
            name: "Pearl Bleach (Back) HALF",
            price: 400,
            id: 313,
          },

          {
            name: "Oxy Bleach (Hand) FULL",
            price: 400,
            id: 314,
          },
          {
            name: "Cherils Bleach (Hand) FULL",
            price: 500,
            id: 315,
          },
          {
            name: "Gold Bleach (Hand) FULL",
            price: 400,
            id: 316,
          },
          {
            name: "Bleach Full Body",
            price: 1000,
            id: 317,
          },
        ],
      },
      {
        id: 4,
        title: "D Tan",
        image: DTanImage,
      },
      {
        id: 5,
        title: "Threading",
        image: ThreadingImage,
        items: [
          {
            name: "Eye brow",
            price: 50,
            id: 51,
          },
          {
            name: "Upper lips",
            price: 20,
            id: 52,
          },
          {
            name: "Chin",
            price: 20,
            id: 53,
          },
          {
            name: "Forehead",
            price: 20,
            id: 54,
          },
          {
            name: "Full Face",
            price: 100,
            id: 55,
          },
        ],
      },
      {
        id: 6,
        title: "Hydra Facial",
        image: HydraImage,
        items: [
          {
            name: "Whitening",
            price: 200,
            id: 61,
          },
          {
            name: "Instant glow",
            price: 200,
            id: 62,
          },
        ],
      },
      {
        id: 7,
        title: "Chemical Peel",
        image: ChemicalPeel,
      },
    ],
  },
  {
    id: 103,
    title: "Hand & Foot Care",
    image: ImageThree,
    navigate: true,
    logo: LogoThree,
    list: [
      {
        id: 1,
        title: "Manicure",
        image: ManicureImage,

        items: [
          {
            name: "Herbal",
            price: 400,
            id: 11,
          },
          {
            name: "Spa Berry's",
            price: 450,
            id: 12,
          },
          {
            name: "Spa Manicure with Wrap",
            price: 500,
            id: 13,
          },
          {
            name: "VLCC Manicure",
            price: 500,
            id: 14,
          },
        ],
      },
      {
        id: 2,
        title: "Pedicure",
        image: PedicureImage,
        items: [
          {
            name: "Herbal",
            price: 500,
            id: 21,
          },
          {
            name: "Spa Berry's",
            price: 600,
            id: 22,
          },
          {
            name: "Spa Manicure with Wrap",
            price: 700,
            id: 23,
          },
          {
            name: "VLCC Manicure",
            price: 500,
            id: 24,
          },
        ],
      },
      {
        id: 3,
        title: "Waxing",
        image: WaxingImage,

        items: [
          {
            name: "Full Arm (Normal)",
            price: 200,
            id: 31,
          },
          {
            name: "Full Arm (Antitan)",
            price: 350,
            id: 32,
          },
          {
            name: "Under Arms (Normal)",
            price: 50,
            id: 33,
          },
          {
            name: "Under Arms (Antitan)",
            price: 80,
            id: 34,
          },
          {
            name: "Half Leg (Normal)",
            price: 150,
            id: 35,
          },
          {
            name: "Half Leg (Antitan)",
            price: 250,
            id: 36,
          },
          {
            name: "Full Leg (Normal)",
            price: 300,
            id: 37,
          },
          {
            name: "Full Leg (Antitan)",
            price: 500,
            id: 38,
          },
          {
            name: "Upper Lips",
            price: 50,
            id: 39,
          },
          {
            name: "Chin",
            price: 50,
            id: 311,
          },
          {
            name: "Said Lock",
            price: 80,
            id: 312,
          },
          {
            name: "Full body (Normal)",
            price: 1000,
            id: 313,
          },
          {
            name: "Full body (Antitan)",
            price: 1500,
            id: 314,
          },
        ],
      },
      {
        id: 4,
        title: "Full Body Polishing",
        image: BodyPolishing,

        items: [
          {
            name: "Full Back",
            price: 600,
            id: 41,
          },
          {
            name: "Full Arm",
            price: 600,
            id: 42,
          },
          {
            name: "Full Leg",
            price: 800,
            id: 43,
          },
          {
            name: "Full Body",
            price: 2000,
            id: 44,
          },
        ],
      },
    ],
  },
  {
    id: 104,
    title: "Give your eyes a lift with mascara",
    navigate: false,
    image: ImageFour,
    logo: LogoFour,

    list: [
      {
        id: 1,
        title: "Bridal makeup",
      },
      {
        id: 2,
        title: "Party makeup",
      },
      {
        id: 3,
        title: "Traditional makeup",
      },
      {
        id: 4,
        title: "HD makeup",
      },
    ],
  },
  {
    id: 105,
    title: "Indulge your nails",
    navigate: false,

    image: ImageFive,
    logo: LogoFive,

    list: [
      {
        id: 1,
        title: "Basic nail color",
      },
      {
        id: 2,
        title: "Printed nail color",
      },
      {
        id: 3,
        title: "Artificial nail art",
      },
    ],
  },
];
