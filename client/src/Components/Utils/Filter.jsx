import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const filtersList = [
  { name: "Styles",
    current :false,
    options: [
      {value: "pop", checked: false},
      {value: "rock", checked: false},
      {value: "electro", checked: false},
  ]
  },
  { name: "Artist",
    current :false,
    options: [
      {value: "Lemon Music Studio", checked: false},
      {value: "Music Unlimited", checked: false},
      {value: "Alex Grohl", checked: false},
      {value: "Soul Prod Music", checked: false},
      {value: "Lucadi Alessandro", checked: false},
      {value: "Qube Sounds", checked: false},
    ]
  },
]

export default function FilterBar({showFilter, setShowFilter, filter, setFilter}) {
  function addNewFilterValue(category, value) {
    // Set new filter with the value of existing filter
    let newFilter = [...filter]
    // Check if the category already exist
    let index = newFilter.findIndex((element) => element.name === category.toLowerCase())
    // If the category doesn't exist, create it
    if (index === -1) {
      newFilter.push({name: category.toLowerCase(), value: [value]})
    } else {
      // If the category exist, check if the value exist
      let indexValue = newFilter[index].value.findIndex((element) => element === value)
      // If the value doesn't exist, add it
      if (indexValue === -1) {
        newFilter[index].value.push(value)
      } else {
        // If the value exist, remove it
        newFilter[index].value.splice(indexValue, 1)
        // If the category is empty, remove it
        if (newFilter[index].value.length === 0) {
          newFilter.splice(index, 1)
        }
      }
    }
    // Set the new filter
    setFilter(newFilter)
  }

  useEffect(() => {
    filtersList.forEach((element) => {
      // Check if the category exist in the filter
      let index = filter.findIndex((filterElement) => filterElement.name === element.name.toLowerCase())
      // If the category exist, set the current value to true
      if (index !== -1) {
        element.current = true
        // Check if the options exist in the filter
        element.options.forEach((option) => {
          let indexValue = filter[index].value.findIndex((filterValue) => filterValue === option.value)
          // If the option exist, set the checked value to true
          option.checked = indexValue !== -1;
        })
      } else {
        // If the category doesn't exist, set the current value to false
        element.current = false
        // Set all the checked value to false
        element.options.forEach((option) => {
          option.checked = false;
        })
      }
    })
  }, [])


  return (
    <Transition.Root show={showFilter} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowFilter}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-700 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-dark py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-100">
                          Filtrer les albums
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-dark text-gray-100 hover:text-gray-500 outline-none"
                            onClick={() => setShowFilter(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {filtersList.map((filterElement) => (
                        <Disclosure as="div" key={filterElement.name} className="border-t border-gray-700">
                          {({ open }) => (
                            <>
                              <h3>
                                <Disclosure.Button
                                  className={`flex w-full items-center justify-between px-2 py-3 text-gray-100 hover:bg-light ${open && "bg-light"}`}
                                  onClick={() => {

                                  }}
                                >
                                  <span className="font-medium text-gray-100">{filterElement.name}</span>
                                  <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pl-4 pt-2">
                                  {filterElement.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filterElement-${filterElement.id}-${optionIdx}`}
                                        name={`${filterElement.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-100 accent-primary"
                                        onChange={() => addNewFilterValue(filterElement.name, option.value)}
                                      />
                                      <label
                                        htmlFor={`filterElement-${filterElement.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-100"
                                      >
                                        {option.value}
                                      </label>
                                    </div>
                                  ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}