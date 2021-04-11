module.exports = options => {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')//安装http-assert 用于判断条件
    const AdminUser = require('../models/AdminUser')

    return async (req,res,next) => {
        const token =String ( req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '请先登录')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        await next()//用户登录中间件
   }
}