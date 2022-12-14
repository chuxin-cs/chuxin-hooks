import { defineConfig } from "vitepress";
import themeConfig from './themeConfig'

export default defineConfig({
    base: '/',
    // 标题
    title: 'chuxin-hooks',
    // 描述
    description: '基于Vue 3.0 的hooks util',
    // themeConfig 配置
    themeConfig: themeConfig,
})