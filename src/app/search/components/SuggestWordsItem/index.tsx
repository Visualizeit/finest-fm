import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { TouchEventFunction } from '@tarojs/components'

interface SuggestWordsItemProps {
    children: string
    onClick: TouchEventFunction
}

export const SuggestWordsItem: FC<SuggestWordsItemProps> = ({
    children,
    onClick,
}) => (
    <View px5 py5 onClick={onClick}>
        <Text className="text-gray-700">{children}</Text>
    </View>
)
