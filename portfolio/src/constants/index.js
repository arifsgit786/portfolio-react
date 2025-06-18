import project1 from "../assets/assets/projects/ally_logo.jpg";
import project2 from "../assets/assets/projects/amway-1.jpeg";
import project3 from "../assets/assets/projects/cisco.png";
import project4 from "../assets/assets/projects/Mars-Logo.png";

export const HERO_CONTENT = `I’m a passionate Front-End Full Stack Developer with 7+ years of experience crafting high-performance web and mobile applications across banking, healthcare, and enterprise domains. I specialize in building scalable, secure, and accessible UIs using ReactJS, React Native, and Angular, with a strong backend foundation in Node.js and cloud solutions using AWS. I thrive on clean architecture, reusable components, and seamless API integration  whether it’s REST, GraphQL, or legacy SOAP.`;

export const ABOUT_TEXT = `I’ve worked across domains like banking, healthcare, and enterprise platforms, delivering applications that not only meet business goals but also offer a smooth and accessible user experience. My primary focus is on ReactJS, React Native, and Node.js, and I’m passionate about clean architecture, reusable components, and writing testable, maintainable code. I have hands-on experience working with TypeScript, Redux, REST/GraphQL/SOAP APIs, and implementing real-time functionality using Socket.io.
		Beyond the code, I’ve taken on leadership roles — mentoring junior developers, reviewing code, and setting standards for performance, testing, and accessibility. I believe in building inclusive digital experiences and always follow best practices like ADA compliance, unit testing with Jest, and CI/CD deployment pipelines using Docker, Bitrise, and GitLab. I enjoy collaborating with cross-functional teams, translating designs from Figma or Adobe XD into fully functional applications, and ensuring they run smoothly across devices using tools like BrowserStack.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Senior Full Stack Developer",
    company: "Ally Financial.",
    description: `Led a team in developing and maintaining Mobile/Web applications using ReactNative, Typescript, React.js, and Node.js. Implemented RESTful APIs and integrated with Postgresql databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "ReactNative",
      "React.JS",
      "Typescript",
      "Node.JS",
      "Postgresql",
      "Firebase",
      "AWS",
      "Browserstack",
      "Postman",
    ],
  },
  {
    year: "May 2023 - Feb 2024",
    role: "Senior Front-End Developer",
    company: "Cisco",
    description: `At Cisco, as Senior Front-End Engineer I played a key role in designing, developing, and maintaining high-quality web applications used across Cisco’s product lines—ranging from networking dashboards and cloud platforms to collaboration tools like Webex. `,
    technologies: [
      "ReactNative",
      "Angular",
      "Typescript",
      "Node.JS",
      "Postgresql",
      "Firebase",
      "AWS",
      "Browserstack",
      "Postman",
    ],
  },
  {
    year: "Aug 2019 - June 2022",
    role: "Junior Frontend Developer",
    company: "TCS- Amway",
    description: `Contributed to designing and developing a website and application for AMWAY using interactive user interfaces using ReactJS (HTML5, CSS3, JavaScript), Typescript, and React Native ,Created responsive website for smart devices utilizing responsive design, media queries, and frameworks like Metronome Core Library and MUI. 
`,
    technologies: [
      "React.JS",
      "Express.JS",
      "HTML5",
      "AWS",
      "MongoDB",
      "tailwindCSS",
      "ReactNative",
    ],
  },
  {
    year: "Aug 2018 - July 2019",
    role: "Frontend Developer",
    company: "TCS- MARS",
    description: `Assisted in developing responsive web pages using HTML5, CSS3, and TypeScript, focusing on layout, structure, and cross-browser compatibility using Angular (v6/7). `,
    technologies: [
      "Angular",
      "Express.JS",
      "CSS3",
      "AWS",
      "Postgresql",
      "tailwindCSS",
      "ReactNative",
    ],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Ally Financial",
    image: project1,
    description:
      "The Ally Financial app & Website is designed to help you manage your financial life on the go, encompassing your bank, credit card, invest, and auto accounts in a single app. ",
    technologies: ["ReactNative", "ReactJS", "Postgresql", "NodeJS", "GraphQL"],
  },
  {
    title: "CISCO",
    image: project3,
    description:
      "At Cisco, as Senior Front-End Engineer I played a key role in designing, developing, and maintaining high-quality web applications used across Cisco’s product lines—ranging from networking dashboards and cloud platforms to collaboration tools like Webex.  ",
    technologies: ["Angular", "ReactJS", "Postgresql", "NodeJS", "GraphQL"],
  },
  {
    title: "AMWAY",
    image: project2,
    description:
      "The Amway+ app is a business and productivity tool designed for Amway Independent Business Owners (IBOs). It provides features to help IBOs manage their business, track performance, engage with customers, and access resources. The app complements the Amway Wellbeing+ app, which focuses on health and wellness for both IBOs and their customers",
    technologies: [
      "HTML5",
      "CSS",
      "ReactJS",
      "Firebase",
      "MongoDB",
      "Javascript",
    ],
  },
  {
    title: "MARS",
    image: project4,
    description:
      "At Mars, Assisted in developing responsive web pages using HTML5, CSS3, and TypeScript, focusing on layout, structure, and cross-browser compatibility using Angular (v6/7). ",
    technologies: [
      "ReactNative",
      "Angular",
      "Postgresql",
      "ExpresJS",
      "GraphQL",
    ],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "Led the frontend modernization of Ally’s credit card application platform, using React.js, React Native, and Node.js. Built dynamic orchestration flows driven by real-time backend responses (pageToLoad) to streamline card eligibility, application, and rewards flows. Modernized legacy components, integrated Adobe Analytics, and optimized Apollo queries—improving performance by 40%. Spearheaded frontend best practices, guided interns/junior devs, and ensured seamless deployment via Bitrise and BrowserStack.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "Contributed to the development of AMWAY’s web and mobile applications using React.js, React Native, and GraphQL. Designed ADA-compliant, responsive interfaces and integrated biometric authentication features. Built reusable component libraries, implemented real-time data sync via WebSockets, and deployed production-ready builds using Docker and GitLab CI.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "HNo.2517 AuroraLane, Denton, TX, 76207",
  phoneNo: "+1 518 (606)-6902 ",
  email: "smohammadarif941@gmail.com",
};
