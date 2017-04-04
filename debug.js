/**
 * Created by daishun on 2017/4/2.
 * babel-register只会对require的文件做实时编译
*/
require("babel-polyfill");
require("babel-register")({
    extensions: [".es6", ".es", ".jsx", ".js"]
});
require("./src/server");