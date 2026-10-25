# GEO / Agent 抓取说明

## 内容与入口

- /llms.txt：简短站点简介、完整文本链接、项目网站和公开联系方式。
- /llms-full.txt：中英文 Markdown 格式的纯文本介绍。项目与身份信息来自 siteConfig，近况来自现有 i18n 文案，保留真实更新日期。
- / 和 /now：继续提供服务端生成的 HTML；首页可见项目介绍与 JSON-LD 使用同一份项目配置。
- 首页 head 的 rel="alternate" 指向完整文本；全站 rel="describedby" 指向 /llms.txt。
- 文本响应使用 UTF-8、静态生成与一小时缓存，不按 User-Agent 区分内容。

## 域名和部署

主域名默认是 https://www.timliu.xyz。`lib/site-url.ts` 的 `resolveSiteUrl()` 写入 `siteConfig.url`，canonical、Open Graph、JSON-LD、robots、sitemap、RSS 和 AI 文本链接都读这个地址。需要其他 origin 时设置 `NEXT_PUBLIC_SITE_URL`（只写 origin，例如 `https://www.timliu.xyz`），然后重新构建部署。

`tim-liu.vercel.app` 和裸域 `timliu.xyz` 会 308 到该主域名，并保留路径和查询参数。Vercel 预览域名（形如 `tim-liu-git-<branch>-<scope>.vercel.app`）不会跳转。

发布后检查 /llms.txt、/llms-full.txt、/robots.txt、/sitemap.xml、/feed.xml 是否返回 200。检查首页与 /now 的 canonical 分别指向正确页面。

robots 对所有 Agent 开放。生产环境如果另有 CDN、防火墙、Bot 防护或访问验证，需要确保公开页面和文本入口可以匿名获取，且不会返回验证码。robots 无法覆盖这些平台规则。

## 观察效果

- 爬虫请求：查看托管平台或 CDN 的访问日志，记录时间、路径、状态码和 User-Agent；支持 IP 验证的厂商可核对其公布的 IP 范围。
- AI 来源访问：在访问分析中查看来源域名或推广参数；缺失 referrer 的访问可能无法准确归因。
- 联系与合作：再核实询盘来源，避免把抓取次数当成推荐或转化次数。
- 现有 Vercel Analytics 不能替代服务端爬虫日志。本次未新增抓取统计服务。

llms.txt 是内容发现提案；提供这些入口不保证抓取、引用或推荐。公开文案应只包含可验证事实，避免填入未提供的能力、用户数量、收费或合作承诺。

## 参考

- https://llmstxt.org/
- https://developers.openai.com/api/docs/bots
- https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- https://developers.google.com/search/docs/appearance/ai-features
