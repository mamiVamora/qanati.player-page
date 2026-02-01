import { useTranslation } from '../i18n/useTranslation';
import './Features.css';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        { id: 'mediakit', category: 'engine', icon: '/images/3d/smart_tv_3d.png', color: 'cyan' },
        { id: 'performance', category: 'engine', icon: '/icons/icon_hardware_intelligence.webp', color: 'purple' },
        { id: 'ai', category: 'engine', icon: '/icons/icon_ai_recommendations.webp', color: 'magenta' },
        { id: 'predictive', category: 'engine', icon: '/icons/icon_hardware_intelligence.webp', color: 'gold' }, // Using same icon for now
        { id: 'stats', category: 'engine', icon: '/icons/icon_server_stats.webp', color: 'cyan' },

        { id: 'glassmorphism', category: 'visual', icon: '/images/3d/iphone_3d.png', color: 'cyan' },
        { id: 'multiview', category: 'visual', icon: '/icons/icon_multiview.webp', color: 'magenta' },
        { id: 'pip', category: 'visual', icon: '/icons/icon_picture_in_picture.webp', color: 'gold' },
        { id: 'audio', category: 'visual', icon: '/icons/icon_audio_interactions.webp', color: 'purple' },

        { id: 'commandCenter', category: 'control', icon: '/icons/icon_command_center.webp', color: 'gold' },
        { id: 'parentalControl', category: 'control', icon: '/images/3d/shield_3d.png', color: 'purple' },
        { id: 'recording', category: 'control', icon: '/icons/icon_recording_download.webp', color: 'magenta' },
        { id: 'voice', category: 'control', icon: '/icons/icon_voice_search.webp', color: 'cyan' },
        { id: 'trailers', category: 'control', icon: '/icons/icon_smart_trailers.webp', color: 'magenta' }
    ];

    const categories = [
        { id: 'engine', titleKey: 'features.categories.engine' },
        { id: 'visual', titleKey: 'features.categories.visual' },
        { id: 'control', titleKey: 'features.categories.control' }
    ];

    return (
        <section className="features" id="features">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title text-gradient-animate">
                        {t('features.sectionTitle')}
                    </h2>
                    <p
                        className="features-subtitle"
                        dangerouslySetInnerHTML={{ __html: t('features.sectionSubtitle') }}
                    />
                </div>

                {categories.map((category) => (
                    <div key={category.id} className="features-category">
                        <h3 className="category-title">
                            {t(category.titleKey)}
                        </h3>

                        <div className="features-grid">
                            {features
                                .filter((f) => f.category === category.id)
                                .map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className={`feature-card feature-color-${feature.color}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="feature-icon">
                                            <img src={feature.icon} alt={t(`features.items.${feature.id}.title`)} />
                                        </div>

                                        <div className="feature-content">
                                            <h4
                                                className="feature-title"
                                                dangerouslySetInnerHTML={{ __html: t(`features.items.${feature.id}.title`) }}
                                            />
                                            <p
                                                className="feature-description"
                                                dangerouslySetInnerHTML={{ __html: t(`features.items.${feature.id}.description`) }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;