/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=6&articleId=37#PaidAlbum
 */
declare interface PaidAlbum extends Album {
    is_paid: true //是否付费，固定值true
    album_score: string //专辑评分，根据用户有效评价计算所得，10分制
    short_intro: string //专辑一句话简介
    estimated_track_count: string //预计更新多少集
    free_track_count: string //	专辑内包含的整条免费听声音总数
    free_track_ids: string //专辑内包含的整条免费声音ID列表，英文逗号分隔
    detail_banner_url: string //付费专辑详情页焦点图，尺寸为1250x1000（像素）。有的付费专辑此字段无值，贵方可以设置一张默认图代替
    target_cloud: string //目标人群或适合谁听，富文本
    outline: string //付费专辑大纲，富文本
    album_rich_intro: string //专辑简介，富文本
    speaker_intro: string //主讲人介绍，富文本
    sale_intro: string //营销简介，富文本
    expected_revenue: string //主要卖点，对应喜马拉雅APP上的“你将获得”，富文本
    buy_notes: string //购买须知，富文本
    speaker_title: string //主讲人自定义标题
    speaker_content: string //主讲人自定义标题下的内容，富文本
    has_sample: boolean //该付费专辑是否支持试听
    composed_price_type: 1 | 2 | 3 //支持的购买类型，1-只支持声音分集购买，2-只支持整张专辑购买，3-同时支持声音分集购买和整张专辑购买。目前实际上只包括取值1、2两种情况，取值3是为将来预留的，如果支持会提前通知
    price_type_info: PriceDetail[] //价格列表，每种价格包含的字段请参考
    selling_point: string //专辑卖点，富文本
    is_vipfree: number //是否为会员畅听专辑
    is_vip_exclusive: boolean //是否是会员专享专辑 （会员专享专辑不支持售卖）
    is_free_listen: boolean //当前是否限时免费听，后续不再维护，通过is_activity字段统一查看是否参与营销活动
    free_listen_start: number //限时免费听开始时间，Unix毫秒数时间戳，后续不再维护，通过AlbumActivity中活动详情activity_start字段统一查看活动开始时间
    free_listen_end: number //限时免费听结束时间，Unix毫秒数时间戳，后续不再维护，通过AlbumActivity中活动详情activity_end字段统一查看活动结束时间
}
