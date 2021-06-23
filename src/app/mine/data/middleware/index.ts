import { registerMiddleware } from 'tarojs-router-next'

import { fetchUserProfile } from './fetchUserProfile'

registerMiddleware(fetchUserProfile, (context) => {

    return '/pages/mine/index' === context.route.url
})
