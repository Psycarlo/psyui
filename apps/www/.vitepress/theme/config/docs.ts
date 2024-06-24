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
        { title: 'Introduction', href: '/docs/getting-started/introduction' }
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
    }
  ]
}
