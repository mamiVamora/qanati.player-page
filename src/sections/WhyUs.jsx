import { useTranslation } from '../i18n/useTranslation';
import './WhyUs.css';

const WhyUs = () => {
    const { t } = useTranslation();

    const comparisons = [
        {
            feature: t('whyUs.comparisons.engine.feature'),
            qanati: t('whyUs.comparisons.engine.qanati'),
            others: t('whyUs.comparisons.engine.others'),
            highlights: t('whyUs.comparisons.engine.highlights'),
            status: true
        },
        {
            feature: t('whyUs.comparisons.multiview.feature'),
            qanati: t('whyUs.comparisons.multiview.qanati'),
            others: t('whyUs.comparisons.multiview.others'),
            highlights: t('whyUs.comparisons.multiview.highlights'),
            status: true
        },
        {
            feature: t('whyUs.comparisons.performance.feature'),
            qanati: t('whyUs.comparisons.performance.qanati'),
            others: t('whyUs.comparisons.performance.others'),
            highlights: t('whyUs.comparisons.performance.highlights'),
            status: true
        },
        {
            feature: t('whyUs.comparisons.efficiency.feature'),
            qanati: t('whyUs.comparisons.efficiency.qanati'),
            others: t('whyUs.comparisons.efficiency.others'),
            highlights: t('whyUs.comparisons.efficiency.highlights'),
            status: true
        }
    ];

    return (
        <section className="why-us" id="why-us">
            <div className="why-us-container">
                <div className="why-us-header">
                    <span className="section-tag">{t('whyUs.tag')}</span>
                    <h2 className="why-us-title text-gradient-animate">{t('whyUs.title')}</h2>
                    <p className="why-us-subtitle">{t('whyUs.subtitle')}</p>
                </div>

                {/* Aggressive Performance Dashboard */}
                <div className="performance-dashboard">
                    {comparisons.map((item, index) => (
                        <div key={index} className="performance-item">
                            <div className="performance-info">
                                <h3 className="performance-label">{item.feature}</h3>
                                <p className="performance-highlight" dangerouslySetInnerHTML={{ __html: item.highlights }} />
                            </div>

                            <div className="meter-container">
                                {/* Qanati Bar */}
                                <div className="meter-row qanati-row">
                                    <div className="meter-label">{t('whyUs.labels.qanati')}</div>
                                    <div className="meter-bar-wrapper">
                                        <div className="meter-bar qanati-bar" style={{ width: '95%' }}>
                                            <span className="meter-value" dangerouslySetInnerHTML={{ __html: item.qanati }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Others Bar */}
                                <div className="meter-row others-row">
                                    <div className="meter-label">{t('whyUs.labels.others')}</div>
                                    <div className="meter-bar-wrapper">
                                        <div className="meter-bar others-bar" style={{ width: '35%' }}>
                                            <span className="meter-value">{item.others}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="why-us-cards">
                    <div className="why-card card-cyan">
                        <div className="why-card-icon">{'\u26A1'}</div>
                        <h4 dangerouslySetInnerHTML={{ __html: t('whyUs.cards.instantOn.title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('whyUs.cards.instantOn.description') }} />
                    </div>
                    <div className="why-card card-magenta">
                        <div className="why-card-icon">{'\u{1F6E1}\uFE0F'}</div>
                        <h4 dangerouslySetInnerHTML={{ __html: t('whyUs.cards.security.title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('whyUs.cards.security.description') }} />
                    </div>
                    <div className="why-card card-gold">
                        <div className="why-card-icon">{'\u{1F4FA}'}</div>
                        <h4 dangerouslySetInnerHTML={{ __html: t('whyUs.cards.quality.title') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('whyUs.cards.quality.description') }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
