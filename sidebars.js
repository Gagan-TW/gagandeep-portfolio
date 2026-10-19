// @ts-check

/**
 * Learning Hub sidebar.
 * Each track is a folder in /docs with an index.md overview page.
 * When a track gets its first lesson, turn its line into a category:
 * {type: 'category', label: '...', link: {type: 'doc', id: 'python/index'}, items: ['python/lesson-id']}
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  learnSidebar: [
    'intro',
    {
      type: 'category',
      label: 'For Technical Writers',
      collapsed: false,
      items: [
        {type: 'doc', id: 'writing-rules/index', label: 'Writing Rules That Always Work'},
        {type: 'doc', id: 'api-docs/index', label: 'API Documentation Guide'},
        {type: 'doc', id: 'docs-as-code/index', label: 'Docs-as-Code Workflow'},
      ],
    },
    {
      type: 'category',
      label: 'Learn to Code',
      collapsed: false,
      items: [
        {type: 'doc', id: 'git-github/index', label: 'Git & GitHub for Writers'},
        {type: 'doc', id: 'rest-apis/index', label: 'REST APIs Explained Simply'},
        {type: 'doc', id: 'python/index', label: 'Python for Technical Writers'},
        {type: 'doc', id: 'sql/index', label: 'SQL for Non-Developers'},
      ],
    },
  ],
};

export default sidebars;
