import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getArrayPayload } from '../utils/academicRoutes';
import Breadcrum from '../Components/Common/Breadcrum';
import DeanMessage from '../Components/Institution/DeanMessage';
import VisionMission from '../Components/Institution/VisionMission';
import Stats from '../Components/Institution/Stats';
import Departments from '../Components/Institution/Departments';

import '../css/Department.css'; // For common widgets and cards
import InstituteFacilities from '../Components/Institution/InstituteFacilities';
import InstituteGallery from '../Components/Institution/InstituteGallery';
import InstituteEvents from '../Components/Institution/InstituteEvents';
import InstituteProgrammes from '../Components/Institution/InstituteProgrammes';
import InstituteFaculty from '../Components/Institution/InstituteFaculty';

const Institution = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [routeReady, setRouteReady] = useState(!slug || Boolean(location.state?.instName));
  const instName = location.state?.instName || "Institution Overview";
  const [instData, setInstData] = useState(null);
  const [deanMsg, setDeanMsg] = useState(null);
  const [infrastructureData, setInfrastructureData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    if (!slug || location.state?.instName) {
      setRouteReady(true);
      return;
    }
    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_URL}/institution/getall`)
      .then((response) => response.json())
      .then((payload) => {
        const key = decodeURIComponent(slug).toLowerCase();
        const institution = getArrayPayload(payload).find((item) =>
          String(item.slug || item._id || item.id || '').toLowerCase() === key
        );
        if (institution) navigate(location.pathname, { replace: true, state: { instName: institution.name } });
      })
      .catch((error) => console.error('Failed to resolve institution URL', error))
      .finally(() => { if (!cancelled) setRouteReady(true); });
    return () => { cancelled = true; };
  }, [slug, location.pathname, location.state?.instName, navigate]);

  if (!routeReady) return null;

  useEffect(() => {
    const fetchInst = async () => {
      setDeanMsg(null);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/institution/getall`);
        const json = await res.json();
        if (json.success && json.data) {
          const dataArray = Array.isArray(json.data) ? json.data : [json.data];
          const match = dataArray.find(d => d.name === instName);
          if (match) {
            setInstData(match);

            // Fetch Dean Messages
            try {
              const msgRes = await fetch(`${import.meta.env.VITE_API_URL}/institution/dean-message/getall`);
              const msgJson = await msgRes.json();
              if (msgJson.success && msgJson.data) {
                const msgArray = Array.isArray(msgJson.data) ? msgJson.data : [msgJson.data];
                const msgMatch = msgArray.find((m) => {
                  const institutionId = typeof m.institutionId === 'object' ? m.institutionId?._id : m.institutionId;
                  return institutionId === match._id && m.deanName && m.deanImage && m.message;
                });
                if (msgMatch) setDeanMsg(msgMatch);
              }
            } catch (err) {
              console.error("Failed to fetch dean message data", err);
            }

            // Fetch Infrastructure
            try {
              const infraRes = await fetch(`${import.meta.env.VITE_API_URL}/institution/infrastructure/getall`);
              const infraJson = await infraRes.json();
              if (infraJson.success && infraJson.data) {
                const infraArray = Array.isArray(infraJson.data) ? infraJson.data : [infraJson.data];
                const infraMatches = infraArray.filter(i => i.institutionId === match._id);
                setInfrastructureData(infraMatches);
              }
            } catch (err) {
              console.error("Failed to fetch infrastructure data", err);
            }

            // Fetch Schools
            try {
              const schoolsRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
              const schoolsJson = await schoolsRes.json();
              let schoolsArray = [];
              if (Array.isArray(schoolsJson)) {
                schoolsArray = schoolsJson;
              } else if (schoolsJson.data) {
                schoolsArray = Array.isArray(schoolsJson.data) ? schoolsJson.data : [schoolsJson.data];
              }
              const institutionSchools = schoolsArray.filter(s => {
                const institutionId = typeof s.institutionId === 'object' ? s.institutionId?._id : s.institutionId;
                return institutionId === match._id;
              });
              setSchoolsData(institutionSchools);
            } catch (err) {
              console.error("Failed to fetch schools data", err);
              setSchoolsData([]);
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch institution data", err);
      }
    };
    fetchInst();
  }, [instName]);

  return (
    <div className="institution-page">
      <Breadcrum
        title={instName}
        paths={[{ name: 'Home', link: '/' }, { name: instName === "Institution Overview" ? "Institution" : instName }]}
        bgImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&auto=format&fit=crop"
      />

      {deanMsg && <DeanMessage data={deanMsg} instName={instName} />}
      <VisionMission vision={instData?.vision} mission={instData?.mission} />
      <Stats institutionId={instData?._id} />
      {schoolsData.length > 0 && <Departments schools={schoolsData} />}
      {instData && <InstituteFaculty institutionId={instData._id} />}
      {instData && <InstituteProgrammes institutionId={instData._id} />}
      {infrastructureData.length > 0 && <InstituteFacilities facilities={infrastructureData} />}
      {instData && <InstituteEvents institutionId={instData._id} />}
      <InstituteGallery institutionId={instData?._id} />
    </div>
  );
};

export default Institution;
