import { colors } from '@fower/colors'
import { TabItemData } from '../../components'


export const tabBarData: TabItemData[] = [
    {
        icon: 'Home',
        text: '首页',
        color: colors.blue500,
        url:'/pages/home/index'
    },
    {
        icon: 'menu',
        // text: '分类',
        text: '频道',
        color: colors.red500,
        url:'/pages/classify/index'
    },
    {
        icon: 'sousuo',
        text: '搜索',
        color: colors.yellow500,
        url:'/pages/search/index'
    },
    {
        icon: 'user',
        text: '我的',
        color: colors.purple500,
        url:'/pages/mine/index'
    },
]
