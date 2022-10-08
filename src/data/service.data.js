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
            name: "Basic Hair Cut",
            price: 200,

            plus: true,
            id: 11,
          },
          {
            name: "Advance Hair Cut",
            price: 400,

            plus: true,
            id: 12,
          },
          {
            name: "Layer Cut",
            price: 350,

            plus: true,
            id: 13,
          },
          {
            name: "Feather Cut",
            price: 400,

            plus: true,
            id: 14,
          },
          {
            name: "Step Cut",
            price: 400,

            plus: true,
            id: 15,
          },
          {
            name: "Baby Cut",
            price: 250,

            plus: true,
            id: 16,
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

            plus: true,
            id: 21,
          },
          {
            name: "Hair Ironing",
            price: 500,

            plus: true,
            id: 22,
          },
          {
            name: "Hair Tongs",
            price: 600,

            plus: true,
            id: 23,
          },
          {
            name: "Hair Wash + Conditioner",
            price: 300,

            plus: true,
            id: 24,
          },
          {
            name: "Hair Style",
            price: 500,

            plus: true,
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

            plus: true,
            id: 31,
          },
          {
            name: "Global Hair Color",
            price: 1800,
            plus: true,
            id: 32,
          },
          {
            name: "Hair Color Touchup",
            price: 1000,
            plus: true,
            id: 33,
          },
          {
            name: "Fashion Color",
            price: 2000,
            plus: true,
            id: 34,
          },
          {
            name: "Ombre Hair Color",
            price: 3000,
            plus: true,
            id: 35,
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
            price: 5000,
            plus: true,
            id: 41,
          },
          {
            name: "Hair Smootening",
            price: 4000,
            plus: true,
            id: 42,
          },
          {
            name: "Hair Protein",
            price: 5000,
            plus: true,
            id: 43,
          },
          {
            name: "Hair Botox",
            price: 4000,
            plus: true,
            id: 44,
          },
          {
            name: "Hair Aqua Gold",
            price: 5000,
            plus: true,
            id: 45,
          },
          {
            name: "Hair Anti-Dandruff Treatment(Per Sitting)",
            price: 1500,
            plus: true,
            id: 46,
          },
          {
            name: "Hair Spa Loreal",
            price: 1000,
            plus: true,
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
            name: "LOTUS PROFESSIONAL Whitening Facial",
            price: 1500,
            id: 14,
          },
          {
            name: "LOTUS PROFESSIONAL Instant Glow Facial",
            price: 1200,
            id: 15,
          },
          {
            name: "LOTUS PROFESSIONAL Nourishment Facial",
            price: 1200,
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
            name: "Sensi Glow Skin",
            price: 1200,
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
            name: "LOTUS PROFESSIONAL Pearl Facial",
            price: 1200,
            id: 114,
          },
          {
            name: "Glow Vita Facial",
            price: 1200,
            id: 115,
          },
          {
            name: "LOTUS Gold Facial",
            price: 1500,
            id: 116,
          },
          {
            name: "Whitening Facial",
            price: 1200,
            id: 117,
          },
          {
            name: "Cheryl's Oxy Blast",
            price: 1500,
            id: 118,
          },
          {
            name: "Cheryl's Anti-aging Facial",
            price: 1200,
            id: 119,
          },
          {
            name: "Cheryl's Tan Clear Facial",
            price: 1200,
            id: 121,
          },
          {
            name: "O3+ All Skin Type Facial",
            price: 3000,
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
            price: 350,
            id: 21,
          },
          {
            name: "Fruit Cleanup",
            price: 350,
            id: 22,
          },
          {
            name: "Anti tan Cleanup",
            price: 400,
            id: 23,
          },
          {
            name: "Chocolate Cleanup",
            price: 400,
            id: 24,
          },
          {
            name: "Wine Cleanup",
            price: 500,
            id: 25,
          },
          {
            name: "Anti-Aging Cleanup",
            price: 400,
            id: 26,
          },
          {
            name: "Sensitive Skin",
            price: 500,
            id: 27,
          },
          {
            name: "Acne Cleanup",
            price: 500,
            id: 28,
          },
          {
            name: "Saffron Cleanup",
            price: 400,
            id: 29,
          },
          {
            name: "Cucumber Cleanup",
            price: 400,
            id: 211,
          },
          {
            name: "Banana Cleanup",
            price: 400,
            id: 212,
          },
          {
            name: "Almond Kesar Cleanup",
            price: 400,
            id: 213,
          },
          {
            name: "Lotus All Skin Type",
            price: 600,
            id: 214,
          },
          {
            name: "A.H.A Cleanup",
            price: 400,
            id: 215,
          },
          {
            name: "LOTUS PROFESSIONAL Whitening Cleanup",
            price: 800,
            id: 216,
          },
          {
            name: "LOTUS PROFESSIONAL Instant Glow Cleanup",
            price: 800,
            id: 217,
          },
          {
            name: "LOTUS PROFESSIONAL Pearl Cleanup",
            price: 800,
            id: 218,
          },
          {
            name: "Shahnaz Gold Cleanup",
            price: 500,
            id: 219,
          },
          {
            name: "Cheryl's Cleanup",
            price: 600,
            id: 221,
          },
          {
            name: "O3+ All Skin Type Cleanup",
            price: 1500,
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
            price: 600,
            id: 314,
          },
          {
            name: "Cherils Bleach (Hand) FULL",
            price: 800,
            id: 315,
          },
          {
            name: "Gold Bleach (Hand) FULL",
            price: 600,
            id: 316,
          },
          {
            name: "Bleach Full Body",
            price: 2000,
            id: 317,
          },
        ],
      },
      {
        id: 4,
        title: "D Tan",
        image: DTanImage,
        items: [
          {
            name: "Face D-Tan",
            price: 250,
            id: 202,
          },
        ],
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
            price: 2500,
            id: 61,
          },
          {
            name: "Hydra Facial + Whitening Peel",
            price: 3500,
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
            price: 500,
            id: 12,
          },
          {
            name: "Spa Manicure with Wrap",
            price: 700,
            id: 13,
          },
          {
            name: "RAAGA PROFESSIONAL Manicure",
            price: 700,
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
            name: "RAAGA PROFESSIONAL Manicure",
            price: 700,
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
            price: 250,
            id: 31,
          },
          {
            name: "Full Arm (Rica)",
            price: 400,
            id: 32,
          },
          {
            name: "Under Arms (Normal)",
            price: 50,
            id: 33,
          },
          {
            name: "Under Arms (Rica)",
            price: 80,
            id: 34,
          },
          {
            name: "Half Leg (Normal)",
            price: 200,
            id: 35,
          },
          {
            name: "Half Leg (Rica)",
            price: 300,
            id: 36,
          },
          {
            name: "Full Leg (Normal)",
            price: 400,
            id: 37,
          },
          {
            name: "Full Leg (Rica)",
            price: 600,
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
            name: "Side Lock",
            price: 100,
            id: 312,
          },
          {
            name: "Full body (Normal)",
            price: 1500,
            id: 313,
          },
          {
            name: "Full body (Rica)",
            price: 2000,
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
    navigate: true,

    image: ImageFive,
    logo: LogoFive,

    list: [
      {
        id: 1,
        title: "Basic nail color",
        items: [
          {
            name: "Gel Polish",
            price: 700,
            id: 44,
          },
          {
            name: "Nail Extension",
            price: 1500,
            id: 44,
          },
          {
            name: "Gel Nail Extension",
            price: 2000,
            id: 44,
          },
          {
            name: "Polly Gel Extension",
            price: 2500,
            id: 44,
          },
          {
            name: "Acrylic Nail Extension",
            price: 2500,
            id: 44,
          },
        ],
      },
    ],
  },
];
