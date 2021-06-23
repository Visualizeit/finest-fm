import { getRankContent } from '@app/shared/data/apis'

export const HotListID = 55372

export const topListContainer = () => {
    const { data } = getRankContent({
        count: 12,
        id: HotListID,
        page: 1,
    })

    return {
        data: data?.albums ?? [],
    }
}
