import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import './Trust.css';

const StatCounter = ({ end, duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        const numericPart = end.replace(/[^0-9.]/g, '');
        const numericEnd = parseFloat(numericPart) || 0;

        let startTime = null;

        const updateCount = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuad)
            const easedProgress = progress * (2 - progress);
            const currentVal = easedProgress * numericEnd;

            setCount(currentVal);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    }, [hasStarted, end, duration]);

    const formatValue = (val) => {
        if (end.includes('/')) return end;

        let formatted;
        if (end.includes('.')) {
            formatted = val.toFixed(1);
        } else {
            formatted = Math.floor(val).toLocaleString('en-US');
        }

        if (end.includes('+')) return `${formatted}+`;
        if (end.includes('s')) return `${formatted}s`;
        return formatted;
    };

    return <h3 ref={counterRef} className="stat-value">{formatValue(count)}</h3>;
};

const TrustIcon = ({ type }) => {
    const icons = {
        'servers': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        'ratings': (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        'startup': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        'updates': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        )
    };
    return icons[type] || null;
};

const Trust = () => {
    const { t } = useTranslation();

    const stats = [
        { id: 'servers', value: '1,000,000+', type: 'cyan' },
        { id: 'ratings', value: '4.9/5', type: 'gold' },
        { id: 'startup', value: '0.4s', type: 'purple' },
        { id: 'updates', value: t('trust.stats.updates.value'), type: 'magenta' }
    ];

    const compatibleItems = [
        t('trust.compatible.items.xtream'),
        t('trust.compatible.items.m3u'),
        t('trust.compatible.items.mediakit')
    ];

    const testimonials = [
        { key: 'reseller' },
        { key: 'analyst' }
    ];

    return (
        <section className="trust" id="trust">
            <div className="trust-bg-effects">
                <div className="trust-glow-1"></div>
                <div className="trust-glow-2"></div>
            </div>

            <div className="trust-container">
                <div className="trust-header">
                    <h2 className=" trust-main-title text-gradient-animate">{t('trust.title')}</h2>
                    <p className="trust-main-subtitle">{t('trust.subtitle')}</p>
                </div>

                <div className="trust-grid">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className={`trust-item trust-item-${stat.type}`}>
                            <div className="trust-icon-wrapper">
                                <TrustIcon type={stat.id} />
                                <div className="icon-pulse"></div>
                            </div>
                            <div className="stat-content">
                                {stat.value.match(/[0-9]/) ? (
                                    <StatCounter end={stat.value} />
                                ) : (
                                    <h3 className="stat-value">{stat.value}</h3>
                                )}
                                <p className="stat-label">{t(`trust.stats.${stat.id}.label`)}</p>
                                <p
                                    className="stat-desc"
                                    dangerouslySetInnerHTML={{ __html: t(`trust.stats.${stat.id}.description`) }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trust-extras">
                    <div className="trust-compat">
                        <h3 className="trust-section-title">{t('trust.compatible.title')}</h3>
                        <div className="trust-badges">
                            {compatibleItems.map((item, index) => (
                                <span key={index} className="trust-badge">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="trust-testimonials-section">
                        <h3 className="trust-section-title">{t('trust.testimonials.title')}</h3>
                        <div className="trust-testimonials-grid">
                            {testimonials.map((test, index) => (
                                <div key={index} className="trust-testimonial">
                                    <div className="quote-mark">"</div>
                                    <p className="testimonial-quote">{t(`trust.testimonials.items.${test.key}.quote`)}</p>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-line"></div>
                                        <p className="testimonial-role">{t(`trust.testimonials.items.${test.key}.role`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
