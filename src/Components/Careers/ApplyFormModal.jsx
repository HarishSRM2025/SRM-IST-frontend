import React, { useState } from 'react';
import { FaTimes, FaCloudUploadAlt, FaPaperPlane } from 'react-icons/fa';
import './Careers.css';

const ApplyFormModal = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: ''
    });

    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to a backend
        console.log("Form submitted for:", job.title, formData, fileName);
        alert(`Application for ${job.title} submitted successfully!`);
        onClose();
    };

    return (
        <div className="apply-modal-overlay" onClick={onClose}>
            <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="apply-modal-header">
                    <div>
                        <h3>Apply for Position</h3>
                        <p>{job?.title}</p>
                    </div>
                    <button className="close-modal-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                
                <div className="apply-modal-body">
                    <form className="apply-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <input 
                                type="text" 
                                id="position" 
                                value={job?.title || ''} 
                                readOnly 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label>Resume / CV *</label>
                            <div className="file-upload-wrapper">
                                <input 
                                    type="file" 
                                    accept=".pdf,.doc,.docx" 
                                    onChange={handleFileChange} 
                                    required 
                                />
                                <div className="file-upload-content">
                                    <FaCloudUploadAlt />
                                    <span>{fileName ? fileName : "Click to browse or drag and drop"}</span>
                                    <small style={{fontSize: '11px'}}>.pdf, .doc, .docx (Max. 5MB)</small>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter / Note (Optional)</label>
                            <textarea 
                                id="coverLetter" 
                                name="coverLetter" 
                                rows="4" 
                                value={formData.coverLetter} 
                                onChange={handleChange} 
                                placeholder="Briefly explain why you are a good fit for this role..."
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-gold">
                                <FaPaperPlane /> Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyFormModal;
