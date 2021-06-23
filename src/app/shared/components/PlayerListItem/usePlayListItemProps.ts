import { usePlayControl } from '@app/common/player'
import { PlayListItemProps } from '@app/shared/components'
import { useMemo } from 'react'

export const usePlayListItemProps = (
    itemData: Album | Track,
    playList: number[]
): PlayListItemProps | undefined => {
    const { selectPlay } = usePlayControl()

    return useMemo(() => {
        if (itemData['kind'] === 'album' || itemData['kind'] === 'paid_album') {
            const {
                album_title: title,
                cover_url: coverSrc,
                announcer: { nickname: announcerName },
                last_uptrack: { track_id },
            } = itemData

            const playListItemProps = {
                itemData: { title, coverSrc, announcerName },

                onClick: () => selectPlay(playList, track_id),
            }

            return playListItemProps
        } else if (
            itemData['kind'] === 'track' ||
            itemData['kind'] === 'paid_track'
        ) {
            const {
                id,
                track_title: title,
                cover_url_large: coverSrc,
                announcer: { nickname: announcerName },
            } = itemData

            const playListItemProps = {
                itemData: { title, coverSrc, announcerName },
                onClick: () => selectPlay(playList, id),
            }

            return playListItemProps
        }
    }, [itemData, playList])
}
