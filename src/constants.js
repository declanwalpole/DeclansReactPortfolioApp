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
    title: "VP Corporate Insights",
    company: "PointsBet USA",
    subtitle: "Denver CO",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Head of Quantitative Analytics",
    company: "PointsBet AUS",
    subtitle: "Melbourne, Aus",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Head of Quantitative Analytics",
    company: "William Hill AUS",
    subtitle: "Sydney Aus",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Analyst",
    company: "Commonwealth Bank",
    subtitle: "Sydney Aus",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
  {
    date: "04/2009 – 11/2010",
    title: "Bachelor of Commerce (Honours)",
    company: "University of Sydney",
    subtitle: "Sydney Aus",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque ac justo sit amet nunc tincidunt condimentum.",
      "Sed sed enim eu ligula sagittis ultrices.",
    ],
  },
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
    paragraphs: [
      "ComparePlayerProps (CPP) was an odds comparison website which focused on just player props (e.g. NFL QB passing yards, NBA player points etc.). I created it as a solo side project during 2021-2022 after having done some tutorials on MERN full-stack applications. For about three months, it was deployed to 'ComparePlayerProps.com' with AWS EC2.",
      "A CRON job would scrape data every fifteen minutes from the likes of DraftKings and FanDuel, via their (undocumented) APIs. I persisted that data to MongoDB and conducted automated analysis to identify arbitrage opportunities.",
      "The frontend was built on React and styled with Bootstrap. Users could select a match and compare all odds for every player/stat, with special styling to highlight the best available odds.",
      "In real-time as arbs were identified, a Node.js program would push to the Twitter API to alert followers of the betting opportunities.",
    ],
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
      {
        subtitle: "Enabled Google Analytics",
        image: require("./images/Screenshot CPP googleAnalytics.png"),
        description: "User visits and interactions tracked with GA",
      },
    ],
  },
  {
    title: "Profitable Betting Model",
    tags: [
      "statistical models",
      "R",
      "webscraping",
      "slack API",
      "supervised learning",
    ],
    image: require("./images/Screenshot TTelite slack.png"),
    paragraphs: [
      "Table tennis is a sport which gained betting popularity globally when COVID shut down all major pro sports. In eastern Europe, semi-pro table tennis leagues were established to provide 24/7 betting content. Ever since, games are being played among ~200 participants every 15 minutes.",
      "Using the glmnet package in R, I was able to train a statistical model to predict the probability of each matchup that proved highly profitable over many months.",
      "With Windows Task Scheduler, data was scraped from SofaScore every hour, initiating the model to be retrained and fit to upcoming matches. Predictions were published to a slack channel using their API from within R.",
    ],
  },
  {
    title: "Django App (Confidential)",
    tags: ["full stack", "Django", "python", "React"],
    image: require("./images/screenshot django datamodel.png"),
    paragraphs: [
      "During 2023, I have been the lone developer working on a Proof of Concept for a startup.",
      "The web app is made using Django (python). I have been responsible for all aspects of the application; spanning the data model, working with Django ORM, internal APIs, testing and mocking up a frontend.",
      "This was my first time using the Django framework, and I look forward to more opportunities to hone the skills. I like the framework as a self-taught developer seeing as it is 'batteries included'.",
    ],
    href: "/player-prop-arbitrage-betting-service",
  },
  {
    title: "Card Game in R",
    tags: ["R", "abstraction"],
    image: require("./images/Screenshot Golf card game.png"),
    paragraphs: [
      "During the COVID lockdown of 2020, I coded up one of our favourite card games. The game Golf is a simple multiplayer game where each player is dealt four cards, some face down, and they attempt to minimize their cumulative score across 18 hands.",
      "The program required abstractions of a deck of cards, hands, and possible actions.",
      "A function run in the R console provides textual feedback as the player interacts with numerous pop-ups seeking input about their choice of move.",
    ],
    href: "/player-prop-arbitrage-betting-service",
  },
];
