import { useState, useEffect } from 'react'
import { getXMPInstance } from '@app/shared/plugin/xmly'
import type XMplayer from 'wechat-miniprogram-xmly/player'

export const usePlayerInstance = () => {
    const [player, setPlayer] = useState<XMplayer>()

    useEffect(() => {
        setPlayer(getXMPInstance().player)
    }, [])

    return player
}
