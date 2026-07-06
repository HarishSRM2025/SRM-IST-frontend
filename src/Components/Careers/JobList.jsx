import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import ApplyFormModal from './ApplyFormModal';
import { getCareers } from '../../api/careers';
import './Careers.css';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let isMounted = true;

        getCareers()
            .then((data) => {
                if (isMounted) setJobs(data.careers || []);
            })
            .catch((err) => {
                if (isMounted) setError(err.message || 'Unable to load current openings.');
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="job-list-container">
            {loading ? (
                <div className="careers-state">Loading current openings...</div>
            ) : error ? (
                <div className="careers-state careers-state-error">{error}</div>
            ) : jobs.length === 0 ? (
                <div className="careers-state">No current openings are available.</div>
            ) : (
                <div className="job-list">
                {jobs.map(job => (
                    <JobCard 
                        key={job._id} 
                        job={job} 
                        onApply={handleApplyClick} 
                    />
                ))}
                </div>
            )}

            {isModalOpen && selectedJob && (
                <ApplyFormModal 
                    job={selectedJob} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default JobList;
