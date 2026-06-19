import React, { useEffect } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import LibraryOverview from '../Components/Library/LibraryOverview';
import LibraryServices from '../Components/Library/LibraryServices';
import LibraryResources from '../Components/Library/LibraryResources';
import LibraryWorkingHours from '../Components/Library/LibraryWorkingHours';
import LibraryCommittee from '../Components/Library/LibraryCommittee';
import LibraryStaff from '../Components/Library/LibraryStaff';
import libraryHero from '../assets/images/home/campuslife/5.jpg'; // Reusing existing image as placeholder
import '../css/Department.css';
import '../css/LibraryCss.css';

const Library = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="library-page">
      <Breadcrum 
        title="Central Library" 
        subtitle="The Heart of Academic Excellence"
        bgImage={libraryHero}
        paths={[
          { name: 'Home', link: '/' },
          { name: 'Campus Life', link: '/campus-life' },
          { name: 'Library' }
        ]}
      />
      <LibraryOverview />
      <LibraryResources />
      <LibraryServices />
      <LibraryWorkingHours />
      <LibraryCommittee />
      <LibraryStaff />
    </main>
  );
};

export default Library;