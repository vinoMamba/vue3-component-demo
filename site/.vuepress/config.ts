import { defineUserConfig,defaultTheme,viteBundler } from "vuepress";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import vueJsx from "@vitejs/plugin-vue-jsx";
import codeBlockPlugin  from "@yanyu-fe/vuepress-plugin-code-block"
import { resolve } from "path";

export default defineUserConfig({
    title:"前端组件库",
    plugins: [codeBlockPlugin({})],
    locales:{
        "/":{
            lang:"zh-CN",
            title:"ui-design",
        }
    },
    lang:"zh-CN",
    theme:defaultTheme({
        locales:{
            "/":{
                navbar:navbar.zh,
                sidebar:sidebar.zh
            }
        }
    }),
    bundler:viteBundler({
        viteOptions:{
            plugins:[vueJsx()],
            resolve:{
                alias:{
                    "ui-design":resolve(__dirname,"../../packages/ui/src/index.ts")
                }
            }
        }
    })
})
