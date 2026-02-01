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

                {/* Desktop Table View */}
                <div className="comparison-table-wrapper desktop-only">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>{t('whyUs.table.feature')}</th>
                                <th className="qanati-column">{t('whyUs.table.qanati')}</th>
                                <th>{t('whyUs.table.others')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, index) => (
                                <tr key={index} className="comparison-row">
                                    <td className="feature-name">
                                        <div className="feature-dot"></div>
                                        {item.feature}
                                    </td>
                                    <td className="qanati-value highlight">
                                        <div className="check-icon">{'\u2713'}</div>
                                        <span className="value-text">{item.qanati}</span>
                                        <div className="feature-highlight">{item.highlights}</div>
                                    </td>
                                    <td className="others-value">
                                        <div className="cross-icon">{'\u2715'}</div>
                                        {item.others}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards View */}
                <div className="why-us-mobile-cards mobile-only">
                    {comparisons.map((item, index) => (
                        <div key={index} className="comparison-mobile-card">
                            <div className="mobile-card-header">{item.feature}</div>
                            <div className="mobile-card-content">
                                <div className="mobile-qanati-side">
                                    <span className="side-label">{t('whyUs.labels.qanati')}</span>
                                    <p className="side-value">{item.qanati}</p>
                                    <span className="side-highlight">{item.highlights}</span>
                                </div>
                                <div className="vs-divider">{t('whyUs.table.vs')}</div>
                                <div className="mobile-others-side">
                                    <span className="side-label">{t('whyUs.labels.others')}</span>
                                    <p className="side-value">{item.others}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="why-us-cards">
                    <div className="why-card card-cyan">
                        <div className="why-card-icon">{'\u26A1'}</div>
                        <h4>{t('whyUs.cards.instantOn.title')}</h4>
                        <p>{t('whyUs.cards.instantOn.description')}</p>
                    </div>
                    <div className="why-card card-magenta">
                        <div className="why-card-icon">{'\u{1F6E1}\uFE0F'}</div>
                        <h4>{t('whyUs.cards.security.title')}</h4>
                        <p>{t('whyUs.cards.security.description')}</p>
                    </div>
                    <div className="why-card card-gold">
                        <div className="why-card-icon">{'\u{1F4FA}'}</div>
                        <h4>{t('whyUs.cards.quality.title')}</h4>
                        <p>{t('whyUs.cards.quality.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
