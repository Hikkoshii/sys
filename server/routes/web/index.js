module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const News = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    router.get('/news/init', async(req,res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["您的电竞梦想已邮递至府上：“荣耀邮你全民挑战赛”等你来挑战！", "与主播同台竞技?全国大赛合作赛道开启，更多专属福利等你来赢!", "梦奇局内待机休闲动作票选活动结果公告", "创意互动营互动小任务第七期开启公告", "【S23版本攻略】策划做客斗鱼，独家揭秘新版本，助你上分", "4月13日王者时刻第二批灰度测试服务器开启公告", "4月12日体验服停机更新公告", "4月9日体验服停机更新公告", "4月9日全服不停机更新公告", "4月8日“长安密探”版本异常说明", "人间四月春融融，峡谷好礼情意浓", "S23赛季开启，新版本多重福利等你领取", "【助威拿“新十代勋章”】活动公告", "【微信用户专属】微信小程序“游戏礼品站”购买“李元芳-飞鸢探春”皮肤抽免单活动", "春满峡谷四月天，当趁东风放纸鸢", "您的电竞梦想已邮递至府上：“荣耀邮你全民挑战赛”等你来挑战！", "与主播同台竞技?全国大赛合作赛道开启，更多专属福利等你来赢!", "全国大赛城市赛道海选—“荣耀邮你全民挑战赛”火热来袭！", "全国大赛全国行｜多城省赛齐开赛，“全运会”征程战鼓擂！", "报名开启！全民全运·王者荣耀赛事暨全国大赛城市赛道海选赛即将开赛"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5 )
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    app.use('/web/api', router)
}