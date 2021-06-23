import { FC } from 'react'
import { View } from '@fower/taro'
import { goPlayList } from '@app/common/virtual-play-list'
import { ContentItem } from '@app/classify/components'
import { classifyContentContainer } from './ClassifyContentContainer'
import { ClassifyContentItemPage } from '../ClassifyContentItemPage'

export const ClassifyContent: FC = () => {
    const { contentData } = classifyContentContainer()

    return (
        <View className="grid grid-cols-1" p5 rowGap={40}>
            {contentData.map(
                ({
                    id,
                    title,
                    cover_url_middle,
                    cover_url_large,
                    content_num,
                }) => (
                    <ContentItem
                        title={title}
                        count={content_num}
                        onClick={() =>
                            goPlayList(ClassifyContentItemPage, {
                                queryID: id,
                            })
                        }
                        coverSrc={cover_url_middle || cover_url_large}
                    />
                )
            )}
        </View>
    )
}
