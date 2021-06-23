/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=26#%E6%90%9C%E7%B4%A2%E8%AF%8D%E8%87%AA%E5%8A%A8%E6%8F%90%E7%A4%BA
 */
declare interface SearchSuggestKeyword {
    id: number //搜索提示词ID
    keyword: string //搜索提示词
    highlight_keyword: string //高亮显示的提示词
}
