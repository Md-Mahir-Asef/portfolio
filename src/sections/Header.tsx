import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "#resume", isOutlined: true },
    ];

    return (
        <>
            <header className="bg-gray-900 text-white sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Name */}
                        <div className="shrink-0 flex flex-row gap-2">
                            <img
                                src="/images/logo-no-bg.png"
                                alt="Logo"
                                width={30}
                            />
                            <h1 className="text-xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Md. Mahir Asef
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            item.isOutlined
                                                ? "border border-gray-300 hover:border-white"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                            >
                                {isMenuOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                                            item.isOutlined
                                                ? "border border-gray-300 hover:border-white"
                                                : ""
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>

                {/* White Divider */}
                <div className="h-[0.5px] bg-gray-700"></div>
            </header>
        </>
    );
};

export default Header;
