import { getXmColumns } from '@app/shared/data/apis'
const HotID = 0

export const recommendListeningContainer = () => {
    const { data } = getXmColumns({
        operation_category_id: HotID,
        count: 8,
    })

    return {
        data: data?.columns ?? [],
    }
}
