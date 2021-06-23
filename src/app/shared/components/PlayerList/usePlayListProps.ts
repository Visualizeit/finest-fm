import { useMemo } from 'react'

export const usePlayListProps = (listData: (Album | Track)[]) => {

    const playList = useMemo(() => {
        if (
            listData?.[0]?.kind === 'album' ||
            listData?.[0]?.kind === 'paid_album'
        ) {
            return (listData as Album[]).map(
                ({ last_uptrack: { track_id } }) => track_id
            )
        }
        // else if (listData[0].kind === 'track') {
        return (listData as Track[]).map(({ id }) => id)
        // }
    }, [listData])

    return playList
}
