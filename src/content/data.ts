// Single source of truth for all site content.
// Edit this file to update anything on the site — copy, links, projects, experience.

export const profile = {
  name: "Padma Shneha",
  title: "Data Scientist",
  tagline: "Turning numbers to answers to grow your business",
  email: "padmashneha7@gmail.com",
  location: "Chennai, India",
  links: {
    linkedin: "http://linkedin.com/in/padmashneha",
    medium:
      "https://medium.com/pythoneers/master-data-cleaning-a-practical-checklist-for-faster-processing-f73d0b1161dc",
  },
  resumeFile: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I specialize in bridging the gap between data, business problems, and emerging AI technologies. With a strong foundation in analytics and consulting, my core strength lies in identifying real-world challenges and translating them into structured, data-driven solutions. I am particularly focused on Generative AI, LLMs, and applied machine learning, with an emphasis on building practical, end-to-end projects rather than just learning theory.",
    "My approach combines problem-solving with execution—I aim to design solutions that deliver measurable value, whether by improving processes, reducing inefficiencies, or enhancing user experiences. I am also developing expertise in system design, data pipelines, and lightweight AI architectures using accessible, cost-effective tools.",
    "Beyond technical skills, I am actively building my personal brand by sharing insights, projects, and learnings, positioning myself for a transition into product or data-focused roles where ownership, impact, and innovation are key.",
  ],
};

export const skills = ["Python", "SQL", "Tableau", "Claude Code"];

// Headline numbers pulled from the projects/experience below — shown in the Hero snapshot panel.
export const highlights = [
  { value: "$1.36M", label: "Revenue insights surfaced" },
  { value: "3", label: "End-to-end case studies" },
  { value: "4", label: "Cloud & data certifications" },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string; // combines data + approach narrative
  tools: string;
  impact: string;
  metric: string; // headline stat shown on the card
};

export const projects: Project[] = [
  {
    slug: "marketing-campaign-performance",
    title: "Marketing Campaign Performance",
    summary:
      "An interactive marketing analytics dashboard that consolidates campaign, channel, and customer data into a single view.",
    metric: "$1.36M revenue surfaced",
    problem:
      "Marketing teams often struggle to identify which campaigns and channels truly drive results due to fragmented data across customer profiles, product preferences, and campaign performance. To address this, I designed an interactive marketing analytics dashboard that consolidates key insights into a single, intuitive view.\n\nThis dashboard enables users to quickly evaluate campaign performance, compare channel effectiveness, and understand customer behavior. It provides a structured flow from high-level KPIs—such as total revenue, customer count, and campaign performance—to deeper insights into customer segments, product preferences, and regional trends.",
    approach:
      "Key insights include identifying top-performing campaigns, high-value customer segments, and the most effective revenue-driving channels. The dashboard also highlights opportunities, such as improving underperforming channels and addressing region-specific issues like higher complaint rates.",
    tools:
      "Tableau (dashboard design & visualization), SQL (data extraction & transformation), Excel/CSV datasets (data preparation), basic data modeling techniques.",
    impact:
      "Delivered a centralized view of marketing performance, reducing analysis time and enabling faster decision-making. Helped identify high-performing campaigns and channels driving $1.36M in revenue, uncover high-value customer segments, and highlight optimization opportunities across regions and channels. Enabled more strategic budget allocation and data-driven marketing improvements.\n\nOverall, this project demonstrates the ability to transform complex, multi-dimensional data into clear, actionable insights, enabling data-driven decision-making and more effective marketing strategies.",
  },
  {
    slug: "dhl-facilities-analysis",
    title: "DHL Facilities Analysis",
    summary:
      "An exploratory analysis of DHL's U.S. courier facilities uncovering patterns in placement, service types, and timings.",
    metric: "50 states analyzed",
    problem:
      "To better understand how logistics companies operate, I conducted an exploratory data analysis (EDA) on DHL's courier facilities dataset focused on the United States. The objective of this project was to uncover patterns in store placement, service types, and operational timings to derive insights into logistics network optimization and service delivery.\n\nI began by cleaning the dataset—handling missing values, removing irrelevant columns, and correcting formatting inconsistencies. I also transformed complex fields such as pickup timings into structured columns to enable clearer analysis.",
    approach:
      "Through EDA, I identified that Drop Boxes and DHL Authorized Shipping Centers are the most common facility types, emphasizing customer convenience and third-party collaboration. A significant majority of facilities are located at Zip Centroids, indicating a strategy to maximize coverage within geographic areas. Additionally, states like Texas, Florida, and California have the highest number of facilities, while Alaska and Wyoming have the least. Most locations follow a consistent last pickup time of around 6 PM on weekdays.\n\nCorrelation analysis revealed strong relationships between facility types and central placements, highlighting DHL's focus on accessibility and operational efficiency.",
    tools:
      "Python (pandas for data cleaning and transformation), seaborn & matplotlib (data visualization), Jupyter Notebook, Git, Kaggle dataset.",
    impact:
      "This project demonstrates the ability to clean and analyze real-world datasets, uncover operational patterns, and generate actionable insights. It highlights how data can be used to optimize logistics networks, improve service accessibility, and support strategic decision-making in the courier and supply chain industry.",
  },
  {
    slug: "vending-machine-coffee-sales",
    title: "Vending Machine Coffee Sales",
    summary:
      "A behavioral analysis of coffee vending machine transactions to uncover peak hours, popular blends, and seasonal trends.",
    metric: "97% cashless transactions",
    problem:
      "To understand customer behavior and sales patterns in automated retail, I analyzed coffee vending machine transaction data from a shopping center in Vinnytsia, Ukraine. The objective of this project was to identify peak usage hours, popular coffee blends, purchasing patterns, and seasonal trends to improve inventory planning and operational efficiency.\n\nI began by structuring and exploring the dataset, which covered transactions from March to mid-November 2024. Before building the dashboard, I created a wireframe to define the layout and flow of insights, ensuring a clear transition from high-level metrics to detailed analysis.",
    approach:
      "The analysis revealed that sales peak between 10 AM–12 PM, with additional spikes around 8–9 AM and 9 PM—key windows for timely restocking. Americano and Latte emerged as the most popular blends, while Hot Chocolate saw a seasonal surge during the Fall. Payment analysis showed that nearly 97% of transactions were card-based, indicating a strong shift toward cashless behavior.",
    tools:
      "Python (pandas for data analysis), seaborn & matplotlib (visualization), Tableau (dashboard design), Kaggle dataset, basic data modeling.",
    impact:
      "This project highlights the ability to translate raw transactional data into actionable business insights. The findings can help optimize restocking schedules, align inventory with seasonal demand, and improve operational efficiency. Additionally, insights into payment behavior can support strategic decisions such as enabling a fully cashless system, ultimately enhancing customer experience and sales performance.",
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Sr. Data Analyst",
    org: "LatentView Analytics",
    location: "Chennai, India",
    dates: "September 2025 – Present",
    bullets: [
      "Designed and implemented a fully automated end-to-end reporting Databricks pipeline using the Medallion architecture (Bronze, Silver, Gold layers), significantly reducing manual effort and turnaround time.",
      "Built and deployed real-time Tableau dashboards by integrating with Databricks, enabling data-driven insights and stakeholder visibility.",
      "Migrated legacy SAS code to scalable Databricks-based pipelines, improving performance, maintainability, and process efficiency.",
      "Interviewed 15+ candidates during the hiring process for the team, and mentored and led juniors on projects.",
    ],
  },
  {
    role: "Junior Data Analyst",
    org: "Complex Adaptive Systems Laboratory",
    location: "",
    dates: "Sep 2020 – Dec 2020",
    bullets: [
      "Accomplished the retrieval of a comprehensive dataset containing 6,000+ news articles from Twitter, crucial for analyzing public sentiment on hydroxychloroquine use during COVID-19.",
      "Reduced information retrieval time by 62% by developing a web page that summarized public sentiment, significantly improving access to critical insights.",
      "Presented data-driven findings to a diverse audience of professors, researchers, and stakeholders, effectively communicating complex analyses and tailoring information to varying levels of expertise.",
    ],
  },
];

export const certifications: string[] = [
  "AWS Certified Cloud Practitioner",
  "Databricks Certified Data Engineering Professional",
  "Databricks Certified Generative AI Associate",
  "Tableau Certified Desktop Foundation Specialist",
];

export const awards: string[] = ["2x Deloitte Applause Award"];
