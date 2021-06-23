import { useEffect, useState, useMemo, useCallback } from 'react'
import { createContainer } from 'unstated-next'
import { useAnimation } from '@app/shared/hooks'
import { getTarBarElementRect } from '@app/custom-tab-bar/data'
import type { TabItemData } from '..'

export const slideTabsContainer = (tabsData: TabItemData[] = []) => {
    const [active, setActive] = useState(0)

    const [indicatorAnimation, setPosition] = useAnimation({
        duration: 500,
        timingFunction: 'ease-out',
    })

    const tabRoutes = useMemo(() => tabsData.map(({ url }) => url), [tabsData])

    useEffect(() => {
        //@ts-ignore
        wx.onAppRoute(({ path }: { path: string }) => {
            updateAnimation(path)
        })
    }, [])

    const updateAnimation = useCallback(
        (path: string) => {
            setTimeout(() => {
                const currentTabIndex = tabRoutes.findIndex(
                    (tabRoute) => tabRoute === '/' + path
                )

                if (~currentTabIndex) {
                    updatePosition(currentTabIndex)
                    setActive(currentTabIndex)
                }
            })
        },
        [tabRoutes]
    )

    const updatePosition = useCallback(
        (activeIndex: number) => {
            const id = 'tab_index_' + activeIndex

            const selector = '#' + id

            const currentItem = tabsData[activeIndex]

            getTarBarElementRect(selector, ({ width, height, left }) =>
                setPosition({
                    width,
                    height,
                    translateX: left,
                    backgroundColor: currentItem.color,
                })
            )
        },
        [tabsData]
    )

    return {
        active,
        tabsData,
        // path,
        indicatorAnimation,
        setPosition,
    }
}

export const SlideTabsContainer = createContainer(slideTabsContainer)
