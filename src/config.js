module.exports = {
  email: 'meichen1@ualberta.ca',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/meichen1?tab=repositories',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Twitter',
      url: '',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/meichenliu5577/',
    },
    {
      name: 'GoogleScholar',
      url: 'https://scholar.google.com/citations?user=mMqdpgUAAAAJ&hl=en',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
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

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
