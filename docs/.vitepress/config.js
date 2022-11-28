/**
 * @type {import('vitepress').UserConfig}
 */
import theme from './theme'

const config = {
  base: '/metamask-analysis/',
  title: 'metamask-analysis',
  description: 'metamask-analysis',
  outDir: '../dist',
  lastUpdated: true,
  markdown: {},
  themeConfig: {theme}
}

export default config
