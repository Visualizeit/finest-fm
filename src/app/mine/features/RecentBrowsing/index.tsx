import type { FC } from 'react'
import { useCallback } from 'react'
import { View, Text } from '@fower/taro'
import { RecommendTitle } from '@app/shared/components'
import { recentBrowsingContainer } from './RecentBrowsingContainer'
import { RecentBrowsingItem, ItemPlaceholder } from '@app/mine/components'
import { goPlayList } from '@app/common/virtual-play-list'
import { RecentBrowsingPage } from './RecentBrowsingPage'

export const RecentBrowsing: FC = () => {
    const {
        recentBrowsingData,
        isOverstep,
        clearPlayHistory,
        playRecentBrowsing,
    } = recentBrowsingContainer()

    const goRecentBrowsingPage = useCallback(() => {
        goPlayList(RecentBrowsingPage)
    }, [])

    return (
        <View>
            <View className="flex items-center justify-between">
                <RecommendTitle>最近浏览</RecommendTitle>
                <Text className="text-gray-600" onClick={clearPlayHistory}>
                    清除
                </Text>
            </View>
            <View className="flex overflow-x-scroll auto-cols-auto">
                {recentBrowsingData.map((track, index) => {
                    return (
                        <RecentBrowsingItem
                            itemData={track}
                            index={index}
                            onClick={() => {
                                playRecentBrowsing(track.id)
                            }}
                        />
                    )
                })}
                {isOverstep && (
                    <ItemPlaceholder onClick={goRecentBrowsingPage}>
                        查看全部
                    </ItemPlaceholder>
                )}
            </View>
        </View>
    )
}
