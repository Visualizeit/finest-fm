import { getTarBarElementRect } from '@app/custom-tab-bar/data'
import { getSystemInfoSync } from '@tarojs/taro'
import { useEffect, useMemo, useState } from 'react'

export const useTabBarHeight = () => {
    const { windowHeight } = useMemo(() => getSystemInfoSync(), [])

    const [height, setHeight] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            getTarBarElementRect('#PlayerBar', (rect) => {
                setHeight(windowHeight - rect.top)
            })
        })
    }, [])

    return height + 'px'
}
