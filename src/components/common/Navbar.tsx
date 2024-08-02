import type { NavLink } from '@/interfaces'
import LOGO from '../../assets/LOGO.png'

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

const contactHref = 'example-blog.com'
const textSize = '20 px'

export const Navbar = () => {
  return (
    <header className="w-full bg-black px-[32px] ">
      <nav className="navbar z-10  text-white  max-w-[1535px] mx-auto h-[80px] ">
        <div className="navbar-start">
          {/* logo */}
          <div className="w-[181px]">
            <img src={`${LOGO}`} alt="website logo" />
          </div>
        </div>
        {/* menu desktop */}
        <div className="navbar-end hidden lg:flex lg:gap-4  w-full">
          <ul className={`menu menu-horizontal px-1  text-[${textSize}]`}>
            {NavLinks.map(({ name, href, submenu }) =>
              submenu.length > 0 ? (
                <li key={crypto.randomUUID()}>
                  <details>
                    <summary>{name}</summary>
                    <ul className="p-2 w-[150px]  rounded-[16px] text-[18px] bg-white text-black">
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
          {/* btn contact */}
          <div>
            <a
              className={`btn bg-white text-black hover:bg-white hover:text-black hover:opacity-[90%] 
              rounded-[8px]  w-[150px] h-[48px] font-normal text-[${textSize}]
               `}
              href={`${contactHref}`}
              target="_blank"
              rel="noreferrer"
            >
              Contacto
            </a>
          </div>
        </div>
        {/* hamburguer */}
        <div className="dropdown ml-auto">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
          {/* menu mobile */}
          <ul
            className="menu menu-sm dropdown-content  rounded-[16px] z-10 mt-3 right-0
         w-52 p-4 shadow bg-black text-white"
          >
            {NavLinks.map(({ name, href, submenu }) => (
              <li key={crypto.randomUUID()}>
                <a href={`${href}`}>{name}</a>
                {submenu.length > 0 &&
                  submenu.map(({ name, submenuHref }) => (
                    <ul
                      className="p-2  min-w-[120px] rounded-[16px]"
                      key={crypto.randomUUID()}
                    >
                      <li key={crypto.randomUUID()}>
                        <a href={`${submenuHref}`}>{name}</a>
                      </li>
                    </ul>
                  ))}
              </li>
            ))}
            <li>
              {/* btn contact */}
              <a
                className="btn mt-5 bg-white text-black hover:bg-white hover:text-black hover:opacity-[90%]"
                href={`${contactHref}`}
                target="_blank"
                rel="noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
