import { useMemo } from 'react'
import { getCategories } from '@app/classify/data'
import { getXmColumns } from '@app/shared/data/apis'
import { SideMenuContainer } from '@app/classify/components'

export const uscContentData = () => {
    const { data: categorieData } = getCategories()

    const menuData = useMemo(
        () => categorieData?.operation_categories ?? [],
        [categorieData]
    )

    const { active } = SideMenuContainer.useContainer()

    const query = getXmColumns(
        {
            operation_category_id: menuData?.[active]?.id,
        },
        {
            enabled: !!categorieData,
        }
    )

    return query
}
