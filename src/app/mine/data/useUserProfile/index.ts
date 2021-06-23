import { useQuery } from 'react-query'
import { getStorage } from '@tarojs/taro'
import { UserProfileKey } from '../UserProfileKey'
import type { UserProfileCache } from '../useInitUserProfileCache'


export const useUserProfile = () => {
    const query = useQuery(UserProfileKey, () =>
        getStorage<UserProfileCache>({
            key: UserProfileKey,
        })
    )

    return query
}
