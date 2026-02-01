import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import './Navbar.css';

const Navbar = () => {
    const { t, language, changeLanguage } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: t('nav.links.home'), path: '#hero' },
        { name: t('nav.links.features'), path: '#features' },
        { name: t('nav.links.whyUs'), path: '#why-us' },
        { name: t('nav.links.downloads'), path: '#downloads' }
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="/" className="navbar-logo">
                    <img src="/logo.jpg" alt="Qanati Player Logo" />
                    <span className="navbar-tagline">{t('nav.tagline')}</span>
                </a>

                <ul className="navbar-links">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="language-toggle"
                    onClick={() => changeLanguage(language === 'ar' ? 'en' : 'ar')}
                    aria-label={t('nav.languageToggleLabel')}
                >
                    <span className="lang-pill">{language === 'ar' ? 'EN' : 'AR'}</span>
                    <span className="lang-text">{t('nav.languageToggle')}</span>
                </button>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={t('nav.menuLabel')}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

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
                    <button
                        type="button"
                        className="language-toggle mobile"
                        onClick={() => {
                            changeLanguage(language === 'ar' ? 'en' : 'ar');
                            setIsMenuOpen(false);
                        }}
                        aria-label={t('nav.languageToggleLabel')}
                    >
                        <span className="lang-pill">{language === 'ar' ? 'EN' : 'AR'}</span>
                        <span className="lang-text">{t('nav.languageToggle')}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;