declare interface SearchTracks {
    total_page: number // 总共多少页
    total_count: number //	总记录数
    current_page: number //	当前页码
    category_id: number //分类ID，为-1时表示不属于任何分类
    tracks: Track[]
}
