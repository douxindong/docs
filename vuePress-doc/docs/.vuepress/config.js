module.exports = {
    base:'/docs/',
    title: 'Limery',
    description: '欢迎!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.png`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
            { text: 'Api', link: '/api/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' }
            ]
          },
          { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebar: {
            '/api/': getApiSidebar(),
            '/guide/': getGuideSidebar(),
        },
        lastUpdated: 'Last Updated', // string | boolean
        repo: 'https://github.com/douxindong',
    }
}
function getApiSidebar () {
    return [{
        title: '前言',
        collapsable: false,
        children:[
            '',
        ]
    },{
        title: 'API',
        collapsable: false,
        children:[
            'GreenCart/GreenCardAPI',
            'GreenCart/ConfigGreenCardAPI',
            'GreenCart/CreatetGreenCardAPI',
            'GreenCart/ShareGreenCardAPI',
            'GreenCart/ReceiveGreenCardAPI',
            'GreenCart/MyListGreenCardAPI',
            'Report',
            'huiyuanquanyi',
            'Recived',
            'vipactInfo',
            'vipactjoin',
            'vipfriendinfo',
            'vipfriendzhu',
            'viprecivefudai'
        ]
    }]
}
function getGuideSidebar () {
    return [{
        title: '前言',
        collapsable: false,
        children:[
            '',
        ]
    },{
        title: 'API',
        collapsable: false,
        children:[
            'Python01',
        ]
    }]
}
