import { useRequest } from '@app/shared/data/apis'

interface GetAssistedSleepTopicsProps {}


/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=12&articleId=63#%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E5%8A%A9%E7%9C%A0%E4%B8%BB%E9%A2%98
 * */

export const getAssistedSleepTopics = () => {
    const result = useRequest<AssistedSleepTopic[]>(
        'https://api.ximalaya.com/assisted_sleep/topics',
        {}
    )

    return result
}

interface AssistedSleepTopic {
    id: number //主题ID
    topic_title: string //	主题标题
    topic_cover_url: string //	主题背景图，适配手机端
    pad_topic_cover_url: string
}
