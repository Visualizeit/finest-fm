import type { FC } from 'react'
import { useMemo } from 'react'
import { View} from '@fower/taro'
import { createWaveform } from '@app/player/data'
import { PlayerContainer } from '@app/common/player'
import clsx from 'clsx'

export const WaveformVisualizer: FC = () => {
    const { currentTime, duration } = PlayerContainer.useContainer()

    const waveform = useMemo(
        () => (duration ? createWaveform() : []),
        [duration]
    )

    const percentage = useMemo(() => {
        return Math.ceil((currentTime / duration) * 10000) / 100.0
    }, [currentTime, duration])

    return useMemo(
        () => (
            <View className="flex justify-center " mx9 h={100}>
                <View className="flex" h="100%">
                    {waveform.map((item, index) => (
                        <View className="grid place-items-center" h="100%">
                            <View
                                className={clsx(
                                    'rounded-t-lg rounded-b-lg',
                                    percentage >= index * 2
                                        ? 'bg-red-500'
                                        : 'bg-gray-300'
                                )}
                                h={item}
                                w2
                                ml={index && 4}
                            />
                        </View>
                    ))}
                </View>
            </View>
        ),
        [duration, percentage]
    )
}
