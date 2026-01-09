import {headerLinksToSections} from '../../../utils/data/header.data'
import Link from 'next/link'

export const HeaderList = ({isMobile = false, className, onClick}) => {
  const itemsToRender = isMobile
    ? headerLinksToSections
    : headerLinksToSections.filter(item => !item.mobileOnly);

  return (
    <ul className={className}>
      {itemsToRender.map((headerLink) => (
        headerLink.type === 'link' ? (
          <li key={headerLink.title}>
            <Link
              href={headerLink.link}
              className="tracking-[.8px] hover:text-blueSoft-300"
            >
              {headerLink.title}
            </Link>
          </li>
        ) : (
          <li key={headerLink.title}>
            <a
              href={headerLink.link}
              onClick={onClick}
              className="tracking-[.8px] hover:text-blueSoft-300"
            >
              {headerLink.title}
            </a>
          </li>
        )
      ))}
    </ul>
  )
};