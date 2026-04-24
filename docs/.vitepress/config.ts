import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的个人博客",
  description: "分享技术、生活、思考",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: '所有文章',
          items: [
            { text: 'Hello World', link: '/posts/hello-world' },
            { text: '关于博客', link: '/posts/about-this-blog' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LockJoe227' },
    ],
    footer: {
      message: 'Made with ❤️ using VitePress',
      copyright: '© 2026 版权所有',
    },
  },
})
