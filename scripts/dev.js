//打包package 下的模块 生成对应的js文件
 import minimist from "minimist";
 import {resolve,dirname } from "path";
  import { fileURLToPath } from "url";
  import { createRequire } from "module";
  import esbuild from "esbuild";
 //node 中的命令行参数通过process.argv获取
    let args = minimist(process.argv.slice(2));
    const __filename =  fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const require = createRequire(__dirname);
    console.log(args)
    let target = args._[0] || 'reactivity';
    let formats = args.f|| 'life';

    const entry = resolve(__dirname,`../packages/${target}/src/index.ts`);
    // const pkg  =  require(`../packages/${target}/package.json`);
    // console.log(pkg)
    esbuild.context({
        entryPoints:[entry],
        outfile:resolve(__dirname,`../packages/${target}/dist/${target}.js`),//输出文件名
        bundle:true,//打包
        sourcemap:true,//生成sourcemap
        format:formats,//输出格式
       sourcemap:true,//
        platform:'browser',//平台
        globalName:`vue${target}`,//全局变量名
       
    }).then((ctx)=>{
        console.log('start dev')
        ctx.watch();
    })