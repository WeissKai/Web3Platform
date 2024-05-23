
# Web3Platform

Web3Platform 是一个基于Web3技术的校友平台。

# 网站链接
- ## [管理员](https://web.175829.xyz)
- ## [学生](https://stu.175829.xyz)

## 项目结构

- `LICENSE`: 项目的开源许可证。
- `README.md`: 项目的说明文件。
- `backend/`: 后端代码目录，采用 Node.js。
- `contracts/`: 存放智能合约的目录。
- `frontend/`: 前端代码目录，采用 React。

## 许可证

本项目采用 MIT 许可证，详细内容请查看 [LICENSE](LICENSE) 文件。
✔✔

## 前端运行(备忘)

### 本地运行
- 必要软件 Git Node.js
- 克隆项目 git clone https://github.com/sa1tycat/Web3Platform.git
- 安装必要组件 npm i
- 启动项目(进入前端目录) npm start

### 服务器后台挂载
- 安装pm2 npm install -g pm2
- 启动命令
pm2 start npm --name changme -- start
- 查看运行
pm2 ls
