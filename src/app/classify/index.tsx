import type { FC } from 'react'
import { useMemo } from 'react'
import { View } from '@fower/taro'
import { getCategories } from './data'
import { SideMenu } from './components'
import { ClassifyContent } from './features'
import { SideMenuContainer } from '@app/classify/components'
import { CustomTabBar } from '@app/custom-tab-bar'
import { PageHeader } from '@app/shared/components'

export const ClassIfy: FC = () => {
    const { data: CategorieData } = getCategories()

    const menuData = useMemo(
        () => CategorieData?.operation_categories ?? [],
        [CategorieData]
    )

    return (
        <>
            <SideMenuContainer.Provider>
                <PageHeader titleColor="red500">频道</PageHeader>
                <View mt5>
                    <SideMenu>
                        <SideMenu.Menu menuData={menuData}>
                            {({ name }) => (
                                <SideMenu.Item>{name}</SideMenu.Item>
                            )}
                        </SideMenu.Menu>
                        <SideMenu.Content>
                            <ClassifyContent />
                        </SideMenu.Content>
                    </SideMenu>
                </View>
            </SideMenuContainer.Provider>
            <CustomTabBar />
        </>
    )
}
