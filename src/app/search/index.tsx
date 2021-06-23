import type { FC } from 'react'
import { View } from '@fower/taro'
import { SearchInput, HotSearch, SearchHistory } from './features'
import { useInitSearchHistory } from '@app/search/data'
import { CustomTabBar } from '@app/custom-tab-bar'
import { PageHeader } from '@app/shared/components'
export { SearchResult } from './features'

export const Search: FC = () => {
    useInitSearchHistory()

    return (
        <>
            <View className="w-full bg-gray-50" minH="100vh">
                <PageHeader titleColor="yellow400">搜索</PageHeader>
                <View className="grid grid-cols-1" mx8 gap={50} mt={50}>
                    <SearchInput />
                    <View className="grid grid-cols-1" gap={30}>
                        <HotSearch />
                    </View>
                    <View className="grid grid-cols-1" gap={30}>
                        <SearchHistory />
                    </View>
                </View>
            </View>
            <CustomTabBar />
        </>
    )
}
