import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import './Careers.css';

const JobCard = ({ job, onApply }) => {
    return (
        <div className="job-card">
            <h3 className="job-card-title">{job.title}</h3>
            
            <div className="job-card-meta">
                <span><FaBriefcase /> {job.department}</span>
                <span><FaMapMarkerAlt /> {job.location}</span>
                <span><FaClock /> {job.type}</span>
            </div>
            
            <p className="job-card-desc">{job.description}</p>
            
            <div className="job-card-eligibility">
                <h4>Eligibility Criteria</h4>
                <p>{job.eligibility}</p>
            </div>
            
            <div className="job-card-actions">
                <button 
                    className="btn btn-outline-dark" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onApply(job)}
                >
                    Apply Now <FaArrowRight style={{ fontSize: '12px' }}/>
                </button>
            </div>
        </div>
    );
};

export default JobCard;
