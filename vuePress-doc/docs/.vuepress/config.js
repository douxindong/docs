module.exports = {
    base:'/docs/',
    title: 'Limery',
    description: '欢迎!',
    head: [
        ['link', {rel: 'icon', href: `/favicon.png`}],
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
        ]
    },
        {
            title: '月度超级粉丝榜',
            collapsable: false,
            children:[
                'FansRank/'
            ]
        },
        {
            title: '试用官V3',
            collapsable: false,
            children:[
                'tuijianguan-v3/tuijianguan-v3',
                'tuijianguan-v3/tuijianguan-v3-wx'
            ]
        },
        {
        title: '试用官',
        collapsable: false,
        children:[
            'shiyongguan/shiyongguan',
            'shiyongguan/shiyongguan-wx'
        ]
    },
        {
            title: 'Android极光VIP接入SDK文档',
            collapsable: false,
            children:[
                'third-push/',
                // 'third-push/厂商-JPush-Token回调说明',
                // 'third-push/fcm/fcm-Push-guide-集成指南',
                // 'third-push/huawei/huawei-Push-guide-集成指南',
                // 'third-push/meizu/meizu-Push-guide-集成指南',
                // 'third-push/oppo/opush-guide-集成指南',
                // 'third-push/vivo/vivo-push-guide-集成指南',
                // 'third-push/xiaomi/mipush-guide-集成指南',
            ]
        },
        {
        title: '趣视频',
        collapsable: false,
        children:[
            'AppDocument/Video',
        ]
    },{
        title: 'LifeVC 短视频',
        collapsable: false,
        children:[
            'AppDocument/appconfig',
            'AppDocument/videologin',
            'AppDocument/videostatistical',
        ]
    },{
        title: 'H5活动接口',
        collapsable: false,
        children:[

            'AppDocument/AppScreenAd',
            'DivideOneMillion/UserInfo',
            'DivideOneMillion/Receive',
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
    return [
    //     {
    //     title: '前言',
    //     collapsable: false,
    //     children:[
    //         '',
    //     ]
    // },
        {
        title: 'apple login',
        collapsable: false,
        children:[
            // 'Python01',
            'SignInWithApple',
            'SignInWithAppleJavaImp',
        ]
    }]
}
