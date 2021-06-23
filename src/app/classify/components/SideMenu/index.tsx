import type { FC } from 'react'
import { View } from '@fower/taro'
import { Menu } from './Menu'
import { Content } from './Content'
import { MenuItem } from './MenuItem'

export * from './SideMenuContainer'

interface SideMenuChildren {
    Menu: typeof Menu
    Content: FC
    Item: typeof MenuItem
}

export const SideMenu: FC & SideMenuChildren = ({ children }) => (
    <View className="flex max-h-screen min-h-screen">
        {children}
    </View>
)

SideMenu.Menu = Menu
SideMenu.Content = Content
SideMenu.Item = MenuItem
