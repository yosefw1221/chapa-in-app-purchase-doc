import process from 'node:process'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { head, sidebar,navbar } from './configs/index.js'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/chapa-in-app-purchase-doc/',

  head,

  lang: 'en-US',
  title: 'Chapa In-App Purchase',
  description: 'Unofficial chapa android in-app purchase library',

  theme: defaultTheme({
    logo: '/images/chapa.png',
    repo: 'yosefw1221/chapa-in-app-purchase-doc',
    docsDir: 'docs',

    sidebar: sidebar,
    navbar: navbar,
    editLinkText: 'Edit this page on GitHub',

    themePlugins: {
      git: isProd,
    },
  }),
})
