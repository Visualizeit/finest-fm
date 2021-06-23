import { FC } from 'react'
import { View, Text } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'
import IconFont from '@app/custom/iconfont'

interface SliderListInfoProps {
    intro: string
    onClick?: TouchEventFunction
    children: string
}

export const SliderListInfo: FC<SliderListInfoProps> = ({
    children,
    intro,
    onClick,
}) => {
    return (
        <View className="flex flex-col justify-between " h="100%" ml4>
            <View className="grid flex-grow place-items-center">
                <Text
                    className="text-sm font-semibold rounded-lg"
                    bgTrueGray100
                    p2
                >
                    {intro}
                </Text>
            </View>
            <View
                className="flex items-center justify-center bg-blue-600 rounded-xl colorfulShadow"
                onClick={onClick}
                p3
                mt5
                mx3
            >
                <IconFont name="play" color="white" size={40} />
                <Text className="text-sm text-white">{children}</Text>
            </View>
        </View>
    )
}
