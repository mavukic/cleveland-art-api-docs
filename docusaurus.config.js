import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Cleveland Museum of Art API',
  tagline: 'Technical documentation for the Cleveland Museum of Art Open Access API',

  url: 'http://localhost:3000',
  baseUrl: '/',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
   navbar: {
  title: 'Cleveland Museum of Art API',

  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Documentation',
    },
    {
      href: 'https://openaccess-api.clevelandart.org/',
      label: 'API',
      position: 'left',
      
    },
  ],
},
  },  
};

export default config;