import DeptAchievements from "../DeptPage/DeptAchievements";
import DeptDivisions from "../DeptPage/DeptDivisions";
import DeptEvents from "../DeptPage/DeptEvents";
import DeptFaculty from "../DeptPage/DeptFaculty";
import DeptHero from "../DeptPage/DeptHero";
import DeptProgrammes from "../DeptPage/DeptProgrammes";

const section = (id, children) => <section id={id}>{children}</section>;

export default function AcademicSections({
  isDivision = false,
  includeDivisions = false,
  onVisibilityChange,
}) {
  if (isDivision) {
    return (
      <>
        {section("about", <DeptHero />)}
        {section("faculty", <DeptFaculty page="Division" />)}
        {section("programmes", <DeptProgrammes />)}
        {section("events", <DeptEvents />)}
        {section("achievements", <DeptAchievements />)}
      </>
    );
  }

  return (
    <>
      <DeptHero
        id="about"
        onVisibilityChange={(visible) => onVisibilityChange?.("about", visible)}
      />
      {includeDivisions && (
        <DeptDivisions
          id="divisions"
          onVisibilityChange={(visible) => onVisibilityChange?.("divisions", visible)}
        />
      )}
      <DeptFaculty
        id="faculty"
        page="school"
        onVisibilityChange={(visible) => onVisibilityChange?.("faculty", visible)}
      />
      <DeptProgrammes
        id="programmes"
        onVisibilityChange={(visible) => onVisibilityChange?.("programmes", visible)}
      />
      <DeptEvents
        id="events"
        onVisibilityChange={(visible) => onVisibilityChange?.("events", visible)}
      />
      <DeptAchievements
        id="achievements"
        onVisibilityChange={(visible) => onVisibilityChange?.("achievements", visible)}
      />
    </>
  );
}
