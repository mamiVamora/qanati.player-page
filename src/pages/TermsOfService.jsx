import { useTranslation } from '../i18n/useTranslation';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const TermsOfService = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="back-link">{t('footer.backToHome')}</Link>

                <h1 className="legal-title">{t('legalPages.terms.title')}</h1>
                <p className="legal-update">{t('footer.lastUpdated')}</p>

                <section className="legal-section">
                    <h2>{t('legalPages.terms.s1.h')}</h2>
                    <p>{t('legalPages.terms.s1.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.terms.s2.h')}</h2>
                    <p>{t('legalPages.terms.s2.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.terms.s3.h')}</h2>
                    <p>{t('legalPages.terms.s3.p')}</p>
                </section>

                <section className="legal-section">
                    <h2>{t('legalPages.terms.s8.h')}</h2>
                    <p>{t('legalPages.terms.s8.p')}</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
