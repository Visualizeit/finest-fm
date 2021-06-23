import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface UserInfoSectionProps {
    count: number
    children: string
    onClick?: TouchEventFunction
}

export const UserInfoSection: FC<UserInfoSectionProps> = ({
    count,
    children,
    onClick,
}) => (
    <>
        <View
            className="grid grid-cols-1 place-items-center"
            onClick={onClick}
            rowGap={16}
        >
            <Text className="font-semibold">{count}</Text>
            <Text className="text-sm text-gray-700">{children}</Text>
        </View>
    </>
)
