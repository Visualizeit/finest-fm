import { useItemData } from '..'
import { getSystemInfoSync } from '@tarojs/taro'
import { useMemo, useRef } from 'react'
import { useThrottleCallback } from '@react-hook/throttle'
import VirtualList from '@tarojs/components/virtual-list'
import { showLoading, hideLoading } from '@tarojs/taro'
import { useNavigationBarRect } from '@app/shared/hooks'

const { fullHeight } = useNavigationBarRect()

const height = getSystemInfoSync().screenHeight - fullHeight, //列表渲染高度
    width = '100%', //列表渲染宽度
    itemSize = 75 //列表项目高度

export const useVirtualPlayList = <T>(
    initialState: T[],
    hasNext: boolean | undefined,
    onLoadingCallBack: () => void
) => {
    const { itemData, itemCount } = useItemData(initialState)

    const isLoading = useRef(false)

    const handleListReachBottom = () => {
        showLoading()
        isLoading.current = true

        setTimeout(() => {
            isLoading.current = false

            onLoadingCallBack()

            hideLoading()
        }, 1000)
    }

    const isUpdateHeight = useMemo(() => {
        const singleScreenShowCount = height / itemSize

        return (itemCount - singleScreenShowCount) * itemSize
    }, [itemCount])

    const onScroll: typeof VirtualList.prototype.props.onScroll =
        useThrottleCallback(
            ({ scrollDirection, scrollOffset }) => {
                // const isReachBottom =
                //     Math.abs(scrollOffset - isUpdateHeight) < 1
                const isReachBottom =
                    Math.abs(scrollOffset - isUpdateHeight) < 100
                if (
                    !isLoading.current &&
                    scrollDirection === 'forward' &&
                    isReachBottom &&
                    hasNext
                ) {
                    handleListReachBottom()
                }
            },
            3,
            true
        )

    return {
        listConfig: {
            width,
            height,
            itemData,
            itemCount,
            itemSize,
            onScroll,
        },
    }
}
