import { requirePlugin } from '@tarojs/taro'
import type XMPluginTypes from 'wechat-miniprogram-xmly'

export const XMPlugin: XMPluginTypes = requirePlugin('xmly-plugin')
