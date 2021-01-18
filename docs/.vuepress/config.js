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
        repo: 'sibenmao',
        sidebar: {
            '/guide/': ['', 'editor'],
            '/api/': ['', 'extend'],
        },
    },
    plugins: ['@vuepress/back-to-top'],
}