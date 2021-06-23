import type { FC } from 'react'
import { View } from '@fower/taro'
import { UserInfo, RecentBrowsing } from './features'
import { CustomTabBar } from '@app/custom-tab-bar'
import { PageHeader } from '@app/shared/components'

export const Mine: FC = () => {
    return (
        <>
            <PageHeader titleColor="purple500">我的</PageHeader>
            <View className="grid grid-cols-1" px8>
                <UserInfo />
                <RecentBrowsing />
            </View>
            <CustomTabBar />
        </>
    )
}
