import type { FC } from 'react'
import { View } from '@fower/taro'
import { AlbumListItem } from '@app/home/components'
import { RecommendInfo, RecommendTitle } from '@app/shared/components'
import { guessYourFavoriteContainer } from './GuessYourFavoriteContainer'
import { usePlayControl } from '@app/common/player'
import { useAlbumList } from '@app/shared/hooks'
import { GuessYourFavoritePage } from './GuessYourFavoritePage'
import { goPlayList } from '@app/common/virtual-play-list'

export const GuessYourFavorite: FC = () => {
    const { data: listData } = guessYourFavoriteContainer()

    const playList = useAlbumList(listData)

    const { selectPlay } = usePlayControl()

    return (
        <View px8>
            <View className="flex items-center justify-between">
                <RecommendTitle>猜你喜欢</RecommendTitle>
                <RecommendInfo
                    onClick={() => goPlayList(GuessYourFavoritePage)}
                >
                    更多
                </RecommendInfo>
            </View>
            <View className="flex overflow-x-scroll">
                {listData.map((album, index) => (
                    <AlbumListItem
                        itemData={album}
                        onClick={() => {
                            selectPlay(playList, album?.last_uptrack?.track_id)
                        }}
                        index={index}
                    />
                ))}
            </View>
        </View>
    )
}
