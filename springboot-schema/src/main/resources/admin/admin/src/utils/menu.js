const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除","查看评论"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"商品分类","menuJump":"列表","tableName":"shangpinfenlei"}],"menu":"商品分类管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"购物资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-time","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;