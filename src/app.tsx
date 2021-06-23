import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useInitCloud } from '@app/shared/cloud'
import { useInitXMPlugin } from '@app/shared/plugin/xmly'
import { ActionSheetContainer } from '@app/shared/components'
import { PlayerContainer } from '@app/common/player'
import { SlideTabsContainer } from '@app/custom-tab-bar/components'
import { tabBarData } from '@app/custom-tab-bar/features/TabBar'
import { SearchContainer } from '@app/search/data'
import { useInitUserProfileCache } from '@app/mine/data'
import { useInitPlayHistory, useInitPlayListCache } from '@app/common/player'

import '@app/mine/data/middleware'

import 'windi.css'
import './app.scss'

const queryClient = new QueryClient()

const App: FC = ({ children }) => {
    useInitXMPlugin()
    useInitCloud()

    useInitPlayHistory()
    useInitUserProfileCache()
    useInitPlayListCache()

    return (
        <QueryClientProvider client={queryClient}>
            <PlayerContainer.Provider>
                <SearchContainer.Provider>
                    <SlideTabsContainer.Provider initialState={tabBarData}>
                        <ActionSheetContainer.Provider>
                            {children}
                        </ActionSheetContainer.Provider>
                    </SlideTabsContainer.Provider>
                </SearchContainer.Provider>
            </PlayerContainer.Provider>
        </QueryClientProvider>
    )
}

export default App
