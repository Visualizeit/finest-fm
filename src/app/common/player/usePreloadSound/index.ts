import { useEffect } from 'react'
import type { PlayList } from 'wechat-miniprogram-xmly/player'
import { usePlayerInstance } from '../usePlayerInstance'

export const usePreloadSound = (playList: PlayList) => {
    const player = usePlayerInstance()

    //init First
    useEffect(() => {
        if (player) {
            const [first] = playList
            // player.preloadSound(first).then(() => )
        }
    }, [player])
}
