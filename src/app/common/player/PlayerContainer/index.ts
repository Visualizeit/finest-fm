import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import { getStorageSync } from '@tarojs/taro'
import type { Sound, PlayList } from 'wechat-miniprogram-xmly/player'
import {
    usePlayerInstance,
    usePlayerEvent,
    usePlayHistory,
    PlayHistoryKEY,
    PlayListCacheKey,
    usePlayTime,
    usePlayListCache,
} from '..'

const defaultPlayList = [107288663, 263878526]

export const playerContainer = () => {
    const player = usePlayerInstance()

    const [playList, setPlayList] = useState<PlayList>(() => {
        const playHistory = getStorageSync<number[]>(PlayListCacheKey)

        return playHistory.length ? playHistory : defaultPlayList
    })

    const [isPlaying, setPlaying] = useState(false)
    const [sound, setSound] = useState<Sound>()
    const time = usePlayTime()

    usePlayerEvent('change.playState', (_sound, playState) => {
        const playing = playState === 'playing' || playState === 'loading'

        setPlaying(playing)
    })

    usePlayerEvent('change.sound', (sound) => {
        setSound(sound)
    })

    const { updatePlayListCache } = usePlayListCache()

    usePlayerEvent('change.playlist', (playlist) => {
        if (playlist.length) {
            updatePlayListCache(playlist)
        }
    })

    useEffect(() => {
        if (player) {
            const PlayHistory = getStorageSync<number[]>(PlayHistoryKEY)

            if (PlayHistory.length) {
                const firstSounudId = PlayHistory[0]

                player.preloadSound(firstSounudId).then(() => {
                    setSound(player.getSounds()[firstSounudId])
                })
            }
        }
    }, [player])

    useEffect(() => {
        // player && !player.getPlaylist().length && player.setPlaylist(playList)
        player && player.setPlaylist(playList)
    }, [player, playList])

    const { addPlayHistoryItem } = usePlayHistory()

    useEffect(() => {
        sound?.id && addPlayHistoryItem(sound.id)
    }, [sound])

    return {
        sound,
        setSound,
        isPlaying,
        player,
        playList,
        ...time,
        setPlayList,
    }
}

export const PlayerContainer = createContainer(playerContainer)
