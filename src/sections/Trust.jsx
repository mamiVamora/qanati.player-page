import { useTranslation } from '../i18n/useTranslation';
import './Trust.css';

const Trust = () => {
    const { t } = useTranslation();

    const stats = [
        {
            label: 'سيرفر متوافق',
            value: '10,000+',
            icon: '🌐',
            description: 'دعم كامل لخوادم Xtream و M3U'
        },
        {
            label: 'تقييم المستخدمين',
            value: '4.9/5',
            icon: '⭐',
            description: 'بناءً على 1,250+ مراجعة حقيقية'
        },
        {
            label: 'زمن تشغيل',
            value: '0.4s',
            icon: '⚡',
            description: 'بفضل محرك MediaKit الثوري'
        },
        {
            label: 'تحديثات دورية',
            value: 'Weekly',
            icon: '🔄',
            description: 'تطوير مستمر للأداء والأمان'
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
