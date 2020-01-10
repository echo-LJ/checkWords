# check

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Commit message 
```
git add .
git cz
git push
git log > 文件名 // 查看相关文件的日志
```
>feat：新增功能（feature）
>fix：修补bug
>docs：仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
>style： 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
>refactor：重构（即不是新增功能，也不是修改bug的代码变动）
>test：增加测试，包括单元测试、集成测试等
>chore：构建过程或辅助工具的变动
>type：代表某次提交的类型，比如是修复一个bug还是增加一个新的feature。
>perf: 优化相关，比如提升性能、体验
>revert: 回滚到上一个版本
>ci：自动化流程配置修改

* 更新CHANGELOG.md

```
conventional-changelog -p -i CHANGELOG.md -s
```
### iview 按需引用
因为项目所需组件有限，所以针对view-design组件库做了按需引入
添加步骤：
* 在plugins/iview.js中引入需要的组件