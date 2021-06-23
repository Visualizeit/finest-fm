import { useEffect } from 'react'
import { getStorage, setStorage } from '@tarojs/taro'
import type { getUserProfile } from '@tarojs/taro'
import { to } from 'await-to-js'
import { UserProfileKey } from '../UserProfileKey'

export interface UserProfileCache {
    hasData: boolean
    data: getUserProfile.SuccessCallbackResult
}

export const useInitUserProfileCache = () => {
    useEffect(() => {
        ;(async () => {
            const [error, storageUserProfile] = await to(
                getStorage<UserProfileCache>({
                    key: UserProfileKey,
                })
            )

            if (!storageUserProfile?.data.hasData) {
                const data: UserProfileCache = {
                    hasData: false,
                    data: {},
                }

                setStorage({
                    key: UserProfileKey,
                    data,
                })
            }
        })()
    }, [])
}
