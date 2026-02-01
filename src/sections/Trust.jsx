import { useTranslation } from '../i18n/useTranslation';
import './Trust.css';

const Trust = () => {
    const { t } = useTranslation();

    const stats = [
        {
            label: t('trust.stats.servers.label'),
            value: '10,000+',
            icon: '\u{1F4E1}',
            description: t('trust.stats.servers.description')
        },
        {
            label: t('trust.stats.ratings.label'),
            value: '4.9/5',
            icon: '\u{2B50}',
            description: t('trust.stats.ratings.description')
        },
        {
            label: t('trust.stats.startup.label'),
            value: '0.4s',
            icon: '\u{26A1}',
            description: t('trust.stats.startup.description')
        },
        {
            label: t('trust.stats.updates.label'),
            value: t('trust.stats.updates.value'),
            icon: '\u1F504',
            description: t('trust.stats.updates.description')
        }
    ];

    return (
        <section className="trust">
            <div className="trust-container">
                <div className="trust-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="trust-item">
                            <div className="trust-icon-wrapper">
                                <span className="trust-icon">{stat.icon}</span>
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-desc">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
