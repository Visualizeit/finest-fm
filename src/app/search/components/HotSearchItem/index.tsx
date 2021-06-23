import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { TouchEventFunction } from '@tarojs/components'

interface HotSearchItemProps {
    index: number
    onClick: TouchEventFunction
    children: string
}

export const HotSearchItem: FC<HotSearchItemProps> = ({
    index,
    children,
    onClick,
}) => (
    <View className="flex items-center" onClick={onClick}>
        <HotSearchItemIndex>{index}</HotSearchItemIndex>
        <Text className="text-gray-700" ml6>
            {children}
        </Text>
    </View>
)

const HotSearchItemIndex: FC = ({ children }) => (
    <View
        className="grid text-white bg-yellow-400 place-items-center"
        square={40}
    >
        <Text className="text-xs">{children}</Text>
    </View>
)
