import type { FC } from 'react'
import { View } from '@fower/taro'
import { RecommendTitle, RecommendInfo } from '@app/shared/components'
import { ListeningItem } from '@app/home/components'
import { Router, NavigateType } from 'tarojs-router-next'
import { goPlayList } from '@app/common/virtual-play-list'
import { recommendListeningContainer } from './RecommendListeningContainer'
import { RecommendListeningItemPage } from './RecommendListeningItemPage'

export const RecommendListening: FC = () => {
    const { data: listeningList } = recommendListeningContainer()

    return (
        <View px8>
            <View className="flex items-center justify-between">
                <RecommendTitle>推荐听单</RecommendTitle>
                <RecommendInfo
                    onClick={() => {
                        Router.toClassify({
                            type: NavigateType.switchTab,
                        })
                    }}
                >
                    更多
                </RecommendInfo>
            </View>

            <View className="flex overflow-x-scroll">
                {listeningList.map((column, index) => (
                    <ListeningItem
                        itemData={column}
                        index={index}
                        onClick={() => {
                            goPlayList(RecommendListeningItemPage, {
                                queryID: column.id,
                            })
                        }}
                    />
                ))}
            </View>
        </View>
    )
}
