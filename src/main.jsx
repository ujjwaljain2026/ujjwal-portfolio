import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Database, Layers3, Terminal, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import './styles.css';

const CONTACT = { email: 'ujjujain2666@gmail.com', phone: '+91 9258965122', linkedin: 'https://www.linkedin.com/in/ujjwaljain2026/', github: 'https://github.com/ujjwaljain2026' };

const projects = [
  { number:'01', name:'EntryPass', type:'EVENT TECH · FULL STACK', description:'A QR-powered event ticketing platform designed to make college event entry faster, safer, and easier to manage.', tags:['Java','Spring Boot','Spring Data JPA','React','ZXing QR'], status:'IN DEVELOPMENT', accent:'mint', visual:'ticket' },
  { number:'02', name:'PulseCRM', type:'AGENTIC AI · CRM', description:'An AI-assisted CRM concept that connects customer support workflows with sales context and useful business insights.', tags:['Spring Boot','Spring AI','Gemini','React','PostgreSQL'], status:'MINI PROJECT', accent:'violet', visual:'pulse' },
  { number:'03', name:'Product API', type:'BACKEND · REST API', description:'A backend learning project focused on clean REST endpoints, persistence, and the fundamentals behind a maintainable Spring application.', tags:['Java','Spring Boot','REST API','JPA'], status:'LEARNING PROJECT', accent:'blue', visual:'api' }
];
const skills = [
  { icon:Code2, title:'Backend', items:['Java','Spring Boot','Spring MVC','Spring Security','REST APIs'] },
  { icon:Database, title:'Data', items:['PostgreSQL','MySQL basics','Spring Data JPA','Hibernate'] },
  { icon:Layers3, title:'Frontend & tools', items:['React','JavaScript','HTML / CSS','Git & GitHub','Postman'] },
  { icon:Sparkles, title:'Exploring', items:['Spring AI','LLM integrations','JWT & OAuth2','Docker fundamentals'] }
];
function App(){
 const [menuOpen,setMenuOpen]=useState(false);
 const closeMenu=()=>setMenuOpen(false);
 return <>
  <div className="grain" aria-hidden="true" />
  <header className="nav wrap">
    <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">uj.</span><span>UJJWAL JAIN<span className="brand-sub">DEVELOPER PORTFOLIO</span></span></a>
    <button className="mobile-menu" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    <nav className={menuOpen?'nav-links open':'nav-links'}>
      <a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#about" onClick={closeMenu}>About <span>02</span></a><a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
      <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
    </nav>
  </header>
  <main id="home">
   <section className="hero wrap">
    <div className="hero-copy">
      <div className="eyebrow"><span className="live-dot"/> AVAILABLE FOR INTERNSHIP OPPORTUNITIES</div>
      <h1>Building the<br/>logic behind<br/><span className="outline-word">great</span> <span className="green-word">products.</span></h1>
      <p className="hero-desc">I'm <strong>Ujjwal Jain</strong> — a computer science student and Java backend developer in the making. I build practical applications with Spring Boot, APIs, and a growing love for thoughtful product design.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
      <div className="hero-meta"><span><i>BASED IN</i> India</span><span><i>FOCUS</i> Java · Backend · Full stack</span></div>
    </div>
    <div className="hero-art" aria-label="Abstract developer illustration">
      <div className="art-top"><span>FIG. 01 — THE BUILDER</span><span>26° / 77°</span></div>
      <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>
      <div className="core"><div className="core-inner"><span className="code-bracket">{'{ }'}</span><span className="core-label">BUILD / LEARN<br/>REPEAT</span></div></div>
      <div className="float-card card-code"><div className="window-dots"><b></b><b></b><b></b><span>Application.java</span></div><pre><span className="purple">@SpringBootApplication</span>{'\n'}<span className="blue">class</span> <span className="yellow">Application</span> {'{'}{'\n'}  <span className="purple">public static void</span>{'\n'}  <span className="green">main</span>(String[] args) {'{'}{'\n'}    app.<span className="green">run</span>();{'\n'}  {'}'}{'\n'}{'}'}</pre></div>
      <div className="float-card card-stack"><span className="stack-icon"><Terminal size={17}/></span><span><b>SPRING BOOT</b><small>Building APIs that work</small></span><span className="stack-arrow"><ArrowUpRight size={15}/></span></div>
      <div className="art-bottom"><span>CURIOUS BY DEFAULT.</span><span>EST. 2026</span></div>
      <span className="art-index">UJ / 001</span>
    </div>
    <a className="scroll-cue" href="#work"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
   </section>
   <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">{['JAVA DEVELOPMENT','SPRING BOOT','REST API DESIGN','DATABASES','PRODUCT THINKING','JAVA DEVELOPMENT','SPRING BOOT','REST API DESIGN','DATABASES','PRODUCT THINKING'].map((t,i)=><span key={i}>{t}<b>✳</b></span>)}</div></section>
   <section className="section wrap" id="work">
    <div className="section-heading"><div><div className="eyebrow muted">01 / SELECTED WORK</div><h2>Ideas into <span className="green-word">working code.</span></h2></div><p>A few things I'm building and learning through. Each project is a chance to solve a real problem and get better at the craft.</p></div>
    <div className="projects">{projects.map(p=><article className={'project project-'+p.accent} key={p.number}>
      <div className="project-top"><span className="project-number">/{p.number}</span><span className="project-type">{p.type}</span><span className="project-status"><i></i>{p.status}</span></div>
      <div className="project-main"><div className="project-info"><h3>{p.name}<span>.</span></h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href="#contact">Discuss this project <ArrowUpRight size={16}/></a></div>
      <div className={'project-visual '+p.visual} aria-hidden="true">
       {p.visual==='ticket'&&<><div className="ticket-ui"><div className="ticket-head"><span>ENTRY<span className="ticket-green">PASS</span></span><span className="mini-pill">EVENT ACCESS</span></div><div className="ticket-event"><div><small>YOUR NEXT EXPERIENCE</small><b>Campus<br/>After Hours</b><span>ABES · STUDENT EVENTS</span></div><div className="qr"><div className="qr-pattern"></div></div></div><div className="ticket-foot"><span>PASS ID <b>EP-2048</b></span><span>STATUS <b className="green-word">VALID ✓</b></span></div></div><div className="visual-sticker">SCAN. ENTER. ENJOY.</div></>}
       {p.visual==='pulse'&&<><div className="pulse-ui"><div className="pulse-head"><span><span className="pulse-dot"></span> pulse<span>crm</span></span><span className="pulse-avatar">UJ</span></div><div className="pulse-greeting">Good morning, team <span>✳</span><small>Here's the business at a glance.</small></div><div className="pulse-metrics"><div><small>OPEN TICKETS</small><b>24 <i>↘ 8%</i></b></div><div><small>SALES PIPELINE</small><b>₹4.8L <i>↗ 12%</i></b></div></div><div className="pulse-chart"><div className="chart-label">Weekly activity <span>↗</span></div><div className="bars">{[28,43,35,61,47,78,57,92,65,75,52,85].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div></div></div><div className="visual-sticker">CONTEXT → ACTION</div></>}
       {p.visual==='api'&&<><div className="api-window"><div className="api-head"><span>● ● ●</span><span>localhost:8080/api/products</span></div><div className="api-method"><b>GET</b><span>/api/v1/products</span><i>200 OK</i></div><pre><span className="api-dim">{'{'}</span>{'\n'}  <span className="api-key">"id"</span>: <span className="api-num">101</span>,{'\n'}  <span className="api-key">"name"</span>: <span className="api-string">"Wireless Headphones"</span>,{'\n'}  <span className="api-key">"price"</span>: <span className="api-num">2499.00</span>,{'\n'}  <span className="api-key">"available"</span>: <span className="api-bool">true</span>{'\n'}<span className="api-dim">{'}'}</span></pre><div className="api-response"><span>RESPONSE</span><b>application/json</b></div></div><div className="visual-sticker">CLEAN API. CLEAR CONTRACT.</div></>}
      </div></div>
    </article>)}</div>
    <p className="project-note"><span>NOTE</span> These projects are works in progress. Replace this note with live GitHub repositories and deployed demos as they become available.</p>
   </section>
   <section className="about-section" id="about"><div className="wrap about-grid"><div className="about-left"><div className="eyebrow muted">02 / A LITTLE ABOUT ME</div><h2>Not just writing code.<br/><span className="green-word">Learning to build</span><br/>the right things.</h2><div className="about-stamp"><span>THE PROCESS</span><b>Learn.<br/>Build.<br/>Improve.</b><span>REPEAT ↗</span></div></div><div className="about-right"><p className="about-lead">I'm a B.Tech Computer Science student at ABES Engineering College, working toward becoming a strong Java backend engineer.</p><p>I enjoy understanding how applications work beneath the interface — from APIs and databases to authentication and the small decisions that make software dependable. Lately, I've also been exploring AI-powered features and building full-stack projects to connect the pieces.</p><p>This portfolio is a snapshot of the process, not the finish line. I'm looking for an internship where I can contribute, ask better questions, and learn from people who build good software.</p><div className="about-facts"><div><span>01</span><b>Backend-first</b><small>Java + Spring ecosystem</small></div><div><span>02</span><b>Build in public</b><small>Learn by shipping projects</small></div><div><span>03</span><b>Always curious</b><small>AI, product & clean design</small></div></div></div></div></section>
   <section className="section wrap" id="skills"><div className="section-heading"><div><div className="eyebrow muted">03 / TOOLKIT</div><h2>Tools I work <span className="green-word">with.</span></h2></div><p>My current toolkit is evolving. I focus on understanding the fundamentals instead of collecting technologies for a list.</p></div><div className="skills-grid">{skills.map((s,i)=><article className="skill-card" key={s.title}><div className="skill-card-top"><span>0{i+1}</span><s.icon size={20} strokeWidth={1.6}/></div><h3>{s.title}</h3><div className="skill-list">{s.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div><div className="learning-strip"><span className="learning-icon"><Sparkles size={17}/></span><div><b>Currently learning</b><p>Spring AI · Microservices · Git & GitHub · DSA practice</p></div><span className="learning-mark">IN PROGRESS ↗</span></div></section>
   <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div className="eyebrow"><span className="live-dot"/> 04 / LET'S CONNECT</div><h2>Have a good problem?<br/><span className="green-word">Let's build.</span></h2><p>I'm looking for a Java backend / software development internship and opportunities to work on meaningful products. If that sounds like a fit, I'd love to hear from you.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${CONTACT.email}`}>Send me an email <Mail size={17}/></a><a className="button button-outline" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub <Github size={17}/><ArrowUpRight size={14}/></a><a className="button button-outline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={17}/><ArrowUpRight size={14}/></a></div><div className="contact-details"><a href={`mailto:${CONTACT.email}`}><Mail size={15}/> {CONTACT.email}</a><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}><span className="phone-symbol">☎</span> {CONTACT.phone}</a></div><div className="contact-foot"><span>GOOD WORK TAKES CURIOSITY.</span><span>LET'S START A CONVERSATION <ArrowUpRight size={13}/></span></div></div></section>
  </main>
  <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">uj.</span></a><span>DESIGNED & BUILT WITH CURIOSITY.</span><span>© 2026 UJJWAL JAIN</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
 </>;
}

createRoot(document.getElementById('root')).render(<App/>);
