# Funniest Lost Sock Status Update

[![Bounty](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/AyzRuoshui/mf-u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/AyzRuoshui/mf-u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

## 比赛要求
- 比赛主页：[Funniest Lost Sock Status Update](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
- 赛题目标：以一只失踪袜子的第一人称视角撰写一条状态更新，需落脚于不该出现的生活角落并保持单行自洽。
- 运行环境：基于 `program/v1` 无网沙盒运行 `main.ts`（`Node 22.23.4`），向 `/output/entry.txt` 写入最终文本。
- 评审标准：由 AI 裁判成对盲评，依次考察袜子人设真实感、结尾笑点转折、荒诞前提自然度、家居细节与反套路。

## 终稿与设计取舍
- 终稿原文：`Day 9 in the clear vacuum bin. He still blames the dryer while pushing me right past my twin.`
- 篇幅控制：共 93 个 Unicode 码点（93 字节），在 1–120 字符上限内保持短促节奏，同时兼顾字节更小者的平局优势。
- 喜剧取舍：放弃“沙发底/烘干机吞噬”陈词，改用透明吸尘器尘杯构建“近在眼前却被无视、反被用来栽赃烘干机”的冷面反讽。

## 运行方式
- 默认模式：执行 `node main.ts`，自动校验并将单行 UTF-8 状态更新写入 `/output/entry.txt`。
- 自定义输出：执行 `node main.ts --out <path>` 可将产物写往指定路径，用于本地隔离验证而不污染系统或根目录。

## 门控校验与本地验证
- 门控规则：`validateEntry` 校验 UTF-8 非空文本、Unicode 码点 1–120、禁止全空白、换行符及不可见控制字符。
- 语法检查：使用 `node --check main.ts` 验证 TypeScript 可擦除语法与模块可解析性。
- 运行实测：实跑生成测试产物验证内容与字节数，并对空串、纯空白、换行符及超长字符串（121 字符）执行负例拦截测试。

## 仓库边界
- 仓库仅保留 `main.ts`、`README.md`、`.makefun/owner.json` 与初始化锚点文件（`LICENSE`、`.makefun/freshness.json`）。
- 全程无外部网络请求、无第三方依赖包且不读取任何环境变量秘密，全部逻辑均封装于单文件 `main.ts` 内。
- 钱包归属声明绑定于 `.makefun/owner.json`，并严格保留 `makefun init` 生成的初始提交历史与锚点记录。
