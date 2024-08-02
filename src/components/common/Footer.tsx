import {
  facebook,
  instagram,
  linkedin,
  logos,
  phone,
  x,
  youtube,
} from '@/assets/index'
import type {
  FooterData,
  FooterItem,
  ImageItem,
  LinkItem,
  TextItem,
} from '@/interfaces'

// Datos del footer
const data: FooterData = {
  sections: [
    {
      id: 1,
      title: 'Impulsado por:',
      items: [
        { id: 1, type: 'image', src: logos, alt: 'Logos' },
        {
          id: 2,
          type: 'text',
          content:
            'La aceleradora de startups con base tecnológica, Gravitad y AECODA, Asociación Española Contra el Desperdicio Alimentario.',
        },
      ],
    },
    {
      id: 2,
      title: 'Contactar',
      items: [
        { id: 1, icon: phone, type: 'link', href: '#', content: '123-456-789' },
      ],
    },
    {
      id: 3,
      title: 'Blog',
      items: [
        {
          id: 1,
          type: 'text',
          content: 'Te informaremos acerca del progreso del proyecto',
        },
      ],
    },
  ],
  copyRight: [
    {
      id: 1,
      type: 'text',
      content: '© 2024. Todos los derechos reservados.',
      href: '#',
    },
    {
      id: 2,
      type: 'text',
      content: 'Política de privacidad',
      href: '/privacidad',
    },
    {
      id: 3,
      type: 'text',
      content: 'Política de cookies',
      href: '/cookies',
    },
    {
      id: 4,
      type: 'text',
      content: 'Aviso legal',
      href: '/legal',
    },
  ],
}

// Renderiza los elementos del footer basándose en su tipo
const renderFooterItem = (item: FooterItem) => {
  switch (item.type) {
    case 'text':
      return (
        <p key={item.id} className="max-w-[400px]">
          {(item as TextItem).content}
        </p>
      )
    case 'link': {
      const linkItem = item as LinkItem
      return (
        <div key={item.id} className="flex items-center gap-1 min-w-max">
          {item.icon && (
            <img src={item.icon} className="w-[16px] mr-1" alt="" />
          )}
          <a href={linkItem.href} className="block underline">
            {linkItem.content}
          </a>
        </div>
      )
    }
    case 'image': {
      const imageItem = item as ImageItem
      return (
        <img
          key={item.id}
          className="w-2/3 md:w-1/2"
          src={imageItem.src}
          alt={imageItem.alt}
        />
      )
    }
    default:
      return null
  }
}

// Enlaces sociales
const socialLinks = [
  {
    href: 'https://facebook.com',
    src: facebook,
    alt: 'Facebook',
    title: 'Facebook',
  },
  { href: 'https://twitter.com', src: x, alt: 'Twitter', title: 'Twitter' },
  {
    href: 'https://linkedin.com',
    src: linkedin,
    alt: 'LinkedIn',
    title: 'LinkedIn',
  },
  {
    href: 'https://instagram.com',
    src: instagram,
    alt: 'Instagram',
    title: 'Instagram',
  },
  {
    href: 'https://youtube.com',
    src: youtube,
    alt: 'YouTube',
    title: 'YouTube',
  },
]

const renderSocialLinks = () => (
  <div className="flex gap-6 md:gap-2 mt-4 items-center">
    {socialLinks.map(({ href, src, alt, title }) => (
      <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-6 filter invert-[.5] md:filter-none"
        />
      </a>
    ))}
  </div>
)

export const Footer: React.FC = () => (
  <footer className="bg-[#E6E6E6] py-8 font-ptSans w-full">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 md:px-[8vw]">
      {/* Sección 1: Impulsado por */}
      <div className="col-span-1 md:col-span-3 p-4 space-y-4">
        <h4 className="font-bold md:text-2xl mb-4 font-raleway">
          {data.sections[0].title}
        </h4>
        {data.sections[0].items.map(renderFooterItem)}
      </div>

      {/* Sección 2: Contactar con redes sociales */}
      <div className="col-span-1 p-4 mx-auto hidden md:block">
        <h4 className="text-lg mb-4">{data.sections[1].title}</h4>
        <div>{data.sections[1].items.map(renderFooterItem)}</div>
        {renderSocialLinks()}
      </div>

      {/* Sección 3: Blog / Newsletter */}
      <div className="col-span-1 p-4 md:ml-4 space-y-4">
        <h4 className="hidden md:block text-lg mb-4">
          {data.sections[2].title}
        </h4>
        <h4 className="md:hidden text-md mb-4 font-semibold">
          Unirse a la newsletter
        </h4>
        <div className="min-w-[16vw] text-[14px] md:text-[16px]">
          {data.sections[2].items.map(renderFooterItem)}
        </div>
        <a href="/blog">
          <button
            type="button"
            className="bg-primary hover:bg-opacity-80 text-white w-full p-2 rounded-[12px] mt-2"
          >
            Ir
          </button>
        </a>
      </div>

      {/* Redes sociales (solo visible en móviles) */}
      <div className="md:hidden mx-auto col-span-1 p-4 mt-4 md:mt-0 order-last md:order-none">
        <div className="md:hidden text-center">Redes Sociales</div>
        {renderSocialLinks()}
      </div>
    </div>
    <hr className="border-t-1 border-black my-4 w-[86%] mx-auto" />
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 font-inter text-center text-[12px] md:px-[8vw]">
      <p>{data.copyRight[0].content}</p>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {data.copyRight.slice(1).map((item) => (
          <a
            href={item.href}
            className="hover:text-secondary"
            target="_blank"
            rel="noreferrer"
            key={item.id}
          >
            <p>{item.content}</p>
          </a>
        ))}
      </div>
    </div>
  </footer>
)
