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
        { title: 'Changelog', href: '/docs/getting-started/changelog' },
        { title: 'About', href: '/docs/getting-started/about' },
        { title: 'Contribution', href: '/docs/getting-started/contribution' }
      ]
    },
    {
      title: 'Common',
      items: [
        { title: 'Accordion', href: '/docs/common/accordion', label: 'New' },
        { title: 'Badge', href: '/docs/common/badge', label: 'New' },
        { title: 'Button', href: '/docs/common/button', label: 'New' },
        { title: 'Callout', href: '/docs/common/callout', label: 'New' },
        { title: 'Card', href: '/docs/common/card', label: 'New' }
      ]
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
    },
    {
      title: 'Others',
      items: [
        {
          title: 'Animated Chevron',
          href: '/docs/others/animated-chevron',
          label: 'New'
        }
      ]
    }
  ]
}
