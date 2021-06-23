import type { FC } from 'react'
import { View } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface RecommendInfoProps {
    onClick?: TouchEventFunction
}

export const RecommendInfo: FC<RecommendInfoProps> = ({
    children,
    onClick,
}) => (
    <View
        className="text-red-500 transition-colors"
        onClick={onClick}
        hoverClass="text-red-300"
    >
        {children}
    </View>
)
