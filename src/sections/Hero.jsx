import { useTranslation } from '../i18n/useTranslation';
import PromoVideo from '../components/PromoVideo';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero" id="hero">
            <div className="hero-background"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-logo">
                        <img src="/logo.jpg" alt="Qanati Player" />
                    </div>

                    <h1 className="hero-title text-gradient-animate">
                        {t('hero.title')}
                    </h1>

                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>

                    <p className="hero-description">
                        {t('hero.description')}
                    </p>

                    <div className="hero-actions">
                        <a href="#downloads" className="hero-cta">
                            <span className="cta-text">{t('hero.cta')}</span>
                            <span className="cta-icon">{'\u2193'}</span>
                        </a>
                        <a href="#why-us" className="hero-secondary-cta">
                            {t('hero.secondaryCta')}
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <PromoVideo />
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;