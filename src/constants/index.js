import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    postgres,
    docker,
    ica,
    boxeoffice,
    question,
    iww,
    wnd,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Django Developer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostGres",
      icon: postgres,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

// change these to be personal

  const experiences = [
    {
      title: "Submission Specialist",
      company_name: "IC Axon",
      icon: ica,
      iconBg: "#E6DEDD",
      date: "July 2021 - January 2023",
      points: [
        "Enhanced client trust by delivering urgent submissions in a quick and competent fashion 3-4 times a week on top of the regular 5-10 weekly submissions",
        "Reduced client complaints by detecting formatting and grammatical errors beyond my scope with a keen eye for detail",
      ],
    },
    {
      title: "Assistant Coach",
      company_name: "Boxe Office",
      icon: boxeoffice,
      iconBg: "#000000",
      date: "June 2023 - Present",
      points: [
        "Established strong personal relationships with multiple clients, prioritizing their comfort and fostered potential for return business",
        "Improved clients' performances and ability using a keen eye for detail and clear, concise instructions",
      ],
    },
    {
      title: "???",
      company_name: "Your company here",
      icon: question,
      iconBg: "#E6DEDD",
      date: "Future",
      points: [
        "Developing the next chapter of my journey"
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "I Wear Whatevr",
      description:
        "Web application that allows users to digitally upload their wardrobe online and coordinate their weekly outfits based on the week's weather forecast.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: iww,
      source_code_link: "https://gitlab.com/XanderRubio/clueless",
    },
    {
      name: "Wheels N' Deals",
      description:
        "Online car dealership that can be used to organize vehicle inventory. Technicians can also organize their appointments and salespeople can organize their sales.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: wnd,
      source_code_link: "https://gitlab.com/JasonJJ98/wheels-n-deals",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
