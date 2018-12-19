const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/shu",proxy({
        target : "http://localhost:8080",
        changeOrigin:true
    }))
}