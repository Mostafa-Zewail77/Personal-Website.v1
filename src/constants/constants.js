//projects
import youtube from '../assets/youtube-clone.webp'
import animated from '../assets/animated-portfolio.webp'
import bondi from '../assets/bondi.webp'
import store from '../assets/e-store.webp'
import gericht from '../assets/gericht-restaurant.webp'
import gpt from '../assets/gpt-3.webp'
import todo from '../assets/to-do-list.webp'
import crud from '../assets/crud.webp'
import special from '../assets/special.webp'
import streamit from '../assets/streamit.webp'
import nike from '../assets/nike.webp'
import botify from '../assets/botify-ai.webp'
import stayHealthy from '../assets/stayHealthy.webp'
import trvl from '../assets/TRVL.webp'
import weather from '../assets/weather.webp'
import leon from '../assets/leon.webp'

//certifications
import bootstrap from '../assets/certifications/bootstrap.webp'
import capstone from '../assets/certifications/capstone.webp'
import challenger from '../assets/certifications/challenger-track.webp'
import cloud from '../assets/certifications/cloud-agile.webp'
import git from '../assets/certifications/git-github.webp'
import html from '../assets/certifications/html-css-js.webp'
import intermediate from '../assets/certifications/intermediate-frontend.webp'
import intern2grow from '../assets/certifications/Intern2Grow-Certificate.webp'
import react from '../assets/certifications/react.webp'
import software from '../assets/certifications/software-engineering.webp'
import startfrontend from '../assets/certifications/start-frontend.webp'
import uiux from '../assets/certifications/ui-ux.webp'
import reactItrax from '../assets/certifications/react-itrax.jpg'
import reactRedux from '../assets/certifications/react-redux.jpg'

//badges
import startfrontendBadge from '../assets/certifications/badges/startfrontend-badge.png'
import intermediateBadge from '../assets/certifications/badges/intermediate-badge.png'
import softwareBadge from '../assets/certifications/badges/software-badge.png'
import cloudBadge from '../assets/certifications/badges/cloud-badge.png'
import gitBadge from '../assets/certifications/badges/git-badge.png'
import htmlBadge from '../assets/certifications/badges/html-badge.png'
import uiuxBadge from '../assets/certifications/badges/uiux-badge.png'
import reactBadge from '../assets/certifications/badges/react-badge.png'
import bootstrapBadge from '../assets/certifications/badges/bootstrap-badge.png'



export const projects = [
    {
      title: 'StayHealthy',
      description:"Designed and developed a <span class='highlight'> Medical Appointment platform</span> to seamlessly connect patients with doctors for consultations and prescriptions. Features include secure user authentication, appointment booking, doctor listings, profile management, and access to medical records." ,
      image: stayHealthy,
      tags: ['React','Vite','Express', 'MongoDB', 'Railway','Vercel '],
      source: 'https://github.com/mostafahassan-dev/StayHealthy',
      visit: 'https://stayhealthy-app.vercel.app/',
      id: 0,
    },
    {
      title: 'E-Store',
      description:" A full-stack e-store contains essential e-commerce functionalities, including product browsing, shopping cart management, and secure payment processing through <span class='highlight'>Stripe</span>. Integrated <span class='highlight'>Commerce.js</span> to effectively manage product inventory and order processing.",
      image: store,
      tags: ['React','Material UI','Commerce.js','Stripe','Vercel '],
      source: 'https://github.com/mostafahassan-dev/E-Store',
      visit: 'https://e-store-dev.vercel.app',
      id: 1,
    },
    {
      title: 'YouTube Clone',
      description: "Built a YouTube clone with a custom UI. Developed stunning video sections, categories, channel pages, and a custom video player with playback control.",
      image:youtube,
      tags: ['React', 'Material UI', 'Axios', 'RapidAPI','Vercel '],
      source: 'https://github.com/mostafahassan-dev/YouTube-clone',
      visit: 'https://youtubeclone-dev.vercel.app',
      id: 2,
    },
    {
      title: 'Nike',
      description: "A responsive landing page featuring a modern and visually appealing user interface. This project serves as a <span class='highlight'>multipurpose template</span> that can be customized to suit various purposes. If you are seeking a modern web presence, you can easily adapt this landing page to your unique needs.",
      image: nike,
      tags: ['React','Tailwind CSS','Vite','Vercel '],
      source: 'https://github.com/mostafahassan-dev/Nike-Landing-Page',
      visit: 'https://nike--landing-page.vercel.app/',
      id: 3,
    },
    
    {
      title: 'Botify',
      description: "Botify is a simple chat application that uses a<span class='highlight'> GPT-3.5 Turbo</span> model from OpenAI to generate responses based on user prompts. The application is built using JavaScript, Express for the server, and a basic HTML/CSS/JS setup for the client.",
      image: botify,
      tags: ['Vanilla JavaScript','Express','Vite','OpenAI','Vercel '],
      source: 'https://github.com/mostafahassan-dev/Botify',
      visit: 'https://botify-ai.vercel.app',
      id: 4,
    },
    {
      title: 'Streamit',
      description: "A Responsive React Movies App with a sleek UI and clean design.It allows users to browse and view movie details, and enjoy a seamless movie-watching experience.",
      image: streamit,
      tags: ['CSS','React', 'Vercel '],
      source: 'https://github.com/mostafahassan-dev/Streamit',
      visit: 'https://streamit-app.vercel.app',
      id: 5,
    },
    {
      title: 'Gericht Restaurant',
      description: "A fully Responsive Website for Gericht Restaurant that reflects the restaurant's branding and visual identity using React and custom CSS to enhance the website's visual appeal.",
      image: gericht,
      tags: ['CSS',' React','Vercel '],
      source: 'https://github.com/mostafahassan-dev/Gericht-Restaurant',
      visit: 'https://gericht-restaurant-dev.vercel.app',
      id: 6,
    },
    {
      title: 'GPT-3',
      description: "A landing page using React for the GPT-3 language model, showcasing its capabilities and features. The landing page includes a responsive design, interactive sections, and clear call-to-actions.",
      image:gpt,
      tags: ['CSS','React','Vercel '],
      source: 'https://github.com/mostafahassan-dev/GPT3',
      visit: 'https://gpt3-dev.vercel.app',
      id: 7,
    },
    {
      title: 'Bondi',
      description: "Bondi is a creative, colorful landing page for a single author or small agency. It provides a clean and minimalistic layout that highlights your content and allows visitors to focus on your work. The template is fully responsive and optimized for various screen sizes, ensuring that your website looks great on any device.",
      image:bondi,
      tags: ['HTML','CSS','Bootstrap '],
      source: 'https://github.com/mostafahassan-dev/Bondi-Template',
      visit: 'https://mostafahassan-dev.github.io/Bondi-Template/',
      id: 8,
    },
    {
      title: ' Product Management System',
      description: "A web application for efficiently managing customer data.The application features a static layout created with HTML and CSS, alongside JavaScript functions to handle data. Implemented <span class='highlight'>CRUD</span> operations, including adding, updating, and deleting customer records",
      image: crud,
      tags: ['HTML','CSS','Vanilla JavaScript'],
      source: 'https://github.com/mostafahassan-dev/cruds-oprations',
      visit: 'https://mostafahassan-dev.github.io/cruds-oprations/',
      id: 9,
    },
    {
      title: 'Special Design',
      description: "A responsive website for a fictional agency using Vanilla JavaScript, and advanced CSS techniques including CSS Grid and Flexbox.The project features a visually appealing user interface with interactive design elements.",
      image: special,
      tags: ['HTML','CSS','Vanilla JavaScript'],
      source: 'https://github.com/mostafahassan-dev/Special-Design',
      visit: 'https://specialdesign.vercel.app/',
      id: 10,
    },
    {
      title: 'Animated Portfolio',
      description: "This is a simple HTML/CSS template for a personal portfolio website. It is a modern and visually appealing design with animations and transitions that make the website stand out.",
      image:animated,
      tags: ['HTML','CSS','JavaScript','Boxicons','Typed.js'],
      source: 'https://github.com/mostafahassan-dev/Animated-Portfolio',
      visit: 'https://mostafahassan-dev.github.io/Animated-Portfolio/',
      id: 11,
    },
    {
      title: 'To-Do List',
      description: "Simple to-do list web application features a simple user interface that allows users to easily add and manage tasks. The application also provides a <span class='highlight'>progress bar</span> that shows the percentage of completed tasks. Additionally, the application includes <span class='highlight'>local storage</span> functionality",
      image:todo,
      tags: ['HTML','CSS','JavaScript'],
      source: 'https://github.com/mostafahassan-dev/To-Do-List',
      visit: 'https://mostafahassan-dev.github.io/To-Do-List/',
      id: 12,
    },
    {
      title: 'Weather App',
      image:weather,
      tags:['HTML','CSS','Javascript'],
      visit: 'https://mostafahassan-dev.github.io/Weather-App/',
      id: 13,
    },
    {
      title: 'TRVL',

      image:trvl,
      tags: ['React'],
      visit: 'https://trvl-dev.vercel.app/',
      id: 14,
    },
    {
      title: 'Leon',
      image:leon,
      tags:['HTML','CSS','Javascript'],
      visit: 'https://mostafahassan-dev.github.io/Leon-Template/',
      id: 15,
    }
    
  ];

export const certifications =  [
    {
      title: "Getting Started with Front-End and Web Development",
      image:startfrontend,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 0
    },
    {
      title: "Introduction to Software Engineering",
      image:software,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 1
    },
    {
      title: "Designing User Interfaces and Experiences (UI/UX)",
      image:uiux,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 2
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      image:html,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 3
    },
    {
      title: "Developing Websites and Front-Ends with Bootstrap",
      image:bootstrap,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 4
    },
    {
      title: "Getting Started with Git and GitHub",
      image:git,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 5
    },
    {
      title: "Developing Front-End Apps with React",
      image:react,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 6
    },
    {
      title: "Intermediate Web and Front-End Development",
      image:intermediate,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 7
    },
    {
      title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
      image:cloud,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 8
    },
    {
      title: "Front-End Development Capstone Project",
      image:capstone,
      issuer: "IBM via Coursera",
      credentialURL:"https://www.coursera.org/account/accomplishments/records/285BYLKWFLMA",
      id: 9
    },
    {
      title: "Certified React.js Developer",
      image: intern2grow,
      issuer: "intern2Grow",
      credentialURL: "https://intern2grow.pages.dev/certificate?id=aa189120c02f55101c6a95dee1ff67e8",
      id: 10
    },
    {
      title: "Web Development Challenger Track (FWD)",
      image: challenger,
      issuer: "Udacity",
      id: 11
    },
    {
      title: "React js",
      image: reactItrax,
      issuer: "itrax academy",
      id: 12,
    },
    {
      title: "React and Redux",
      image: reactRedux,
      issuer: "itrax academy",
      id: 13,
    },
  ];

export const badges = [
  {
    title: "Software Engineering Essentials",
    badge: softwareBadge,
    skills: ["Software Architecture","Software Engineering","Software Development Lifecycle"],
    issuer: " IBM via Coursera",
    date: "August 2023",
    description: "The badge earner has demonstrated an understanding of the software development lifecycle and the software building process. They have a foundational knowledge of software development and the tools used for it and can identify basic programming constructs. They can describe various types of system architectures, software architectures, and deployments. The badge earner can also identify the skills needed for software development roles and describe career opportunities for software engineers.",
    credentialURL: "https://www.credly.com/badges/5af6ae5d-4a9b-4beb-a2f0-f34a5c9c5c57",
    id: 0,
  },
  {
    title:"Git and GitHub Essentials",
    badge: gitBadge,
    skills: ["Git", "GitHub","Version Control","Software Development"],
    issuer: "IBM via Coursera",
    date: "September 2023",
    description: "This badge earner has demonstrated how to use Git and GitHub as code repositories for developing applications. They understand why version control is essential in creating open-source and commercial software. The badge earner can create repositories and branches, perform pull requests and merge operations, and use these repositories to collaborate with their teammates.",
    credentialURL:"https://www.credly.com/badges/6a894718-c1f2-4bff-8c71-065b354b79a5",
    id: 1,
  },
  {
    title: "Web Development with HTML, CSS, JavaScript Essentials",
    badge: htmlBadge,
    skills: ["CSS", "HTML", "JavaScript", "Front-End Web Development"],
    issuer: "IBM via Coursera",
    date: "November 2023",
    description: "This badge earner has demonstrated foundational knowledge of Web Development with HTML, CSS, and JavaScript. The individual can define and describe the languages, frameworks, and tools that are used to create interactive and engaging websites and Cloud applications. The earner has hands-on experience creating a web application using HTML, CSS, and JavaScript.",
    credentialURL:"https://www.credly.com/badges/dd8dc5d2-5dbd-4c26-913b-75cd1e4efc11",
    id: 2,
 
  },
  {
    title: "Front-end Development with React",
    badge: reactBadge,
    skills: ["React", "Redux","Hooks","State","Functional Programming"],
    issuer: "IBM via Coursera",
    date: "December 2023",
    description: "This credential earner has demonstrated how to use the React web framework user interface (UI) library to create front-end applications. They can manage data in an application with states and props and they understand how data and states are passed between components. The earner has demonstrated proficiency in connecting with external servers and RESTful services from a single-page React application. The earner can use features like Hooks and Redux to write more feature-rich React components.",
    credentialURL:"https://www.credly.com/badges/fcac150f-a697-473c-b241-75eca8bdaecc",
    id: 3,
  },
  
  {
    title: "Designing User Interfaces and Experiences (UI/UX)",
    badge: uiuxBadge, 
    skills: [ "UI & UX","Responsive Design","User Interface Design","Figma","Wireframing"],
    issuer: "IBM via Coursera",
    date: "January 2024",
    description: "This badge earner has demonstrated fundamental knowledge in visual design development. The individual can apply UI/UX concepts and web design methodologies, and use various UI design tools and elements for creating websites and applications. The earner has firsthand knowledge of creating a user interface for a website that is accessible on all types of devices, designing a progressive web application, designing a landing page using Figma, and designing a mobile application.",
    credentialURL:"https://www.credly.com/badges/da409856-f8be-4ff7-ae73-1acd34a5c7c3",
    id: 4,

  },
  {
    title: "Intermediate Front-end Web Development",
    badge: intermediateBadge,
    skills: ["Software Debugging","Jasmine","Automation","WordPress","CMS","webpack","SEO"],
    issuer: "IBM via Coursera",
    date: "March 2024",
    description: "This badge holder has developed fundamental knowledge in building a website with CMSs and optimizing its search ranking with various SEO techniques. Individuals can define and describe automated build tools, testing frameworks, and debugging. The earner has firsthand knowledge of creating websites with WordPress, optimizing websites for search ranking, building, and deploying a website with Webpack, testing a React application with Jasmine, and troubleshooting common errors with Chrome Dev Tool.",
    credentialURL: "https://www.credly.com/badges/0d5ea9eb-20ed-471a-805a-93f75e0cbf3c",
    id: 5,
  },
  {
    title: "Cloud Native, DevOps, Agile & NoSQL Essentials",
    badge: cloudBadge,
    skills: ["Agile","DevOps","Cloud Native","CI/CD","NoSQL","MongoDB","ZenHub"],
    issuer: "IBM via Coursera",
    date: "April 2024",
    description: "This badge earner has gained a fundamental knowledge of cloud concepts and the tools and techniques required for developing cloud-native applications. The earner can explain how a DevOps culture, CI/CD, and agile methodology aid the product development lifecycle. They have hands-on experience deploying apps, creating user stories in ZenHub, working with MongoDB for data integration, and using CI/CD for application enhancement and redeployment.",
    credentialURL: "https://www.credly.com/badges/cdb1b6d9-2a4b-46b8-b581-8df9e12397ee",
    id: 6,
  },
  {
    title: "Developing Websites and Front-Ends with Bootstrap",
    badge: bootstrapBadge,
    skills: ["Bootstrap","Responsive Design","Web Development"],
    issuer: "IBM via Coursera",
    date: " September 2024",
    description: "This badge earner has achieved proficiency in Bootstrap, a popular front-end framework. They grasp Bootstrap's key concepts, including layout features, content, and forms, and can set it up for projects. The earner knows how to explore Bootstrap themes and components, applying classes, styles, and components for responsive website elements. They know Bootstrap icons and can integrate Bootstrap-React in a basic application.",
    credentialURL: "https://www.credly.com/badges/bc19188a-95e8-4f3e-84af-89718a7703b9",
    id: 7,
  },
  {
      title: "Getting Started with Front-End and Web Development",
      badge: startfrontendBadge,
      skills: ["Web Development", "Wordpress", "Front-End Web Development"],
      issuer: "IBM via Coursera",
      date: "September 2024",
      description: "This badge earner has expertise in front-end development, exploring roles, skills, and trends. They understand web development steps, UI/UX design, and collaboration. They also grasp concepts like web browsers, load balancing, hosting, accessibility, and cloud benefits. They can compare front-end and back-end roles, version control, and CI/CD, and discuss No-Code advantages, CMS, and SEO. They can create websites using WordPress and plugins, highlighting qualifications and specialization paths.",
      credentialURL:"https://www.credly.com/badges/0257d0e5-9b96-49c4-be78-8a108f427696",
      id: 8, 
  },  
  
 
]

export const topicFormat = {
  "html": "HTML",
  "css": "CSS",
  "react": "React",
  "javascript": "JavaScript",
  "nodejs": "Node.js",
  "mongodb": "MongoDB",
  "vite": "Vite",
  "figma": "Figma",
  "git": "Git",
  "github": "GitHub",
  "github-api": "GitHub API",
  "aws": "AWS",
  "next": "Next.js",
  "express": "Express",
  "bootstrap": "Bootstrap",
  "react-bootstrap": "React Bootstrap",
  "tailwind-css": "Tailwind CSS",
  "tailwind": "Tailwind",
  "material-ui": "Material UI",
  "chakra-ui": "Chakra UI",
  "shadcn-ui": "Shadcn UI",
  "scss": "SCSS",
  "netlify": "Netlify",
  "vercel": "Vercel",
  "heroku": "Heroku",
  "railway": "Railway",
  "render": "Render",
  "firebase": "Firebase",
  "ai": "AI",
  "openai": "OpenAI",
  "chatgpt": "ChatGPT",
  "redux": "Redux",
  "redux-toolkit": "Redux Toolkit",
  "axios": "Axios",
  "firebase-auth": "Firebase Auth",
  "react-router": "React Router",
  "reacthookform": "React Hook Form",
  "commercejs": "Commerce.js",
  "stripe": "Stripe",
  "e-commerce": "E-Commerce",
  "oop": "OOP",
  "typescript": "TypeScript",
  "rapid-api": "Rapid API",
  "json": "JSON",
  "coursera": "Coursera",
  "udemy": "Udemy",
  "ibm": "IBM",
  "vanilla-javascript": "Vanilla JS",
  "react-native": "React Native",

};