import type { FC } from 'react'
import { useCallback } from 'react'
import { View, Text } from '@fower/taro'
import { colors } from '@fower/colors'
import { Router, NavigateType } from 'tarojs-router-next'
import IconFont from '@app/custom/iconfont'
import { useNavigationBarRect } from '@app/shared/hooks'

const serachPlaceholder = '搜索声音、电台、音乐'

export const NavigationBarSearch: FC = () => {
    const { menuButtonRect } = useNavigationBarRect()

    const goSearchView = useCallback(() => {
        Router.toSearch({
            type: NavigateType.switchTab,
        })
    }, [])

    const marginX = `100vw - ${menuButtonRect.right}px`

    return (
        <View className="flex items-center" h="100%">
            <View
                className="bg-gray-200 rounded-full"
                py3
                onClick={goSearchView}
                w={`calc(${menuButtonRect.left}px - (${marginX}) * 2)`}
                ml={`calc(${marginX})`}
            >
                <View className="flex items-center" mx5>
                    <IconFont name="sousuo" size={35} color={colors.gray500} />
                    <Text className="text-sm text-gray-500" ml5>
                        {serachPlaceholder}
                    </Text>
                </View>
            </View>
        </View>
    )
}
