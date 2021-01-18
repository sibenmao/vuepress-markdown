const { html5Media } = require('markdown-it-html5-media');
console.log(html5Media, 'html5Media')
module.exports = {
    title: 'Markdown',
    description: 'Markdown',
    host: '127.0.0.1',
    port: 9527,
    head: [
        ['link', { rel: 'icon', href: '/assets/images/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/api/' },
        ],
        repo: 'sibenmao/vuepress-markdown',
        sidebar: {
            '/guide/': ['', 'editor'],
            '/api/': ['', 'extend'],
        },
    },
    plugins: ['@vuepress/back-to-top'],
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-sub')) // 上标
            md.use(require('markdown-it-sup')) // 下标
            md.use(require('markdown-it-footnote')) // 脚注
            md.use(require('markdown-it-deflist'))  // 自定义列表
            md.use(require('markdown-it-abbr'))  // 缩写提示
            md.use(require('markdown-it-ins'))  // 下划线
            md.use(require('markdown-it-mark'))  // 高亮强调
            // md.use(require('markdown-it-katex'))  // 数学公式
            md.use(html5Media)  // html5-media
            md.use(require('markdown-it-task-lists'))  // 任务列表
            // md.use(require('@liradb2000/markdown-it-mermaid'))  // 美人鱼
        }
    }
}