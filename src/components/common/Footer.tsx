import {
  facebook,
  graylogos,
  instagram,
  linkedin,
  logos,
  phone,
  x,
  youtube,
} from '@/assets/index'
import type { FooterData } from '@/interfaces'
import type React from 'react'

// Datos del footer
const data: FooterData = {
  sections: [
    {
      id: 1,
      title: 'Impulsado por:',
      image: { id: 2, type: 'image', src: logos, alt: 'Logos' },
      image2: { id: 3, type: 'image', src: graylogos, alt: 'Logosgray' },
      content: {
        id: 4,
        type: 'text',
        content:
          'La aceleradora de startups con base tecnológica, Gravitad y AECODA, Asociación Española Contra el Desperdicio Alimentario.',
      },
    },
    {
      id: 2,
      title: 'Contactar',
      link: {
        id: 1,
        type: 'link',
        href: '#',
        content: '123-456-789',
        icon: phone,
      },
    },
    {
      id: 3,
      title: 'Blog',
      content: {
        id: 1,
        type: 'text',
        content: 'Te informaremos acerca del progreso del proyecto',
      },
    },
  ],
  copyRight: [
    { id: 1, content: '© 2024. Todos los derechos reservados.' },
    { id: 2, content: 'Política de privacidad', href: '/privacidad' },
    { id: 3, content: 'Política de cookies', href: '/cookies' },
    { id: 4, content: 'Aviso legal', href: '/legal' },
  ],
}

// Enlaces sociales
const socialLinks = [
  { href: 'https://facebook.com', src: facebook, alt: 'Facebook' },
  { href: 'https://twitter.com', src: x, alt: 'Twitter' },
  { href: 'https://linkedin.com', src: linkedin, alt: 'LinkedIn' },
  { href: 'https://instagram.com', src: instagram, alt: 'Instagram' },
  { href: 'https://youtube.com', src: youtube, alt: 'YouTube' },
]

const renderSocialLinks = () => (
  <div className="flex gap-6 mt-6 md:mt-[32px] items-center flex-wrap">
    {socialLinks.map(({ href, src, alt }) => (
      <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className="w-[1.24rem] filter invert-[.5] md:filter-none hover:opacity-75 transition-opacity"
        />
      </a>
    ))}
  </div>
)

export const Footer: React.FC = () => (
  <footer className="bg-[#E6E6E6] pb-6 pt-[64px] font-ptSans w-full text-[#707070] md:text-black">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-4 sm:px-[12%] 2xl:px-[6%] md:h-[370px]">
      {/* Sección 1: Impulsado por */}
      <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-[32px]">
        <h4 className="font-bold text-[16px] sm:text-[32px] 2xl:text-[42px] font-raleway">
          {data.sections[0].title}
        </h4>
        {data.sections[0].image && (
          <img
            key={data.sections[0].image.id}
            className="hidden md:block w-2/3 md:w-[55%] object-contain"
            src={data.sections[0].image.src}
            alt={data.sections[0].image.alt}
          />
        )}
        {data.sections[0].image2 && (
          <img
            key={data.sections[0].image2.id}
            className="md:hidden w-2/3 md:w-[55%] object-contain"
            src={data.sections[0].image2.src}
            alt={data.sections[0].image2.alt}
          />
        )}
        {data.sections[0].content && (
          <p className="text-[14px] md:text-[22px] md:w-3/4">
            {data.sections[0].content.content}
          </p>
        )}
      </div>

      {/* Sección 2: Contactar con redes sociales */}
      <div className="col-span-1 md:px-4 mx-auto hidden md:block md:-ml-4">
        <h4 className="text-[16px] md:text-[24px]">{data.sections[1].title}</h4>
        {data.sections[1].link && (
          <div className="flex mt-[32px] items-center gap-1 min-w-max text-[22px]">
            {data.sections[1].link.icon && (
              <img
                src={data.sections[1].link.icon}
                className="w-[24px] mr-1"
                alt=""
              />
            )}
            <a href={data.sections[1].link.href} className="block underline">
              {data.sections[1].link.content}
            </a>
          </div>
        )}
        {renderSocialLinks()}
      </div>

      {/* Sección 3: Blog / Newsletter */}
      <div className="col-span-1 mt-4 sm:mt-0 md:px-4 md:ml-4 space-y-4 md:space-y-[32px] w-[90%]">
        <h4 className="text-[16px] md:text-[24px]">{data.sections[2].title}</h4>
        {data.sections[2].content && (
          <p className="text-[14px] md:text-[20px]">
            {data.sections[2].content.content}
          </p>
        )}
        <a href="/blog">
          <button
            type="button"
            className="bg-primary hover:bg-opacity-80 text-white w-full p-2 py-4 rounded-[12px] mt-[16px] md:mt-[32px] text-[18px]"
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
    <hr className="border-t-1 border-black md:my-[64px] w-[80%] mx-auto" />
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 font-inter text-center text-[14px] md:text-[18px] px-[2px] md:px-[10%]">
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
