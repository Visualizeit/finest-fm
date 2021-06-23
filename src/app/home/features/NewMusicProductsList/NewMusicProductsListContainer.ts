import { getRankContent } from '@app/shared/data/apis'

export const newMusicProductsID = 55415

export const newMusicProductsListContainer = () => {
    const { data } = getRankContent({
        count: 12,
        id: newMusicProductsID,
        page: 1,
    })

    return {
        data: data?.albums ?? [],
    }
}
