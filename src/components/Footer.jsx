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
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                            <a href="https://t.me/qanati_tec" target="_blank" rel="noopener noreferrer" className="social-btn telegram-btn" title={t('footer.contact.telegram')}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.347 0 0 5.347 0 11.944c0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944C23.888 5.347 18.541 0 11.944 0zm5.433 8.356l-1.894 8.924c-.143.64-.522.797-1.058.497l-2.885-2.126-1.391 1.338c-.154.154-.284.284-.582.284l.206-2.93 5.333-4.814c.232-.206-.05-.321-.361-.114l-6.589 4.148-2.839-.887c-.617-.193-.63-.617.129-.91l11.094-4.275c.513-.186.963.121.758 1.066z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61587094332049" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn" title={t('footer.contact.facebook')}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://x.com/QanatiTec" target="_blank" rel="noopener noreferrer" className="social-btn twitter-btn" title={t('footer.contact.twitter')}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@qanati_tec" target="_blank" rel="noopener noreferrer" className="social-btn youtube-btn" title={t('footer.contact.youtube')}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>

                        <a href="mailto:qanatitec@gmail.com" className="footer-email">
                            qanatitec@gmail.com
                        </a>

                        {/* أختام الموثوقية */}
                        <div className="footer-seals">
                            <div className="seal-item">
                                <span className="seal-icon">🛡️</span>
                                <span className="seal-text">تشفير عسكري</span>
                            </div>
                            <div className="seal-item">
                                <span className="seal-icon">💎</span>
                                <span className="seal-text">نسخة أصلية</span>
                            </div>
                        </div>
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
