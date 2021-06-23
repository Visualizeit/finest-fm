import { usePlayControl } from '@app/common/player'
import { PlayListItemProps, usePlayListItemProps } from '@app/shared/components'
import { PlayListContext } from '@app/common/virtual-play-list'
import { useContext } from 'react'

export const useVirtualPlayListItemProps = (
    itemData: Album | Track
): PlayListItemProps | undefined => {
    // const { selectPlay } = usePlayControl()

    const playList = useContext(PlayListContext)

    const props = usePlayListItemProps(itemData, playList)

    return props
    // return useMemo(() => {
    //     if (itemData['kind'] === 'album' || itemData['kind'] === 'paid_album') {
    //         const {
    //             album_title: title,
    //             cover_url: coverSrc,
    //             announcer: { nickname: announcerName },
    //             last_uptrack: { track_id },
    //         } = itemData

    //         const playListItemProps = {
    //             itemData: { title, coverSrc, announcerName },

    //             onClick: () => selectPlay(playList, track_id),
    //         }

    //         return playListItemProps
    //     } else if (itemData['kind'] === 'track') {
    //         const {
    //             id,
    //             track_title: title,
    //             cover_url_large: coverSrc,
    //             announcer: { nickname: announcerName },
    //         } = itemData

    //         const playListItemProps = {
    //             itemData: { title, coverSrc, announcerName },
    //             onClick: () => selectPlay(playList, id),
    //         }

    //         return playListItemProps
    //     }
    // }, [itemData, playList])
}
