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

                {/* Interactive Engine Core Visualizer */}
                <div className="engine-visualizer">
                    <div className="visualizer-content">
                        <div className="source-nodes">
                            <div className="source-node" data-label="Xtream">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                            </div>
                            <div className="source-node" data-label="M3U">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v8" /><path d="m16 6-4-4-4 4" /><circle cx="12" cy="12" r="10" /><path d="m16 16-4-4-4 4" /></svg>
                            </div>
                            <div className="source-node" data-label="Stalker">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 10 10" /><path d="M12 12L2 12" /></svg>
                            </div>
                        </div>

                        <div className="flow-lines">
                            <div className="pulse-line"></div>
                            <div className="pulse-line"></div>
                            <div className="pulse-line"></div>
                        </div>

                        <div className="core-processor">
                            <div className="core-chip">
                                <div className="chip-logo">MK</div>
                                <div className="chip-scanner"></div>
                            </div>
                            <div className="processing-rings">
                                <div className="ring"></div>
                                <div className="ring"></div>
                            </div>
                        </div>

                        <div className="output-stage">
                            <div className="output-node" data-label="4K HDR">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            </div>
                            <div className="output-node" data-label="0.4s">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                        </div>
                    </div>
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
