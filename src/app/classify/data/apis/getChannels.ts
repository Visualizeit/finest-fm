import { useRequest } from '@app/shared/data/apis'
import type { UseQueryOptions } from 'react-query'

interface GetChannelsParams {
    scene_id: number
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=12&articleId=95#%E8%8E%B7%E5%8F%96%E5%9C%BA%E6%99%AF%E4%B8%8B%E9%A2%91%E9%81%93%E5%88%97%E8%A1%A8
 * */

export const getChannels = (
    params: GetChannelsParams,
    config: UseQueryOptions<Channel>
) => {
    const result = useRequest<Channel>(
        'https://api.ximalaya.com/scenes/one_click_listen/channels',
        params,
        config
    )

    return result
}
