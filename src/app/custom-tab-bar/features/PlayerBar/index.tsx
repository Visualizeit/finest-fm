import type { FC } from 'react'
import { useCallback, useMemo } from 'react'
import { View, Image, Text } from '@fower/taro'
import { PlayerContainer, usePlayControl } from '@app/common/player'
import { ActionSheetContainer } from '@app/shared/components'
import { Player } from '@app/player'
import { IconButton } from '@app/custom-tab-bar/components'

export const PlayerBar: FC = () => {
    const { sound, isPlaying } = PlayerContainer.useContainer()

    const { play, next } = usePlayControl()

    const { useActionSheet } = ActionSheetContainer.useContainer()

    const goPlayerView = useCallback(
        () => useActionSheet(<Player />, '100vh', false),
        []
    )

    return useMemo(
        () => (
            <View
                className="flex items-center bg-gradient-to-tr from-red-500 via-red-400 to-red-300 rounded-xl"
                id="PlayerBar"
                my3
                mx6
                p5
                h={80}
            >
                <Image
                    className="flex-none rounded-lg "
                    src={sound?.coverImgUrl ?? ''}
                    onClick={goPlayerView}
                    square={100}
                />
                <View className="flex justify-between flex-grow" h={90}>
                    <View className="grid grid-cols" mx6 onClick={goPlayerView}>
                        <Text className="text-white truncate">
                            {sound?.title ?? '点击专辑封面获取音频'}
                        </Text>
                        <Text className="text-sm text-gray-200">
                            {sound?.singer}
                        </Text>
                    </View>

                    <View
                        className="grid flex-shrink-0 grid-cols-2 place-items-center"
                        gap={12}
                    >
                        <IconButton
                            name={isPlaying ? 'pause1' : 'play1'}
                            onClick={play}
                        />
                        <IconButton name="next2" onClick={next} />
                    </View>
                </View>
            </View>
        ),
        [sound,isPlaying]
    )
}
