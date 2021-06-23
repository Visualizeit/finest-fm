import { useLayoutEffect } from 'react'
import { XMPlugin } from '../core'
import { appKey, appSecret } from '../token'
import type XMPluginTypes from 'wechat-miniprogram-xmly'

export const getXMPInstance = () => {
    const { player, xmly } = XMPlugin.getInstance() as XMPluginTypes

    return {
        player,
        xmly,
    }
}

export const useInitXMPlugin = () => {
    // const q = getStorageSync('SearchHistory')

    useLayoutEffect(() => {
        XMPlugin.init({
            appKey,
            appSecret,
            debug: true,
        })
    }, [])
}

// export const XMPInstanceContainer = createContainer(getXMPInstance)
