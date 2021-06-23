import { getRankContent } from '@app/shared/data/apis'

export const movieOriginalListID = 55453

export const movieOriginalListContainer = () => {
    const { data } = getRankContent({
        count: 6,
        id: movieOriginalListID,
        page: 1,
    })

    return {
        data: data?.albums as PaidAlbum[] ?? [],
    }
}
