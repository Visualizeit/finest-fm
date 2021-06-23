import type { FC, ReactNode } from 'react'
import { View } from '@fower/taro'

interface RankListProps {
    listData: Album[]
    columns: number
    children: (data: Album) => ReactNode
}

export const RankList: FC<RankListProps> = ({
    listData,
    columns,
    children,
}) => (
    <View className="flex overflow-x-scroll">
        {Array.from({ length: getRows(listData, columns) }, (_, index) => (
            <View className="flex flex-col rounded-2xl" w="75%">
                {listData.slice(...createSlice(index, columns)).map(children)}
            </View>
        ))}
    </View>
)

const getRows = (listData: any[], columns: number) => listData.length / columns

const createSlice = (index: number, columns: number) => [
    index * columns,
    (index + 1) * columns,
]
