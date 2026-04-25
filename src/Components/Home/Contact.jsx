import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;

    // 🔥 phone restriction (numbers only)
    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Basic validation
    if (!form.firstName || !form.email || !form.phone) {
      setStatus("Please fill required fields");
      return;
    }

    console.log(form);

    // 🔥 Success message
    setStatus("Message sent successfully!");

    // 🔥 Reset form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  return (
    <section className="contact-section rev" id="contact">
      <div className="wrap">
        <div className="contact-grid">

          {/* Left Info */}
          <div>
            <span className="s-tag">Get in Touch</span>
            <h2 className="s-title">
              We'd Love to <em>Hear From You</em>
            </h2>
            <div className="gold-bar"></div>

            <div className="c-item">
              <div className="c-ico"><FaMapMarkerAlt color="#c8952a" /></div>
              <div>
                <div className="c-title">Address</div>
                <div className="c-text">
                  SRM IST, Irungalur, Trichy – 621105, Tamil Nadu
                </div>
              </div>
            </div>

            <div className="c-item">
              <div className="c-ico"><FaPhone color="#c8952a"/></div>
              <div>
                <div className="c-title">Phone</div>
                <div className="c-text">+91 431 400 2000</div>
              </div>
            </div>

            <div className="c-item">
              <div className="c-ico"><FaEnvelope color="#c8952a"/></div>
              <div>
                <div className="c-title">Email</div>
                <div className="c-text">admissions@srmtrichy.edu.in</div>
              </div>
            </div>

            <div className="c-item">
              <div className="c-ico"><FaClock color="#c8952a"/></div>
              <div>
                <div className="c-title">Office Hours</div>
                <div className="c-text">Mon – Sat: 9:00 AM – 5:00 PM</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="cform" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="fg">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fg">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="fg">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fg">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="fg">
              <label>Program of Interest</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
              >
                <option value="">Select a Program</option>
                <option>B.Tech – Computer Science</option>
                <option>B.Tech – Electronics & Communication</option>
                <option>B.Tech – Mechanical Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
                <option>Ph.D</option>
              </select>
            </div>

            <div className="fg">
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn btn-gold">
              Send Message <FaPaperPlane />
            </button>

            {/* ✅ Status Message */}
            {status && (
              <div style={{ marginTop: "10px", fontSize: "14px" }}>
                {status}
              </div>
            )}

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;