import { getDailyForYou } from '@app/home/data/apis'
import { getRankContent } from '@app/shared/data/apis'

export const dailyForYouContainer = () => {
    const { data: dailyForYouData } = getDailyForYou()

    const { data: toDayNewsData } = getRankContent({
        count: 20,
        id: 55409,
        page: 1,
    })

    const { data: bestReputationData } = getRankContent({
        count: 20,
        id: 55431,
        page: 1,
    })
    
    return {
        dailyForYouData: dailyForYouData?.albums ?? [],
        toDayNewsData: toDayNewsData?.albums ?? [],
        bestReputationData: bestReputationData?.albums ?? [],
    }
}
