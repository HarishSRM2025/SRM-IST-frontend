import DeptAchievements from "../Components/DeptPage/DeptAchievements";
import DeptEvents from "../Components/DeptPage/DeptEvents";
import DeptFaculty from "../Components/DeptPage/DeptFaculty";
import DeptHero from "../Components/DeptPage/DeptHero";
import DeptProgrammes from "../Components/DeptPage/DeptProgrammes";
import "../css/Department.css";

export default function DivisionPage() {
  // const sections = [
  //   { label: "About", href: "#about" },
  //   { label: "Programmes", href: "#programmes" },
  //   { label: "Faculty", href: "#faculty" },
  //   { label: "Events", href: "#events" },
  //   { label: "Achievements", href: "#achievements" },
  // ];

  return (
    <>
      {/* <nav className="dept-subnav">
        <div className="dept-subnav-inner">
          {sections.map((section, index) => (
            <a key={index} href={section.href}>{section.label}</a>
          ))}
        </div>
      </nav> */}

      <section id="about"><DeptHero /></section>
      <section id="faculty"><DeptFaculty /></section>
      <section id="programmes"><DeptProgrammes /></section>
      <section id="events"><DeptEvents /></section>
      <section id="achievements"><DeptAchievements /></section>
    </>
  );
}
