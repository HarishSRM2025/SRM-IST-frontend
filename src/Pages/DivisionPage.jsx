import DeptAchievements from "../Components/DeptPage/DeptAchievements";
import DeptEvents from "../Components/DeptPage/DeptEvents";
import DeptFaculty from "../Components/DeptPage/DeptFaculty";
import DeptHero from "../Components/DeptPage/DeptHero";
import DeptProgrammes from "../Components/DeptPage/DeptProgrammes";
import "../css/Department.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getArrayPayload } from "../utils/academicRoutes";

export default function DivisionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [routeReady, setRouteReady] = useState(!slug || Boolean(location.state?.schoolDivisionId));

  useEffect(() => {
    if (!slug || location.state?.schoolDivisionId) {
      setRouteReady(true);
      return;
    }

    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_URL}/school-division/getall`)
      .then((response) => response.json())
      .then(async (payload) => {
        const key = decodeURIComponent(slug).toLowerCase();
        const division = getArrayPayload(payload).find((item) =>
          String(item.slug || item._id || item.id || '').toLowerCase() === key
        );
        if (!division) return;
        const schoolId = typeof division.schoolId === 'object'
          ? division.schoolId?._id || division.schoolId?.id
          : division.schoolId;
        navigate(location.pathname, {
          replace: true,
          state: {
            deptName: division.name,
            deptSlug: division.slug,
            deptCode: division.code || division.slug,
            sourceType: 'schoolDivision',
            schoolId,
            schoolDivisionId: division._id || division.id,
            divisionName: division.name,
            divisionSlug: division.slug,
          },
        });
      })
      .catch((error) => console.error('Failed to resolve division URL', error))
      .finally(() => { if (!cancelled) setRouteReady(true); });

    return () => { cancelled = true; };
  }, [slug, location.pathname, location.state?.schoolDivisionId, navigate]);

  if (!routeReady) return null;
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
      <section id="faculty"><DeptFaculty page="Division" /></section>
      <section id="programmes"><DeptProgrammes /></section>
      <section id="events"><DeptEvents /></section>
      <section id="achievements"><DeptAchievements /></section>
    </>
  );
}
