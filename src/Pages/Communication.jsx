import React from "react";
import Breadcrum from "../Components/Common/Breadcrum";
import "../css/Communication.css";

const Communication = () => {
return (
<>
    <Breadcrum
        title="Communication"
        paths={[
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Communication" },
        ]}
    />

    <section className="communication-section">
        <div className="container">

        <div className="communication-profile">
            <h2>Mr. Srinivas Krishnamoorthy</h2>
            <p className="designation">Public Relation Officer</p>
            <p>SRM Institute of Science and Technology</p>
            <p>Tiruchirappalli</p>

            <div className="contact-info">
            <p>
                <strong>E-Mail:</strong>{" "}
                <a href="mailto:director.communications@srmist.edu.in">
                director.communications@srmist.edu.in
                </a>
            </p>

            <p>
                <strong>Phone:</strong> +91 44 27417241
            </p>
            </div>
        </div>

        <div className="communication-message">
            <h3>Directorate of Communication’s Office</h3>

            <p>
            Welcome to SRMIST – India’s premier large multidisciplinary
            university catering to a whole range of established and emerging
            new areas of study.
            </p>

            <p>
            At the Communication Directorate, we offer a window to the world
            outside to learn more about SRMIST as well as keep the world at
            large updated about the many exciting and vibrant happenings
            across our campuses.
            </p>

            <p>
            We are here to point you to the right place should you ever need
            assistance. Feel free to reach out to anyone in the Communication
            Directorate with your queries.
            </p>

            <p>
            Welcome once again and let’s stay in touch.
            </p>

            <div className="signature">
            <p><strong>Best Regards,</strong></p>
            <p>Mr. Srinivas Krishnamoorthy</p>
            <p>Public Relation Officer</p>
            </div>
        </div>

        </div>
    </section>
</>

);
};

export default Communication;
