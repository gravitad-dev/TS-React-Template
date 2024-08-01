export interface TextItem {
  id: number
  type: 'text'
  content: string
  href?: string
}

export interface LinkItem {
  id: number
  icon?: string
  type: 'link'
  href: string
  content: string
}

export interface ImageItem {
  id: number
  type: 'image'
  src: string
  alt: string
  content?: string
  href?: string
}

export type FooterItem = TextItem | LinkItem | ImageItem

export interface FooterSection {
  id: number
  title: string
  items: FooterItem[]
}

export interface FooterData {
  sections: FooterSection[]
  copyRight: TextItem[]
}
