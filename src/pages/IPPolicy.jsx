import { useTranslation } from '../i18n/useTranslation';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const IPPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="back-link">{t('footer.backToHome')}</Link>

                <h1 className="legal-title">{t('legalPages.ip.title')}</h1>
                <p className="legal-update">{t('footer.lastUpdated')}</p>

                <section className="legal-section">
                    <h2>{t('legalPages.ip.s1.h')}</h2>
                    <p>{t('legalPages.ip.s1.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.ip.s2.h')}</h2>
                    <p className="warning-box">
                        {t('legalPages.ip.s2.p')}
                    </p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.ip.s5.h')}</h2>
                    <p className="warning-box">
                        {t('legalPages.ip.s5.p')}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default IPPolicy;
