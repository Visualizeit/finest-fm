import { useRequest } from '@app/shared/data/apis'

interface GetScensParams {}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=12&articleId=95#%E8%8E%B7%E5%8F%96%E5%9C%BA%E6%99%AF%E5%88%97%E8%A1%A8
 * */

export const getScens = (params: GetScensParams = {}) => {
    const result = useRequest<Scence[]>(
        'https://api.ximalaya.com/scenes/one_click_listen/scenes',
        params
    )

    return result
}
