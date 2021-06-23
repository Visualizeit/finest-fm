import { createSelectorQuery } from '@tarojs/taro'
import type { NodesRef } from '@tarojs/taro'
import { useTabBarInstance } from '@app/shared/hooks'

interface GetElementRect {
    (selector: string, callBack: NodesRef.BoundingClientRectCallback): void
}

export const getTarBarElementRect: GetElementRect = (selector, callBack) => {
    const tabBarInstance = useTabBarInstance()

    createSelectorQuery()
        // .in(tabBarInstance)
        .select(selector)
        .boundingClientRect(callBack)
        .exec()
}
