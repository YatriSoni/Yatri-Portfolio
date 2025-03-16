import {
  compute,
  visualization,
  python,
  sql,
  git,
  sqlTech,
  pythonTech,
  etl,
  numpy,
  matplot,
  pandas,
  powerbi,
  scikit,
  colab,
  jupyter,
  its,
  collabera,
  tims,
  customer,
  ecommerce,
  inventory,
  hospital,
  transport,
  reference,
  man,
  woman,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Visualization",
    icon: visualization,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "SQL",
    icon: sql,
  },
  {
    title: "Cloud Computing",
    icon: compute,
  },
];

const languages = [
  {
    name: "SQL",
    icon: sqlTech,
  },
  {
    name: "Python3",
    icon: pythonTech,
  },
  {
    name: "ETL Processes",
    icon: etl,
  },
];

const frameworks = [
  {
    name: "Python - Numpy",
    icon: numpy,
  },
  {
    name: "Python - Pandas",
    icon: pandas,
  },
  {
    name: "Python - Matplot Lib",
    icon: matplot,
  },
  {
    name: "Python - SciKit Learn",
    icon: scikit,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
];

const versioncontrols = [
  {
    name: "GIT",
    icon: git,
  },
  {
    name: "Google Colab",
    icon: colab,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
];

const experiences = [
  {
    title: "Customer Service Representative",
    company_name: "Tim Hortons (Canada)",
    icon: tims,
    iconBg: "#fff",
    date: "March 2020 - April 2021",
    points: [
      "While pursuing my post-graduate studies at Conestoga College, I worked part-time at Tim Hortons. ",
      "This experience reinforced my ability to manage time effectively, work in a fast-paced environment, and provide excellent customer service.",
      "It also demonstrated my strong work ethic and commitment to balancing academic pursuits with practical experience.",
      "These soft skills, including adaptability and time management, are transferable and valuable in any professional setting, including the demanding field of Big Data Analytics.",
    ],
  },
  {
    title: "IT Talent Acquisition Specialist",
    company_name: "Collabera",
    icon: collabera,
    iconBg: "#fff",
    date: "Jan 2022 - Aug 2022",
    points: [
      "At Collabera, I honed my understanding of the IT industry and the talent landscape, gaining valuable insights into the skills and qualifications sought by leading technology companies.",
      "This experience provided me with a unique perspective on the demands of the IT sector, and the importance of matching technical expertise with organizational needs.",
      "I developed strong communication and relationship-building skills, crucial for understanding client requirements and identifying top talent.",
      "This role enhanced my ability to assess technical skills and understand the dynamics of the IT job market, which directly contributes to my understanding of what employers seek in Big Data Analytics professionals.",
    ],
  },
  {
    title: " Full Stack Developer",
    company_name: "iTechnoSol (Vadodara, India)",
    icon: its,
    iconBg: "#ef3e44",
    date: "Jan 2022 - Jan 2023",
    points: [
      "At iTechnoSol, I contributed to the full lifecycle of outsourced projects, gaining valuable experience in both backend development and data analysis.",
      "As a Full Stack Developer, I leveraged ASP.NET and Angular to build robust web applications, while also utilizing SQL and Python for data manipulation, database management, and extracting key insights.",
      "My role involved analyzing client data to support project requirements, showcasing my ability to translate technical skills into practical business solutions.",
      "Additionally, I employed Excel for data reporting and analysis, demonstrating my versatility in handling diverse data-related tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yatri has an exceptional ability to dissect complex data and extract meaningful insights.",
    name: "Viraj Soni",
    designation: "Senior Frontend Engineer",
    company: "Perficient",
    image: woman,
  },
  {
    testimonial:
      "Yatri's proficiency in Python and SQL, coupled with her strong problem-solving skills.",
    name: "Akshay Shah",
    designation: "Senior Backend Engineer",
    company: "Tech Mahindra",
    image: man,
  },
  {
    testimonial:
      "She is always eager to learn and goes above and beyond to ensure the successfull completion of project.",
    name: "Chirayu",
    designation: "CEO",
    company: "ITechnoSol",
    image: man,
  },
];

const projects = [
  {
    name: "Customer-Segmentation-PowerBI",
    description:
      "This project involves creating a dashboard that segments customers based on various factors like purchasing behavior, demographics, and location. A complete dashboard using powerBI",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: customer,
    source_code_link:
      "https://github.com/YatriSoni/Customer-Segmentation-using-PowerBI",
  },
  {
    name: "Patient-HealthCare-Dashboard",
    description:
      "The Healthcare Power BI Dashboard project is designed to provide a comprehensive data visualization solution using Power BI. This is to offer an interactive and insightful tool.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Power Apps",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/YatriSoni/HealthCare-Dashboard",
  },
  {
    name: "Ecommerce-Sales-Dashboard",
    description:
      "Built a dashboard that visualizes sales data for an e-commerce company. You can use Power BI to track sales, revenue, and customer demographics across various regions and products.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Excel",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/YatriSoni/Ecommerce-Sales-Dashboard-using-Power-BI",
  },
  {
    name: "Student-Performance-Dashboard",
    description:
      "Developed a dashboard to track student performance, attendance, and teacher effectiveness. This project helps educational institutions to visualize data and also to improve student outcomes.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "SharePoint",
        color: "pink-text-gradient",
      },
    ],
    image: reference,
    source_code_link:
      "https://github.com/YatriSoni/Student-Performance-Dashboard",
  },
  {
    name: "Retail-Inventory-Dashboard",
    description:
      "This project provides Inventory Management using Power BI, extremely useful for Warehouse/ In-plant Inventory Managers to effectively control the Inventory levels.",
    tags: [
      {
        name: "Power",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link:
      "https://github.com/YatriSoni/Inventory_Management_Dashboard",
  },
  {
    name: "Transportation-Logistics-Dashboard",
    description:
      "A dashboard that tracks shipment details, delivery routes, and delivery performance metrics for a logistics company. In this project I've learned to manage and visualize complex datasets.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: transport,
    source_code_link:
      "https://github.com/YatriSoni/Transportation-Logistics-Dashboard",
  },
];

export {
  services,
  languages,
  frameworks,
  versioncontrols,
  experiences,
  testimonials,
  projects,
};
