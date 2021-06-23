import type { FC } from 'react'
import { useCallback, useMemo } from 'react'
import { Slider, View, Text } from '@fower/taro'
import { colors } from '@fower/colors'
import clsx from 'clsx'

import type { SliderProps } from '@tarojs/components/types/Slider'
import type { BaseEventOrig } from '@tarojs/components'
import { PlayerContainer, usePlayControl } from '@app/common/player'
import { useFormatDuration } from '@app/player/data'

export const PlayerSlider: FC = () => {
    const { currentTime, duration } = PlayerContainer.useContainer()

    const { seek } = usePlayControl()

    const handleSliderChange = useCallback(
        (event: BaseEventOrig<SliderProps.onChangeEventDetail>) =>
            seek(event.detail.value),
        []
    )

    const [formatCurrenTime, formatDuration] = useFormatDuration(
        currentTime,
        duration
    )

    return useMemo(
        () => (
            <View>
                <Slider
                    step={0.1}
                    value={currentTime}
                    max={duration}
                    disabled={!duration}
                    onChange={handleSliderChange}
                    activeColor={colors.red500}
                    backgroundColor={colors.gray300}
                    blockSize={15}
                />
                <View
                    className="flex justify-between text-sm text-gray-500"
                    mx9
                >
                    <Text className={clsx(duration && 'text-pink-500 font-bold')}>
                        {formatCurrenTime}
                    </Text>
                    <Text>{formatDuration}</Text>
                </View>
            </View>
        ),
        [currentTime, duration]
    )
}
