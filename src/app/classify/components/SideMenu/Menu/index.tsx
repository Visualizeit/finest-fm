import type { ReactNode } from 'react'
import { createContext } from 'react'
import { View } from '@fower/taro'
// import { MenuIndicator } from '../MenuIndicator'

interface MenuProps<T> {
    menuData: T[]
    children: (value: T) => ReactNode
}

export const ItemIndexContext = createContext(0)

export const Menu = <T extends any>({
    menuData: data,
    children,
}: MenuProps<T>) => (
    <View className="inline-grid">
        {/* <MenuIndicator /> */}
        <View
            className="grid flex-shrink-0 grid-cols-1 overflow-y-scroll bg-white"
            p3
            w="25vw"
        >
            {data.map((item, index) => (
                <ItemIndexContext.Provider value={index}>
                    {children(item)}
                </ItemIndexContext.Provider>
            ))}
        </View>
    </View>
)
