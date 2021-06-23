import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'
import { RecommendInfo } from '@app/shared/components'

interface SearchResultSectionTitleProps {
    children: string
    onClick: TouchEventFunction
}

export const SearchResultSectionTitle: FC<SearchResultSectionTitleProps> = ({
    children,
    onClick,
}) => (
    <View className="flex items-center justify-between">
        <Text className="text-xl font-bold">{children}</Text>
        <RecommendInfo onClick={onClick}>查看更多</RecommendInfo>
    </View>
)
