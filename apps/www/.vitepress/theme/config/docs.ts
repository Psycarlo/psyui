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
        { title: 'Avatar', href: '/docs/common/avatar', label: 'New' },
        { title: 'Badge', href: '/docs/common/badge', label: 'New' },
        { title: 'Button', href: '/docs/common/button', label: 'New' },
        { title: 'Callout', href: '/docs/common/callout', label: 'New' },
        { title: 'Card', href: '/docs/common/card', label: 'New' },
        { title: 'Kbd', href: '/docs/common/kbd', label: 'New' },
        { title: 'Sonner', href: '/docs/common/sonner', label: 'New' },
        { title: 'Switch', href: '/docs/common/switch', label: 'New' },
        {
          title: 'Tooltip',
          href: '/docs/common/tooltip',
          label: 'New'
        }
      ]
    },
    {
      title: 'Visualizations',
      items: [
        {
          title: 'Bar List',
          href: '/docs/visualizations/bar-list',
          label: 'New'
        },
        {
          title: 'Progress Bar',
          href: '/docs/common/progress-bar',
          label: 'New'
        },
        {
          title: 'Progress Circle',
          href: '/docs/common/progress-circle',
          label: 'New'
        },
        {
          title: 'Spark Area Chart',
          href: '/docs/visualizations/spark-area-chart',
          label: 'New'
        },
        {
          title: 'Spark Line Chart',
          href: '/docs/visualizations/spark-line-chart',
          label: 'New'
        },
        {
          title: 'Tracker',
          href: '/docs/visualizations/tracker',
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
        },
        {
          title: 'Number Ticker',
          href: '/docs/trending/number-ticker',
          label: 'New'
        },
        {
          title: 'Origami',
          href: '/docs/trending/origami',
          label: 'New'
        }
      ]
    },
    {
      title: 'Bitcoin',
      items: [
        { title: 'Block', href: '/docs/bitcoin/block', label: 'New' },
        { title: 'QRCode', href: '/docs/bitcoin/qrcode', label: 'New' },
        { title: 'Shorten', href: '/docs/bitcoin/shorten', label: 'New' }
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
