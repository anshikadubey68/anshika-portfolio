import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profileImage='/profile.png';
const github='https://github.com/anshikadubey68';
const linkedin='https://www.linkedin.com/in/anshikadubey';

const skills={
  'Languages':['C','C++','Python','Java','SQL','JavaScript','TypeScript'],
  'Web Development':['HTML','CSS','React.js','Next.js','Node.js','Express.js','Flask','REST APIs'],
  'AI / ML':['TensorFlow','Keras','Scikit-learn','NumPy','Pandas','Matplotlib','CNN','NLP'],
  'Databases & Tools':['MongoDB','MySQL','Git','GitHub','VS Code']
};
const projects=[
 {title:'Smart Traffic Signal Control System',date:'June 2026 – July 2026',tag:'Algorithms • C++',desc:'Modeled a city road network as a weighted graph and built traversal, shortest-route, congestion detection, and signal recommendation features.',points:['6 intersections and 8+ weighted roads','BFS, DFS and Dijkstra for traversal and shortest routes','Linear search and selection sort for congestion detection','Recommended signal timings from 15–45 seconds'],tech:'C++, DSA, Graphs, BFS/DFS, Dijkstra, OOP'},
 {title:'Automated Stream Changeover – Flow Metering System',date:'March 2026 – May 2026',tag:'Full Stack • IIoT',desc:'Built a full-stack IIoT application for monitoring parallel pipeline streams with automated failover and secure operator authentication.',points:['4 parallel streams with refresh every 2 seconds','Fault detection and automatic stream switching under 50ms','scrypt password hashing and session cookies','4-digit OTP authentication with 10-minute expiry'],tech:'Node.js, Express.js, MongoDB, JavaScript, REST APIs, OTP, HTTP-only Cookies, Render'},
 {title:'AgroBot',date:'Infosys Springboard • Aug 2025 – Oct 2025',tag:'AI/ML • Flask',desc:'AI-powered multilingual agricultural assistant for crop disease identification and treatment recommendations.',points:['CNN image classification across 15 disease/healthy classes','Fuzzy symptom matching using RapidFuzz','6-language multilingual support with automatic language detection','Farmer/Admin role-based modules and dynamic disease data'],tech:'Python, Flask, TensorFlow/Keras, CNN, RapidFuzz, NumPy, Pandas, JSON'}
];
const certificates=['Database Management System Part – 1 — Infosys Springboard (July 2026)','Programming using C++ — Infosys Springboard (August 2025)','MOOC on Introduction to Artificial Intelligence & Machine Learning (March 2025)','MOOC on Introduction to C Programming Language (January 2025)'];
const achievements=['Qualified for Round 2 of Build-a-thon 2.0 Hackathon — Board Infinity','2 HackerRank Bronze Badges in C++ & Python','4th Position in FTS Dance Finale among 300+ participants at LPU'];

function App(){
 const [menu,setMenu]=React.useState(false);
 return <div className="site">
  <nav className="nav"><a className="brand" href="#home">AD<span>.</span></a><button className="menu" onClick={()=>setMenu(!menu)}>☰</button><div className={menu?'links open':'links'}>{['About','Skills','Projects','Experience','Achievements','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}</div></nav>
  <main>
   <section id="home" className="hero wrap">
    <div className="hero-copy"><p className="eyebrow">COMPUTER SCIENCE ENGINEERING • FULL STACK</p><h1>Hi, I'm <span>Anshika.</span><br/>I build things for the web.</h1><p className="lead">CSE student at Lovely Professional University, passionate about full-stack development, AI/ML and building practical, user-focused solutions.</p><div className="actions"><a className="btn primary" href="#projects">View my work ↓</a><a className="btn ghost" href="mailto:anshikadubey68@gmail.com">Let's connect</a></div><div className="socials"><a href={github} target="_blank">GitHub ↗</a><a href={linkedin} target="_blank">LinkedIn ↗</a><a href="mailto:anshikadubey68@gmail.com">Email ↗</a></div></div>
    <div className="portrait-wrap"><div className="portrait-card"><img src={profileImage} alt="Anshika Dubey"/></div><div className="floating"><b>8.93</b><small>CGPA</small></div></div>
   </section>
   <section id="about" className="section wrap two"><div><p className="eyebrow">01 — ABOUT ME</p><h2>Curious mind.<br/><em>Builder's mindset.</em></h2></div><div className="text"><p>I'm a Computer Science & Engineering student at Lovely Professional University with a strong interest in Full Stack Development and AI/ML.</p><p>I enjoy turning ideas into working products — from graph-based traffic systems and IIoT dashboards to multilingual AI assistants.</p><div className="facts"><div><b>8.93</b><span>CGPA</span></div><div><b>6</b><span>Languages in AgroBot</span></div><div><b>15</b><span>Disease classes</span></div></div></div></section>
   <section id="skills" className="section dark"><div className="wrap"><p className="eyebrow">02 — TOOLKIT</p><h2>Skills & technologies</h2><div className="skill-grid">{Object.entries(skills).map(([k,v])=><div className="skill-card" key={k}><h3>{k}</h3><div>{v.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></div></section>
   <section id="projects" className="section wrap"><p className="eyebrow">03 — SELECTED WORK</p><h2>Projects</h2><div className="projects">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-num">0{i+1}</div><div className="project-body"><div className="project-top"><span>{p.tag}</span><span>{p.date}</span></div><h3>{p.title}</h3><p>{p.desc}</p><ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul><p className="tech">{p.tech}</p></div></article>)}</div></section>
   <section id="experience" className="section dark"><div className="wrap two"><div><p className="eyebrow">04 — EXPERIENCE</p><h2>Infosys<br/><em>Springboard</em></h2></div><div className="experience"><p className="role">AI Intern · Virtual <span>Aug 2025 – Oct 2025</span></p><h3>AgroBot — AI-Based Multilingual Crop Disease Detection System</h3><p>Created an AI-powered agricultural assistant using Python, Flask, TensorFlow/Keras and RapidFuzz for crop disease identification and treatment recommendations.</p><div className="pillrow"><span>CNN</span><span>Flask</span><span>TensorFlow</span><span>RapidFuzz</span><span>Multilingual AI</span></div></div></div></section>
   <section id="achievements" className="section wrap two"><div><p className="eyebrow">05 — HIGHLIGHTS</p><h2>Achievements &<br/><em>certifications</em></h2></div><div className="lists"><h3>Achievements</h3>{achievements.map(x=><div className="list-item" key={x}>✦ {x}</div>)}<h3 className="cert-title">Certificates</h3>{certificates.map(x=><div className="list-item" key={x}>↳ {x}</div>)}</div></section>
   <section id="contact" className="contact"><div className="wrap contact-inner"><p className="eyebrow">06 — GET IN TOUCH</p><h2>Let's build something<br/><em>worth talking about.</em></h2><a className="email" href="mailto:anshikadubey68@gmail.com">anshikadubey68@gmail.com ↗</a><div className="contact-links"><a href={github} target="_blank">GitHub</a><a href={linkedin} target="_blank">LinkedIn</a><span>Varanasi, India</span></div></div></section>
  </main><footer><div>© 2026 Anshika Dubey</div><div>Designed & built with React + CSS</div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
