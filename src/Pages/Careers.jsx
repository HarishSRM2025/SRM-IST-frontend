import React, { useEffect } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import JobList from '../Components/Careers/JobList';
import '../Components/Careers/Careers.css';

const Careers = () => {
    useEffect(() => {
        // Ensure scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const paths = [
        { name: 'Home', link: '/' },
        { name: 'Careers' }
    ];

    return (
        <div className="careers-container">
            <Breadcrum 
                title="Careers at SRM" 
                subtitle="Join our community of exceptional faculty, researchers, and staff dedicated to excellence in education and innovation."
                paths={paths}
            />
            
            <div className="careers-content">
                <div className="careers-header">
                    <h2>Current Openings</h2>
                    <p>
                        We are always looking for passionate individuals to join our team. 
                        Explore our current open positions below and apply to become a part of the SRM IST family.
                    </p>
                </div>
                
                <JobList />
            </div>
        </div>
    );
};

export default Careers;
