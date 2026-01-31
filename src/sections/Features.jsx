import { useTranslation } from '../i18n/useTranslation';
import './Features.css';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        // المحرك التقني
        {
            id: 'mediakit',
            category: 'engine',
            icon: '/icons/icon_mediakit_engine.png',
            color: 'cyan'
        },
        {
            id: 'performance',
            category: 'engine',
            icon: '/icons/icon_hardware_intelligence.png',
            color: 'purple'
        },

        // التجربة البصرية
        {
            id: 'multiview',
            category: 'visual',
            icon: '/icons/icon_multiview.png',
            color: 'magenta'
        },
        {
            id: 'pip',
            category: 'visual',
            icon: '/icons/icon_picture_in_picture.png',
            color: 'gold'
        },
        {
            id: 'glassmorphism',
            category: 'visual',
            icon: '/icons/icon_glassmorphism_ui.png',
            color: 'cyan'
        },
        {
            id: 'audio',
            category: 'visual',
            icon: '/icons/icon_audio_interactions.png',
            color: 'cyan-gold'
        },

        // الذكاء والتخصيص
        {
            id: 'ai',
            category: 'smart',
            icon: '/icons/icon_ai_recommendations.png',
            color: 'purple'
        },
        {
            id: 'voice',
            category: 'smart',
            icon: '/icons/icon_voice_search.png',
            color: 'gold'
        },
        {
            id: 'trailers',
            category: 'smart',
            icon: '/icons/icon_smart_trailers.png',
            color: 'magenta'
        },
        {
            id: 'stats',
            category: 'smart',
            icon: '/icons/icon_server_stats.png',
            color: 'cyan'
        },
        {
            id: 'commandCenter',
            category: 'smart',
            icon: '/icons/icon_command_center.png',
            color: 'gold'
        },
        {
            id: 'parentalControl',
            category: 'smart',
            icon: '/icons/icon_parental_control.png',
            color: 'purple-gold'
        },
        {
            id: 'recording',
            category: 'smart',
            icon: '/icons/icon_recording_download.png',
            color: 'magenta'
        }
    ];

    const categories = [
        { id: 'engine', titleKey: 'features.categories.engine' },
        { id: 'visual', titleKey: 'features.categories.visual' },
        { id: 'smart', titleKey: 'features.categories.smart' }
    ];

    return (
        <section className="features" id="features">
            <div className="features-container">
                {/* العنوان الرئيسي */}
                <div className="features-header">
                    <h2 className="features-title text-gradient-animate">
                        {t('features.sectionTitle')}
                    </h2>
                    <p className="features-subtitle">
                        {t('features.sectionSubtitle')}
                    </p>
                </div>

                {/* المميزات مقسمة حسب الفئات */}
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
                                            <h4 className="feature-title">
                                                {t(`features.items.${feature.id}.title`)}
                                            </h4>
                                            <p className="feature-description">
                                                {t(`features.items.${feature.id}.description`)}
                                            </p>
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
