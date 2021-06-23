import type { FC } from 'react'
import { BackDrop } from './BackDrop'
import { Content } from './Content'

export { ActionSheetContainer } from './ActionSheetContainer'

interface ActionSheetProps {}

export const ActionSheet: FC<ActionSheetProps> = () => {
    return (
        <>
            <BackDrop />
            <Content />
        </>
    )
}
