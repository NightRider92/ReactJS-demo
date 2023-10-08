const { createProxyMiddleware } = require("http-proxy-middleware")
const cors = require('cors')

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

module.exports = app => {
    app.use(cors(corsOptions));
}