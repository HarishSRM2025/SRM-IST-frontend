import React, { useState } from 'react';
import JobCard from './JobCard';
import ApplyFormModal from './ApplyFormModal';
import './Careers.css';

const MOCK_JOBS = [
    {
        id: 1,
        title: "Assistant Professor - Computer Science",
        department: "Engineering & Technology",
        location:"Tiruchirappalli",
        type: "Full-time",
        description: "We are seeking a highly motivated and qualified Assistant Professor to join our Computer Science department. The successful candidate will be responsible for teaching undergraduate and postgraduate courses, conducting high-quality research, and contributing to the academic development of the department.",
        eligibility: "Ph.D. in Computer Science or related field with a minimum of 2 years of teaching/research experience. Strong publication record is preferred."
    },
    {
        id: 2,
        title: "Research Scientist - Artificial Intelligence",
        department: "SRM Research Institute",
        location:"Tiruchirappalli",
        type: "Full-time / Contract",
        description: "Join our cutting-edge AI research team to work on externally funded projects. You will be responsible for designing and developing advanced machine learning models, publishing in top-tier conferences, and collaborating with industry partners.",
        eligibility: "Ph.D. or Master's degree in AI, Machine Learning, or related field with strong programming skills in Python, PyTorch/TensorFlow, and prior research publications."
    },
    {
        id: 3,
        title: "Administrative Officer",
        department: "Administration",
        location:"Tiruchirappalli",
        type: "Full-time",
        description: "We are looking for an experienced Administrative Officer to oversee daily academic and operational activities. The role involves managing office staff, coordinating with various departments, handling student queries, and ensuring compliance with university policies.",
        eligibility: "Master's degree in Business Administration or related field with at least 5 years of administrative experience in an educational institution."
    },
    {
        id: 4,
        title: "Lab Instructor - Mechanical Engineering",
        department: "Engineering & Technology",
        location:"Tiruchirappalli",
        type: "Full-time",
        description: "The Lab Instructor will support faculty in conducting practical laboratory sessions for undergraduate students. Responsibilities include preparing lab equipment, assisting students during experiments, and maintaining lab safety protocols.",
        eligibility: "B.Tech/B.E. or Diploma in Mechanical Engineering with 1-3 years of relevant experience in managing mechanical laboratories."
    },
    {
        id: 5,
        title: "Student Counselor",
        department: "Student Affairs",
        location:"Tiruchirappalli",
        type: "Full-time",
        description: "The Student Counselor will provide psychological counseling and guidance to students regarding personal, academic, and career-related issues. The role aims to promote student well-being and mental health across the campus.",
        eligibility: "Master's degree in Psychology, Counseling, or Social Work with prior experience in educational counseling or youth support."
    }
];

const JobList = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="job-list">
                {MOCK_JOBS.map(job => (
                    <JobCard 
                        key={job.id} 
                        job={job} 
                        onApply={handleApplyClick} 
                    />
                ))}
            </div>

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
