## 基于 webpack5 react18 typescript 的项目模板

### TODO
- [ ] postcss-preset-env ("importFrom" and "exportTo" will be removed in a future version of postcss-custom-properties.) **[讨论](https://github.com/csstools/postcss-plugins/discussions/192)**


### 使用

``` sh
  git clone https://github.com/192114/project-template.git

  pnpm install

  pnpm run dev/build

```
css部分采用 `Postcss` 做预处理器
- 使用`postcss-preset-env` *(stage3)* 做语法预设，feature中添加`nesting-rules`支持嵌套语法
- `postcss-normalize` 浏览器一致化处理
- `cssnano` css压缩

  语法支持：`Break Properties` / `Custom Properties` / `font-variant Property` / `Gap Properties` / `Media Query Ranges` / `unset Keyword`
  [语法介绍](https://preset-env.cssdb.org/features/#stage-3)
