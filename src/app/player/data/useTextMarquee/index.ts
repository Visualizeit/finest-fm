import { useTarBarElementRect } from '@app/shared/hooks'
import { useEffect, useMemo, useState } from 'react'
import './marquee.scss'

export const useTextOverflow = (
    parentSelector: string,
    targetSelector: string,
    deps: any[]
) => {
    const [transform, setTransform] = useState(0)

    useEffect(() => {
        useTarBarElementRect(parentSelector, (parentRect) => {
            useTarBarElementRect(targetSelector, (targetRect) => {
                const width = targetRect.width - parentRect.width

                setTransform(width)
            })
        })
    }, deps)

    const isOverflow = useMemo(() => transform >= 0, [transform])

    return useMemo(
        () => ({
            isOverflow,
            transform,
        }),
        [isOverflow, transform]
    )
}
