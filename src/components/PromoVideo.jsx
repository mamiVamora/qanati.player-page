import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import './PromoVideo.css';

const PromoVideo = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: t('promoVideo.slides.mediakit.title'),
            subtitle: t('promoVideo.slides.mediakit.subtitle'),
            icon: '\u{26A1}',
            color: 'cyan'
        },
        {
            title: t('promoVideo.slides.multiview.title'),
            subtitle: t('promoVideo.slides.multiview.subtitle'),
            icon: '\u{1F4FA}',
            color: 'magenta'
        },
        {
            title: t('promoVideo.slides.intelligence.title'),
            subtitle: t('promoVideo.slides.intelligence.subtitle'),
            icon: '\u{1F9E0}',
            color: 'purple'
        },
        {
            title: t('promoVideo.slides.glass.title'),
            subtitle: t('promoVideo.slides.glass.subtitle'),
            icon: '\u{2728}',
            color: 'gold'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="promo-video-sim">
            <div className="video-frame">
                <div className="video-content">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === activeIndex ? 'active' : ''} slide-${slide.color}`}
                        >
                            <div className="slide-overlay"></div>
                            <div className="slide-body">
                                <div className="slide-icon">{slide.icon}</div>
                                <h3 className="slide-title">{slide.title}</h3>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="v-indicator">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`v-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>

                <div className="v-label">{t('promoVideo.label')}</div>
            </div>
        </div>
    );
};

export default PromoVideo;
