import { useEffect, useMemo, useState } from 'react'

export const useItemData = <T>(initialState: T[]) => {
    const [itemData, setItemData] = useState(initialState)

    const itemCount = useMemo(() => itemData.length, [itemData])

    useEffect(() => {
        // if (initialState.length !== itemData.length) {
            setItemData(initialState)
        // }
    }, [initialState])

    return {
        itemData,
        setItemData,
        itemCount,
    }
}
