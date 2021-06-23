import type { FC } from 'react'
import { Text } from '@fower/taro'

interface RecommedTitleProps {}

export const RecommendTitle: FC<RecommedTitleProps> = ({ children }) => (
    <Text fontBold my5 block {...{ children }} />
)
