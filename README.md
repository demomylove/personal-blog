# Personal Blog

一个使用 Astro、TypeScript 和 Markdown Content Collections 构建的响应式个人博客网站。首版包含首页、文章列表、文章详情和关于页面，示例文章可直接替换为真实内容。

## 技术栈

- Astro
- TypeScript
- Markdown Content Collections
- Vitest
- Astro Check

## 环境要求

- Node.js 20 LTS 或更高版本
- npm 10 或更高版本

## 安装

```bash
npm install
```

## 本地开发

```bash
npm run dev
```

开发服务器启动后访问终端输出的本地地址，常见地址为 `http://localhost:4321/`。

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## 预览构建产物

```bash
npm run preview
```

## 检查与测试

```bash
npm run check
npm run test
```

`npm run check` 用于 Astro、TypeScript 和内容集合检查；`npm run test` 用于运行文章数据相关单元测试。
