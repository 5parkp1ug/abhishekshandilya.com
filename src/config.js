module.exports = {
  siteTitle: 'Abhishek Shandilya | Full Stack Engineer',
  siteDescription:
    'Abhishek Shandilya is a Full Stack engineer based in Bangalore, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Abhishek Shandilya, full-stack engineer, software engineer, front-end engineer, web developer, javascript, react, django',
  siteUrl: 'https://abhishekshandilya.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abhishek Shandilya',
  location: 'Bengaluru, India',
  email: 'schandilya.abhi007@gmail.com',
  github: 'https://github.com/5parkp1ug',
  twitterHandle: '@5parkP1ug',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/5parkp1ug',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/5parkp1ug/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/5parkp1ug',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/im5parkp1ug/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/5parkP1ug',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
