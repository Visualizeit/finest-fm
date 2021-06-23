import type { FC } from 'react'
import { Text, View, Image } from '@fower/taro'
import { colors } from '@fower/colors'

import { PlayerContainer } from '@app/common/player'
import { ActionSheetContainer } from '@app/shared/components'

import { useNavigationBarRect } from '@app/shared/hooks'
import { ControlBar } from './featrues'
import IconFont from '@app/custom/iconfont'

const Wrapper: FC = ({ children }) => (
    <View className="flex flex-col" h="100%">
        <View className="flex flex-col" h="100%">
            {children}
        </View>
    </View>
)

const { statusBarHeight, gap } = useNavigationBarRect()

export const Player: FC = () => {
    const { sound } = PlayerContainer.useContainer()

    const { toggle } = ActionSheetContainer.useContainer()

    return (
        <Wrapper>
            <View className="fixed " ml3 mt={statusBarHeight + gap + 'px'}>
                <View
                    className="flex items-center justify-center bg-gray-200 rounded-full shadow-2xl bg-opacity-30"
                    p3
                    gap={30}
                    onClick={() => toggle()}
                >
                    <IconFont
                        name="arrowback"
                        size={50}
                        color={colors.gray200}
                    />
                </View>
            </View>
            <Image src={sound?.coverImgUrl ?? ''} h="60vh" w="100vw" />
            <View
                className="grid flex-grow grid-cols-1 bg-gray-50 rounded-t-3xl"
                mt={-50}
                pb="calc(env(safe-area-inset-bottom) + 50rpx)"
                pt8
                px8
            >
                <View
                    className="grid grid-cols-1"
                    id="playerTitleContainer"
                    gap={20}
                >
                    <Text
                        className="inline-block text-3xl font-bold truncate whitespace-nowrap"
                        id="playerTitle"
                    >
                        {sound?.title}
                    </Text>
                    <Text className="block text-gray-500">{sound?.singer}</Text>
                </View>

                <View className="grid grid-cols-1 " mt10 gap={40}>
                    <ControlBar />
                </View>
            </View>
        </Wrapper>
    )
}
