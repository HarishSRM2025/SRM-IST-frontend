import AcademicSections from "../Components/Academic/AcademicSections";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { getArrayPayload } from "../utils/academicRoutes";
import '../css/Department.css';

export default function DeptPage() {
  const location = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [routeReady, setRouteReady] = useState(!slug || Boolean(location.state?.schoolId));

  useEffect(() => {
    if (!slug || location.state?.schoolId) {
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

  if (!routeReady && !(slug && location.state?.schoolId)) return null;


  return (
    <>


      <AcademicSections
        includeDivisions
      />
    </>
  );
}
