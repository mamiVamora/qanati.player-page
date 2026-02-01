import { useTranslation } from '../i18n/useTranslation';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const tickerItems = t('hero.ticker.items');
    const items = Array.isArray(tickerItems) ? tickerItems : [];

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

                    <p
                        className="hero-description"
                        dangerouslySetInnerHTML={{ __html: t('hero.description') }}
                    />

                    <div className="hero-actions">
                        <a href="#downloads" className="hero-cta">
                            <span className="cta-text">{t('hero.cta')}</span>
                            <span className="cta-icon">{'\u2193'}</span>
                        </a>
                        <a href="#why-us" className="hero-secondary-cta">
                            {t('hero.secondaryCta')}
                        </a>
                    </div>

                    {items.length > 0 && (
                        <div className="hero-ticker" aria-label={t('hero.ticker.label')}>
                            <span className="ticker-label">{t('hero.ticker.label')}</span>
                            <div className="ticker-track">
                                <div className="ticker-items">
                                    {items.concat(items).map((item, index) => (
                                        <span key={index} className="ticker-item">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
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
