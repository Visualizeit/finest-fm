import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { SearchInput } from '@app/search/features'
import { searchResultContainer } from './SearchResultContainer'
import { SearchResultSection, SearchResultSectionItem } from '@app/search/components'
import { usePlayControl } from '@app/common/player'
import { goPlayList } from '@app/common/virtual-play-list'
import { SearchAlbumsPage } from './SearchAlbumsPage'
import { SearchTracksPage } from './SearchTracksPage'
import { useAlbumList, useNavigationBarRect } from '@app/shared/hooks'
import { PlayerBar } from '@app/custom-tab-bar/features'
import { ActionSheet } from '@app/shared/components'
import { Router } from 'tarojs-router-next'
import IconFont from '@app/custom/iconfont'

const { statusBarHeight } = useNavigationBarRect()

export const SearchResult: FC = () => {
    const { data, query } = searchResultContainer()

    const albumsResult = data?.album_list.albums ?? []
    const tracskResult = data?.track_list.tracks ?? []
    const radioResult = data?.radio_list.radios ?? []

    const albumList = useAlbumList(albumsResult)

    const trackList = tracskResult.map(({ id }) => id)

    const { selectPlay } = usePlayControl()

    return (
        <View className="bg-gray-50" pt={statusBarHeight + 'px'}>
            <View className="flex flex-col" mx8 h="100vh">
                <View className="sticky" top={statusBarHeight + 'px'}>
                    <View className="flex items-center bg-gray-50">
                        <View onClick={() => Router.back()}>
                            <IconFont name="arrowback" size={55} />
                        </View>
                        <Text
                            className="text-3xl font-bold text-yellow-400"
                            ml={20}
                        >
                            搜索结果
                        </Text>
                    </View>

                    <View mt={40}>
                        <SearchInput />
                    </View>
                </View>

                <View
                    className="grid flex-grow grid-cols-1 grid-rows-3"
                    my={60}
                    columnGap={10}
                >
                    <SearchResultSection
                        title="专辑"
                        data={albumsResult}
                        onClick={() => {
                            goPlayList(SearchAlbumsPage, {
                                query,
                            })
                        }}
                    >
                        {(
                            {
                                cover_url_large,
                                album_title,
                                last_uptrack: { track_id },
                            },
                            index
                        ) => (
                            <SearchResultSectionItem
                                src={cover_url_large}
                                index={index}
                                title={album_title}
                                onClick={() => selectPlay(albumList, track_id)}
                            />
                        )}
                    </SearchResultSection>
                    <SearchResultSection
                        title="声音"
                        data={tracskResult}
                        onClick={() => goPlayList(SearchTracksPage, { query })}
                    >
                        {({ cover_url_large, track_title, id }, index) => (
                            <SearchResultSectionItem
                                src={cover_url_large}
                                index={index}
                                title={track_title}
                                onClick={() => selectPlay(trackList, id)}
                            />
                        )}
                    </SearchResultSection>

                    <SearchResultSection
                        title="电台"
                        data={radioResult}
                        onClick={() => {}}
                    >
                        {({ cover_url_large, radio_name }, index) => (
                            <SearchResultSectionItem
                                src={cover_url_large}
                                index={index}
                                title={radio_name}
                                onClick={() => {}}
                            />
                        )}
                    </SearchResultSection>
                </View>
            </View>
            <View
                className="sticky"
                bottom="calc(env(safe-area-inset-bottom) + 10px)"
            >
                <PlayerBar />
                <ActionSheet />
            </View>
        </View>
    )
}
