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
        text: '学习', ariaLabel: '分类', items: [
          { text: '排序', link: '/pages/sort.md' },
          { text: 'CHANGELOG', link: 'https://github.com/monkeycf/trump/blob/master/CHANGELOG.md' },
        ],
      },
      { text: 'Github', link: 'https://github.com/monkeycf/trump' },
    ],

    // 侧边导航栏
    sidebar: {
      '/pages/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ['sort.md', '排序'],
          ],
        },
      ],
    },
  },
};
