export interface Project {
    title: string;
    problem: string;
    solution: string;
    outcome: string;
    stack: string[];
    link?: string;
    image?: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
}

export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    link: string;
    image: string; // Path to image/pdf thumbnail
}

export interface PortfolioData {
    personal: {
        name: string;
        tagline: string;
        bio: string;
        photo: string;
        location: string;
    };
    social: SocialLinks;
    skills: string[];
    featuredProject: Project;
    projects: Project[];
    certificates: Certificate[];
}

export const portfolioData: PortfolioData = {
    // ... existing personal, social, etc ...
    personal: {
        name: "Mr. Melvin Philip",
        tagline: "Intelligent Systems Developer | Automation, Dashboards & AI-Assisted Solutions",
        bio: "I design and build structured software systems that transform complex data into clear, actionable insights. My focus is on automation, analytics dashboards, and AI-assisted decision platforms using Python and modern web technologies. I approach problems from a systems perspective, emphasizing clarity, scalability, and real-world impact.",
        photo: "/portfolio.png",
        location: "India",
    },
    social: {
        github: "https://github.com/MaxMelvin",
        linkedin: "https://www.linkedin.com/in/melvin-philip-4ab999323",
        email: "melvinphilip089@gmail.com",
    },
    skills: [
        "Workflow Architect | Product & Process Design",
        "Graphic Designer - CorelDrawX5",
        "Python (Tkinter)",
        "MySQL",
        "Database Design",
        "React",
        "Tailwind CSS",
        "AI-Assisted Systems (RAG)",
        "LLM Integration",
        "Dashboard Development",
        "Data Visualization",
        "Workflow Automation",
        "System Design",
        "REST APIs",
        "Git",
        "Report & PDF Generation"
    ],
    certificates: [
        {
            title: "Red Hat Certified Enterprise Application Developer",
            issuer: "Red Hat",
            date: "2024",
            link: "#",
            image: "/certificates/redhat.png"
        },
        {
            title: "Smart India Hackathon Finalist",
            issuer: "SIH",
            date: "2024",
            link: "#",
            image: "/certificates/SIH.png"
        },
        {
            title: "Data Structures & Algorithms",
            issuer: "Course Certification",
            date: "2023",
            link: "#",
            image: "/certificates/DSA Certificate.png"
        },
        {
            title: "AI & Machine Learning",
            issuer: "Certification",
            date: "2023",
            link: "#",
            image: "/certificates/AI Certificate.jpg"
        },
        {
            title: "Java Programming",
            issuer: "Certification",
            date: "2023",
            link: "#",
            image: "/certificates/Java Certificate.jpg"
        },
        {
            title: "Google Hackathon",
            issuer: "Google",
            date: "2024",
            link: "#",
            image: "/certificates/Google Hackathon 1.jpg"
        },
        {
            title: "C Programming Certification",
            issuer: "Course Certification",
            date: "2023",
            link: "#",
            image: "/certificates/C Certificiate.png"
        },
        {
            title: "Advanced C Programming",
            issuer: "Course Certification",
            date: "2023",
            link: "#",
            image: "/certificates/C Certificate 1.png"
        }
    ],
    featuredProject: {
        title: "AI for Accessibility — Multimodal Assistive System",
        problem: "Users with visual, speech, and motor impairments face significant digital barriers due to rigid, single-mode interfaces.",
        solution: "Designed a multimodal platform combining text-to-speech, speech-recognition, OCR, and computer vision. Integrated a unified interaction layer for hands-free navigation and object description.",
        outcome: "Created an ethically designed, offline-capable system that enables independent content access and improved situational awareness for impaired users.",
        stack: ["Python", "Speech Recognition", "OCR", "Computer Vision", "NLP", "Desktop/Web UI"]
    },
    projects: [
        {
            title: "Curriculum–Industry Alignment Intelligence Platform",
            problem: "Academic curricula often lag behind real-world industry skill requirements, leading to a skills gap.",
            solution: "Designed an AI-driven platform using RAG pipelines to semanticlly analyze syllabus documents and job descriptions. Built interactive dashboards to visualize alignment scores.",
            outcome: "Provided explainable alignment metrics and priority recommendations to support evidence-based curriculum decisions for institutional stakeholders.",
            stack: ["React", "Tailwind CSS", "Python", "RAG", "LLMs", "MySQL", "Vector DB"],
        },
        {
            title: "Smart Inventory Management System",
            problem: "Small and mid-sized businesses suffered from operational inefficiencies due to manual stock tracking.",
            solution: "Built a desktop-based system with real-time stock updates, low-inventory alerts, and automated PDF reporting. Implemented structured CRUD workflows.",
            outcome: "Improved operational decision-making through date-based analytics and ensured data consistency with a relational database.",
            stack: ["Python", "Tkinter", "MySQL", "Matplotlib", "PDF Generation", "Git"],
        },
        {
            title: "Smart Locker Management System",
            problem: "Managing secure storage with audit trails and real-time monitoring is complex without a centralized system.",
            solution: "Designed a system integrating embedded hardware (Arduino/ESP32) with a Python-based management layer. Enabled secure access via PIN/RFID.",
            outcome: "Achieved secure locker access with real-time state monitoring, fault handling, and comprehensive access logging.",
            stack: ["Arduino/ESP32", "Python", "Tkinter/Web UI", "MySQL", "Sensors", "IoT"],
        },
        {
            title: "VulnScope — AI-Assisted Vulnerability Analysis System",
            problem: "Manual inspection of security risks in systems is time-consuming, error-prone, and lacks visibility.",
            solution: "Automated the collection and analysis of system inputs using AI-assisted logic to prioritize vulnerabilities based on severity.",
            outcome: "Improved visibility into security posture and supported informed security decision-making through structured reports.",
            stack: ["Python", "Security Analysis", "AI Logic", "Data Processing", "Reporting"],
        },
        {
            title: "AI Tutor — Syllabus-Aligned Learning Assistant",
            problem: "Generic AI chatbots often provide off-topic or unreliable explanations that don't align with academic syllabi.",
            solution: "Built an AI-powered tutoring system with controlled responses strictly aligned with syllabus content. Enabled doubt resolution and practice questions.",
            outcome: "Ensured clarity, accuracy, and curriculum relevance for student users, supporting guided learning.",
            stack: ["Python", "React", "LLM Integration", "NLP", "Rule-based Constraints"],
        },
        {
            title: "Smart Glove — Assistive Gesture & Control System",
            problem: "Need for reliable, real-time translation of hand gestures into digital or physical actions for assistive use cases.",
            solution: "Designed a smart glove with flex and IMU sensors to identify predefined gestures with minimal latency.",
            outcome: "Enabled reliable gesture-based interaction for accessibility and control with practical gesture recognition.",
            stack: ["Arduino", "Sensors", "Python", "Embedded C", "Signal Processing"],
        },
        {
            title: "Mines Safety Monitoring System",
            problem: "Hazardous conditions in mining environments require continuous monitoring to prevent accidents.",
            solution: "Integrated sensors to detect gas levels and temperature with real-time alert mechanisms for unsafe conditions.",
            outcome: "Enabled early warnings and preventive actions, enhancing safety in harsh operating environments.",
            stack: ["IoT Sensors", "Microcontroller", "Python", "Embedded Programming", "Data Monitoring"],
        },
        {
            title: "Workflow Automation / Management System",
            problem: "Repetitive operational tasks require significant manual effort and lack process transparency.",
            solution: "Built a workflow-based management system with structured data handling, role-based actions, and logging features.",
            outcome: "Reduced manual effort and improved process transparency through system-driven automation.",
            stack: ["Python", "MySQL", "UI Framework", "Automation Scripts", "Git"],
        }
    ],
};