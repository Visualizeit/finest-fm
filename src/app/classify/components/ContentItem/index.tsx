import type { FC } from 'react'
import { View, Image, Text } from '@fower/taro'
import { TouchEventFunction } from '@tarojs/components'

interface ContentItemProps {
    coverSrc: string
    title: string
    count?: number
    onClick?: TouchEventFunction
}

export const ContentItem: FC<ContentItemProps> = ({
    coverSrc,
    title,
    count,
    onClick,
}) => {
    return (
        <View className="w-full shadow-2xl bg-whtie rounded-xl" onClick={onClick}>
            <Image
                mode="widthFix"
                className="w-full rounded-t-xl"
                src={coverSrc}
            />
            <View p4>
                <Text className="text-sm">{title}</Text>
            </View>
        </View>
    )
}
