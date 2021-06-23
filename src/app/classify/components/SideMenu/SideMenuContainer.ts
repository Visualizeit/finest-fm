import {  useState } from 'react'
import { createContainer } from 'unstated-next'

const sideMenuContainer = () => {
    const [active, setActive] = useState(0)

    return {
        active,
        setActive,
    }
}

export const SideMenuContainer = createContainer(sideMenuContainer)
