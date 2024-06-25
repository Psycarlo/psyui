export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: string
  label?: string
}

export type SidebarNavItem = NavItem & {
  items?: SidebarNavItem[]
}

type DocsConfig = {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/docs/getting-started/introduction' },
        { title: 'Installation', href: '/docs/getting-started/installation' },
        { title: 'About', href: '/docs/getting-started/about' },
        { title: 'Contribution', href: '/docs/getting-started/contribution' }
      ]
    },
    {
      title: 'Common',
      items: [{ title: 'Card', href: '/docs/common/card', label: 'New' }]
    },
    {
      title: 'Visualizations',
      items: [
        {
          title: 'Spark Line Chart',
          href: '/docs/visualizations/spark-line-chart',
          label: 'New'
        }
      ]
    },
    {
      title: 'Trending',
      items: [
        {
          title: 'Marquee',
          href: '/docs/trending/marquee',
          label: 'New'
        }
      ]
    }
  ]
}
