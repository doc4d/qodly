/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   
  GetStarted:[
   {
      type: 'doc',
      id: 'overview',
      label: "Overview"
    },
	{
      type: 'doc',
      id: 'get-started',
      label: "Getting Started"
    },
  ],
  Development:[
   {
      type: 'category',
      label: 'Qodly Studio',
      items: ['design-webforms/create-webform',
        'design-webforms/components',
        'design-webforms/styling',
        'design-webforms/datasources',
        'design-webforms/events/events'
      ],
    },
	{
      type: 'doc',
      id: 'debug',
      label: "Debugging"
    },
	{
      type: 'doc',
      id: 'api',
      label: "API"
    },
  ],
  Deployment:[
   {
      type: 'doc',
      id: 'deploy/get-started',
      label: "Getting Started"
    },
 {
      type: 'doc',
      id: 'deploy/on-premise',
      label: "On Premise"
    },
  ],
  CloudAdmin:[
   {
      type: 'doc',
      id: 'cloud/tools',
      label: "Online tools"
    },
	{
      type: 'doc',
      id: 'cloud/statistics',
      label: "Statistics"
    },
	],
};

module.exports = sidebars;
