import type { FC } from 'react'
import { View } from '@fower/taro'
import { RankList, RankListItem } from '@app/home/components'
import { RecommendTitle, RecommendInfo } from '@app/shared/components'
import { topListContainer } from './TopListContainer'
import { usePlayControl } from '@app/common/player'
import { useAlbumList } from '@app/shared/hooks'
import { TopListPage } from './TopListPage'
import { goPlayList } from '@app/common/virtual-play-list'

export const TopList: FC = () => {
    const { data: listData } = topListContainer()

    const { selectPlay } = usePlayControl()

    const playList = useAlbumList(listData)

    return (
        <View px8>
            <View className="flex items-center justify-between">
                <RecommendTitle>热播榜</RecommendTitle>
                <RecommendInfo onClick={() => goPlayList(TopListPage)}>
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
