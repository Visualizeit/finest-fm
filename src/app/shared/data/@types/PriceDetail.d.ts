declare interface PriceDetail {
    price_type: 1 | 2 //购买类型：1-声音分集购买，2-整张专辑购买
    price: number //原价，单位元，用于营销展示，实际售卖价格取discounted_price
    discounted_price: number //折后价，单位元，即实际价格
}
