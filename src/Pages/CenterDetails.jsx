import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Breadcrum from '../Components/Common/Breadcrum';

const centersData = {
  'artificial-intelligence': {
    title: 'Center of Artificial Intelligence',
    mission: 'The Center of Artificial Intelligence aims to pioneer research in ML, natural language processing, and computer vision. It develops intelligent systems that solve real-world problems and trains researchers in state-of-the-art AI.',
    roles: [
      "The Center conducts foundational research in deep learning and neural network architectures.",
      "It collaborates with industry partners to build scalable AI solutions for automation and predictive analytics.",
      "Additionally, the center trains students to apply intelligent models in healthcare, finance, and engineering."
    ],
    publications: 'The center regularly publishes high-impact papers in leading AI conferences and journals, securing patents for novel algorithms developed in-house.',
    training: 'The student training program incorporates hands-on workshops on frameworks like TensorFlow and PyTorch, offering personalized mentorship to prepare them for global careers in artificial intelligence.'
  },
  'computational-biology': {
    title: 'Center of Computational Biology',
    mission: 'The Center for Computational Biology aims to advance research in biological systems using computational techniques. The center develops computational models, integrates diverse data sets, promotes machine learning and artificial intelligence in biological research, and trains computational biologists.',
    roles: [
      "The Center for Computational Biology (CCB) utilizes a multifaceted methodology to advance life sciences research. CCB conducts fundamental research by creating and refining computational tools and algorithms in computational biology. Utilizing bioinformatics, biophysics, structural biology, and systems biology, CCB will train students and researchers to develop and apply computational models, analyze complex biological data, and contribute to cutting-edge research in the life sciences.",
      "CCB will develop mathematical models for diseases such as dementia, Alzheimer's, Parkinson's, and epileptic seizures. To conduct exhaustive research on neuropsychological disorders, the center will collaborate with healthcare organizations to acquire real-time patient data. It will implement sophisticated computational and mathematical methodologies, including artificial intelligence and machine learning, to forecast neurological disorders.",
      "Additionally, the center will collaborate with epidemiologists worldwide to understand and control epidemics. To develop its computational facilities, CCB will secure funding from various government agencies, international research funds, and industry partners. The center's research will lead innovative initiatives and publish findings in high-impact journals.",
      "CCB will conduct specialized research, facilitate student mentoring, contribute to grant writing and publications, provide computational support, maintain research infrastructure, and assist with data analysis."
    ],
    publications: "One of the important outcomes from the centre is high quality research publications. CCB will publish their findings in reputed journals. The forecasting techniques, computational tools, and algorithms developed by the centre will bring patents and research grants, as well as computational and infrastructure facilities, to the institute. Research will bring international collaboration and recognition to the centre.",
    training: "The center offers a comprehensive student training and development program designed to prepare individuals for careers in computational biology and related fields. This includes workshops and seminars covering computational techniques, programming, and data analysis, given by centre members and prominent scientists. Graduate students benefit from personalized mentorship and opportunities for collaborative projects with institutions and industry partners, including data collection from hospitals, healthcare providers, and public data repositories.\n\nThe program emphasizes career development through presentation opportunities at national and international conferences, support for research papers and grant proposal writing, and access to a robust network of alumni and professionals for guidance. Hands-on experience is integral, with students engaging in research using advanced computational tools and technologies and participating in interdisciplinary projects to enhance their skills."
  },
  'industrial-robotics': {
    title: 'Center of Industrial Robotics',
    mission: 'To advance the field of industrial robotics through innovative research, aiming to enhance manufacturing efficiency, safety, and precision using next-generation robotic systems.',
    roles: [
      "The center focuses on designing and prototyping robotic arms, automated guided vehicles, and collaborative robots (cobots).",
      "Researchers work closely with the manufacturing sector to integrate robotics into existing assembly lines."
    ],
    publications: 'Researchers publish heavily in IEEE Robotics and Automation, contributing to advancements in industrial automation standards.',
    training: 'Students receive comprehensive training in ROS (Robot Operating System), kinematics, and machine vision, preparing them to seamlessly transition into advanced manufacturing roles.'
  },
  'iot-and-industrial-automation': {
    title: 'Center of IoT and Industrial Automation',
    mission: 'To drive digital transformation in industries by developing robust Internet of Things networks and automated control systems that gather real-time data for smarter decision making.',
    roles: [
      "Researching sensor networks, edge computing, and reliable communication protocols for industrial environments.",
      "Developing smart factory models that showcase the power of predictive maintenance and automated supply chain tracking."
    ],
    publications: 'The center focuses on publishing case studies and technical architectures regarding large-scale Industrial IoT deployments.',
    training: 'Students engage in embedded systems programming and cloud integration projects, utilizing industry-standard PLCs and IoT platforms.'
  },
  'app-development-studio': {
    title: 'App Development Studio',
    mission: 'To foster a culture of software innovation by researching and developing cutting-edge mobile and web applications that address campus, industry, and societal needs.',
    roles: [
      "The studio acts as an incubator for software products, combining UI/UX research with scalable backend architectures.",
      "It provides vital technical support for digitizing various processes within the university and beyond."
    ],
    publications: 'The studio routinely contributes open-source packages and publishes studies on human-computer interaction and app performance optimization.',
    training: 'Students gain real-world experience via agile software development methodologies, working in multidisciplinary teams to deploy live, full-stack applications.'
  },
  'chip-design': {
    title: 'Center of Chip Design',
    mission: 'To push the boundaries of VLSI design and microelectronics, focusing on low-power, high-performance semiconductor chips for emerging technologies.',
    roles: [
      "Conducting advanced research in VLSI architectures, ASIC design, and logic synthesis.",
      "Partnering with semiconductor leaders to tape out energy-efficient processors tailored for AI and IoT edge devices."
    ],
    publications: 'Faculty and researchers publish extensively in top-tier semiconductor and microelectronics journals and conferences.',
    training: 'The curriculum includes rigorous, hands-on training with industry-standard EDA tools, equipping graduates to join leading global semiconductor companies.'
  }
};

const CenterDetails = () => {
  const { id } = useParams();
  const data = centersData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return <Navigate to="/research" />;
  }

  // Handle multiple paragraphs separated by double newline
  const renderTraining = (text) => {
    return text.split('\n\n').map((paragraph, idx) => (
      <p key={idx} style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Dynamic Breadcrum matching the university theme */}
      <Breadcrum 
        title={data.title} 
        paths={[
          { name: 'Home', link: '/' },
          { name: 'Research', link: '/research' },
          { name: data.title }
        ]} 
      />

      <div className="wrap" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px 0 20px' }}>
        
        {/* Mission */}
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">OUR PURPOSE</span>
          <h2 className="s-title" style={{ marginTop: '5px' }}><em>Mission</em></h2>
          <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            {data.mission}
          </p>
        </div>

        {/* Roles and Responsibilities */}
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">RESPONSIBILITIES</span>
          <h2 className="s-title" style={{ marginTop: '5px' }}>Roles and <em>Responsibilities</em></h2>
          <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
          {data.roles.map((role, idx) => (
            <p key={idx} style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
              {role}
            </p>
          ))}
        </div>

        {/* Publication and Project Outcomes */}
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">ACHIEVEMENTS</span>
          <h2 className="s-title" style={{ marginTop: '5px' }}>Publication and Project <em>Outcomes</em></h2>
          <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
          <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            {data.publications}
          </p>
        </div>

        {/* Student Training and Development */}
        <div style={{ marginBottom: '40px' }}>
          <span className="s-tag">DEVELOPMENT</span>
          <h2 className="s-title" style={{ marginTop: '5px' }}>Student Training and <em>Development</em></h2>
          <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
          {renderTraining(data.training)}
        </div>

      </div>
    </div>
  );
};

export default CenterDetails;
