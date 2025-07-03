import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Bashar
          </div>
          <div>
            <ul className="flex space-x-4 mt-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
