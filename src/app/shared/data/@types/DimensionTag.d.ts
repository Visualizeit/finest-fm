declare interface DimensionTag {
    id: number //维度标签ID
    name: string //维度标签名称
    dimension_id: number //所属维度ID
    dimension_name: string //所属维度名称
    kind: 'dimension_tag'
}
