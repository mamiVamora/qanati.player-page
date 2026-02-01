import { useTranslation } from '../i18n/useTranslation';
import './MediaKit.css';

const MediaKit = () => {
    const { t } = useTranslation();

    const engineFeatures = [
        { id: 'unified', icon: '🚀', type: 'cyan' },
        { id: 'cooling', icon: '❄️', type: 'purple' },
        { id: 'formats', icon: 'gold' }
    ];

    return (
        <section className="mediakit" id="mediakit">
            {/* الخلفية التكنولوجية */}
            <div className="mediakit-background">
                <div className="energy-lines"></div>
                <div className="core-glow"></div>
                <div className="tech-circles"></div>
            </div>

            <div className="mediakit-container">
                <div className="mediakit-header">
                    <span className="engine-tag">PRIME ENGINE</span>
                    <h2 className="mediakit-title text-gradient-animate">{t('mediakit.title')}</h2>
                    <p className="mediakit-subtitle">{t('mediakit.subtitle')}</p>
                </div>

                <div className="mediakit-grid">
                    {engineFeatures.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`mediakit-card mediakit-card-${feature.type || 'gold'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="card-icon-wrapper">
                                {feature.id === 'formats' ? (
                                    <div className="custom-format-icon">
                                        <span>4K</span>
                                        <div className="format-ring"></div>
                                    </div>
                                ) : (
                                    <span className="card-icon">{feature.icon}</span>
                                )}
                                <div className="card-icon-glow"></div>
                            </div>
                            <h3 className="card-title">{t(`mediakit.features.${feature.id}.title`)}</h3>
                            <div className="card-divider"></div>
                            <p
                                className="card-description"
                                dangerouslySetInnerHTML={{ __html: t(`mediakit.features.${feature.id}.description`) }}
                            />
                        </div>
                    ))}
                </div>

                {/* تذييل القسم (تأكيد السيادة) */}
                <div className="mediakit-footer">
                    <div className="sovereignty-badge">
                        <span className="badge-pulse"></span>
                        Independent Core Technology
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaKit;
