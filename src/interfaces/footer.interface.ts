// interfaces.ts
export interface FooterData {
  sections: Section[]
  copyRight: FooterCopyRight[]
}

export interface Section {
  id: number
  title: string
  image?: ImageItem
  image2?: ImageItem
  content?: TextItem
  link?: LinkItem
}

export interface FooterCopyRight {
  id: number
  content: string
  href?: string
  type?: 'text' | 'link'
}

export interface ImageItem {
  id: number
  type: 'image'
  src: string
  alt: string
}

export interface TextItem {
  id: number
  type: 'text'
  content: string
}

export interface LinkItem {
  id: number
  type: 'link'
  href: string
  content: string
  icon?: string
}
