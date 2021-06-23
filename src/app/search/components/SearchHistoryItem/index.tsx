import type { FC } from 'react'
import { View } from '@fower/taro'
import type{ TouchEventFunction } from '@tarojs/components'

interface SearchHistoryItemProps {
    children: string
    onClick: TouchEventFunction
}

export const SearchHistoryItem: FC<SearchHistoryItemProps> = ({
    children,
    onClick,
}) => (
    <View
        className="text-sm text-gray-700 bg-gray-100 rounded-full shadow-sm"
        py4
        px8
        m4
        onClick={onClick}
    >
        {children}
    </View>
)
