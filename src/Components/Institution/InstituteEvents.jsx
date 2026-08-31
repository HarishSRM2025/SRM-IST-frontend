import DeptEvents from "../DeptPage/DeptEvents";

// Keep institution events identical to department events in layout and behavior.
export default function InstituteEvents({ institutionId }) {
  return <DeptEvents id="events" institutionId={institutionId} />;
}
