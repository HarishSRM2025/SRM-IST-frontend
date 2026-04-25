import DeptAchievements from "../Components/DeptPage/DeptAchievements";
import DeptEvents from "../Components/DeptPage/DeptEvents";
import DeptFacilities from "../Components/DeptPage/DeptFacilities";
import DeptFaculty from "../Components/DeptPage/DeptFaculty";
import DeptGallery from "../Components/DeptPage/DeptGallery";
import DeptHero from "../Components/DeptPage/DeptHero";
import DeptProgrammes from "../Components/DeptPage/DeptProgrammes";
import DeptResearch from "../Components/DeptPage/DeptResearch";
import "../css/Department.css";

export default function DeptPage() {
  const sections = [ { label: "About", href: "#about" }, { label: "Programmes", href: "#programmes" }, { label: "Faculty", href: "#faculty" }, { label: "Facilities", href: "#facilities" }, { label: "Research", href: "#research" }, { label: "Events", href: "#events" }, { label: "Achievements", href: "#achievements" }, { label: "Gallery", href: "#gallery" }, ];
  return (
    <>
      {/* Section Nav */}
      <nav className="dept-subnav">
        <div className="dept-subnav-inner">
          {sections.map((s, i) => (
            <a key={i} href={s.href}>{s.label}</a>
          ))}
        </div>
      </nav>

      <section id="about"><DeptHero/></section>
      <section id="programmes"><DeptProgrammes /></section>
      <section id="faculty"><DeptFaculty/></section>
      <section id="facilities"><DeptFacilities/></section>
      <section id="research"><DeptResearch/></section>
      <section id="events"><DeptEvents/></section>
      <section id="achievements"><DeptAchievements/></section>
      <section id="gallery"><DeptGallery/></section> 
    </>
  );
}