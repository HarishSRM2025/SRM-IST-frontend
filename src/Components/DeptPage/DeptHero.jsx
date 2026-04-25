import React from "react";
import Breadcrum from "../Common/Breadcrum";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy: #0b1d35;
    --gold: #c8952a;
    --gold2: #e0aa45;
    --cream: #f8f6f1;
    --white: #fff;
    --gray: #6b7280;
    --lgray: #f3f4f6;
    --border: #e5e7eb;
    --text: #1a2332;
    --TB: 38px;
    --NB: 68px;
  }

  .dept-hero {
    background: var(--navy);
    padding: 80px var(--NB) 0;
    position: relative;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .dept-hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .dept-breadcrumb {
    display: flex;
    gap: 8px;
    font-size: 12px;
    color: rgba(255,255,255,0.45);
    margin-bottom: 20px;
  }

  .dept-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--white);
  }

  .dept-hero-desc {
    color: rgba(255,255,255,0.65);
    margin-bottom: 25px;
  }

  .btn-gold {
    background: var(--gold);
    color: var(--navy);
    border: none;
    padding: 12px 24px;
    cursor: pointer;
  }

  .btn-outline {
    border: 1px solid #fff;
    color: #fff;
    background: transparent;
    padding: 12px 24px;
    cursor: pointer;
  }

  .dept-hero-img-wrap {
    position: relative;
  }

  .dept-hero-img,
  .dept-hero-img-placeholder {
    width: 100%;
    height: 320px;
    border-radius: 6px 6px 0 0;
  }

  .dept-hero-img {
    object-fit: cover;
  }

  .dept-hero-img-placeholder {
    background: linear-gradient(135deg, rgba(200,149,42,0.2), rgba(11,29,53,0.8));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dept-hero-badge {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 14px;
  }

  /* Highlights */
  .dept-highlights-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .highlight-item {
    padding: 20px;
    border-right: 1px solid var(--border);
  }

  /* HOD */
  .dept-hod-inner {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
  }

  .hod-card {
    border: 1px solid var(--border);
    background: white;
  }

  .hod-img-placeholder {
    height: 250px;
    background: #eee;
  }

  @media (max-width: 900px) {
    .dept-hero-inner {
      grid-template-columns: 1fr;
    }

    .dept-highlights-inner {
      grid-template-columns: 1fr 1fr;
    }

    .dept-hod-inner {
      grid-template-columns: 1fr;
    }

    .dept-hero {
      padding: 60px 20px 0;
    }
  }
`;

const highlights = [
  { title: "NAAC A++ Accredited", desc: "Recognized for excellence." },
  { title: "Industry Curriculum", desc: "Built with industry partners." },
  { title: "Research Labs", desc: "Modern facilities." },
  { title: "Placement Support", desc: "Career-focused training." },
];

export default function DeptHero() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <Breadcrum 
        title="Computer Science <em style='color: var(--gold); font-style: italic'>& Engineering</em>"
        paths={[{ name: 'Home', link: '/' }, { name: 'Departments', link: '/departments' }, { name: 'CSE' }]}
        bgImage="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop&q=80"
      />


      {/* HOD */}
      <section style={{margin:"60px 0"}}>
        <div className="dept-programmes-inner">
        <div className="dept-section-header">
              <div>
                <div className="section-label">Message from Head</div>
                <h2 className="section-title">Our <em>Head of Department</em></h2>
              </div>
         </div>
        </div>
        <div className="dept-hod-inner">
          
          <div className="hod-card">
            <div className="hod-img-placeholder">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360"
                  alt="HOD"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            <div className="hod-body-content">
              <strong>Dr. Rajesh Kumar</strong>
              <p>Head of Department</p>
            </div>
          </div>

          <div>
            <h2 className="section-title"><em>Welcome</em> Message</h2>
            <p >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, aut est sunt corrupti veniam ipsum, culpa commodi numquam necessitatibus recusandae adipisci et nulla amet? Blanditiis ad perferendis dolor amet suscipit. Eaque officia tempora exercitationem. Impedit necessitatibus corrupti aperiam ratione ullam sed voluptatum quasi fugit id repudiandae architecto quas, ducimus deserunt delectus eligendi officiis doloremque dignissimos tempora velit! Minus doloremque maxime eaque vel exercitationem porro excepturi fugiat deserunt magnam sequi illo ad fuga in voluptas velit adipisci quisquam, molestiae architecto cupiditate nihil impedit natus nemo. Quo dolores a, quasi quia, doloribus dicta rerum obcaecati magnam distinctio amet repellendus illum quas exercitationem, ea aliquid voluptatum maiores voluptatibus alias dolore ratione et esse? Natus nisi perferendis aspernatur porro sint laborum eligendi? Est beatae harum nostrum fugit dolorem atque aliquam debitis vel, deserunt voluptate sunt dolore delectus consequatur totam ea quod dolores perspiciatis, ratione quam nobis eveniet sapiente, consectetur magnam. Dignissimos, sit maiores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}