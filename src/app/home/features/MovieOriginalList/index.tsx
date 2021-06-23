import type { FC } from 'react'
import { useState, useMemo } from 'react'
import { View } from '@fower/taro'
import { useAlbumList } from '@app/shared/hooks'

import { goPlayList } from '@app/common/virtual-play-list'
import { RecommendTitle, RecommendInfo } from '@app/shared/components'
import { usePlayControl } from '@app/common/player'
import { movieOriginalListContainer } from './MovieOriginalListContainer'
import { MovieOriginalListPage } from './MovieOriginalListPage'
import { SliderList, SliderListItem, SliderListInfo } from '@app/home/components'
// import './backGroundBlur.css'

export const MovieOriginalList: FC = () => {
    const { data: listData } = movieOriginalListContainer()

    const playList = useAlbumList(listData)

    const { selectPlay } = usePlayControl()

    const [active, setActive] = useState(0)

    const activeItemData = useMemo(() => listData[active], [listData, active])

    return (
        <View px8>
            <View className="flex items-center justify-between">
                <RecommendTitle>影视原著榜</RecommendTitle>
                <RecommendInfo
                    onClick={() => goPlayList(MovieOriginalListPage)}
                >
                    更多
                </RecommendInfo>
            </View>
            <View
                className="grid grid-cols-2 place-items-center "
                p5
            >
                <View className="w-full">
                    <SliderList
                        onChange={({ detail: { current } }) =>
                            setActive(current)
                        }
                    >
                        {listData.map(({ cover_url }, index) => (
                            <SliderListItem
                                src={cover_url}
                                isCurrent={index === active}
                            />
                        ))}
                    </SliderList>
                </View>
                <SliderListInfo
                    intro={activeItemData?.album_title}
                    onClick={() =>
                        selectPlay(
                            playList,
                            activeItemData?.last_uptrack?.track_id
                        )
                    }
                >
                    立即播放
                </SliderListInfo>
            </View>
        </View>
    )
}
