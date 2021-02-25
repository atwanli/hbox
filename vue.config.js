// vue-cli-service  的主配置文件
const path = require("path")
module.exports = {
    // 发布地址
    publicPath: "/hbox",
    // 额外的webpack配置
    configureWebpack: {
        resolve: {
            extensions: [".js", ".vue"],
            alias: {
                "@": path.resolve(__dirname, "src"),
                vue$: "vue/dist/vue.esm.js"
            }
        }
    },
    devServer: {
        open: true,
        port: 8000
        // ,
        // proxy: {
        //     "/demo/api": {
        //         target: "http://127.0.0.1:8080"
        //     }
        // }
    },
    css: {
        loaderOptions: {
            less: {
                prependData:
                    "@import '~ant-design-vue/lib/style/themes/default';",
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    }
}
