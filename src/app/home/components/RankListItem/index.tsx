import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { AlbumCover } from '@app/shared/components'
import { TouchEventFunction } from '@tarojs/components'

export interface RankListItemProps {
    itemData: Album 
    onClick: TouchEventFunction
}

const albumSize = 102

export const RankListItem: FC<RankListItemProps> = ({
    itemData: {
        album_title,
        announcer: { nickname },
        cover_url,
    },
    onClick,
}) => (
    <View
        className="flex items-center rounded-2xl bg-red-50 "
        h28
        m3
        p3
        onClick={onClick}
    >
        <AlbumCover size={albumSize} src={cover_url} />
        <View className="min-w-0" mx6>
            <Text className="block min-w-0 font-medium truncate">
                {album_title}
            </Text>
            <Text className="text-xs text-gray-700">{nickname}</Text>
        </View>
    </View>
)
