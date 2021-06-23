import { useRequest } from '@app/shared/data/apis'
import type{ UseQueryOptions } from 'react-query'

interface getXmColumnsParams {
    id: number //听单ID
    title: string //听单标题
    content_type: 1 | 2 //内容类型： 1：专辑 2：声音
    operation_category_id: number //运营分类ID /operation/categories 接口返回值 id
    dimension_tag_name: number //否维度标签 /operation/dimension_tags 接口返回值 name
    dimension_tag_id: number //维度标签 /operation/dimension_tags 返回值 id
    sort_by: string //排序字段 可选值：created_at、update_at默认值：update_at
    sort: string //desc-降序排列 asc-升序排列 默认值：desc
    page: number //返回第几页，从1开始，默认为1
    count: number //每页大小，范围为[1,100]，默认为20
}

/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E8%8E%B7%E5%8F%96%E5%96%9C%E9%A9%AC%E7%B3%BB%E7%BB%9F%E5%90%AC%E5%8D%95
 * */

export const getXmColumns = (
    params: Partial<getXmColumnsParams> = {},
    config?: UseQueryOptions<XmColumns>
) => {
    const result = useRequest<XmColumns>(
        'https://api.ximalaya.com/operation/xm_columns',
        params,
        config
    )

    return result
}

interface XmColumns {
    total_page: number //	总共多少页
    total_count: number //总记录数
    current_page: number //	当前页码
    columns: Column[]
}
