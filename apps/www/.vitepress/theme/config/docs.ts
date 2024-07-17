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
        { title: 'Accordion', href: '/docs/common/accordion' },
        { title: 'Avatar', href: '/docs/common/avatar' },
        { title: 'Badge', href: '/docs/common/badge' },
        { title: 'Button', href: '/docs/common/button' },
        { title: 'Callout', href: '/docs/common/callout' },
        { title: 'Card', href: '/docs/common/card' },
        { title: 'Checkbox', href: '/docs/common/checkbox' },
        { title: 'Kbd', href: '/docs/common/kbd' },
        { title: 'Select', href: '/docs/common/select' },
        { title: 'Sonner', href: '/docs/common/sonner' },
        { title: 'Switch', href: '/docs/common/switch' },
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
          href: '/docs/visualizations/bar-list'
        },
        {
          title: 'Progress Bar',
          href: '/docs/common/progress-bar'
        },
        {
          title: 'Progress Circle',
          href: '/docs/common/progress-circle'
        },
        {
          title: 'Spark Area Chart',
          href: '/docs/visualizations/spark-area-chart'
        },
        {
          title: 'Spark Bar Chart',
          href: '/docs/visualizations/spark-bar-chart',
          label: 'New'
        },
        {
          title: 'Spark Line Chart',
          href: '/docs/visualizations/spark-line-chart'
        },
        {
          title: 'Tracker',
          href: '/docs/visualizations/tracker'
        }
      ]
    },
    {
      title: 'Trending',
      items: [
        {
          title: 'Letter Pullup',
          href: '/docs/trending/letter-pullup',
          label: 'New'
        },
        {
          title: 'Marquee',
          href: '/docs/trending/marquee'
        },
        {
          title: 'Number Ticker',
          href: '/docs/trending/number-ticker'
        },
        {
          title: 'Origami',
          href: '/docs/trending/origami',
          label: 'Soon'
        }
      ]
    },
    {
      title: 'Bitcoin',
      items: [
        { title: 'Block', href: '/docs/bitcoin/block' },
        { title: 'QRCode', href: '/docs/bitcoin/qrcode' },
        { title: 'Shorten', href: '/docs/bitcoin/shorten' }
      ]
    },
    {
      title: 'Others',
      items: [
        {
          title: 'Animated Chevron',
          href: '/docs/others/animated-chevron'
        },
        {
          title: 'Animated Copy',
          href: '/docs/others/animated-copy',
          label: 'Soon'
        }
      ]
    }
  ]
}
