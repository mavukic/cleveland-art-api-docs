// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/first-request',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'getting-started/guides/artwork-by-id',
            'getting-started/guides/exhibitions',
            'getting-started/guides/exhibition-by-id',
            'getting-started/guides/pagination',
            'getting-started/guides/responses',
            'getting-started/guides/search-artworks',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Errors',
      items: [
        'errors/error-handling',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/overview',
      ],
    },
  ],
};

export default sidebars;