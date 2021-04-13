const express = require("express")

const app = express()

app.set('secret', 'dsadasasd')//设置拦截器

app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000,() => {
    console.log('http://localhost:3000');
});