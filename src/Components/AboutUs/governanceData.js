import imgMain from "../../assets/images/governance/main.webp";
import img1 from "../../assets/images/governance/1.webp";
import img2 from "../../assets/images/governance/2.webp";
import img3 from "../../assets/images/governance/3.webp";

export const governanceData = {
  section1: {
    image: imgMain,
    title: "Apex Management",
    btnText:"View Leadership",
    btnLink:"/leadership?filter=all",
    description:
      "The SRMIST is lead by the Visionary Founder – Chancellor and Presidents and Vice President who support & guide the VC, Pro-VC, Registrar, Board & Senior Advisory Committees and Councils of the Institution"
  },
  cards: [
    {
      id: 1,
      image: img1,
      link:'/governance?page=board-management',
      title: "Board Of Management",
      description: "The Board of Management shall be the Principal Executive Body of the University"
    },
    {
      id: 2,
      image: img2,
      link:'/governance?page=academic-council',
      title: "Academic Council",
      description: "The Academic Council is principal academic body of the Institute"
    },
    {
      id: 3,
      image: img3,
      link:'/governance?page=research-advisory',
      title: "Research Advisory Committee",
      description: "Research Advisory Committee renders advice and guidance for future growth on research to Management"
    }
  ]
};