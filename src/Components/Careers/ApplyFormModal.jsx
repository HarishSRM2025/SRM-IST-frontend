import React, { useState } from 'react';
import { FaTimes, FaCloudUploadAlt, FaPaperPlane } from 'react-icons/fa';
import { submitJobApplication } from '../../api/careers';
import './Careers.css';

const ApplyFormModal = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: ''
    });

    const [fileName, setFileName] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            await submitJobApplication({
                positionId: job._id,
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                resume: resumeFile,
                coverLetter: formData.coverLetter,
            });
            setMessage({ type: 'success', text: 'Application submitted successfully.' });
            window.setTimeout(onClose, 1000);
        } catch (err) {
            setMessage({ type: 'error', text: err.message || 'Unable to submit application.' });
        } finally {
            setIsSubmitting(false);
        }
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
                        {message.text && (
                            <div className={`careers-form-message ${message.type}`}>
                                {message.text}
                            </div>
                        )}
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
                            <button type="submit" className="btn btn-gold" disabled={isSubmitting}>
                                <FaPaperPlane /> {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyFormModal;
