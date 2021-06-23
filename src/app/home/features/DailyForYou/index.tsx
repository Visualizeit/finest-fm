import type { FC } from 'react'
import { useCallback, useMemo } from 'react'
import { View, Image, Text } from '@fower/taro'
import {
    ActionSheetContainer,
    RecommendTitle,
    // RecommendInfo,
} from '@app/shared/components'
import { dailyForYouContainer } from './DailyForYouContainer'
// import { sheetHeight } from './DailyForYouSheet'
import { PlayListSheet } from '@app/shared/components'
const sheetHeight = '60vh'
export const DailyForYou: FC = () => {
    const { dailyForYouData, toDayNewsData, bestReputationData } =
        dailyForYouContainer()

    const limitDailyForYouData = useSlice(dailyForYouData, 9)

    const goDailyForYouView = useCallback(
        () =>
            useActionSheet(
                <PlayListSheet sheetData={dailyForYouData} />,
                // <DailyForYouSheet sheetData={dailyForYouData} />,
                sheetHeight
            ),
        [dailyForYouData]
    )

    const limitToDayNewsData = useSlice(toDayNewsData, 4)

    const goAssistedSleepView = useCallback(
        () =>
            useActionSheet(
                <PlayListSheet sheetData={toDayNewsData} />,
                sheetHeight
            ),
        [toDayNewsData]
    )

    const limitBestReputationData = useSlice(bestReputationData, 4)

    const getBestReputationDataView = useCallback(
        () =>
            useActionSheet(
                <PlayListSheet sheetData={bestReputationData} />,
                sheetHeight
            ),
        [bestReputationData]
    )

    const { useActionSheet } = ActionSheetContainer.useContainer()

    return (
        <View px8>
            <View className="flex items-center justify-between">
                <RecommendTitle>每日推荐</RecommendTitle>
                {/* <RecommendInfo>更多</RecommendInfo> */}
            </View>
            <View
                className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-24"
                h96
            >
                <View
                    className="row-span-4 p-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl"
                    onClick={goDailyForYouView}
                >
                    <View mb6>
                        <SectionTitle>每日20首</SectionTitle>
                    </View>

                    <View className="grid grid-cols-3 place-items-center gap-y-2">
                        {limitDailyForYouData.map(({ cover_url_small }) => (
                            <Image
                                className="rounded-lg"
                                square20
                                src={cover_url_small}
                            />
                        ))}
                    </View>
                </View>

                <View
                    className="flex flex-col row-span-2 p-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl"
                    onClick={goAssistedSleepView}
                >
                    <SectionTitle>今日新品</SectionTitle>
                    <View className="flex items-center justify-between flex-grow">
                        {limitToDayNewsData.map(({ cover_url_small }) => (
                            <Image
                                className="flex-shrink-0 rounded-lg"
                                square16
                                src={cover_url_small}
                            />
                        ))}
                    </View>
                </View>

                <View
                    className="flex flex-col row-span-2 p-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl"
                    onClick={getBestReputationDataView}
                >
                    <SectionTitle>口碑最佳</SectionTitle>
                    <View className="flex items-center justify-between flex-grow">
                        {limitBestReputationData.map(({ cover_url_small }) => (
                            <Image
                                className="flex-shrink-0 rounded-lg"
                                square16
                                src={cover_url_small}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

const useSlice = <T extends {}>(data: T[], limitCount: number) =>
    useMemo(() => data.slice(0, limitCount), [data, limitCount])

const SectionTitle: FC = ({ children }) => (
    <Text className="block text-white">{children}</Text>
)

// const Sec
