import type { FC } from 'react'
import { useState, useMemo } from 'react'
import { View } from '@fower/taro'
import { ActionSheet } from '@app/shared/components'
import { TabBar, PlayerBar } from './features'
import { useDidHide, useDidShow } from '@tarojs/taro'
import { useTabBarHeight } from '@app/shared/hooks'

export const CustomTabBar: FC = () => {
    const [isShow, setShow] = useState(false)

    const marginBottom = useTabBarHeight()

    useDidShow(() => {
        setShow(true)
    })
    useDidHide(() => {
        setShow(false)
    })

    return useMemo(
        () => (
            <>
                <View className="fixed bottom-0 w-full">
                    {isShow && <ActionSheet />}
                    <PlayerBar />
                    <TabBar />
                </View>
                <View h={marginBottom} />
            </>
        ),
        [isShow,marginBottom]
    )
}
