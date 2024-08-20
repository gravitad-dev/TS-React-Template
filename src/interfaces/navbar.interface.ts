export interface SubmenuItem {
  name: string
  submenuHref: string
}

export interface NavLink {
  name: string
  href: string
  submenu: SubmenuItem[]
}
