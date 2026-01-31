import { useTranslation } from '../i18n/useTranslation';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero" id="hero">
            <div className="hero-background"></div>

            {/* إزالة container - استخدام hero-container مباشرة */}
            <div className="hero-container">
                {/* الشعار الكبير */}
                <div className="hero-logo">
                    <img src="/logo.jpg" alt="Qanati Player" />
                </div>

                {/* النصوص الرئيسية */}
                <div className="hero-content">
                    <h1 className="hero-title text-gradient-animate">
                        {t('hero.title')}
                    </h1>

                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>

                    <p className="hero-description">
                        {t('hero.description')}
                    </p>

                    {/* زر التحميل */}
                    <a href="#downloads" className="hero-cta">
                        <span className="cta-text">{t('hero.cta')}</span>
                        <span className="cta-icon">↓</span>
                    </a>
                </div>

                {/* أيقونات الميزات العائمة */}
                <div className="floating-features">
                    <div className="feature-float feature-float-1">
                        <img src="/icons/icon_mediakit_engine.png" alt="MediaKit" />
                    </div>
                    <div className="feature-float feature-float-2">
                        <img src="/icons/icon_glassmorphism_ui.png" alt="UI" />
                    </div>
                    <div className="feature-float feature-float-3">
                        <img src="/icons/icon_multiview.png" alt="Multiview" />
                    </div>
                    <div className="feature-float feature-float-4">
                        <img src="/icons/icon_ai_recommendations.png" alt="AI" />
                    </div>
                    <div className="feature-float feature-float-5">
                        <img src="/icons/icon_picture_in_picture.png" alt="PiP" />
                    </div>
                    <div className="feature-float feature-float-6">
                        <img src="/icons/icon_voice_search.png" alt="Voice" />
                    </div>
                </div>

                {/* مؤشر التمرير */}
                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
