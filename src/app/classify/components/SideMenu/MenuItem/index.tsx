import type { FC } from 'react'
import { useCallback, useContext, useMemo } from 'react'
import { View } from '@fower/taro'
import { SideMenuContainer } from '../SideMenuContainer'
import { ItemIndexContext } from '../Menu'

interface MenuItemProps {
    children: string
}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
    const { active, setActive } = SideMenuContainer.useContainer()

    const index = useContext(ItemIndexContext)

    const handleClick = useCallback(() => {
        setActive(index)
    }, [index])

    const isActive = useMemo(() => index === active, [index, active])

    return (
        <View
            className="grid rounded-tl-2xl rounded-br-2xl place-items-center"
            bgTrueGray100={isActive}
            fontBold={isActive}
            css={{
                color: isActive ? 'rose500' : 'gray500',
            }}
            px3
            py5
            onClick={handleClick}
        >
            {children}
        </View>
    )
}
