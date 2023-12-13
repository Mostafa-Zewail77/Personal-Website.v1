import youtube from '../assets/youtube-clone.webp'
// import animated from '../assets/animated-portfolio.webp'
import bondi from '../assets/bondi.webp'
import store from '../assets/e-store.webp'
import gericht from '../assets/gericht-restaurant.webp'
import gpt from '../assets/gpt-3.webp'
import todo from '../assets/to-do-list.webp'
import crud from '../assets/crud.webp'
import special from '../assets/special.webp'
import streamit from '../assets/streamit.webp'
import nike from '../assets/nike.webp'


export const projects = [
    {
      title: 'YouTube Clone',
      description: "Built a functional YouTube clone with a custom user interface similar to the original using <span class='highlight'>React and Material UI</span>. Developed stunning video sections, custom categories, channel pages, and a custom video player component that allows users to watch and control videos, including play, pause, and seek functionalities.",
      image:youtube,
      tags: ['React', 'Material UI', 'Axios', 'RapidAPI','Vercel '],
      source: 'https://github.com/mostafahassan-dev/YouTube-clone',
      visit: 'https://youtubeclone-dev.vercel.app',
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
      title: 'Streamit',
      description: "A Responsive React Movies App with a sleek UI and clean design.It allows users to browse and view movie details, and enjoy a seamless movie-watching experience.",
      image:streamit,
      tags: ['CSS','React', 'Vercel '],
      source: 'https://github.com/mostafahassan-dev/Streamit',
      visit: 'https://streamit-app.vercel.app',
      id: 2,
    },
    {
      title: 'Nike',
      description: "A responsive landing page featuring a modern and visually appealing user interface. This project serves as a multipurpose template that can be customized to suit various purposes. If you are seeking a modern web presence, you can easily adapt this landing page to your unique needs.",
      image: nike,
      tags: ['React','Tailwind CSS','Vite','Vercel '],
      source: 'https://github.com/mostafahassan-dev/Nike-Landing-Page',
      visit: 'https://nike--landing-page.vercel.app/',
      id: 3,
    },
    {
      title: 'Gericht Restaurant',
      description: "A fully Responsive Website for Gericht Restaurant that reflects the restaurant's branding and visual identity using React and custom CSS to enhance the website's visual appeal.",
      image: gericht,
      tags: ['CSS',' React','Vercel '],
      source: 'https://github.com/mostafahassan-dev/Gericht-Restaurant',
      visit: 'https://gericht-restaurant-dev.vercel.app',
      id: 4,
    },
    {
      title: 'GPT-3',
      description: "A landing page using React for the GPT-3 language model, showcasing its capabilities and features. The landing page includes a responsive design, interactive sections, and clear call-to-actions.",
      image:gpt,
      tags: ['CSS','React','Vercel '],
      source: 'https://github.com/mostafahassan-dev/GPT3',
      visit: 'https://gpt3-dev.vercel.app',
      id: 5,
    },
    {
      title: 'Bondi',
      description: "Bondi is a creative, colorful landing page for a single author or small agency. It provides a clean and minimalistic layout that highlights your content and allows visitors to focus on your work. The template is fully responsive and optimized for various screen sizes, ensuring that your website looks great on any device.",
      image:bondi,
      tags: ['HTML','CSS','Bootstrap '],
      source: 'https://github.com/mostafahassan-dev/Bondi-Template',
      visit: 'https://mostafahassan-dev.github.io/Bondi-Template/',
      id: 6,
    },
    {
      title: ' Product Management System',
      description: "A web application for efficiently managing customer data.  The application features a static layout created with HTML and CSS, alongside JavaScript functions to handle data. Implemented <span class='highlight'>CRUD</span> operations, including adding, updating, and deleting customer records",
      image: crud,
      tags: ['HTML','CSS','Vanilla JavaScript'],
      source: 'https://github.com/mostafahassan-dev/cruds-oprations',
      visit: 'https://mostafahassan-dev.github.io/cruds-oprations/',
      id: 7,
    },
    {
      title: 'Special Design',
      description: "A responsive website for a fictional agency using Vanilla JavaScript, and advanced CSS techniques including CSS Grid and Flexbox.The project features a visually appealing user interface with interactive design elements.",
      image: special,
      tags: ['HTML','CSS','Vanilla JavaScript'],
      source: 'https://github.com/mostafahassan-dev/Special-Design',
      visit: 'https://specialdesign.vercel.app/',
      id: 8,
    },
    // {
    //   title: 'Animated Portfolio',
    //   description: "This is a simple HTML/CSS template for a personal portfolio website. It is a modern and visually appealing design with animations and transitions that make the website stand out.",
    //   image:animated,
    //   tags: ['HTML','CSS','JavaScript','Boxicons','Typed.js'],
    //   source: 'https://github.com/mostafahassan-dev/Animated-Portfolio',
    //   visit: 'https://mostafahassan-dev.github.io/Animated-Portfolio/',
    //   id: 8,
    // },
    {
      title: 'To-Do List',
      description: "Simple to-do list web application features a simple user interface that allows users to easily add and manage tasks. The application also provides a <span class='highlight'>progress bar that shows the percentage </span> of completed tasks. Additionally, the application includes <span class='highlight'>local storage<span> functionality",
      image:todo,
      tags: ['HTML','CSS','JavaScript'],
      source: 'https://github.com/mostafahassan-dev/To-Do-List',
      visit: 'https://mostafahassan-dev.github.io/To-Do-List/',
      id: 9,
    },
    
  ];