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
        { title: 'Draggable', href: '/docs/common/draggable', label: 'Soon' },
        { title: 'Kbd', href: '/docs/common/kbd' },
        {
          title: 'Number Input',
          href: '/docs/common/number-input'
        },
        {
          title: 'Pin Input',
          href: '/docs/common/pin-input'
        },
        { title: 'Select', href: '/docs/common/select' },
        { title: 'Skeleton', href: '/docs/common/skeleton' },
        { title: 'Sonner', href: '/docs/common/sonner' },
        { title: 'Switch', href: '/docs/common/switch' },
        { title: 'Table', href: '/docs/common/table', label: 'Soon' },
        { title: 'Tabs', href: '/docs/common/tabs' },
        { title: 'Text Input', href: '/docs/common/text-input' },
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
          href: '/docs/visualizations/progress-bar'
        },
        {
          title: 'Progress Circle',
          href: '/docs/visualizations/progress-circle'
        },
        {
          title: 'Progress Semicircle',
          href: '/docs/visualizations/progress-semicircle'
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
          title: 'Border Beam',
          href: '/docs/trending/border-beam',
          label: 'New'
        },
        {
          title: 'Globe',
          href: '/docs/trending/globe',
          label: 'Soon'
        },
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
          title: 'Meteors',
          href: '/docs/trending/meteors'
        },
        {
          title: 'Number Ticker',
          href: '/docs/trending/number-ticker'
        },
        {
          title: 'Origami',
          href: '/docs/trending/origami',
          label: 'Soon'
        },
        {
          title: 'Word Pullup',
          href: '/docs/trending/word-pullup',
          label: 'New'
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
