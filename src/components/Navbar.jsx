import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'المميزات', path: '/features' },
        { name: 'التحميلات', path: '/downloads' },
        { name: 'التحديثات', path: '/updates' },
        { name: 'عن التطبيق', path: '/about' },
        { name: 'اتصل بنا', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* الشعار */}
                <a href="/" className="navbar-logo">
                    <img src="/logo.jpg" alt="Qanati Player Logo" />
                </a>

                {/* روابط التنقل - Desktop */}
                <ul className="navbar-links">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* زر القائمة - Mobile */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="القائمة"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* القائمة المنسدلة - Mobile */}
            {isMenuOpen && (
                <div className="navbar-mobile-menu">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className="nav-link-mobile"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
