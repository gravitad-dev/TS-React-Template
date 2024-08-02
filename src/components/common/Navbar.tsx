import type { NavLink } from '@/interfaces'

const NavLinks: NavLink[] = [
  {
    name: 'Inicio',
    href: '#',
    submenu: [],
  },
  {
    name: 'Corporativo',
    href: '#',
    submenu: [],
  },
  {
    name: 'Iversores',
    href: '#',
    submenu: [
      {
        name: 'Submenu A',
        submenuHref: '#',
      },
      {
        name: 'Submenu B',
        submenuHref: '#',
      },
    ],
  },
  {
    name: 'Proyecto',
    href: '#',
    submenu: [
      {
        name: 'Proyecto A',
        submenuHref: '#',
      },
      {
        name: 'Proyecto B',
        submenuHref: '#',
      },
    ],
  },
]

export const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      {/* logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* menu desktop */}
          <ul className="menu menu-sm dropdown-content bg-black rounded-sm z-[1] mt-3 w-52 p-2 shadow">
            {NavLinks.map(({ name, href, submenu }) => (
              <li key={crypto.randomUUID()}>
                <a href={`${href}`}>{name}</a>
                {submenu.length > 0 &&
                  submenu.map(({ name, submenuHref }) => (
                    <ul
                      className="p-2 bg-black min-w-[120px] rounded-sm"
                      key={crypto.randomUUID()}
                    >
                      <li key={crypto.randomUUID()}>
                        <a href={`${submenuHref}`}>{name}</a>
                      </li>
                    </ul>
                  ))}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="#inicio">
          LOGO
        </a>
      </div>
      {/* menu mobile */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavLinks.map(({ name, href, submenu }) =>
            submenu.length > 0 ? (
              <li key={crypto.randomUUID()}>
                <details>
                  <summary>{name}</summary>
                  <ul className="p-2 bg-black min-w-[120px] rounded-sm">
                    {submenu.map(({ name, submenuHref }) => (
                      <li key={crypto.randomUUID()}>
                        <a href={submenuHref}>{name}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={crypto.randomUUID()}>
                <a href={href}>{name}</a>
              </li>
            )
          )}
        </ul>
      </div>
      {/* btn contact */}
      <div className="navbar-end ">
        <a
          className="btn bg-white text-black hover:bg-white hover:text-black hover:opacity-[90%]"
          href="#contacto-example"
          target="_blank"
          rel="noreferrer"
        >
          Contacto
        </a>
      </div>
    </div>
  )
}
