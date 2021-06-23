import type { FC } from 'react'
import { View } from '@fower/taro'
import { RankList, RankListItem } from '@app/home/components'
import { RecommendTitle, RecommendInfo } from '@app/shared/components'

import { useAlbumList } from '@app/shared/hooks'
import { goPlayList } from '@app/common/virtual-play-list'

import { usePlayControl } from '@app/common/player'
import { newMusicProductsListContainer } from './NewMusicProductsListContainer'

import { NewMusicProductsListPage } from './NewMusicProductsListPage'

export const NewMusicProductsList: FC = () => {
    const { data: listData } = newMusicProductsListContainer()

    const { selectPlay } = usePlayControl()

    const playList = useAlbumList(listData)

    return (
        <View px8 pt6>
            <View className="flex items-center justify-between">
                <RecommendTitle>音乐新品榜</RecommendTitle>
                <RecommendInfo
                    onClick={() => goPlayList(NewMusicProductsListPage)}
                >
                    更多
                </RecommendInfo>
            </View>
            <RankList columns={3} listData={listData}>
                {(itemData) => (
                    <RankListItem
                        onClick={() =>
                            selectPlay(playList, itemData.last_uptrack.track_id)
                        }
                        itemData={itemData}
                    />
                )}
            </RankList>
        </View>
    )
}
