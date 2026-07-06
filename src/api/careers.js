const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}/careers${path}`, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Careers request failed.');
  }

  return data;
};

export const getCareers = () => request('/get-careers');

export const submitJobApplication = ({ positionId, name, email, phone, resume, coverLetter }) => {
  const formData = new FormData();
  formData.append('positionId', positionId);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('resume', resume);
  formData.append('coverLetter', coverLetter || '');

  return request('/add-job-application', {
    method: 'POST',
    body: formData,
  });
};
