module.exports = {
  title: '@monkeycf/trump',
  description: 'A modern JavaScript utility library delivering.',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    logo: '/logo.jpg',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', ariaLabel: '分类1', items: [
          { text: 'API', link: '/pages/api/element.md' },
          { text: 'CHANGELOG', link: 'https://github.com/monkeycf/trump/blob/master/CHANGELOG.md' },
        ],
      },
      { text: 'Github', link: 'https://github.com/monkeycf/trump' },
    ],

    // 侧边导航栏
    sidebar: {
      '/pages/api/': [
        {
          title: 'API',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['element.md', '子菜单1'],
          ],
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['element.md', '子菜单1'],
          ],
        },
      ],
    },
  },
};
