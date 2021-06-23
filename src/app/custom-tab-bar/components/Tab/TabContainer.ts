import { useCallback } from 'react'
import { createContainer } from 'unstated-next'
import { SlideTabsContainer } from '../SlideTabs/SlideTabsContainer'
import type { TabItemData } from '@app/custom-tab-bar/components'
import { Router, NavigateType } from 'tarojs-router-next'

interface TabContainerProps {
    index: number
    itemData: TabItemData
}

const defaultProps: TabContainerProps = {
    index: 0,
    itemData: {
        color: '',
        icon: 'Home',
        text: '',
        url: '',
    },
}

export const tabContainer = ({
    index,
    itemData,
}: TabContainerProps = defaultProps) => {
    const { active } = SlideTabsContainer.useContainer()

    const isCurrent = active === index

    const id = 'tab_index_' + index

    const goTabPage = useCallback(() => {
        Router.navigate(
            {
                url: itemData.url,
            },
            {
                type: NavigateType.switchTab,
            }
        )
    }, [itemData])

    return {
        id,
        goTabPage,
        isCurrent,
        itemData,
    }
}

export const TabContainer = createContainer(tabContainer)
