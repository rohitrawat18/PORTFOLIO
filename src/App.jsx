import { useEffect, useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiArrowDown, FiExternalLink, FiCode, FiLayers, FiZap, FiDatabase, FiServer, FiCpu, FiCheckCircle } from "react-icons/fi";

const GITHUB = "https://github.com/rohitrawat18";
const LINKEDIN = "https://www.linkedin.com/in/rohit-rawat-78533b334";
const EMAIL = "rohit.rawat41161@gmail.com";

const projects = [
  { n:"01", title:"RoyalCart", type:"FULL-STACK COMMERCE", desc:"A luxury commerce experience with a customer storefront, secure checkout, order lifecycle, and an operations dashboard for store managers.", stack:["Next.js 16","TypeScript","MongoDB","Mongoose","Clerk","Razorpay","Recharts"], href:"https://github.com/rohitrawat18/Royal-chart", accent:"gold", tag:"FEATURED BUILD", points:["Product discovery, cart and checkout flows","Admin CRUD, order management and analytics","Server-side payment signature verification"] },
  { n:"02", title:"Social Copilot", type:"AI-POWERED SAAS", desc:"An AI-assisted workspace concept for planning and creating social content, structured around a modern Next.js application.", stack:["Next.js","TypeScript","Drizzle","Tailwind CSS"], href:"https://github.com/rohitrawat18/social-copilot", accent:"violet", tag:"IN DEVELOPMENT", points:["Product specification and app foundation","Component-driven application structure","AI-first content workflow direction"] },
  { n:"03", title:"SUN.DOWN", type:"INTERACTIVE FRONTEND", desc:"An expressive, motion-led web experience focused on visual storytelling, typography, and responsive interaction.", stack:["HTML","CSS","JavaScript"], href:"https://github.com/rohitrawat18/SUN-DOWN", accent:"orange", tag:"WEB EXPERIENCE", points:["Custom visual design and typography","Responsive layout and interaction","Frontend animation experiments"] },
  { n:"04", title:"Backend Ledger", type:"BACKEND ENGINEERING", desc:"A backend-focused project in the portfolio, highlighting API and server-side development practice.", stack:["Backend","API","JavaScript"], href:"https://github.com/rohitrawat18/backend-ledger", accent:"blue", tag:"BACKEND", points:["Server-side implementation practice","Backend architecture exploration","API-oriented development"] },
  { n:"05", title:"Advance App Builder", type:"APPLICATION TOOLING", desc:"A public app-builder repository that reflects an interest in developer tooling and configurable digital experiences.", stack:["JavaScript","Web"], href:"https://github.com/rohitrawat18/Advance-App-builder", accent:"green", tag:"TOOLING", points:["Application builder concept","Frontend implementation","Iterative product development"] },
  { n:"06", title:"GEN-AI", type:"AI EXPERIMENTS", desc:"A collection of generative AI learning and development work, exploring how AI can become useful product functionality.", stack:["AI","JavaScript","Python"], href:"https://github.com/rohitrawat18/GEN-AI", accent:"pink", tag:"AI LAB", points:["Generative AI exploration","Prompt and product experiments","Applied learning through code"] },
];

const skillGroups = [
  {icon:<FiCode/>,name:"Frontend",items:["React","Next.js","TypeScript","JavaScript","Tailwind CSS","HTML5","CSS3","Vite"]},
  {icon:<FiServer/>,name:"Backend",items:["Node.js","Express.js","REST APIs","Authentication","Server Actions"]},
  {icon:<FiDatabase/>,name:"Database & data",items:["MongoDB","Mongoose","PostgreSQL","Prisma","Convex","MySQL"]},
  {icon:<FiCpu/>,name:"AI & integrations",items:["OpenAI API","Google Gemini","AI workflows","Prompt design","Clerk","JWT","Stripe","Razorpay"]},
  {icon:<FiLayers/>,name:"Tools & workflow",items:["Git","GitHub","Docker","GitHub Actions","Figma","VS Code","Recharts","Framer Motion"]},
];

const nav = ["About","Work","Stack","Contact"];

function SectionLabel({number,children}) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [active,setActive] = useState("Home");
  const [copied,setCopied] = useState(false);

  useEffect(()=>{
    const ids=["home","about","work","stack","contact"];
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id==="home"?"Home":entry.target.id[0].toUpperCase()+entry.target.id.slice(1));});
    },{rootMargin:"-35% 0px -55% 0px"});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el);});
    return ()=>observer.disconnect();
  },[]);

  const copyEmail=async()=>{
    try{await navigator.clipboard.writeText(EMAIL);setCopied(true);setTimeout(()=>setCopied(false),1800);}
    catch{window.location.href="mailto:"+EMAIL;}
  };

  return <div className="site-shell">
    <div className="noise" aria-hidden="true"/>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Rohit Rawat home"><span className="brand-mark">R<span>.</span></span><span className="brand-name">ROHIT RAWAT</span></a>
      <nav className={menuOpen?"nav-links open":"nav-links"}>
        {nav.map((item,i)=><a key={item} className={active.toLowerCase()===item.toLowerCase()?"active":""} href={"#"+item.toLowerCase()} onClick={()=>setMenuOpen(false)}><span>0{i+1}</span>{item}</a>)}
        <a className="nav-resume" href={LINKEDIN} target="_blank" rel="noreferrer">LET’S TALK <FiArrowUpRight/></a>
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<FiX/>:<FiMenu/>}</button>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-grid"/>
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
          <p className="eyebrow">FULL STACK DEVELOPER <span>—</span> INDIA</p>
          <h1>Building digital<br/>products with <em>purpose.</em></h1>
          <p className="hero-description">I’m Rohit — a developer focused on crafting modern web applications, thoughtful interfaces, and AI-powered experiences that solve real problems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <FiArrowUpRight/></a>
            <a className="button button-ghost" href="#contact">Get in touch <FiArrowDown/></a>
          </div>
          <div className="hero-socials">
            <a href={GITHUB} target="_blank" rel="noreferrer"><FiGithub/> GITHUB</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><FiLinkedin/> LINKEDIN</a>
            <a href={"mailto:"+EMAIL}><FiMail/> EMAIL</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative developer identity graphic">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="art-glow"/>
          <div className="terminal-card">
            <div className="terminal-top"><div className="traffic"><i/><i/><i/></div><span>rohit.ts — developer profile</span><span className="terminal-dots">•••</span></div>
            <div className="terminal-body">
              <div className="line-number">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07</div>
              <pre><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}<br/>  name: <span className="code-green">"Rohit Rawat"</span>,<br/>  role: <span className="code-green">"Full Stack Dev"</span>,<br/>  builds: [<span className="code-green">"Web"</span>, <span className="code-green">"AI"</span>],<br/>  mindset: <span className="code-green">"Keep shipping"</span><br/>{'}'};<br/><span className="code-muted">// turning ideas into impact_</span></pre>
            </div>
            <div className="terminal-bottom"><span><i/> SYSTEM READY</span><span>UTF-8&nbsp; · &nbsp;JS</span></div>
          </div>
          <div className="floating-chip chip-top"><FiZap/> BUILD · LEARN · REPEAT</div>
          <div className="floating-chip chip-bottom"><span className="chip-avatar">RR</span><span><b>Rohit Rawat</b><small>Developer & problem solver</small></span></div>
          <div className="hero-index">01 <span>/</span> 05</div>
        </div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section-wrap content-section about-section">
        <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid">
          <div><h2>Curiosity turns<br/>into <em>craft.</em></h2></div>
          <div className="about-copy">
            <p className="lead">I enjoy working across the stack — from shaping a clear, responsive interface to designing the APIs and data models behind it.</p>
            <p>My day-to-day toolkit revolves around React, Next.js, TypeScript, Node.js, and modern databases. I’m especially interested in products that bring together great UX, reliable engineering, and practical AI capabilities.</p>
            <p>I value clean architecture, thoughtful details, and learning by building. I’m currently growing deeper in system design, testing, and scalable backend patterns.</p>
            <div className="about-facts"><div><b>01</b><span>End-to-end<br/>product thinking</span></div><div><b>02</b><span>Modern<br/>web technologies</span></div><div><b>03</b><span>Always<br/>learning</span></div></div>
          </div>
        </div>
      </section>

      <section id="work" className="section-wrap content-section work-section">
        <SectionLabel number="02">SELECTED WORK</SectionLabel>
        <div className="section-heading"><h2>Things I’ve <em>built.</em></h2><p>A selection of experiments, products, and engineering work from my GitHub.</p></div>
        <div className="project-list">
          {projects.map(p=><article className={"project-card "+p.accent} key={p.n}>
            <div className="project-number">{p.n}</div>
            <div className="project-main">
              <div className="project-meta"><span>{p.type}</span><span className="project-tag">{p.tag}</span></div>
              <h3>{p.title}</h3><p className="project-desc">{p.desc}</p>
              <div className="project-points">{p.points.map(x=><span key={x}><FiCheckCircle/>{x}</span>)}</div>
              <div className="tech-pills">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
            </div>
            <a className="project-link" href={p.href} target="_blank" rel="noreferrer" aria-label={"Open "+p.title+" repository"}><FiArrowUpRight/></a>
          </article>)}
        </div>
        <a className="all-projects" href={GITHUB+"?tab=repositories"} target="_blank" rel="noreferrer">Explore all repositories <FiExternalLink/></a>
      </section>

      <section id="stack" className="section-wrap content-section stack-section">
        <SectionLabel number="03">TOOLS OF THE TRADE</SectionLabel>
        <div className="section-heading"><h2>My tech <em>stack.</em></h2><p>Tools I use to turn ideas into usable, maintainable products.</p></div>
        <div className="skills-grid">{skillGroups.map((g,i)=><div className="skill-card" key={g.name}><div className="skill-card-head"><span className="skill-icon">{g.icon}</span><span className="skill-index">0{i+1}</span></div><h3>{g.name}</h3><div className="skill-tags">{g.items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div>
        <div className="stack-note"><span className="note-star">✳</span><p><b>Always evolving.</b> I’m currently sharpening my system design fundamentals, automated testing, Docker workflows, and CI/CD practices.</p></div>
      </section>

      <section className="process-band">
        <div className="section-wrap process-inner"><span>HOW I APPROACH A BUILD</span><div><b>Understand</b><i>→</i><b>Design</b><i>→</i><b>Engineer</b><i>→</i><b>Ship & improve</b></div></div>
      </section>

      <section id="contact" className="section-wrap content-section contact-section">
        <SectionLabel number="04">HAVE A PROJECT IN MIND?</SectionLabel>
        <div className="contact-grid">
          <div><h2>Let’s make<br/>something <em>matter.</em></h2><p className="contact-intro">I’m open to full-time opportunities, internships, freelance work, and collaborations. Have an idea or a role in mind? Let’s talk.</p></div>
          <div className="contact-card">
            <span className="contact-card-label">THE BEST WAY TO REACH ME</span>
            <a className="email-link" href={"mailto:"+EMAIL}>{EMAIL}<FiArrowUpRight/></a>
            <button className="copy-button" onClick={copyEmail}>{copied?"COPIED TO CLIPBOARD":"COPY EMAIL ADDRESS"}</button>
            <div className="contact-divider"/>
            <div className="contact-socials"><a href={LINKEDIN} target="_blank" rel="noreferrer"><FiLinkedin/> LINKEDIN <FiArrowUpRight/></a><a href={GITHUB} target="_blank" rel="noreferrer"><FiGithub/> GITHUB <FiArrowUpRight/></a></div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">R<span>.</span></span><span className="brand-name">ROHIT RAWAT</span></a><span>DESIGNED & BUILT WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} ROHIT RAWAT</span></footer>
  </div>;
}

export default App;