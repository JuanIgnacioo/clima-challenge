import { createProxyMiddleware } from "http-proxy-middleware"

module.exports = (app : any) => {
    app.use(createProxyMiddleware('/data/2.5/forecast', {
        target: 'https://api.openweathermap.org',
        changeOrigin: true
    }))
}