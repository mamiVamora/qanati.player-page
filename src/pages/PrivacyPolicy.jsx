import { useTranslation } from '../i18n/useTranslation';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="back-link">{t('footer.backToHome')}</Link>

                <h1 className="legal-title">{t('legalPages.privacy.title')}</h1>
                <p className="legal-update">{t('footer.lastUpdated')}</p>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s1.h')}</h2>
                    <p>{t('legalPages.privacy.s1.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s2.h')}</h2>
                    <h3>{t('legalPages.privacy.s2.h1')}</h3>
                    <p>{t('legalPages.privacy.s2.p1')}</p>
                    <ul>
                        {t('legalPages.privacy.s2.l1').map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <h3>{t('legalPages.privacy.s2.h2')}</h3>
                    <ul>
                        {t('legalPages.privacy.s2.l2').map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s3.h')}</h2>
                    <p>{t('legalPages.privacy.s3.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s4.h')}</h2>
                    <p>{t('legalPages.privacy.s4.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s5.h')}</h2>
                    <p>{t('legalPages.privacy.s5.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.privacy.s10.h')}</h2>
                    <p>{t('legalPages.privacy.s10.p')}</p>
                    <p className="contact-email">support@qanati.site</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
