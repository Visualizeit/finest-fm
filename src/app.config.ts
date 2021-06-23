import { useGlobalIconFont } from './app/custom/iconfont/helper'

export default {
    entryPagePath: 'pages/home/index',
    // entryPagePath: 'pages/classify/index',
    // entryPagePath: 'pages/mine/index',
    // entryPagePath: 'pages/search/index',
    pages: [      
        'pages/home/index',
        'pages/classify/index',
        'pages/search/index',
        'pages/search-result/index',
        'pages/mine/index',
        'pages/play-list/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
    plugins: {
        // 'xmly-plugin': { version: '3.1.4', provider: 'wxc6a13dda5815c529' },
        'xmly-plugin': { version: '3.1.5', provider: 'wxc6a13dda5815c529' },
    },
    requiredBackgroundModes: ['audio'],
    tabBar: {
        custom: true,
        list: [
            {
                pagePath: 'pages/home/index',
                text: '首页',
            },
            {
                pagePath: 'pages/classify/index',
                text: '频道',
            },
            {
                pagePath: 'pages/search/index',
                text: '搜索',
            },
            {
                pagePath: 'pages/mine/index',
                text: '我的',
            },
        ],
    },
    usingComponents: Object.assign(useGlobalIconFont()),
}
