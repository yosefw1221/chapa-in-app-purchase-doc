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
    logo: '/images/android-chapa-logo.png',
    repo: 'yosefw1221/',
    
    sidebar: sidebar,
    navbar: navbar,
    docsRepo: 'yosefw1221/chapa-in-app-purchase-doc',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    themePlugins: {
      git: isProd,
    },
  }),
})
