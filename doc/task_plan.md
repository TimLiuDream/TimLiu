# Task Plan: TimLiu 个人主页 PRD

## Goal
为 TimLiu 的个人网站撰写一份可直接执行的 PRD，先聚焦个人主页首版，明确目标、页面结构、内容范围、设计方向与交付标准。

## Current Phase
Phase 5

## Phases

### Phase 1: Requirements & Discovery
- [x] Understand user intent
- [x] Identify constraints and requirements
- [x] Document findings in findings.md
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Define PRD structure
- [x] Decide first version scope
- [x] Document decisions with rationale
- **Status:** complete

### Phase 3: Draft PRD
- [x] Write PRD markdown
- [x] Save PRD under doc directory
- **Status:** complete

### Phase 4: Verification
- [x] Review PRD for completeness
- [x] Ensure wording is actionable
- **Status:** complete

### Phase 5: Delivery
- [x] Deliver to user
- [x] Move planning files under doc directory
- **Status:** complete

## Key Questions
1. 个人主页首版要承载哪些核心信息？
2. 页面结构和内容边界如何定义，避免一开始做太大？
3. 这份 PRD 是否足够支持后续直接进入设计/开发？

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| 先做个人主页首版 | 最符合用户当前“先搞出来”的目标，能最快上线 |
| PRD 先写在 doc 目录 | 符合用户明确要求，也方便后续沉淀和迭代 |
| 首版聚焦主页、项目、文章、联系 | 这是最小但完整的个人站骨架，易扩展 |
| 将 planning files 也移入 doc | 用户明确要求“后面加的几个文件放到 doc 下”，统一归档 |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| 初次尝试读取规划模板路径时写错环境变量 | 1 | 改用绝对路径读取模板文件 |
| 非 UTF-8 读取导致 mojibake | 1 | 重新以 UTF-8 写回 PRD 文件 |

## Notes
- 这次任务是“先定 PRD”，不是直接开工实现。
- PRD 要足够具体，便于下一步直接进入设计稿或前端开发。
