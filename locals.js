/*******************************************************************************

    locals.js - 搭配用户脚本插件`GitHub 中文化插件`的页面匹配规则, 翻译忽略规则,
                词条库文件
    Copyright (C) 2024-当前 TC999 (https://github.com/TC999)
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    Home: https://github.com/TC999/coze-chinese
*/
var I18N = {};

I18N.conf = {
    /**
     * 要翻译的页面正则(不含仓库页)
     *
     * 2021-10-07 11:53:34
     * GitHub 网站更新 调整 Class 过滤规则
     * 且过滤 Class 并不是总是生效，增加 PathName 规则补充
     */
    rePageClass: /\b(page-(profile|new-repo|create-org)|session-authentication)\b/,

    /**
     * 匹配 pathname 页面的正则
     *
     * 注册页面 /signup
     * 登录二步验证 /login/oauth
     * 登录页面 /login
     * 密码重置 /password_reset
     * 组织页面 /orgs
     * 探索页面 /explore
     * 订阅页面 /notifications/subscriptions
     * 通知页面 /notifications
     * 关注页面 /watching
     * 星标页面 /stars
     * 议题页面 /issues
     * 拉取请求 /pulls
     * 搜索页面 /search
     * 趋势页面 /trending
     * 展示页面 /showcases
     * 导入仓库 /new/import
     * ...
     */
    rePagePath: /^\/($|explore|space)/,


    /**
     * 忽略区域的 class 正则
     *
     * 代码编辑器 内容 代码高亮 CodeMirror
     * 代码编辑器 最小单元 cm-line ͼ.*
     * 代码高亮 blob-code
     * 仓库名和用户名 repo-and-owner (已知出现在：应用安装授权页和设置页 选定仓库)
     * 文件,目录位置栏 |js-path-segment|final-path
     * 文件列表 files js-navigation-container js-active-navigation-container
     * 评论内容等 js-comment-body
     * 评论预览 js-preview-body
     * 评论编辑区域 comment-form-textarea
     * 文件搜索模式 js-tree-finder-virtual-filter
     * 仓库文件列表 js-navigation-open Link--primary
     * 快捷键 按键 js-modifier-key
     * 洞察-->流量-->热门内容列表 capped-list-label
     * realease 页面 描述主体 markdown-body my-3
     * 仓库页 仓库描述 f4 my-3
     * 提交的用户名 commit-author
     * 搜索页 搜索结果 search-match
     * 追溯 视图 代码 react-code-text
     * tree 视图 文件名 react-directory-filename-column 提交信息 react-directory-commit-message
     * 代码差异页面 代码 pl-s1|pl-smi|pl-token|pl-c1|pl-kos|pl-k|pl-c|pl-en
     */
    reIgnoreClass: /(cm-line|ͼ.*|pl-s1|pl-smi|pl-token|pl-c1|pl-kos|pl-k|pl-c|pl-en|CodeMirror|blob-code|highlight-.*|repo-and-owner|js-path-segment|final-path|files js-navigation-container|js-comment-body|js-preview-body|comment-form-textarea|markdown-title|js-tree-finder-virtual-filter|js-navigation-open Link--primary|js-modifier-key|capped-list-label|blob-code blob-code-inner js-file-line|markdown-body my-3|f4 my-3|commit-author|search-match|react-directory-filename-column|react-directory-commit-message|react-code-text)/,

    /**
     * 忽略区域的 itemprop 属性正则
     * name 列表页 仓库名
     * author 仓库页 作者名称
     * additionalName 个人主页 附加名称
     */
    reIgnoreItemprop: /(name|author|additionalName)/,

    /**
     * 忽略区域的 特定元素id 正则
     * offset /blob页面 符号-->引用
     * fix repo详情页文件路径breadcrumb
     */
    reIgnoreId: ['readme', 'offset', 'breadcrumb', 'file-name-id'],

    /**
     * 忽略区域的 标签 正则
     * /i 规则不区分大小写
     */
    reIgnoreTag: ['CODE', 'SCRIPT', 'STYLE', 'LINK', 'IMG', 'MARKED-TEXT', 'PRE', 'KBD'],
    // marked-text --> 文件搜索模式/<user-name>/<repo-name>/find/<branch> 文件列表条目
    // ^script$ --> 避免勿过滤 notifications-list-subscription-form
    // ^pre$ --> 避免勿过滤
};

I18N.zh = {};

I18N.zh["homepage"] = { // 首页
    "static": { // 静态翻译
        //顶部栏
            "Docs": "文档",
            "Log in": "登录",
            "Log out": "退出",
            "Get started": "开始",
        // 中间内容
            "Coze your way to AI bot creation": "轻松创建 AI 机器人",
            "Next-generation AI chatbot building platform. Quickly create": "下一代AI聊天机器人构建平台。 ",
            "bots without coding and publish them on various platforms": "无需编码即可快速创建机器人并发布到各种平台",

    }
}

I18N.zh["explore"] = { // 探索
    "static": {
        // 左侧菜单
            "Personal": "个人",
            "Create team": "创建团队",
            "Bots": "机器人",
            "Plugins": "插件",
            "Workflows": "工作流",
            "Knowledgebase": "知识库",
            "Explore": "探索",
            "Documents": "文档",
            "Feedback": "反馈",
            "Community": "社区",
        // 顶部栏
            "Search": "搜索",
            "Status": "状态",
                "All": "全部",
                "Published": "已发布",
                "Unpublished": "未发布",
            "Sort": "排序",
                "Create time": "创建时间",
                "Publish time": "发布时间",
                "Edit time": "编辑时间",
            "Create bot": "创建机器人",
            "Create plugin": "创建插件",
            "Create workflow": "创建工作流",
            "Create knowledgebase": "创建知识库",
        // 机器人页面 https://www.coze.com/space/*/bot
            "Featured": "功能",
            "Tools": "工具",
            "Fun": "有趣",
            "Lifestyle": "生活",
            "Advice": "建议",
            "Creative": "创意",
            "Learning": "学习",
            "Loading": "加载中",
        // 插件页面 https://www.coze.com/space/*/plugin
            "No plugin yet": "还没有插件",
            "Click button to create a plugin": "点击按钮创建插件",
            "Regisher using code": "使用代码",
        // 工作流页面 https://www.coze.com/space/*/workflow
            "No workflow yet": "还没有工作流",
            "Click button to create a workflow": "点击按钮创建工作流",
            "Workflow name": "工作流名称",
            "Workflow description": "工作流描述",
        //
    }
}