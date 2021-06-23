import { useState } from 'react'
import { useThrottle } from '@react-hook/throttle'
import { usePlayerEvent } from '../usePlayerEvent'
import { usePlayerInstance } from '../usePlayerInstance'

export const usePlayTime = () => {
    const { currentTime, setCurrentTime } = useCurrentTime()
    const duration = useDuration()

    return {
        currentTime,
        setCurrentTime,
        duration,
    }
}

const fps = 1.5

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useThrottle(0, fps)

    usePlayerEvent('timeupdate', (_sound, position) => {
        setCurrentTime(position)
    })

    return { currentTime, setCurrentTime }
}

const useDuration = () => {
    const player = usePlayerInstance()
    const [duration, setDuration] = useState(0)

    usePlayerEvent('change.sound', () => {

        setDuration(player?.sound.duration ?? 0)
    })

    return duration
}
