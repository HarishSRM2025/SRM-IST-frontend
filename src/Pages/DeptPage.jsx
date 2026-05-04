import DeptAchievements from "../Components/DeptPage/DeptAchievements";
import DeptEvents from "../Components/DeptPage/DeptEvents";
import DeptFaculty from "../Components/DeptPage/DeptFaculty";
import DeptHero from "../Components/DeptPage/DeptHero";
import DeptProgrammes from "../Components/DeptPage/DeptProgrammes";
import '../css/Department.css';
export default function DeptPage() {
  const sections = [ { label: "About", href: "#about" }, { label: "Programmes", href: "#programmes" }, { label: "Faculty", href: "#faculty" }, { label: "Facilities", href: "#facilities" }, { label: "Events", href: "#events" }, { label: "Achievements", href: "#achievements" }, { label: "Gallery", href: "#gallery" }, ];
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
      <section id="events"><DeptEvents/></section>
      <section id="achievements"><DeptAchievements/></section>
    </>
  );
}