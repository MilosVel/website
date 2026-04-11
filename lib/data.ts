import myFirstChatApp from "@/public/My_First_Chat_App.png";
import advancedChatApp from "@/public/Advanced_Chat_App.png";
import threads from "@/public/Threads.png";
import postSharingApp from "@/public/Post_Sharing_App.png";
import favouritePlacesApp from "@/public/favourite_places_app.png";

import crmApp from '@/public/crmApp.png'
import clientApp from '@/public/clientApp.png'
import staffingCompanyBackend from '@/public/staffingCompanyBackend.png'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Master's degree",
    faculty: "Faculty of Organizational Science",
    data: "University of Belgrade | Grade: 9.29",
  },
];


export const experiencesData = [
  {
    title: "Full-Stack Developer",
    date: "Mar 2026 - Present",
    firm: "Municipality of Brus",
    place: "Brus, Serbia",
  },
  {
    title: "Full-Stack Developer",
    date: "Jan 2024 - Feb 2026",
    firm: "Novu Staffing",
    place: "Miami, USA",
  },
  {
    title: "Full-Stack Developer",
    date: "Jan 2020 - Dec 2023",
    firm: "HireApp",
    place: "Miami, USA",
  },
  {
    title: "Data Analyst",
    date: "Feb 2017 - Dec 2019",
    firm: "Atlantic Group",
    place: "Belgrade, Serbia",
  },
] as const;


export const projectsData = [
  {
    title: "Advanced Chat App",
    description:
      "App for group and private real-time communication. App also covers: authorization, authentification, image upload on cloudinary...",
    tags: ["React", "Redux", "Node", "Express", "Socket.IO", "Mongo DB"],
    imageUrl: advancedChatApp,
    projectLinks: [
      "https://github.com/MilosVel/ChatApp-frontend",
      "https://github.com/MilosVel/ChatApp-backend",
      "https://milos-velickovic-chatapp.onrender.com",
    ],
  },
  {
    title: "My First Chat App",
    description:
      "This is my first chat app. Users can login or signup, and after creating profile they can have real-time communication",
    tags: ["React", "Node", "Express", "Socket.IO", "Mongo DB"],
    imageUrl: myFirstChatApp,
    projectLinks: [
      "https://github.com/MilosVel/ChatApp1-frontend",
      "https://github.com/MilosVel/ChatApp1-backend",
      "https://milos-velickovic-chatapp1.onrender.com",
    ],
  },

  {
    title: "Threads",
    description:
      "Feature-rich app. Clerk is used for authentification, UploadThing for uploading image, forms are managed with react hook form, data validation with Zod...",
    tags: ["TypeScript", "Next.js", "React", "Mongo DB"],
    imageUrl: threads,
    projectLinks: [
      "https://github.com/MilosVel/ThreadsApp",
      "https://threads-g04cg9zbr-milosvel.vercel.app/",
    ],
  },
  {
    title: " Post Sharing App",
    description:
      "Next-auth is used for authorization. After authentification user can create, update and delete its own posts. Other users's post he can only read",
    tags: ["Next.js"],
    imageUrl: postSharingApp,
    projectLinks: [
      "https://github.com/MilosVel/Next2023",
      "https://next2023-ex31bt2fb-milosvel.vercel.app/",
    ],
  },
  {
    title: "Favourite Places App",
    description:
      "Users can have look at other users's favourite places. After authorization and authentification, user can create, update, delete its own favourite places. User cann't change other places, except its own",
    tags: ["React", "Node", "Express", "JWT", "Mongo DB"],
    imageUrl: favouritePlacesApp,
    projectLinks: [
      "https://github.com/MilosVel/Mern-Stack-App",
      "https://milos-velickovic-mern-stack-app.onrender.com/",
    ],
  },
] as const;




export const mySeniorLevelProjects = [
  {
    title: "Staffing Company CRM",
    description:
      "Full-fledged CRM portal for a staffing company, featuring configuration, statistics, permissions, employee management, shift scheduling, and more.",
    tags: ["React", "TypeScript", "Zod", "Zustand", "React Query", "Shadcn", 'Tailwind'],
    imageUrl: crmApp,
    projectLinks: [
      "https://github.com/MilosVel/staffing-company-crm",
    ],
  },
  {
    title: "Client App",
    description:
      "Full-featured client application for managing staffing requests, shift scheduling, daily and weekly timesheets, and more.",
    tags: ["React", "TypeScript", "Zod", "Zustand", "React Query", "Shadcn", 'Tailwind'],
    imageUrl: clientApp,
    projectLinks: [
      "https://github.com/MilosVel/client-staffing-app",
    ],
  },
  {
    title: "Backend for Staffing Company",
    description:
      "Robust backend service powering the CRM, Client, and Mobile App, providing secure REST APIs for authentication, scheduling, permissions, and data management.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", 'JWT'],
    imageUrl: staffingCompanyBackend,
    projectLinks: [
      "https://github.com/MilosVel/staffing-company-backend",
    ],
  },

] as const

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "Shadcn",
  "React Native",
  "Express",
  "Fastify",
  "Nest",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Socket.IO",
  "Pixi.js",
  "Git",
  "Docker",
] as const;
