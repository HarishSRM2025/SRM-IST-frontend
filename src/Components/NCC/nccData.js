import achv1 from "../../assets/images/ncc/ach/1.webp";
import achv2 from "../../assets/images/ncc/ach/2.webp";
import achv3 from "../../assets/images/ncc/ach/3.webp";
import achv4 from "../../assets/images/ncc/ach/4.png";
import achv5 from "../../assets/images/ncc/ach/5.png";
import achv6 from "../../assets/images/ncc/ach/6.webp";
import achv7 from "../../assets/images/ncc/ach/7.png";
import achv8 from "../../assets/images/ncc/ach/8.webp";
import achv9 from "../../assets/images/ncc/ach/9.webp";
import achv10 from "../../assets/images/ncc/ach/10.webp";
import achv11 from "../../assets/images/ncc/ach/11.webp";
import achv12 from "../../assets/images/ncc/ach/12.webp";
export const nccData = {
  aims: {
    tag: "Our Purpose",
    title: "Aims",
    logo: "ncc-logo.png",
    points: [
      "To develop character, courage, comradeship, Discipline, leadership, secular outlook, spirit of adventure and sportsmanship and the ideals of selfless service amongst the youth of the country.",
      "To create Human Resources of organized, trained and motivated youth to provide leadership in all walks of life and always available for the service of the Nation.",
      "To provide a suitable environment to motivate the youth to take up a career in the armed forces.",
    ],
    quickLinks: [
      { label: "Achievements", anchor: "#achievements" },
      { label: "List of Students", anchor: "#students" },
    ],
  },

  discipline: {
    cardinalsTitle: "Cardinals of Discipline",
    cardinals: [
      "Obey with a smile.",
      "Be punctual.",
      "Work hard and without fuss.",
      "Make no excuses and tell no lies.",
    ],
    mottoTitle: "Motto",
    motto: ["Unity and Discipline"],
  },

  officer: {
    name: "Lt. Dr. A. Arunkumar, M.Sc., Ph.D.,",
    designation: "Associate NCC Officer (NCC/14110478)",
    details: [
      "8/3 Coy. Commander, 2(TN) BN NCC",
      "SRM Institute of Science and Technology",
      "Tiruchirappalli",
    ],
    photo: "officer-arunkumar.jpg",
  },

  raisingUnit: {
    title: "Raising of NCC Unit Under FSFS",
    description:
      "SRM Institute of Science and Technology, Tiruchirappalli raised the 2 (TN) BN NCC unit on 10 March 2023 with an Authorised strength of 52 SD/SW cadets & 1 ANO. Dr. A. Arunkumar has been nominated by SRMIST as Associate NCC Officer (ANO) of the NCC Company.",
    image: "ncc-unit-raising.jpg",
  },

  students: {
    tag: "Enrolled Cadets",
    title: "List of Students",
    subtitle:
      "The following students are officially enrolled for the academic year 2023–24 in NCC Army wing at SRMIST",
    image: "ncc-firing-cadet.jpg",
    list: [
      { sNo: 1, name: "DHINAKAR KM", department: "IIst - CSE-C" },
      { sNo: 2, name: "MK AAKASH", department: "IIst - CSE-AIML-B" },
      { sNo: 3, name: "SABARISH S", department: "1st - Bio Tech" },
      { sNo: 4, name: "SHAIK ARBAAZ", department: "1st - CSE-AIML-B" },
      { sNo: 5, name: "JANANI K", department: "1st - ECE-B" },
      { sNo: 6, name: "TEESHA PATEL", department: "1st - CSE-E" },
      { sNo: 7, name: "AARNA AGGARWAL", department: "1st - Cyber Security" },
      { sNo: 8, name: "GAIPURI VAMSHI", department: "1st - CSE-D" },
      { sNo: 9, name: "SATYAWART SINGH RAJAWAT", department: "1st - CSE-G" },
      { sNo: 10, name: "BHUPENDER", department: "1st - CSE-AIML-B" },
      { sNo: 11, name: "GOWTHAMAN GS", department: "1st - Cyber Security" },
      { sNo: 12, name: "A.V.S.VIGNESH", department: "1st - CSE-E" },
      { sNo: 13, name: "CHANDRAKANTH REDDY Y", department: "1st - Cyber Security" },
      { sNo: 14, name: "ESWAR J", department: "1st - CSE-AIML-B" },
      { sNo: 15, name: "SUGANSHIYA S", department: "1st - B.Sc (CS)" },
      { sNo: 16, name: "SURYA RM", department: "1st - B.Com(ISM)" },
      { sNo: 17, name: "AR VIJAY", department: "1st - B.Com(ISM)" },
      { sNo: 18, name: "KIRUTHIKA R", department: "1st - BPT" },
    ],
  },

  firingPractice: {
    title: "Firing Practice for NCC Cadets",
    images: [
      "firing-practice-1.jpg",
      "firing-practice-2.jpg",
      "firing-practice-3.jpg",
      "firing-practice-target.jpg",
    ],
  },

  performanceAudit: {
    title: "Performance Audit by Commanding Officer of 2 (TN) BN NCC",
    description:
      "Performance audit was conducted for SRM Institute of Science and Technology on 03.02.2024 by Commanding Officer Col. Arunkumar, 2(TN) BN NCC, Trichy.",
    images: ["performance-audit-1.jpg"],
  },
};

export const achievementData = [
  {
    id: 1,
    title: "77th Republic Day Celebration",
    description:
      "The 77th Republic Day was celebrated with great pride and patriotic fervor on 26th January at SRM Institute of Science and Technology. The celebration featured National Flag hoisting by Lt. Col. R. Muruganatham, Indian Army, followed by the National Anthem. NCC cadets performed an impressive March Past and Special Drill Performance, showcasing discipline, coordination, and dedication. The event inspired students to uphold constitutional values and contribute to nation-building.",
    images: [achv1,achv2,achv3],
  },
  {
    id: 2,
    title: "Silver Medal – 50th State Shooting Competition",
    description:
      "Mr. Sabarish S (III B.Tech – Biotechnology) and Mr. Vijaay A.R. (III B.Com) secured the Silver Medal at the 50th State Shooting Competition held at Saragarhi Shooting Academy, GNC College. They were also selected to participate in the National Firing Competition.",
    images: [achv4],
  },
  {
    id: 3,
    title: "INF Attachment Camp – Phase II",
    description:
      "Mr. Karthikeyan (II B.Tech – IT) successfully participated in the INF Attachment Camp (Phase II) with the 4/8 Gorkha Rifles at Banaswadi, Bengaluru, Karnataka.",
    images: [achv5],
  },
  {
    id: 4,
    title: "Basic Leadership Camp",
    description:
      "Ms. Janani K (III B.Tech – EEE) successfully participated in and completed the Basic Leadership Camp held at Coimbatore Institute of Technology, Coimbatore, from 25 July 2025 to 05 August 2025.",
    images: [achv6],
  },
  {
    id: 5,
    title: "RDC–IGC Camp (Best Cadets Event)",
    description:
      "Ms. Janani K (III B.Tech – EEE) and Ms. Aarna Agarwal (III B.Tech – Cyber Security) participated in the RDC–IGC Camp (Best Cadets Event) held at Idyaapatti, Madurai. Their performance, discipline, and dedication brought great credit to themselves and the institution.",
    images: [achv7,achv8],
  },
  {
    id: 6,
    title: "Three Bronze Medals – IDSSC Shooting Competition",
    description:
      "NCC student Mr. Sabarish from B.Tech Biotechnology won three Bronze Medals in the State-Level IDSSC Shooting Competition, demonstrating exceptional skill and commitment.",
    images: [achv9],
  },
  {
    id: 7,
    title: "Best Cadet Award – ATC Camp",
    description:
      "NCC cadets Mr. Vamshi (II B.Tech – CSE) and Ms. Aarna Agarwal (II B.Tech – Cyber Security) were awarded the Best Cadet title at the ATC Camp conducted by the 2 TN Battalion at Anna University.",
    images: [achv10],
  },
  {
    id: 8,
    title: "Felicitation by Group Commander",
    description:
      "Mr. Sabarish, a Biotechnology student, was felicitated by the Group Commander in recognition of his outstanding achievement in a State-Level Shooting Competition.",
    images: [achv11],
  },
  {
    id: 9,
    title: "Felicitation by Hon'ble Minister",
    description:"Mr. Sabarish from Biotechnology was felicitated by the Hon'ble Minister for Youth Welfare and Sports Development, Mr. Udhayanidhi Stalin, for his remarkable performance in a shooting competition.",
    images: [achv12],
  },
];