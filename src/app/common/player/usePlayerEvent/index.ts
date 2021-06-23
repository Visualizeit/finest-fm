import { PlayerEventMap } from '@app/shared/plugin/xmly/core/XMPlugin'
import { useEffect } from 'react'
import { usePlayerInstance } from '../usePlayerInstance'

export const usePlayerEvent = <T extends keyof PlayerEventMap>(
    event: T,
    listener: PlayerEventMap[T]
) => {
    const player = usePlayerInstance()

    useEffect(() => {
        player && player.on(event, listener)

        return () => {
            player?.off(event, listener)
        }
    }, [player])
}
