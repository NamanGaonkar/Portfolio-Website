export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  grade?: string;
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
    id: "cypher-wav",
    title: "CYPHER.WAV",
    description: "Cyberpunk-inspired standalone desktop music streamer with instant search and real-time playback, built with a custom PyQt6 interface and threaded background processing.",
    image: "/projects/cypher.png",
    technologies: ["Python 3", "PyQt6", "PyQt6 Multimedia", "yt-dlp", "QThreads", "QSS", "Mutagen/JSON"],
    githubUrl: "https://github.com/NamanGaonkar/CYPHER.WAV",
    liveUrl: "https://drive.google.com/file/d/18kY3kNcaEbP6YSQT9huXMKu8OxtuXpUb/view?usp=sharing",
    featured: true
  },
  {
    id: "stratos-f1",
    title: "STRATOS.f1",
    description: "F1 race replay & telemetry desktop app — replay any race from 2018–2026 with all 20 cars live on the circuit layout. Click any car for a full telemetry HUD with real-time gaps, tyre strategy, and driver data.",
    image: "/projects/stratos.png",
    technologies: ["Python", "Python Arcade", "PySide6", "FastF1", "pandas", "NumPy", "SciPy", "matplotlib"],
    githubUrl: "https://github.com/NamanGaonkar/STRATOS.f1",
    featured: true
  },
  {
    id: "civiclens-ai",
    title: "CivicLensAI",
    description: "AI-powered civic monitoring platform leveraging computer vision and machine learning to analyze and improve urban infrastructure.",
    image: "/projects/civiclens.png",
    technologies: ["Python", "AI/ML", "Computer Vision", "TensorFlow"],
    githubUrl: "https://github.com/NamanGaonkar/CivicLensAi-",
    liveUrl: "https://civic-lens-ai-inky.vercel.app/",
    featured: true
  },
  {
    id: "unipass",
    title: "UniPass",
    description: "Real-time smart attendance system with secure, time-bound QR sessions for classroom check-ins, instant dashboard updates, and duplicate-mark prevention.",
    image: "/projects/unipass.png",
    technologies: ["React", "Vite", "Tailwind CSS", "React Native CLI", "Expo", "Node.js", "Express", "REST APIs", "SHA Validation", "JSON DB"],
    githubUrl: "https://github.com/NamanGaonkar/Unipass---QR-based-App-For-University",
    featured: true
  },
  {
    id: "clipstack",
    title: "ClipStack",
    description: "Modern minimalist app for instantly saving and organizing links, code snippets, and notes with auto content detection and burn timers for temporary snippets.",
    image: "/projects/clipstack.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React", "Supabase"],
    githubUrl: "",
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
    featured: false
  },
  {
    id: "chatbot-jarvis",
    title: "J.A.R.V.I.S",
    description: "Intelligent conversational AI assistant built with advanced NLP, capable of context-aware interactions and task automation.",
    image: "/projects/jarvis.png",
    technologies: ["Python", "NLP", "React"],
    githubUrl: "https://github.com/NamanGaonkar/J.A.R.V.I.S-A.i-",
    featured: false
  },
  {
    id: "smoke-detector",
    title: "IoT Fire & Smoke Detector",
    description: "IoT-based safety system built with Arduino and ESP32 featuring real-time smoke detection, automatic alerts via email and mobile notifications to fire departments and homeowners. Includes smoke sensor, buzzer, motor driver, and 16x2 display for immediate response and safety action.",
    image: "/projects/smoke.png",
    technologies: ["Arduino", "ESP32", "IoT", "C++", "Sensors"],
    githubUrl: "",
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
  },
  {
    id: "vortex-holomap",
    title: "Vortex HoloMap",
    description: "Real-time local network discovery and visualization tool that discovers live devices, renders network topology in an interactive 2D map, shows device details, tracks traffic activity, and supports traceroute directly from the UI.",
    image: "/projects/vortexholomap.png",
    technologies: ["React", "Vite", "Flask", "Flask-SocketIO", "Scapy", "Tailwind CSS", "Socket.IO", "Framer Motion"],
    githubUrl: "",
    featured: true
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

export const EDUCATION: Education[] = [
  {
    id: "agnel",
    institution: "Agnel Institute of Technology and Design",
    degree: "Bachelor of Engineering - BE Electronics and Computer",
    field: "Engineering",
    period: "Aug 2023 - Aug 2027",
  },
  {
    id: "kv",
    institution: "Kendriya Vidyalaya (KV)",
    degree: "Secondary Education",
    period: "Apr 2011 - May 2023",
    grade: "1st - 12th",
  }
];
