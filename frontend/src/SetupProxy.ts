import { createProxyMiddleware } from "http-proxy-middleware"

module.exports = (app : any) => {
    app.use(createProxyMiddleware('/data/2.5/forecast', {
        target: 'https://api.openweathermap.org',
        changeOrigin: true
    }))
    app.use(createProxyMiddleware('/geo/1.0/reverse', {
        target: 'https://api.openweathermap.org',
        changeOrigin: true
    }))
}