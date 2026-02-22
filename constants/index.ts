export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  location?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: "Naman",
  headline: "Engineering at the intersection of Hardware & Intelligence.",
  roles: [
    "AI Developer",
    "Full-Stack Developer",
    "Embedded Systems Engineer",
    "DSA Enthusiast"
  ],
  bio: "Building scalable web applications while exploring the depths of Data Structures, Artificial Intelligence, and Embedded Systems. Passionate about creating intelligent solutions that bridge software and hardware."
};

export const PROJECTS: Project[] = [
  {
    id: "civiclens-ai",
    title: "CivicLensAI",
    description: "AI-powered civic monitoring platform leveraging computer vision and machine learning to analyze and improve urban infrastructure.",
    image: "/projects/civiclens.png",
    technologies: ["Python", "AI/ML", "Computer Vision", "TensorFlow"],
    githubUrl: "https://github.com/NamanGaonkar/CivicLensAi-",
    featured: true
  },
  {
    id: "chatbot-jarvis",
    title: "ChatbotJarvis",
    description: "Intelligent conversational AI assistant built with advanced NLP, capable of context-aware interactions and task automation.",
    image: "/projects/jarvis.png",
    technologies: ["Python", "NLP", "OpenAI", "React"],
    githubUrl: "https://github.com/NamanGaonkar/J.A.R.V.I.S-A.i-",
    featured: true
  },
  {
    id: "mindcare-ai",
    title: "MindCareAI",
    description: "Mental health support platform using AI to provide personalized recommendations and emotional wellness tracking.",
    image: "/projects/mindcare.png",
    technologies: ["Next.js", "AI/ML", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/NamanGaonkar/MindCareAi",
    featured: true
  },
  {
    id: "vitemate",
    title: "Vitemate.v1",
    description: "ViteMate is a personal health monitoring application designed to track and analyze vital health metrics with the help of an AI assistant. It allows users to log their blood pressure and pulse, visualize health trends, and receive personalized insights and recommendations.",
    image: "/projects/vitemate.png",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NamanGaonkar/ViteMate.V1",
    featured: true
  },
  {
    id: "smoke-detector",
    title: "IoT Fire & Smoke Detector",
    description: "IoT-based safety system built with Arduino and ESP32 featuring real-time smoke detection, automatic alerts via email and mobile notifications to fire departments and homeowners. Includes smoke sensor, buzzer, motor driver, and 16x2 display for immediate response and safety action.",
    image: "/projects/smoke.png",
    technologies: ["Arduino", "ESP32", "IoT", "C++", "Sensors"],
    githubUrl: "https://github.com/naman/smoke-detector",
    featured: false
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "A modern, full-featured web application for tracking expenses, managing budgets, and achieving financial goals. Built with PHP, MySQL, Chart.js, and vanilla JavaScript with a beautiful responsive UI.",
    image: "/projects/expense.png",
    technologies: ["PHP", "MySQL", "Chart.js", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/NamanGaonkar/Expense-Tracker",
    featured: false
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Software",
    items: ["React", "Next.js", "Node.js", "Full-Stack Web Dev", "TypeScript", "JavaScript", "REST APIs", "GraphQL"]
  },
  {
    category: "Intelligence & Logic",
    items: ["Python", "AI/ML", "Data Structures & Algorithms (DSA)", "TensorFlow", "PyTorch", "NLP", "Computer Vision"]
  },
  {
    category: "Systems",
    items: ["Embedded Systems", "C/C++", "IoT", "Arduino", "Raspberry Pi", "Microcontrollers", "Real-Time Systems"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "CODEXINTERN",
    company: "CODEXINTERN",
    role: "Web Development Intern",
    period: "Nov 2025 - Dec 2025",
    location: "Remote",
    description: "Completed a 1‑month virtual Front-End Development internship at CODEXINTERN, where I cloned a production website and worked on heavy UI components, responsive layouts, and interactive features using modern web technologies."
  },
  {
    id: "lenovo",
    company: "Lenovo",
    role: "AI Development Internship",
    period: "Oct 2025 - Nov 2025",
    location: "Remote",
    description: "Developed AI-powered solutions for enterprise applications, focusing on machine learning models and intelligent automation systems."
  },
  {
    id: "smarted",
    company: "SmartED Innovations",
    role: "Artificial Intelligence Internship",
    period: "Aug 2025 - Oct 2025",
    location: "Remote",
    description: "Worked on artificial intelligence projects and gained hands-on experience with machine learning algorithms, data processing, and AI model development."
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/NamanGaonkar",
  linkedin: "https://www.linkedin.com/in/naman-gaonkar-640822325/",
  email: "namanrgaonkar@gmail.com"
};
