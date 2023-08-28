import Logo from "../../Assets/jambon-beurre-logo.svg";
import { AuthContext } from "../../Contexts/AuthContext";
import { TrackContext } from "../../Contexts/TrackContext.jsx";
import { usePlayer } from "../../Contexts/usePlayer";
import { Link, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Accueil", to: "/user", current: false },
	{ name: "Mes playlists", to: "/user/playlists", current: false },
];

const userNavigation = [
	{ name: "Mon profil", to: "/user/profil", current: false },
	{ name: "Me déconnecter", to: "/user/logout", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function DashboardHeader({ children }) {
	const { user } = useContext(AuthContext);
	const { fetchAllAlbums, fetchAllTracks } = useContext(TrackContext);
	const { currentMusic } = usePlayer();
	const actualPath = useLocation().pathname;

	navigation.map((item) => {
		item.current = actualPath === item.to;
	});

	userNavigation.map((item) => {
		item.current = actualPath === item.to;
	});

	useEffect(() => {
		fetchAllAlbums();
		fetchAllTracks();
	}, []);

	return (
		<>
			<div className="min-h-full">
				<Disclosure
					as="nav"
					className="bg-light z-50 fixed top-0 w-full inset-x-0"
				>
					{({ open }) => (
						<>
							<div className="px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-8 w-auto lg:block"
												src={Logo}
												alt="Jambon Beurre Logo"
											/>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<Link
														key={item.name}
														to={item.to}
														className={classNames(
															item.current
																? "bg-dark text-gray-100"
																: "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
															"rounded-md px-3 py-2 text-sm font-medium"
														)}
														aria-current={item.current ? "page" : undefined}
													>
														{item.name}
													</Link>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											{/* Profile dropdown */}
											<Menu as="div" className="relative ml-3">
												<div>
													<Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none">
														<span className="sr-only">Open user menu</span>
														<UserCircleIcon
															className="h-10 w-10 rounded-full text-gray-100"
															aria-hidden="true"
														/>
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 py-1 shadow-lg focus:outline-none">
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<Link
																		to={item.to}
																		className={classNames(
																			active ? "bg-gray-100" : "",
																			"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
																		)}
																	>
																		{item.name}
																	</Link>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
									{navigation.map((item) => (
										<Link
											to={item.to}
											key={item.to}
											className={classNames(
												item.current
													? "bg-dark text-gray-100"
													: "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
												"block rounded-md text-base font-medium"
											)}
										>
											<Disclosure.Button
												className={classNames(
													item.current
														? "bg-dark text-gray-100"
														: "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
													"block rounded-md px-3 py-2 text-base font-medium"
												)}
											>
												{item.name}
											</Disclosure.Button>
										</Link>
									))}
								</div>
								<div className="border-t border-gray-700 pb-3 pt-4">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<UserCircleIcon
												className="h-10 w-10 rounded-full text-gray-100"
												aria-hidden="true"
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium leading-none text-gray-100">
												{user?.pseudo}
											</div>
											<div className="text-sm font-medium leading-none text-gray-400">
												{user?.email}
											</div>
										</div>
									</div>
									<div className="mt-3 space-y-1 px-2">
										{userNavigation.map((item) => (
											<Link
												to={item.to}
												key={item.to}
												className={classNames(
													item.current
														? "bg-dark text-gray-100"
														: "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
													"block rounded-md text-base font-medium"
												)}
											>
												<Disclosure.Button
													className={classNames(
														item.current
															? "bg-dark text-gray-100"
															: "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
														"block rounded-md px-3 py-2 text-base font-medium"
													)}
												>
													{item.name}
												</Disclosure.Button>
											</Link>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<main>
					<div className="pb-12 pt-16">{children}</div>
				</main>
				{currentMusic.url && <div className="h-24" />}
			</div>
		</>
	);
}
