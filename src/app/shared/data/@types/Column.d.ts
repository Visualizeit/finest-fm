declare interface Column {
    id: number //	听单ID
    title: string //	听单标题
    cover_url_small: string //听单封面小图
    cover_url_middle: string //	听单封面中图
    cover_url_large: string //	听单封面大图
    content_type: '1' | '2' //	听单内容类型：1-专辑，2-声音
    operation_category: { operation_categories: Categorie }[] // /operation/categories 返回值
    dimension_tags: DimensionTag //	参见 /operation/dimension_tags 返回值
    content_num: number //	内容数
    updated_at: number //	听单更新时间，Unix毫秒数时间戳
    created_at: number //	听单创建时间，Unix毫秒数时间戳
}
