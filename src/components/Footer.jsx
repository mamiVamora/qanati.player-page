import { useTranslation } from '../i18n/useTranslation';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* الشبكة الرئيسية */}
                <div className="footer-grid">
                    {/* العمود الأول: عن الشركة */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.about.title')}</h3>
                        <p className="footer-brand">{t('footer.about.brand')}</p>
                        <p className="footer-tagline">{t('footer.about.tagline')}</p>
                    </div>

                    {/* العمود الثاني: روابط سريعة */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.links.title')}</h3>
                        <ul className="footer-links">
                            <li><a href="#hero" className="link-cyan">{t('footer.links.home')}</a></li>
                            <li><a href="#features" className="link-magenta">{t('footer.links.features')}</a></li>
                            <li><a href="#downloads" className="link-purple">{t('footer.links.downloads')}</a></li>
                        </ul>
                    </div>

                    {/* العمود الثالث: الصفحات القانونية */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.legal.title')}</h3>
                        <ul className="footer-links">
                            <li><Link to="/privacy" className="link-gold">{t('footer.legal.privacy')}</Link></li>
                            <li><Link to="/terms" className="link-cyan">{t('footer.legal.terms')}</Link></li>
                            <li><Link to="/ip-policy" className="link-magenta">{t('footer.legal.ip')}</Link></li>
                        </ul>
                    </div>

                    {/* العمود الرابع: التواصل */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.contact.title')}</h3>
                        <p className="contact-label">{t('footer.contact.support')}</p>
                        <a href="mailto:qanatitec@gmail.com" className="footer-email">
                            qanatitec@gmail.com
                        </a>
                        <a
                            href="https://wa.me/905340218618"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-whatsapp"
                        >
                            <span className="whatsapp-icon">💬</span>
                            <span className="whatsapp-text">{t('footer.contact.whatsapp')}</span>
                        </a>
                    </div>
                </div>

                {/* التحذير القانوني */}
                <div className="footer-warning">
                    <p className="warning-icon">⚠️</p>
                    <p className="warning-text">{t('footer.warning')}</p>
                </div>

                {/* حقوق النشر - فخمة */}
                <div className="footer-bottom">
                    <div className="copyright-container">
                        <p className="crafted-text">
                            {t('footer.craftedWith')} <span className="company-highlight">{t('footer.companyName')}</span>
                        </p>
                        <p className="copyright-text">{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
