import DeptAchievements from "../Components/DeptPage/DeptAchievements";
import DeptDivisions from "../Components/DeptPage/DeptDivisions";
import DeptEvents from "../Components/DeptPage/DeptEvents";
import DeptFaculty from "../Components/DeptPage/DeptFaculty";
import DeptHero from "../Components/DeptPage/DeptHero";
import DeptProgrammes from "../Components/DeptPage/DeptProgrammes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { getArrayPayload } from "../utils/academicRoutes";
import '../css/Department.css';

const defaultOptionalSections = {
  about: false,
  divisions: false,
  faculty: false,
  programmes: false,
  events: false,
  achievements: false,
};

export default function DeptPage() {
  const location = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [routeReady, setRouteReady] = useState(!slug || Boolean(location.state?.schoolId));

  useEffect(() => {
    if (!slug || location.state?.schoolId) {
      setRouteReady(true);
      return;
    }

    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_URL}/schools/getall`)
      .then((response) => response.json())
      .then((payload) => {
        const key = decodeURIComponent(slug).toLowerCase();
        const school = getArrayPayload(payload).find((item) =>
          String(item.slug || item._id || item.id || '').toLowerCase() === key
        );
        if (!school) return;
        navigate(location.pathname, {
          replace: true,
          state: {
            deptName: school.name,
            deptSlug: school.slug,
            deptCode: school.code || school.slug,
            sourceType: 'school',
            schoolId: school._id || school.id,
            schoolDivisionId: null,
          },
        });
      })
      .catch((error) => console.error('Failed to resolve department URL', error))
      .finally(() => { if (!cancelled) setRouteReady(true); });

    return () => { cancelled = true; };
  }, [slug, location.pathname, location.state?.schoolId, navigate]);

  if (!routeReady) return null;
  const pageKey = [
    location.state?.deptName,
    location.state?.deptSlug,
    location.state?.schoolId,
    location.state?.schoolDivisionId,
    location.state?.sourceType,
  ].join("|");
  const [optionalSectionsState, setOptionalSectionsState] = useState({
    pageKey,
    visible: defaultOptionalSections,
  });

  const visibleOptionalSections = optionalSectionsState.pageKey === pageKey
    ? optionalSectionsState.visible
    : defaultOptionalSections;

  const setOptionalSectionVisible = (section, isVisible) => {
    setOptionalSectionsState((prev) => {
      const currentVisible = prev.pageKey === pageKey ? prev.visible : defaultOptionalSections;

      if (currentVisible[section] === isVisible && prev.pageKey === pageKey) {
        return prev;
      }

      return {
        pageKey,
        visible: { ...currentVisible, [section]: isVisible },
      };
    });
  };


  return (
    <>


      <DeptHero
        id="about"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("about", isVisible)}
      />
      <DeptDivisions
        id="divisions"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("divisions", isVisible)}
      />
      <DeptFaculty
        id="faculty"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("faculty", isVisible)}
        page="school"
      />
      <DeptProgrammes
        id="programmes"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("programmes", isVisible)}
      />
      <DeptEvents
        id="events"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("events", isVisible)}
      />
      <DeptAchievements
        id="achievements"
        onVisibilityChange={(isVisible) => setOptionalSectionVisible("achievements", isVisible)}
      />
    </>
  );
}
