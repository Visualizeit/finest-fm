import { PlayerContainer } from '@app/common/player'
import { useCallback } from 'react'
import type { PlayList} from 'wechat-miniprogram-xmly/player'

export const usePlayControl = () => {
    const { player, isPlaying, setPlayList, setCurrentTime } =
        PlayerContainer.useContainer()

    const play = useCallback(() => {
        isPlaying ? player?.pause() : player?.play()
    }, [isPlaying, player])

    const select = useCallback(
        (id: number) => {
            player?.play(id)
        },
        [player]
    )

    const prev = useCallback(() => {
        player?.prev()
    }, [player])

    const next = useCallback(() => {
        player?.next()
    }, [player])

    const seek = useCallback(
        (position: number) => {
            setCurrentTime(position)
            player?.seek(position)
        },
        [player]
    )

    const playFirst = useCallback((playList: PlayList) => {
        const [first] = playList

        selectPlay(playList, first)
    }, [])

    const selectPlay = useCallback((playList: PlayList, id: number) => {
        // if (id !== sound?.id) {
        setPlayList(playList)

        select(id)

        // }
    }, [])

    return {
        play,
        playFirst,
        // select,
        selectPlay,
        // selectRadio,
        prev,
        next,
        seek,
    }
}
