const withPlugins = require('next-compose-plugins')
const witchCss = require("@zeit/next-css")
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const path = require('path')

module.exports = withPlugins([
    witchCss({}),
    withImages({}),
    withReactSvg({
        include: path.resolve(__dirname, "./public/images"),
        webpack(config, options) {
            return config
        },
    }),
])

