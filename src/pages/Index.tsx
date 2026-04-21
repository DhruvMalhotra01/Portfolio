import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Smartphone, MapPin, GraduationCap, ExternalLink, Menu, X } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

// --- Data Definitions ---
const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  {
    category: "Programming & Core CS",
    items: ["Java", "Python", "Data Structures & Algorithms", "SQL", "Operating Systems", "Computer Networks", "DBMS", "Object-Oriented Design"],
  },
  {
    category: "Software Engineering & Backend",
    items: ["OOP", "System Design", "REST APIs", "Debugging", "Unit Testing", "FastAPI", "Node.js/Express", "Authentication (JWT)", "SQLAlchemy", "Docker"],
  },
  {
    category: "Frontend & Web",
    items: ["ReactJS", "TypeScript", "NextJS", "HTML", "CSS"],
  },
  {
    category: "AI, ML & Databases",
    items: ["LLM Integration", "RAG", "Prompt Engineering", "Data Analysis", "Scikit-learn", "Pandas", "NumPy", "MySQL", "MongoDB", "Redis", "Query Optimization"],
  },
  {
    category: "Tools & Others",
    items: ["Git/GitHub", "Postman", "VS Code", "Linux", "Jupyter Notebook", "Streamlit"],
  },
];

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Chitkara University, Punjab",
    period: "2023–2027",
  },
  {
    degree: "Class XII",
    institution: "D.A.V Public School, Ambala City",
    period: "2023",
  },
  {
    degree: "Class X",
    institution: "D.A.V Public School, Ambala City",
    period: "2021",
  },
];

const projects = [
  {
    name: "Credit Limit Analysis System",
    description: "Built a system to analyze credit limits from uploaded CSV data, extracting financial insights using data processing techniques. Implemented Google Authentication and Gmail API integration for secure access and automated report sharing.",
    tech: ["Python", "Matplotlib", "Google Auth", "Gmail API"],
    github: "https://github.com/malhotradhruv112004", // Generic fallback
  },
  {
    name: "Payment Escrow Verification System",
    description: "Built a smart contract-based escrow system to securely lock and release payments after verification, reducing fraud risk. Developed a full-stack Web3 app with Next.js and wallet integration for real-time transaction management.",
    tech: ["Blockchain", "Hardhat", "MetaMask", "Next.js"],
    github: "https://github.com/malhotradhruv112004", 
  },
  {
    name: "Mouse Pointer Bot Detection",
    description: "Built a machine learning-based bot detection system using cursor movement features to classify human vs automated activity. Improved model accuracy through testing, debugging, and validation across multiple scenarios.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/malhotradhruv112004",
  },
];

const achievements = [
  "Top 10 Finalist – SAP Hackathon 2025: Built a bot detection system using data-driven analysis to address real-world security challenges.",
  "Coding Ninjas Club – Organizer (2024–2025): Conducted problem-solving sessions and technical workshops for students.",
  "SCRS Society – Organizer (2025–Present): Coordinated technical events and collaborative learning activities.",
];

// --- Reusable Components ---

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="section-title text-center">{children}</h2>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`glass-card ${className}`}>{children}</div>
);

const SkillTag = ({ children }: { children: ReactNode }) => (
  <span className="skill-tag">{children}</span>
);

// --- Sections ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ "--scroll-progress": `${scrollProgress}%` } as React.CSSProperties}
      />
      <header className="navbar-blur">
        <div className="content-max-width flex items-center justify-between py-5">
          <button 
            onClick={() => handleNavClick("#hero")} 
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-portfolio-surface text-lg font-black text-primary border border-border">
                DM
              </span>
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-lg font-bold text-foreground">Dhruv Malhotra</p>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </button>
          
          <nav className="hidden gap-2 text-sm md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <button 
                key={item.href} 
                onClick={() => handleNavClick(item.href)}
                className="nav-item"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick("#contact")} 
              className="btn-primary hidden sm:inline-flex"
            >
              Let's talk
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="content-max-width py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-item text-left"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick("#contact")} 
                className="btn-primary mt-4"
              >
                Let's talk
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

const HeroSection = () => (
  <section id="hero" className="section-padding border-b border-border/50 relative overflow-hidden min-h-screen flex items-center">
    <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
    <div className="content-max-width flex flex-col items-center gap-12 relative z-10 w-full">
      <div className="flex-1 space-y-8 text-center max-w-4xl">
        {/* Profile Image */}
        <div className="profile-float-frame group mx-auto">
          <img
            src={profileImage}
            alt="Dhruv Malhotra"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
        </div>
        
        <div className="inline-flex items-center rounded-2xl border border-border bg-white/5 px-5 py-2 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to <span className="font-bold text-primary mx-1">Software Engineering</span><span className="font-bold text-primary ml-1">Opportunities</span>
        </div>
        
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight">
          Hi, I'm{" "}
          <span className="glow-text animate-float">
            Dhruv Malhotra
          </span>
        </h1>
        
      <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-muted-foreground">
  <span className="font-bold text-primary">
    Computer Science Student & Developer
  </span>{" "}
  | Building scalable backend systems and modern web applications with strong fundamentals in Data Structures & Algorithms. Comfortable solving real-world problems in fast-paced, collaborative environments.
</p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/DhruvMalhotra01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="www.linkedin.com/in/dhruv-malhotra-7a5221276"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="btn-outline flex items-center gap-3"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm justify-center">
          <span className="info-tag flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> B.E. CSE @ Chitkara University
          </span>
          <span className="info-tag">
            Backend Systems • Web Development • DS & Algo
          </span>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>About Me</SectionHeading>
      <p className="section-subtitle">Passionate aspiring software engineer</p>
      
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-start animate-stagger">
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a <strong className="text-primary font-bold">Computer Science</strong> student
            with strong fundamentals in <strong className="text-primary font-bold">Data Structures & Algorithms</strong> and hands-on experience in building scalable backend systems and modern web applications.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Experienced in developing REST APIs using <strong className="text-primary font-bold">Python (FastAPI)</strong>, working with databases, and implementing efficient system design. Familiar with ReactJS, TypeScript, and end-to-end development workflows.
          </p>
          <p className="font-semibold text-primary text-lg">
            I'm comfortable solving real-world problems in fast-paced, collaborative engineering environments. I've worked on diverse projects ranging from financial data analysis to blockchain web apps.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h3 className="card-title mb-4 pb-3 border-b border-border">Quick Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Ambala City, Haryana, India</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:malhotradhruv112004@gmail.com" className="hover:text-primary transition text-sm break-all">malhotradhruv112004@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Smartphone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">+91 9996633907</span>
              </li>
            </ul>
          </Card>
          
          <Card>
            <h3 className="card-title mb-4 pb-3 border-b border-border">Academic Background</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <strong className="text-primary font-bold">B.E. CSE</strong>, Chitkara University
              </li>
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">Class XII (2023): D.A.V Public School</li>
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">Class X (2021): D.A.V Public School</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Technical Stack</SectionHeading>
      <p className="section-subtitle">Technologies and tools I use across web development and software engineering</p>
      
      <div className="auto-grid animate-stagger">
        {skills.map((group) => (
          <Card key={group.category} className="h-full flex flex-col group">
            <h3 className="card-title mb-6 pb-4 border-b border-border group-hover:border-primary/50 transition-all">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <SkillTag key={item}>{item}</SkillTag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
    <section id="education" className="section-padding border-b border-border/50">
      <div className="content-max-width">
        <SectionHeading>Education</SectionHeading>
        <p className="section-subtitle">My academic background</p>
        
        <div className="space-y-8 max-w-4xl mx-auto animate-stagger">
          {education.map((edu, idx) => (
            <Card key={idx} className="timeline-card group">
              <span className="timeline-dot" />
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                <div>
                  <p className="eyebrow font-semibold tracking-widest">
                    {edu.institution}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                </div>
                <span className="text-sm font-semibold text-muted-foreground flex-shrink-0 bg-white/5 px-4 py-2 rounded-2xl">
                  {edu.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

const ProjectsSection = () => (
  <section id="projects" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Featured Projects</SectionHeading>
      <p className="section-subtitle">Selected works showcasing backend integration, blockchain, and data parsing</p>
      
      <div className="auto-grid animate-stagger">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col h-full group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="card-title flex-1">{project.name}</h3>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0" />
            </div>
            
            <p className="mt-4 flex-grow text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <SkillTag key={tech}>{tech}</SkillTag>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all group-hover:gap-3"
              >
                <Github className="h-4 w-4" /> View Source Code
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const AchievementsSection = () => (
  <section id="achievements" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Achievements & Recognition</SectionHeading>
      <p className="section-subtitle">Highlights from hackathons and technical leadership</p>
      
      <Card className="max-w-4xl mx-auto animate-fade-in-up">
        <ul className="space-y-6 text-base text-muted-foreground">
          {achievements.map((item, idx) => (
            <li key={idx} className="flex gap-4 group hover:translate-x-2 transition-transform">
              <div className="flex-shrink-0">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/80 mt-2 shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"></div>
              </div>
              <span className="flex-1 group-hover:text-foreground transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="content-max-width">
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="section-subtitle">Reach out for internships, projects, or collaborations</p>
      
      <div className="contact-grid max-w-6xl mx-auto animate-stagger">
        <Card>
          <h3 className="card-title mb-6">Let's Connect and Collaborate</h3>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            I'm actively seeking opportunities to apply my skills in software engineering and web development. Feel free to reach out to discuss potential roles or technical collaborations.
          </p>

          <div className="space-y-6 text-base text-foreground">
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Email Address</p>
              <a href="mailto:malhotradhruv112004@gmail.com" className="text-lg text-primary hover:text-primary/80 transition flex items-center gap-3 group break-all">
                <Mail className="h-5 w-5 flex-shrink-0" /> 
                <span className="group-hover:underline">malhotradhruv112004@gmail.com</span>
              </a>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Phone Number</p>
              <p className="text-lg text-foreground flex items-center gap-3">
                <Smartphone className="h-5 w-5" /> +91 9996633907
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Digital Presence</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="card-title mb-6">My Value Proposition</h3>
          <ul className="space-y-4 text-base text-muted-foreground">
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Strong problem solving through Data Structures and Algorithms</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Experience with Python (FastAPI), ReactJS, Next.js, databases</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Proven track record in Hackathons and community technical events</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Experience with Machine Learning methodologies and AI integrations</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Self-starter and effective team collaborator, comfortable in fast-paced environments</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p className="text-base">
        Dhruv Malhotra. All rights reserved.
    </p>
  </footer>
);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button 
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

// --- Main Component ---
export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
