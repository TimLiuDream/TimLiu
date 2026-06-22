# Findings & Decisions

## Requirements
- 为 TimLiu 的个人网站撰写一份 PRD。
- 用户已明确要求：先做简单版，不要项目展示和文章/想法页。
- PRD 需要可执行，能支持后续设计/开发。
- 需要输出到 `D:\GOPATH\src\github.com\timliudream\TimLiu\doc` 目录下。
- 用户还要求把后面新增的规划文件也放到 `doc` 下。

## Research Findings
- 首版范围已收窄为：首页、关于我、联系方式。
- 后续如果要扩展，再加项目页和文章页。
- 规划文件现已统一移动到 `doc` 目录。

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| 首版只保留首页/关于我/联系方式 | 符合用户“先简单点”的要求 |
| 项目展示和文章页移出首版 | 先做最小可用主页，降低启动成本 |
| PRD 采用 Markdown | 便于后续修改、协作和直接落盘 |
| planning files 也放进 doc | 统一归档，满足用户要求 |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| 初版范围偏大 | 按用户反馈收缩为极简主页 |

## Resources
- 项目目录：`D:\GOPATH\src\github.com\timliudream\TimLiu\doc`

## Visual/Browser Findings
- 无
