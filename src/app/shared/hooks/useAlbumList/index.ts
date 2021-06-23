import { useMemo } from 'react'

export const useAlbumList = (albums: Album[]) => {
    const playList = useMemo(
        () => albums.map(({ last_uptrack: { track_id } }) => track_id),
        [albums]
    )

    return playList
}
