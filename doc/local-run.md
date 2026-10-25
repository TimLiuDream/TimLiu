# 本地运行说明

## 环境要求
- Node.js 18+
- npm

## 安装依赖
```bash
npm install
```

## 启动开发模式
```bash
npm run dev
```

启动后访问：
```bash
http://localhost:3000
```

## 生产构建
```bash
npm run build
```

## 本地预览生产包
```bash
npm run start
```

## 常见说明
- 可选环境变量 `NEXT_PUBLIC_SITE_URL`：站点 origin，默认 `https://www.timliu.xyz`。本地不设置即可。
- 主题切换状态会保存在浏览器 `localStorage`。
- 暗色模式通过切换 `<html>` 上的 `dark` class 生效。
