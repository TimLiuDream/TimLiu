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
- 站点没有额外环境变量依赖。
- 主题切换状态会保存在浏览器 `localStorage`。
- 暗色模式通过切换 `<html>` 上的 `dark` class 生效。
