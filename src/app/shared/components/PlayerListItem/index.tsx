import type { FC } from 'react'
import { View, Text, Image } from '@fower/taro'
import { TouchEventFunction } from '@tarojs/components'
import IconFont from '@app/custom/iconfont'
export * from './usePlayListItemProps'

interface ItemData {
    title: string
    coverSrc: string
    announcerName: string
    // index: number
}

export interface PlayListItemProps {
    itemData?: ItemData
    onClick?: TouchEventFunction
}

const albumSize = 96

export const PlayListItem: FC<PlayListItemProps> = ({
    itemData = {},
    onClick,
    // index,
}) => {
    const { announcerName = '', coverSrc = '', title = '' } = itemData

    return (
        <View
            className="flex items-center bg-red-50 rounded-xl"
            onClick={onClick}
            p3
        >
            {/* <Text>{index + 1}</Text> */}
            <Image
                className="flex-none rounded-lg"
                src={coverSrc}
                square={albumSize}
            />
            <View className="grid flex-grow grid-cols-1" mx6 gap={10}>
                <Text className="truncate"> {title}</Text>
                <Text className="text-xs text-gray-700">{announcerName}</Text>
            </View>
            <View>
                <IconFont name="dot" size={40} />
            </View>
        </View>
    )
}
