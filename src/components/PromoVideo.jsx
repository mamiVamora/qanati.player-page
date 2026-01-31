import { useState, useEffect } from 'react';
import './PromoVideo.css';

const PromoVideo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: 'محرك MediaKit الثوري',
            subtitle: 'سلاسة 4K HDR بلا حدود',
            icon: '⚡',
            color: 'cyan'
        },
        {
            title: '4 شاشات متزامنة',
            subtitle: 'تعدد مهام حقيقي للمحترفين',
            icon: '📺',
            color: 'magenta'
        },
        {
            title: 'ذكاء العتاد والشبكة',
            subtitle: 'بث مستقر في كل الظروف',
            icon: '🧠',
            color: 'purple'
        },
        {
            title: 'واجهة Glassmorphism',
            subtitle: 'فخامة التصميم في كل تفصيل',
            icon: '✨',
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

                <div className="v-label">PRIME ENGINE ACTIVE</div>
            </div>
        </div>
    );
};

export default PromoVideo;
