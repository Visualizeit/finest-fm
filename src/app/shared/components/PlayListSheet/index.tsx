import type { FC } from 'react'
import { useCallback } from 'react'
import { ScrollView, View, Text } from '@fower/taro'
import { colors } from '@fower/colors'
import { PlayListItem, ActionSheetContainer } from '@app/shared/components'
import IconFont from '@app/custom/iconfont'
import { usePlayControl } from '@app/common/player'
import { usePlayListItemProps } from '../PlayerListItem'
import { usePlayListProps } from '../PlayerList'

export interface PlayListSheetProps {
    sheetData: (Album | Track)[]
}

export const PlayListSheet: FC<PlayListSheetProps> = ({ sheetData }) => {
    const { toggle } = ActionSheetContainer.useContainer()

    const { playFirst } = usePlayControl()

    const playList = usePlayListProps(sheetData)

    const playAllAudio = useCallback(() => {
        playFirst(playList)
    }, [playList])

    return (
        <View m10>
            <View className="flex items-center justify-between" mb5>
                <View
                    className="transition-colors rounded-2xl"
                    onClick={() => toggle()}
                    p5
                    hoverClass="bg-gray-200"
                >
                    <IconFont name="back" size={40} />
                </View>
                <View
                    className="flex transition-colors rounded-full bg-gradient-to-br from-red-500 to-red-400"
                    p5
                    onClick={playAllAudio}
                >
                    <IconFont name="play" size={40} color={colors.white} />
                    <Text className="text-sm text-white">播放全部</Text>
                </View>
            </View>
            <ScrollView scrollY h="50vh">
                <View className="grid grid-cols-1" rowGap={20}>
                    {sheetData.map((itemData) => {
                        const props = usePlayListItemProps(itemData, playList)

                        return <PlayListItem {...props} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
