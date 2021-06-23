import type { FC } from 'react'
import { View } from '@fower/taro'
import { Tab, Indicator, TabContainer } from '@app/custom-tab-bar/components'
import { SlideTabsContainer } from './SlideTabsContainer'

export * from './SlideTabsContainer'

interface SlideTabsProps {}

const height = 80

export const SlideTabs: FC<SlideTabsProps> = () => {
    const { tabsData } = SlideTabsContainer.useContainer()
    
    return (
        <View shadow2XL bgGray100>
            <View
                className="grid grid-rows-1"
                pt5
                id="TabBar"
                pb="calc(20rpx + env(safe-area-inset-bottom))"
                h={height}
            >
                <Indicator />
                <View
                    className="relative grid"
                    gridTemplateColumns={tabsData.length}
                    px5
                    h={height}
                >
                    {tabsData.map((itemData, index) => (
                        <TabContainer.Provider
                            initialState={{ index, itemData }}
                        >
                            <Tab />
                        </TabContainer.Provider>
                    ))}
                </View>
            </View>
        </View>
    )
}
