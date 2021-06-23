import { useMemo } from 'react'
import { uscContentData } from './uscContentData'

export const classifyContentContainer = () => {
    const { data } = uscContentData()

    const contentData = useMemo(() => data?.columns ?? [], [data])

    return {
        contentData,
    }
}
