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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    shirt,
    cabinmain,
    mockup,
    reactlogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "/myportfolio3d/about",
      title: "About",
    },
    {
      id: "/myportfolio3d/work",
      title: "Work",
    },
    {
      id: "/myportfolio3d/contact",
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
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Threejs Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  
  const projects = [
    {
      name: "Customize Shirt 3D",
      icon: reactlogo,
      iconBg: "#383E56",
      description:
        "Website for you to customize your own shirt design with 3D visualisation and stunning Animation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://mfaizmohamad.github.io/customshirt3d/",
    },
    {
      name: "Cabin Maintenance Website",
      icon: reactlogo,
      iconBg: "#E6DEDD",
      description:
        "Website for cabin maintenance daily use to easy access on date and reference.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: cabinmain,
      source_code_link: "https://mfaizmohamad.github.io/cabinmaintenance/",
    },
    {
      name: "Mockup Portfolio",
      icon: reactlogo,
      iconBg: "#E6DEDD",
      description:
        "A mockup react portfolio website by applying HTML, CSS, Bootstrap and Javascript. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: mockup,
      source_code_link: "https://mfaizmohamad.github.io/tutorial/",
    },
  ];
  
  export { services, technologies, projects };