import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (href: string) => {
        if (href.startsWith("#")) {
            // Navigate to home page first, then scroll to section
            window.location.href = "/" + href;
        } else {
            // Handle other routes
            window.location.href = href;
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "About", href: "#about", isRouter: false },
        { name: "Projects", href: "#projects", isRouter: false },
        { name: "Skills", href: "#skills", isRouter: false },
        { name: "Education", href: "#education", isRouter: false },
        { name: "FAQ", href: "#faq", isRouter: false },
        { name: "Contact", href: "#contact", isRouter: false },
        { name: "Blog", href: "/blog/page/1", isRouter: true },
        { name: "Resume", href: "/resume", isRouter: true, isOutlined: true },
    ];

    return (
        <>
            <header className="bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Name */}
                        <Link to={"/"} className="shrink-0 flex flex-row gap-2">
                            <img
                                src="/images/logo-no-bg.png"
                                alt="Logo"
                                width={24}
                                className="xs:w-6 xs:h-6 w-6 h-6"
                            />
                            <h1 className="text-base xs:text-lg sm:text-xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Md. Mahir Asef
                            </h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) =>
                                    item.isRouter ? (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                                item.isOutlined
                                                    ? "border border-gray-300 hover:border-white w-fit"
                                                    : ""
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <button
                                            key={item.name}
                                            onClick={() =>
                                                handleNavigation(item.href)
                                            }
                                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                                item.isOutlined
                                                    ? "border border-gray-300 hover:border-white"
                                                    : ""
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 xs:p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                            >
                                {isMenuOpen ? (
                                    <X className="block h-5 w-5 xs:h-6 xs:w-6" />
                                ) : (
                                    <Menu className="block h-5 w-5 xs:h-6 xs:w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 xs:px-3 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) =>
                                    item.isRouter ? (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`text-gray-300 hover:text-white block px-3 py-2 xs:py-3 rounded-md text-sm xs:text-base font-medium ${
                                                item.isOutlined
                                                    ? "border border-gray-300 hover:border-white"
                                                    : ""
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <button
                                            key={item.name}
                                            onClick={() =>
                                                handleNavigation(item.href)
                                            }
                                            className={`text-gray-300 hover:text-white block px-3 py-2 xs:py-3 rounded-md text-sm xs:text-base font-medium w-full text-left ${
                                                item.isOutlined
                                                    ? "border border-gray-300 hover:border-white"
                                                    : ""
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                    ),
                                )}
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
