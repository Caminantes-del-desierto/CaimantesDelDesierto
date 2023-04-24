import Logo from '@/assets/AbstractWaves.png'

import ActionButton from '@/components/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/typing/const'
import { FC, PropsWithChildren, useState } from 'react'
import Link from './Link'

interface NavBarProps {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const NavBar: FC<PropsWithChildren<NavBarProps>> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage
}) => {
  const flexBetween = `flex items-center justify-between`
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const navbarBackground = isTopOfPage ? '' : 'bg-blue-400 drop-shadow'
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Nosotros"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Eventos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contactanos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Donaciones
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 text-white"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <div className="i-heroicons:bars-3 h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-30 h-full w-190px bg-blue-400 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <div className="i-heroicons:x-mark w-6 h-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col ml-33% gap-10 text-2xl">
            <Link
              page="Inicio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Nosotros"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Eventos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contactanos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
