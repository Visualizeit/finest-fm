import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { TouchEventFunction } from '@tarojs/components'
import { AlbumCover } from '@app/shared/components'

interface AlbumListItemProps {
    index: number
    itemData: Album
    onClick?: TouchEventFunction
}

export const AlbumListItem: FC<AlbumListItemProps> = ({
    index,
    itemData: { cover_url_middle, album_title },
    onClick,
}) => {
    return (
        <View w48 ml6={!!index} onClick={onClick}>
            <AlbumCover size={192} src={cover_url_middle} />

            <Text
                className="block overflow-hidden text-xl text-center text-gray-900 truncate"
                text2XL
            >
                {album_title}
            </Text>
        </View>
    )
}
