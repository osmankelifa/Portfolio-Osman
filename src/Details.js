// Enter all your detials in this file
// Logo images
// import logogradient from "./assets/logo.svg";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/osman.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  // logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Osman Kelifa",
  tagline: "Frontend developer",
  img: profile,
  about: `Hello! I'm a 39-year-old enthusiast of frontend development, currently
  studying in HyperIsland in Stockholm, Sweden. im really enjoying the
  challenge of coding and the small eureka moments every time you solve a
  problem! When I'm not crafting pixel-perfect interfaces, you can find me
  in the gym honing my skills in kickboxing. While kickboxing challenges
  you to dodge punches, coding throws bugs your way. I'm passionate about
  creating engaging user experiences and constantly seek to expand my
  knowledge in the ever-evolving field of technology. Let's connect in
  coding or in the ring and share our journey in the world of development!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/osman-kelifa-0ba948a5/",
  github: "https://github.com/osmankelifa",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Driver/Sales/Warehouse",
    Company: `Instabox`,
    Location: "Stockholm",
    Type: "Full time",
    Duration: "Jun 2019 - Sep 2022",
  },
  {
    Position: "Personal assistant",
    Company: `Ekerö kommun`,
    Location: "Stockholm",
    Type: "Full time",
    Duration: "Sep 2016 - Dec 2019",
  },
  {
    Position: "Sales",
    Company: `One Contact`,
    Location: "Barcelona",
    Type: "Full time",
    Duration: "Sep 2014 - Dec 2015",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Developer",
    Company: "Hyperisland",
    Location: "Stockholm - Onsite",
    Type: "Full time",
    Duration: "Aug 2023 - Present",
  },
  {
    Position: "Event project manager",
    Company: `Frans Schartau Handelsinstitut`,
    Location: "Stockholm",
    Type: "Full time",
    Duration: "Aug 2017 - 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "My first ever web page",
    image: projectImage1,
    description: `The humble beginnings`,
    techstack: "HTML/CSS",
    previewLink: "https://steady-paprenjak-3f5125.netlify.app/",
    githubLink: "https://github.com",
  },
  {
    title: "My 90 web page",
    image: projectImage2,
    description: ``,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://zingy-tartufo-a9ed2b.netlify.app/",
    githubLink: "https://github.com/osmankelifa/My-90s",
  },
  {
    title: "Next technologies",
    image: projectImage3,
    description: ``,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://cute-capybara-5cf3fd.netlify.app/https://google.com",
    githubLink: "https://github.com/osmankelifa/next-html-css-js",
  },
  {
    title: "Todo list",
    image: projectImage4,
    description: `We made a Todo list with a functioning backend and database, probably one the hardest projects we did in school`,
    techstack: "HTML/CSS, React",
    previewLink: "https://mytodolist-client.vercel.app/",
    githubLink: "https://github.com/osmankelifa/mytodolist",
  },
  {
    title: "Toolio",
    image: projectImage5,
    description: `A Momentum rip off, learned how to use apis`,
    techstack: "HTML/CSS, React",
    previewLink: "https://toolio-six.vercel.app/",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "o_kelifa@hotmail.com",
  phone: "+46 700469580",
};
