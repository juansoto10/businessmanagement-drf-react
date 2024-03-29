import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
  { name: 'Items', href: '/items', current: false },
  { name: 'Products', href: '/products', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {

  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);

  const [term, setTerm] = useState('')

  const handleChange = e => {
    setTerm(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setTimeout(() => window.location.href=('/search/'+ term), 0.2);
    setTerm('')
  }


  return (
    <>
    {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
          'bg-white border-gray-300 border-b-[1px] lg:static lg:overflow-y-visible'
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block h-12 w-auto rounded-full"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Ff9%2Fb9%2Fed%2Ff9b9eda8478771e7ca8d16e6a58fca3d--electric-blue-vivid-colors.jpg&f=1&nofb=1&ipt=a7ca4f34bf998673df06a9d76df640ab5c3c4d0ad93b527892d2c565d588e6c9&ipo=images"
                      alt="Logo Business Management App"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <form onSubmit={e => onSubmit(e)} className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <button
                        type="submit"
                        className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </button>
                      <input
                        id="search"
                        name="search"
                        required
                        onChange={(e) => {handleChange(e)}}
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-azulito sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                <NavLink to="/items" className="text-lg dark:hover:text-white hover:text-black text-azulito dark:text-dark-txt text-md font-bold">
                  Items
                </NavLink>

                <NavLink to="/products" className="mx-4 text-lg dark:hover:text-white hover:text-black text-azulito dark:text-dark-txt text-md font-bold">
                  Products
                </NavLink>
              </div>

              

            </div>
          </div>

          {/* Mobile */}
          <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-200',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
    </>
  )
}

export default Navbar