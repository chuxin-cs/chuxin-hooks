import { resolve } from 'path';
import { fileURLToPath } from "url";
import typescript from 'rollup-plugin-typescript2';

const __dirname = fileURLToPath(import.meta.url);

export default {
    input: resolve(__dirname, '../packages/index.ts'),
    output: [
        {
            file: 'dist/hooks.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/hooks.es.js',
            format: 'es'
        },
        {
            file: "dist/hooks.umd.js", // 打包输出地址, 这里的导出地址就是package内main的地址
            format: "umd", // 包类型
            name: "chuxinHooks", // 输入的包名
        }
    ],
    plugins: [
        typescript()
    ]
}