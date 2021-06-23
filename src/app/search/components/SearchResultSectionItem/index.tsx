import type { FC } from 'react'
import { Image, View, Text } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface SearchResultSectionItemProps {
    src: string
    index: number
    onClick?: TouchEventFunction
    title: string
}

export const SearchResultSectionItem: FC<SearchResultSectionItemProps> = ({
    src,
    index,
    title,
    onClick,
}) => {
    return (
        <View className="grid place-items-center" onClick={onClick}>
            <View ml={index && 30} maxW={250}>
                <Image
                    square={250}
                    src={src}
                    css={{
                        zIndex: -index,
                    }}
                />
                <Text className="block truncate">{title}</Text>
            </View>
        </View>
    )
}
