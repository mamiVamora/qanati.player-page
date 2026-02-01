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

                    {/* العمود الرابع: التواصل والشبكات */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.contact.title')}</h3>
                        <p className="contact-label">{t('footer.contact.support')}</p>

                        <div className="social-links-grid">
                            <a href="https://whatsapp.com/channel/0029VbBx35uD38CK2ud8nh43" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp-btn" title={t('footer.contact.whatsapp')}>
                                <span>💬</span>
                            </a>
                            <a href="https://t.me/qanati_tec" target="_blank" rel="noopener noreferrer" className="social-btn telegram-btn" title={t('footer.contact.telegram')}>
                                <span>✈️</span>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61587094332049" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn" title={t('footer.contact.facebook')}>
                                <span>👥</span>
                            </a>
                            <a href="https://x.com/QanatiTec" target="_blank" rel="noopener noreferrer" className="social-btn twitter-btn" title={t('footer.contact.twitter')}>
                                <span>𝕏</span>
                            </a>
                            <a href="https://www.youtube.com/@qanati_tec" target="_blank" rel="noopener noreferrer" className="social-btn youtube-btn" title={t('footer.contact.youtube')}>
                                <span>🎬</span>
                            </a>
                        </div>

                        <a href="mailto:qanatitec@gmail.com" className="footer-email">
                            qanatitec@gmail.com
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
