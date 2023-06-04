export const expertiseSkills = [
  "Full Stack Web Dev",
  "Data Analysis",
  "Databases",
  "APIs",
  "Web Design",
  "Statistical Modelling",
  "Derivative Pricing",
  "Finance",
  "Sports Betting",
  "Webscraping",
];

export const languageSkills = [
  "SQL",
  "R",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
];

export const frameworkSkills = ["Django", "React", "MERN"];

export const workExperiences = [
  {
    date: "11/2010 – Present",
    title: "Title 1",
    company: "Company 1",
    subtitle: "Subtitle 1",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Title 2",
    company: "Company 2",
    subtitle: "Subtitle 2",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Title 3",
    company: "Company 2",
    subtitle: "Subtitle 2",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  // Add more objects for additional work experiences
];

export const sideProjects = [
  {
    title: "Compare Player Props",
    tags: [
      "full stack",
      "MERN",
      "javascript",
      "webscraping",
      "twitter API",
      "CRON",
    ],
    image: require("./images/Screenshot CPP home.png"),
    paragraphs: ["long paragrap1", "some other words"],
    href: "/player-prop-arbitrage-betting-service",
    additionalInfo: [
      {
        subtitle: "Identify mispricing between different sites",
        image: require("./images/Screenshot CPP arbs.png"),
        description: "Compile scraped odds and find the best price",
      },
      {
        subtitle: "Blog Content",
        image: require("./images/Screenshot CPP blog.png"),
        description: "Reusable React template for adding prose and media",
      },
      {
        subtitle: "Calculator Widgets",
        image: require("./images/Screenshot CPP calculators.png"),
        description:
          "React components with numerical inputs, buttons and formatted results",
      },
      {
        subtitle: "Visually Display Odds",
        image: require("./images/Screenshot CPP match.png"),
        description:
          "Grid view that maps over each player and stat, with filters",
      },
      {
        subtitle: "Hover Actions",
        image: require("./images/Screenshot CPP odds movements.png"),
        description:
          "Reveal additional detail when hovering over a player's odds movement",
      },
      {
        subtitle: "Post to Twitter via API",
        image: require("./images/Screenshot CPP tweets.png"),
        description: "Automated twitter posts following each data update",
      },
    ],
  },

  {
    title: "Predicting and Betting on TT Elite",
    tags: ["statistics", "R", "webscraping", "slack API"],
    image: require("./images/Screenshot TTelite slack.png"),
    paragraphs: ["long paragrap1", "some other words"],
  },
  {
    title: "Django App (Confidential)",
    tags: ["full stack", "Django", "python", "React"],
    image: require("./images/screenshot django datamodel.png"),
    paragraphs: ["long paragrap1", "some other words"],
    href: "/player-prop-arbitrage-betting-service",
  },
];
