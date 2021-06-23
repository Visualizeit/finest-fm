import type{ ReactNode } from 'react'
import { useState } from 'react'
import { createContainer } from 'unstated-next'

export const actionSheetContainer = () => {
    const [isOpen, setOpen] = useState(false)
    const [hasRounded, setRounded] = useState(true)
    const [height, setHeight] = useState<string | number>(0)

    const [children, setChildren] = useState<ReactNode | (() => ReactNode)>()

    const toggle = (value: boolean = !isOpen) => setOpen(value)

    const useActionSheet = (
        children: ReactNode,
        height: string | number,
        hasRounded = true
    ) => {
        setChildren(children)
        setHeight(height)
        toggle(true)

        setRounded(hasRounded)
    }

    return {
        isOpen,
        toggle,
        hasRounded,
        height,
        children,
        useActionSheet,
    }
}

export const ActionSheetContainer = createContainer(actionSheetContainer)
