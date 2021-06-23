declare interface Banner {
    id: number
    banner_content_type: number //焦点图类型 1-单个用户 2-单个专辑，3-单个声音，4-链接，9-听单
    banner_title: string
    operation_category_id: number //焦点图所属运营分类ID /operation/categories 接口返回值 id
    banner_cover_url: string //焦点图封面URL
    short_title: string //焦点图短链接
    banner_content_id: number //焦点图中包含内容的ID，如专辑、声音、听单ID
    is_paid: 1 | 0 //是否付费，仅针对专辑焦点图： 1：付费 0：免费
    banner_content_title: string //焦点图中包含内容的名称,如专辑名称、声音名称、听单名称
    redirect_url: string //当焦点图为链接类型时，跳转的链接URL
    created_at: number
    updated_at: number
}
