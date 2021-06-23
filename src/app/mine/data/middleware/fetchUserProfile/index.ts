import type { Middleware } from 'tarojs-router-next'
import {
    getUserProfile,
    getStorage,
    getStorageSync,
    setStorage,
    showToast,
    showModal,
} from '@tarojs/taro'
import { to } from 'await-to-js'
import type { UserProfileCache } from '../../useInitUserProfileCache'
import { UserProfileKey } from '../../UserProfileKey'

export const fetchUserProfile: Middleware = async (context, next) => {
    //获取本地储存用户信息
    const storageUserProfile = getStorageSync<UserProfileCache>(UserProfileKey)

    //本地储存已存在
    if (storageUserProfile?.hasData) {
        //do somethins
    } else {
        const [error, userProfile] = await to(
            getUserProfile({
                desc: '完善登录信息',
            })
        )

        //获取授权成功
        if (userProfile) {
            const data: UserProfileCache = {
                hasData: true,
                data: userProfile,
            }

            await setStorage({
                key: UserProfileKey,
                data,
            })
        }

        //获取授权失败
        else {
            showToast({
                title: '获取授权失败，请重试',
                icon: 'none',
            })

            throw Error('获取授权失败')
        }
    }

    await next()
}
