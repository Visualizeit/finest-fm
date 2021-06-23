import { getCurrentInstance } from '@tarojs/taro'
import type { PageInstance } from '@tarojs/taro'

interface CustomPageInstance extends PageInstance {
    getTabBar: () => PageInstance
}

export const useTabBarInstance = () => {
    const { page } = getCurrentInstance()
    
    return (page as CustomPageInstance).getTabBar()
}
