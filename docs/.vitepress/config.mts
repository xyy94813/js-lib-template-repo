import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Javascript Library Template Repository',
  description: 'A template repository for quickly develop js lib/module',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guild', link: '/get-start' },
      { text: 'Licenses', link: 'https://github.com/xyy94813/js-lib-template-repo/blob/main/LICENSE' },
    ],
    sidebar: [
      {
        text: 'For User',
        items: [
          { text: 'Quickly Start', link: '/get-start' },
          // { text: 'Features', link: '/how-to-use' },
        ],
      },
      {
        text: 'For Contributors',
        items: [
          { text: 'How to contribute', link: '/how-to-contributing' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xyy94813/js-lib-template-repo' },
    ],
  },
})
