# GitHub 发布教程

本教程将指导您如何将小画家网站发布到 GitHub Pages，以便分享给别人。

## 步骤 1：安装 Git

如果您的电脑上还没有安装 Git，请先下载并安装：

1. 访问 [Git 官方网站](https://git-scm.com/downloads)
2. 下载适合您操作系统的版本
3. 按照安装向导完成安装
4. 安装完成后，打开命令提示符（Windows）或终端（Mac/Linux），输入 `git --version` 确认安装成功

## 步骤 2：在 GitHub 上创建仓库

1. 访问 [GitHub 官网](https://github.com/)
2. 登录您的 GitHub 账号（如果没有账号，请先注册）
3. 点击右上角的 "+", 选择 "New repository"
4. 填写仓库信息：
   - **Repository name**：输入一个名称，例如 "little-artist-website"
   - **Description**：可以填写 "小画家的艺术网站"
   - **Visibility**：选择 "Public"（公开）
   - 不要勾选 "Add a README file"、"Add .gitignore" 或 "Choose a license"
5. 点击 "Create repository"

## 步骤 3：初始化本地仓库

1. 打开命令提示符（Windows）或终端（Mac/Linux）
2. 导航到您的网站文件夹：
   ```bash
   cd d:\xschool\小画家网站
   ```
3. 初始化 Git 仓库：
   ```bash
   git init
   ```
4. 添加所有文件到暂存区：
   ```bash
   git add .
   ```
5. 提交文件：
   ```bash
   git commit -m "Initial commit"
   ```

## 步骤 4：关联远程仓库并推送

1. 复制 GitHub 仓库的 HTTPS 或 SSH 地址（在仓库页面的 "Code" 按钮下）
2. 关联远程仓库：
   ```bash
   git remote add origin <复制的仓库地址>
   ```
   例如：
   ```bash
   git remote add origin https://github.com/yourusername/little-artist-website.git
   ```
3. 推送代码到 GitHub：
   ```bash
   git push -u origin master
   ```
   （如果默认分支是 main 而不是 master，请使用 `git push -u origin main`）

## 步骤 5：启用 GitHub Pages

1. 回到 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Pages"
4. 在 "Build and deployment" 部分：
   - **Source**：选择 "Deploy from a branch"
   - **Branch**：选择 "master" 或 "main"，然后选择 "/ (root)"
   - 点击 "Save"
5. 等待几分钟，GitHub Pages 就会构建并发布您的网站
6. 您将看到一个绿色的 "Your site is live at" 消息，后面跟着您的网站 URL

## 步骤 6：访问您的网站

- 网站 URL 格式通常为：`https://yourusername.github.io/repository-name/`
- 例如：`https://username.github.io/little-artist-website/`

## 后续更新

当您对网站进行修改后，只需按照以下步骤更新 GitHub 上的版本：

1. 添加修改的文件：
   ```bash
   git add .
   ```
2. 提交更改：
   ```bash
   git commit -m "更新描述"
   ```
3. 推送更新：
   ```bash
   git push
   ```

GitHub Pages 会自动重新构建您的网站，通常需要几分钟时间生效。

## 故障排除

如果遇到问题：

1. 确保 Git 已正确安装
2. 确保您有 GitHub 账号并已登录
3. 确保远程仓库地址正确
4. 检查 GitHub Pages 设置是否正确
5. 如果网站没有立即显示，请耐心等待几分钟，GitHub Pages 需要时间构建

如果仍然有问题，可以查看 GitHub Pages 的官方文档或寻求技术支持。