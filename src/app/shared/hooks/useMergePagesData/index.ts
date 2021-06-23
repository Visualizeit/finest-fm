import { useMemo } from 'react'

type ListData<T> = T extends { albums: Album[] } ? Album[] : Track[]

export const useMergePagesData = <T>(
    data: T[] = [],
    callBack: (
        previousValue: ListData<T>,
        currentValue: T,
        currentIndex: number
    ) => ListData<T>
) =>
    useMemo(() => {
        const pages = data.reduce<ListData<T>>((prev, current, index) => {
            return callBack(prev, current, index)
        }, [] as unknown as ListData<T>)

        return pages
    }, [data])
