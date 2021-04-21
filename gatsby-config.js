module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://bradhuang.me/`,
    // Your Name
    name: 'Brad Huang',
    // Main Site Title
    title: `Brad Huang`,
    // Description that goes under your name in main bio
    description: `Chinese Canadian. Software Engineer. uWaterloo Senior. Crypto. Dog Bro.`,
    // Optional: Twitter account handle
    author: `@braddo_huang`,
    // Optional: Github account URL
    github: `http://github.bradhuang.me/`,
    // Optional: LinkedIn account URL
    linkedin: `http://linkedin.bradhuang.me/`,
    // Optional: Resume URL
    resume: `http://resume.bradhuang.me/`,
    // Content of the About Me section
    about: `Excited for everything technology has to offer. I enjoy building large-scale distributed systems, versatile web applications, sustainable energy-related apps and algorithms, and random tools.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
    //   {
    //     name: 'Another Cool Project',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Citadel - SWE Intern',
        description: 'Something exciting. Coming soon.',
        link: '',
      },
      {
        name: 'Observe Inc. - SWE Intern',
        description: 'Tempo-relational database feature implementation, large-scale query plan caching, optimization, and visualization.',
        link: 'https://www.observeinc.com/',
      },
      {
        name: 'University of Waterloo - Researcher',
        description: 'Research in algorithms that predict hourly electricity usage and estimate optimized cost for solar panels for both commercial and residential users. Publication to ACM e-Energy conference pending.',
        link: 'https://cs.uwaterloo.ca/news/making-pv-storage-systems-more-financially-attractive-homeowners',
      },
      {
        name: 'Snowflake - SWE Intern',
        description: 'Monitoring & alerting. Petabyte-scale SQL query optimizers.',
        link: 'https://docs.google.com/document/d/1Xn0I_i0EPsaoO1Islf8HYhsGpLTDghvbmfNSQLUKAv0/view',
      },
      {
        name: 'Apple - SWE Intern',
        description: 'Big data analytics on user engagement, feature success, and system stability metrics for Siri.',
        link: 'https://www.apple.com/siri/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Distributed Systems & Databases',
        description:
          'Docker, K8s, Snowflake, Spark, MongoDB, PostreSQL, MySQL.',
      },
      {
        name: 'Statistics & Machine Learning',
        description: 'Deep Learning, Linear Regression, Gradient Descent Techniques, Game Theory.',
      },
      {
        name: 'Languages',
        description:
          'C++, Java, Golang, Python, JavaScript (ES6+).',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
