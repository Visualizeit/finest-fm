declare interface Categorie {
    id: number //运营分类ID
    name: string //运营分类名称
    source: 1 | 2 //分类来源：1: 喜马, 2:开发者自建
    cover_url: string //分类封面图，尺寸：80 * 80
    kind: 'operation_category' //固定值“operation_category”
}
