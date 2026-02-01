import { useTranslation } from '../i18n/useTranslation';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const items = t('faq.items');
    const faqItems = Array.isArray(items) ? items : [];

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <h2 className="faq-title text-gradient-animate">{t('faq.title')}</h2>
                    <p className="faq-subtitle">{t('faq.subtitle')}</p>
                </div>

                <div className="faq-grid">
                    {faqItems.map((item, index) => (
                        <div key={index} className={`faq-card faq-card-${item.type || 'engine'}`}>
                            <h3 className="faq-question">{item.q}</h3>
                            <p className="faq-answer">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
