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

## 域名

生产主域名是 `https://www.timliu.xyz`。绝对地址默认使用这个 origin，也可用环境变量 `NEXT_PUBLIC_SITE_URL` 覆盖（只写 origin）。修改后需要重新构建部署。

以下 Host 会 308 到主域名，路径和查询参数保留：

- `tim-liu.vercel.app`
- `timliu.xyz`

其他 `*.vercel.app`（预览部署、带 hash 的部署地址）不会跳转。

### Vercel 域名设置

- 将 `www.timliu.xyz` 设为 Production 主域名。
- 将 `timliu.xyz` 重定向到 `www.timliu.xyz`。已经是 308 的话保持即可。
- 保留 `tim-liu.vercel.app`，不要删掉这个生产别名，否则旧链接会直接失效。应用会把它 308 到 www。
- 不要把 `www.timliu.xyz` 或 `timliu.xyz` 绑到 Preview。
- Production 可以不设置 `NEXT_PUBLIC_SITE_URL`。如果设置，值必须是 `https://www.timliu.xyz`。Preview 不要设成预览域名，否则预览页会把自己写成 canonical。

## 备注
- 当前项目是静态可预渲染的首页，部署难度很低。
- 如果以后增加环境变量或接口，再补对应平台配置即可。
