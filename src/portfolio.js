/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sai Chereddy Portfolio",
    type: "website",
    url: "http://saivivaswanthreddy.com/",
  },
};

//Home Page
const greeting = {
  title: "Sai V R Chereddy",
  logo_name: "Sai Chereddy",
  nickname: "reddy.buddy",
  subTitle:
    "Computer Science | Data Science | Machine Learning | AI Enthusiast | Researcher | Developer | Open Source Contributor",
  resumeLink:
    "https://drive.google.com/file/d/1XUcjTj995J2A2yLGTWwEjy09TyuFZPtK/view?usp=drive_link",
  portfolio_repository:
    "https://github.com/saireddythfc/saireddythfc.github.io",
  githubProfile: "https://github.com/saireddythfc",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/saireddythfc",
  // linkedin: "https://www.linkedin.com/in/saivivaswanthreddy/",
  // gmail: "saivivaswanthreddy@gmail.com",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/yiddy_reddy",
  // instagram: "https://www.instagram.com/reddy.buddy/",
  // google scholar: "https://scholar.google.com/citations?user=2XYtPVYAAAAJ&hl=en"

  {
    name: "Github",
    link: "https://github.com/saireddythfc",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saivivaswanthreddy/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saivivaswanthreddy@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "google-scholar",
  //   link: "https://scholar.google.com/citations?user=2XYtPVYAAAAJ",
  //   fontAwesomeIcon: "fa-google-scholar", // Reference https://fontawesome.com/icons/google-scholar?f=brands&s=solid
  //   backgroundColor: "#4285F4", // Reference https://simpleicons.org/?q=google+sc
  // },
  {
    name: "X-Twitter",
    link: "https://twitter.com/yiddy_reddy",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/saireddy/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/reddy.buddy/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Discord",
    link: "https://discord.gg/saireddythfc",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/discord?style=brands
    backgroundColor: "#5865F2", // Reference https://simpleicons.org/?q=discord
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML/CSS, JavaScript",
        "⚡ Developing mobile applications using Java/Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Maintaining persistent databases and deploying applications on cloud servers",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Gen AI and Open Research",
      fileName: "GenAIImg",
      skills: [
        "⚡ Working on research and contributing to open source projects leveraging AI",
        "⚡ Exploring new LLM tools and orchestration frameworks ",
        "⚡ Creating new applications with vector databases",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:graphml",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "Langchain",
          fontAwesomeClassname: "simple-icons:networkscience",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "LlamaIndex",
          fontAwesomeClassname: "simple-icons:ai",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "Weaviate",
          fontAwesomeClassname: "simple-icons:ml",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "Gen AI",
          fontAwesomeClassname: "simple-icons:genai",
          style: {
            color: "#FF4500",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    // ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/saireddythfc/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/saivivaswanthre1",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/saireddythfc",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "M.S. in Computer Science",
      logo_path: "USC_logo.png",
      alt_name: "University of Southern California",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ My coursework included Machine Learning, Artificial Intelligence, Natural Language Processing and Information Retrieval.",
        "⚡ As a research assistant, I worked on semi-supervised machine learning models for analyzing team performance and predicting team outcomes.",
        "⚡ During my time at university, I was also associated with Information technology department. As part of it, I have worked on producing AI and data analytics courses.",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "University of Mumbai",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "mu_logo.png",
      alt_name: "Mumbai University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ In addition, my coursework included Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ During my time as a soccer goalkeeper, I represented my college in national competitions.",
        "⚡ Co-founder and vice-president of the college's Sports committee.",
      ],
      website_link: "http://mu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Deep Learning",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/5RJ5HAM8LZYJ",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "From Data to Insights with Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/DQ8L6YMMHNHZ",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "- IBM Watson Studio",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/QMKJ7ZVP3UD6",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AI in Production",
      subtitle: "- Weaviate",
      logo_path: "weaviate.png",
      certificate_link:
        "https://drive.google.com/file/d/10Nbdxq7RVoSah0cobBtyg5u2LWmO0Xh4/view?usp=drive_link",
      alt_name: "weaviate",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, Assistantship and Volunteering",
  description:
    "I have worked with top research institutions on a global scale contributing to projects in Data Science, AI and Machine learning. I've also participated in startup incubators learning about design principles and product-market fit.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Research Coordinator",
          company: "USC Institute for Creative Technologies",
          company_url: "https://ict.usc.edu/",
          logo_path: "usc_ict_logo.png",
          duration: "Feb 2023 - May 2023",
          location: "Playa Vista, CA",
          description:
            "Coordinated the research initiative, ”teach AI how to teach AI”, by generating content focused on integrating PAL3 learning app , enhancing personalized AI-driven tutoring and increase class participation by 20%.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Research Intern",
          company: "USC Institute for Creative Technologies",
          company_url: "https://ict.usc.edu/",
          logo_path: "usc_ict_logo.png",
          duration: "May 2022 - Dec 2022",
          location: "Playa Vista, CA",
          description:
            "Worked on developing semi-supervised machiine learning algorithms for assessing team simulations (SLATS).",
          color: "#000000",
        },
        {
          title: "Software Developer Intern",
          company: "Cisco ThingQubator Program",
          company_url: "https://thingqbator.nasscomfoundation.org/",
          logo_path: "cisco_thingqubator.png",
          duration: "Jun 2020 - Jul 2020",
          location: "Mumbai, Maharashtra",
          description:
            "Implemented image resolution and facial recognition algorithm for an E2E face recognition system.",
          color: "#ee3c26",
        },
        {
          title: "Software Developer Intern",
          company: "Bhabha Atomic Research Centre",
          company_url: "http://www.barc.gov.in/",
          logo_path: "barc_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Mumbai, Maharashtra",
          description:
            "Deployed interfacing software on Battery Opearted Thermoluminiscence Reader (BOTLR) using LCD, matrix keybords and Philips 8051 microcontroller.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Assistantships",
      experiences: [
        {
          title: "Lead Teaching Assistant",
          company: "USC Information Technology Program",
          company_url: "https://itp.usc.edu/",
          logo_path: "usc_viterbi_logo.png",
          duration: "Aug 2021 - May 2023",
          location: "Los Angeles, CA",
          description:
            "Facilitate learning of topics in AI and Data analytics.",
          color: "#000000",
        },
        {
          title: "Research Assistant",
          company: "USC Institute for Creative Technologies",
          company_url: "https://ict.usc.edu/",
          logo_path: "usc_ict_logo.png",
          duration: "Jun 2022 - Jul 2022",
          location: "Playa Vista, CA",
          description:
            "Assisted in setting up data collection efforts, VR experiences and educational interviews at La Brea tar pits for volunteers; presenting Ice Age in Los Angeles. (TAR AR)",
          color: "#0C9D58",
        },
        {
          title: "Project Trainee",
          company: "Bhabha Atomic Research Centre",
          company_url: "http://www.barc.gov.in/",
          logo_path: "barc_logo.png",
          duration: "Aug 2019 - Feb 2020",
          location: "Mumbai, Maharashtra",
          description:
            "Streamlined Air Quality Index predictive system using ARIMA and LSTMs on 10-year time-series data.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Volunteer Work",
      experiences: [
        {
          title: "Sponsorship Head",
          company: "Computer Society of India - FCRIT",
          company_url: "https://www.fcrit.ac.in/professional_item",
          logo_path: "csi_logo.png",
          duration: "Aug 2018 - May 2019",
          location: "Navi Mumbai, Maharashtra",
          description:
            "Managed to develop INR 25K fundraising campaign, enabling technical events exceeding budget expectations by 200%.",
          color: "#000000",
        },
        // {
        //   title: "Research Assistant",
        //   company: "USC Institute for Creative Technologies",
        //   company_url:
        //     "https://ict.usc.edu/",
        //   logo_path: "usc_ict_logo.png",
        //   duration: "Jun 2022 - Jul 2022",
        //   location: "Playa Vista, CA",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Project Trainee",
        //   company: "Bhabha Atomic Research Centre",
        //   company_url: "http://www.barc.gov.in/",
        //   logo_path: "barc_logo.png",
        //   duration: "Aug 2019 - Feb 2020",
        //   location: "Mumbai, Maharashtra",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create and implement novel Data Science or AI research methodologies and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "FaceCognize: An approach to Face Recognition for low resolution image",
      createdAt: "2021-08-27",
      description:
        "2021 Asian Conference on Innovation in Technology (ASIANCON)",
      url: "https://ieeexplore.ieee.org/abstract/document/9544851/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Comparison of time-series forecasting models",
      createdAt: "2021-06-25",
      description:
        "2021 International Conference on Intelligent Technologies (CONIT)",
      url: "https://ieeexplore.ieee.org/abstract/document/9498451",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_dev.png",
    description: "Open for opportunities. Happy to connect!",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Navi Mumbai, Maharashtra, India",
    locality: "Navi Mumbai",
    country: "India",
    region: "Maharashtra",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://www.google.com/maps/place/Sunnyvale,+CA/",
    location_map_link:
      "https://www.google.com/maps/place/CBD+Belapur,+Navi+Mumbai,+Maharashtra",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
