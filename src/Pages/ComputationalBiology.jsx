import React from 'react';

const ComputationalBiology = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Hero Banner */}
      <div style={{ background: 'var(--navy)', padding: '80px 20px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', margin: 0, fontFamily: "'Inter', sans-serif" }}>
          Center for Computational Biology
        </h1>
      </div>

      {/* Content Section */}
      <div className="wrap" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px', fontFamily: "'Inter', sans-serif" }}>
            Mission
          </h2>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            The Center for Computational Biology aims to advance research in biological systems using computational techniques. The center develops computational models, integrates diverse data sets, promotes machine learning and artificial intelligence in biological research, and trains computational biologists.
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px', fontFamily: "'Inter', sans-serif" }}>
            Roles and Responsibilities
          </h2>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
            The Center for Computational Biology (CCB) utilizes a multifaceted methodology to advance life sciences research. CCB conducts fundamental research by creating and refining computational tools and algorithms in computational biology. Utilizing bioinformatics, biophysics, structural biology, and systems biology, CCB will train students and researchers to develop and apply computational models, analyze complex biological data, and contribute to cutting-edge research in the life sciences.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
            CCB will develop mathematical models for diseases such as dementia, Alzheimer's, Parkinson's, and epileptic seizures. To conduct exhaustive research on neuropsychological disorders, the center will collaborate with healthcare organizations to acquire real-time patient data. It will implement sophisticated computational and mathematical methodologies, including artificial intelligence and machine learning, to forecast neurological disorders.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
            Additionally, the center will collaborate with epidemiologists worldwide to understand and control epidemics. To develop its computational facilities, CCB will secure funding from various government agencies, international research funds, and industry partners. The center's research will lead innovative initiatives and publish findings in high-impact journals.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            CCB will conduct specialized research, facilitate student mentoring, contribute to grant writing and publications, provide computational support, maintain research infrastructure, and assist with data analysis.
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px', fontFamily: "'Inter', sans-serif" }}>
            Publication and Project Outcomes
          </h2>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            One of the important outcomes from the centre is high quality research publications. CCB will publish their findings in reputed journals. The forecasting techniques, computational tools, and algorithms developed by the centre will bring patents and research grants, as well as computational and infrastructure facilities, to the institute. Research will bring international collaboration and recognition to the centre.
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px', fontFamily: "'Inter', sans-serif" }}>
            Student Training and Development
          </h2>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
            The center offers a comprehensive student training and development program designed to prepare individuals for careers in computational biology and related fields. This includes workshops and seminars covering computational techniques, programming, and data analysis, given by centre members and prominent scientists. Graduate students benefit from personalized mentorship and opportunities for collaborative projects with institutions and industry partners, including data collection from hospitals, healthcare providers, and public data repositories.
          </p>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            The program emphasizes career development through presentation opportunities at national and international conferences, support for research papers and grant proposal writing, and access to a robust network of alumni and professionals for guidance. Hands-on experience is integral, with students engaging in research using advanced computational tools and technologies and participating in interdisciplinary projects to enhance their skills.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComputationalBiology;
