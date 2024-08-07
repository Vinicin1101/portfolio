'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="flex bg-white py-3">
            <nav className="relative flex flex-wrap items-center content-between py-3 px-4  text-white justify-center mx-auto">
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            </div>
            <div
                className="hidden lg:flex lg:flex-row"
                id="navbarNav"
            >
                <ul className="flex flex-wrap list-reset pl-0 mb-0">
                    <li className=" font-normal text-blue-700 bg-transparent mr-3">
                        <a id="projects" href="projects" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Projetos</a>
                    </li>
                    
                    <li className=" font-normal text-blue-700 bg-transparent mr-3">
                        <a id="index" href="/" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Home</a>
                    </li>
            
                    <li className=" font-normal text-blue-700 bg-transparent mr-3">
                        <a id="experiences" href="experiences" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Experiências</a>
                    </li>
                </ul>
            </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <ul className="flex flex-col justify-center mb-2 mt-2 gap-3 list-reset text-center">
                            <li className=" font-normal text-blue-700 bg-transparent mr-3">
                                <a id="projects" href="projects" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Projetos</a>
                            </li>
                            
                            <li className=" font-normal text-blue-700 bg-transparent mr-3">
                                <a id="index" href="/" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Home</a>
                            </li>
                    
                            <li className=" font-normal text-blue-700 bg-transparent mr-3">
                                <a id="experiences" href="experiences" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline buttom-primary">Experiências</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
      </header>
    )
}

export default Header;