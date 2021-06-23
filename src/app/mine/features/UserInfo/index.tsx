import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { useUserProfile } from '@app/mine/data'
import { UserAvatar, UserInfoSection } from '@app/mine/components'

export const UserInfo: FC = () => {
    const { data } = useUserProfile()

    return (
        <View className="flex flex-col " p6 h="30vh">
            <Text className="block text-2xl font-semibold text-center text-gray-900">
                {data?.data.data.userInfo.nickName ?? '用户名'}
            </Text>

            <View
                className="grid flex-grow grid-cols-4 place-items-center"
                columnGap={20}
            >
                <UserInfoSection count={0}>已购专辑</UserInfoSection>
                <View className="col-span-2">
                    <UserAvatar
                        src={`url('${
                            data?.data.data.userInfo.avatarUrl ?? ''
                        }')`}
                    />
                </View>
                <UserInfoSection count={0}>关注列表</UserInfoSection>
            </View>
        </View>
    )
}
