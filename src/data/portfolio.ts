export const siteConfig = {
  name: "Pratik",
  fullName: "Pratik Makvana",
  title: "Full Stack Developer",
  tagline: ["Driven", "by logic"],
  description:
    "MCA student with strong knowledge of full-stack web development using MERN Stack, React.js, Next.js, and SQL. Experienced in building responsive web applications, RESTful API integration, authentication, and modern web technologies. Currently exploring AI-integrated web development and software engineering.",
  location: "Indore, Madhya Pradesh, India",
  email: "pratik.makvana1606@gmail.com",
  phone: "+91 7247637104",
  links: {
    github: "https://github.com/Pratik-Makvanaa",
    linkedin: "https://www.linkedin.com/in/pratik-makvana",
  },
  availability: "Available for work",
};

export const education = {
  primary: {
    school: "SGSITS, Indore ",
    degree: "MCA — Post Graduation (2025–2027)",
  },
  secondary: {
    school: "Mandsaur University",
    degree: "Graduation — 7.45 CGPA (2025)",
  },
};

export const experience = [
  {
    company: "Freelance Team Collaboration",
    role: "Full Stack Developer Intern",
    period: "May 2025 – Oct 2025",
  },
  {
    company: "IBM SkillsBuild",
    role: "Frontend Development Intern",
    period: "June 2024 – Aug 2024",
  },
];

export const focus = [
  "Full Stack Web Development",
];

export const projects = [
  {
    id: "01",
    title: "ColdVault — Cold Storage Management",
    stack: "React / Tailwind CSS / Spring Boot / MySQL",
    description:
      "Cold storage management and billing system with responsive dashboards, chamber management workflows, and REST API integration.",
    links: { live: "https://github.com/Pratik-Makvanaa", code: "https://github.com/Pratik-Makvanaa" },
    image: "/p1.png",
    cta: "View Project",
  },
  {
    id: "02",
    title: "StayAdda — Hotel Booking Platform",
    stack: "Node.js / Express / EJS / MongoDB",
    description:
      "Full-stack hotel booking platform with authentication, hotel listings, reviews, and booking management using MVC architecture.",
    links: { live: "https://github.com/Pratik-Makvanaa", code: "https://github.com/Pratik-Makvanaa" },
    image: "/p2.png",
    cta: "View on GitHub",
  },
];


export const stats = [
  { value: 2, suffix: "+", label: "Projects Built", description: "From concept to deployment across full-stack stacks." },
  { value: 2, suffix: "+", label: "Internships", description: "Real-world experience with React, Next.js, and Node.js." },
  { value: 10, suffix: "+", label: "Technologies", description: "React, Next.js, Node.js, MongoDB, MySQL, and more." },
];

export const skillCategories = [
  {
    link: "#",
    text: "Languages",
    items: [
      { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML/CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    link: "#",
    text: "Frameworks",
    items: [
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    link: "#",
    text: "Tools & DB",
    items: [
      { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];


export const socials = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LeetCode", href: "https://leetcode.com/YOUR_USERNAME", icon: "https://cdn.simpleicons.org/leetcode/ffffff" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Timeline", href: "#timeline" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export const resumeUrl = "/resume.pdf";
// timeline — BCA added at the end (oldest)
export const timeline = [
  {
    period: "2025 – 2027",
    role: "MCA — Post Graduation",
    org: "SGSITS, Indore (RGPV)",
    meta: "Full-time · Computer Applications",
    bullets: [
      "Deepening backend and systems-design fundamentals",
      "Building full-stack projects alongside coursework",
    ],
    tags: ["Java", "SQL", "DSA"],
    icon: "graduation",
  },
  {
    period: "May 2025 – Oct 2025",
    role: "Full Stack Developer Intern",
    org: "Freelance Team Collaboration",
    meta: "Remote · Team Project",
    bullets: [
      "Built REST APIs and responsive interfaces for client workflows",
      "Collaborated with a distributed team using Git and MVC architecture",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    icon: "briefcase",
  },
  {
    period: "June 2024 – Aug 2024",
    role: "Frontend Development Intern",
    org: "IBM SkillsBuild",
    meta: "Internship Program",
    bullets: [
      "Developed responsive UI components in React",
      "Practiced industry-standard frontend workflows and code review",
    ],
    tags: ["React", "HTML/CSS", "JavaScript"],
    icon: "code",
  },
  {
    period: "2022 – 2025",
    role: "BCA — Graduation",
    org: "Mandsaur University",
    meta: "7.45 CGPA",
    bullets: [
      "Built strong fundamentals in programming, DBMS, and web technologies",
      "Completed academic projects using core web development concepts",
    ],
    tags: ["C", "Java", "DBMS"],
    icon: "graduation",
  },
];