import { useMemo } from 'react'

export const useIds = (data: any[]) =>
    useMemo(() => {
        return data.join(',')
    }, [data])
