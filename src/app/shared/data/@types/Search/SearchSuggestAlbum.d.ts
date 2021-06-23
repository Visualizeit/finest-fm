/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=26#%E6%90%9C%E7%B4%A2%E8%AF%8D%E8%87%AA%E5%8A%A8%E6%8F%90%E7%A4%BA
 */
declare interface SearchSuggestAlbum {
    id: number //搜索提示专辑的ID
    album_title: string //搜索提示专辑的标题
    highlight_album_title: string //搜索提示专辑高亮版显示名称
    category_name: string //搜索提示专辑所属分类名
    cover_url_small: string //搜索提示专辑封面小图url
}
