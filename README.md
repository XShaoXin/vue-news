# 课程项目(vue-商城) 

## xsx

### 取消严格模式 
安装：
cnpm i @babel/plugin-transform-modules-commonjs @babel/plugin-transform-strict-mode -D
在.babelrc中进行配置：
"plugins": [
      ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
    ]