# 部署说明

## 推荐部署方式

### 1. Vercel
最省心，适合 Next.js。

#### 步骤
1. 把项目推到 GitHub
2. 打开 Vercel
3. 导入仓库
4. 保持默认配置直接部署

#### 构建命令
```bash
npm run build
```

#### 输出
- 自动识别 Next.js
- 默认生成静态首页和资源

### 2. Cloudflare Pages
也可以用，适合你想要更轻量的托管方案。

#### 构建设置
- Build command: `npm run build`
- Output directory: `.next`

> 如果后面你要加更复杂的边缘能力，再单独补适配。

## 站点资产
- OG 图：`public/og-image.svg`
- 头像：`public/avatar.svg`

## 部署前检查
- `npm run build` 是否成功
- 首页是否能正常打开
- 暗色模式切换是否可用
- 社交链接是否正确

## 备注
- 当前项目是静态可预渲染的首页，部署难度很低。
- 如果以后增加环境变量或接口，再补对应平台配置即可。
