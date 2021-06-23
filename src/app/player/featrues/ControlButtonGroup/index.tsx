import type { FC } from 'react'
import { useMemo } from 'react'
import { View } from '@fower/taro'
import { colors } from '@fower/colors'
import { PlayerContainer, usePlayControl } from '@app/common/player'
import IconFont from '@app/custom/iconfont'

export const ControlButtonGroup: FC = () => {
    const { isPlaying } = PlayerContainer.useContainer()

    const { prev, next, play } = usePlayControl()

    return useMemo(
        () => (
            <View className="flex justify-center">
                <View className="grid grid-cols-3 place-items-center">
                    <View onClick={prev} m10>
                        <IconFont
                            size={50}
                            name="Prev"
                            color={colors.gray400}
                        />
                    </View>
                    <View onClick={play}>
                        <IconFont
                            size={180}
                            name={isPlaying ? 'pause' : 'play'}
                            color={colors.rose500}
                        />
                    </View>
                    <View onClick={next} m10>
                        <IconFont
                            size={50}
                            name="Next"
                            color={colors.gray400}
                        />
                    </View>
                </View>
            </View>
        ),
        [isPlaying]
    )
}
