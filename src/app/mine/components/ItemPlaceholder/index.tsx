import type { FC } from 'react'
import { useMemo } from 'react'
import { View,Text } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface ItemPlaceholderProps {
    onClick?: TouchEventFunction
    children:string
}

export const ItemPlaceholder: FC<ItemPlaceholderProps> = ({ onClick ,children}) => {
    return useMemo(
        () => (
            <View onClick={onClick} ml={20} py5>
                <View className="grid bg-gray-200 rounded-xl place-items-center" square={200}>
                    <Text className="font-semibold">{children}</Text>
                </View>
            </View>
        ),
        []
    )
}
