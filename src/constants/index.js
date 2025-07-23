import project1 from "../assets/projects/project-3.jpg";
import project2 from "../assets/camprev.png";
import project3 from "../assets/portfolio.png";
import project4 from "../assets/ecommerce.png";

export const HERO_CONTENT = `I am an enthusiastic full-stack developer with a knack for building 
scalable and high-performance web applications. With over 2 years of experience in the software 
industry, I’ve developed expertise in technologies like Java, Spring Boot, AWS, React, Angular, 
and MySQL. My goal is to leverage my skills in full-stack development, cloud technologies, and system 
 design to create innovative solutions that solve real-world problems and deliver exceptional 
 user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong focus 
on building efficient, scalable, and user-centric web applications. With over 2 years of professional 
experience, I’ve worked extensively with technologies like Java, Spring Boot, React, Angular, MySQL, 
and AWS.

My journey into software development was driven by a natural curiosity for problem-solving and 
system design. Over time, that curiosity evolved into a career centered around crafting clean, 
maintainable code and continuously improving my technical skill set.

I thrive in collaborative environments and enjoy tackling complex challenges that push me to think 
creatively and strategically. Outside of work, I love exploring new technologies, sharpening my DSA 
skills, and staying engaged with the latest trends in software architecture and backend engineering.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - Present",
    role: "Software Development Engineer",
    company: "ISS-STOXX",
    description: `Collaborated with cross-functional teams to strategize and build a content browsing 
    application. Implemented a CRON-based email alert system that automated user notifications 
    and emails, resulting in a 40% increase in engagement with the Content Library based on user 
    subscription preferences.This role strengthened my backend development skills and reinforced the importance of aligning technical solutions with user behavior.`,
    technologies: ["Java", "AWS", "SpringBoot", "React.js", "mySQL"],
  },
  {
    year: "July 2023 - March 2024",
    role: "Junior Developer",
    company: "ISS-STOXX",
    description: ` I contributed to enhancing the internal Vote Disclosure System by designing 
    and implementing file upload functionality and building efficient data parsers, which significantly 
    improved the application's responsiveness. Working closely with a diverse team, 
    I consistently met deadlines and project goals, demonstrating strong communication skills, 
    adaptability, and a collaborative mindset`,
    technologies: ["Java", "SpringBoot", "React.js", "mySQL"],
  },
  {
    year: "January 2023 - June 2023",
    role: "Intern",
    company: "ISS-STOXX",
    description: `Spearheaded the development and migration of an internal Vote Disclosure System 
    using Java Spring Boot and Angular, significantly improving performance and modernizing the UI. 
    Enhanced responsiveness by 30% through efficient SQL procedures and optimized APIs, and improved 
    user experience by integrating Angular frameworks and the Ag-Grid library. 
    This project also showcased my ability to quickly learn new technologies, 
    gaining proficiency in Angular and Spring Boot.`,
    technologies: ["Java", "SpringBoot", "Angular", "mySQL"],
  }
];

export const CERTIFICATIONS = [
  {
    year: "July 2025",
    role: "AWS Certified Cloud Practitioner",
    company: "AWS",
    description: `Gained deep knowledge of AWS cloud concepts, global infrastructure, security, architecture, pricing and support plans.`,
    technologies: ["Amazon Web Services", "Cloud Computing", "EC2", "S3", "SNS","AWS Lambda","IAM", "VPC"],
    link: "https://www.credly.com/badges/0e4236a7-32de-46f7-ba11-e24f2b91ac47/public_url",
    iconType: "reacticon",
    icon: "FaAws",
  },
  {
    year: "March 2020",
    role: "Algorithmic ToolBox",
    company: "Coursera",
    description: `Studied advanced algorithms and designed efficient algorithms to implement robust and high-performance solutions. `,
    technologies: ["Problem Solving","LinkedLists","Trees","Graphs", "Dynamic Programming"],
    link: "https://www.coursera.org/account/accomplishments/certificate/U2AKCL5LD7ZC",
    iconType: "coreui",
    icon: "cibCoursera",
  },
];

export const PROJECTS = [
  {
    title: "Thought Leadership",
    image: project1,
    description:
    `Developed a interactive content library, ensuring timely access to newly published materials. Created
    an alert system to send email at regular intervals to the users to inform about new content.`,
    technologies: ["Java", "SpringBoot", "React", "SQL"],
  },
  {
    title: "Camp Reviews",
    image: project2,
    description:
      `Engineered a social media application for users to post and view campgrounds and comments. Enabled CRUD
      operations for posts and comments.`,
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Goregaon East, Mumbai",
  phoneNo: "+91 6309978025",
  email: "kaushikreddy002@gmail.com",
};
