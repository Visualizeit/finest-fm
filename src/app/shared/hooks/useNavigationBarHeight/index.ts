import {
    getMenuButtonBoundingClientRect,
    getSystemInfoSync,
} from '@tarojs/taro'

export const useNavigationBarRect = () => {
    const statusBarHeight = getSystemInfoSync().statusBarHeight
    const menuButtonRect = getMenuButtonBoundingClientRect()
    const gap = menuButtonRect.top - statusBarHeight
    const navigationBarHeight = 2 * gap + menuButtonRect.height

    const fullHeight = navigationBarHeight + statusBarHeight

    return {
        navigationBarHeight,
        statusBarHeight,
        gap,
        fullHeight,
        menuButtonRect,
    }
}
