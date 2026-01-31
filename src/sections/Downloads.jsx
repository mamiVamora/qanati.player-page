import { useTranslation } from '../i18n/useTranslation';
import './Downloads.css';

const Downloads = () => {
    const { t } = useTranslation();

    // أيقونات SVG بسيطة لكل متجر
    const StoreIcon = ({ type }) => {
        const icons = {
            'google-play': (
                <svg viewBox="0 0 60 60" fill="none">
                    <path d="M10 10L35 30L10 50V10Z" fill="url(#google1)" />
                    <path d="M35 30L45 35L15 55L10 50L35 30Z" fill="url(#google2)" />
                    <path d="M35 30L15 5L45 25L35 30Z" fill="url(#google3)" />
                    <defs>
                        <linearGradient id="google1" x1="10" y1="10" x2="35" y2="30">
                            <stop offset="0%" stopColor="#00D6FF" />
                            <stop offset="100%" stopColor="#0099FF" />
                        </linearGradient>
                        <linearGradient id="google2" x1="10" y1="50" x2="45" y2="35">
                            <stop offset="0%" stopColor="#FFCE00" />
                            <stop offset="100%" stopColor="#FF9500" />
                        </linearGradient>
                        <linearGradient id="google3" x1="15" y1="5" x2="45" y2="25">
                            <stop offset="0%" stopColor="#FF3B30" />
                            <stop offset="100%" stopColor="#FF2D55" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            'amazon': (
                <svg viewBox="0 0 60 60" fill="none">
                    <text x="30" y="35" fontSize="32" fontWeight="bold" fill="#FF9900" textAnchor="middle">a</text>
                    <path d="M15 40Q30 50 45 40" stroke="#FF9900" strokeWidth="3" fill="none" />
                </svg>
            ),
            'huawei': (
                <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#E60012" strokeWidth="3" />
                    <path d="M20 30L25 20L30 30L35 20L40 30" stroke="#E60012" strokeWidth="2" fill="none" />
                </svg>
            ),
            'apk': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="20" y="15" width="20" height="30" rx="3" fill="url(#apk-grad)" />
                    <path d="M30 25L25 35H35L30 25Z" fill="white" />
                    <defs>
                        <linearGradient id="apk-grad" x1="20" y1="15" x2="40" y2="45">
                            <stop offset="0%" stopColor="#00E5FF" />
                            <stop offset="100%" stopColor="#E91E63" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            'apkpure': (
                <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="22" fill="#0099FF" />
                    <text x="30" y="38" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">APK</text>
                </svg>
            ),
            'uptodown': (
                <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="22" fill="#00D170" />
                    <path d="M30 20V40M20 30L30 40L40 30" stroke="white" strokeWidth="3" fill="none" />
                </svg>
            ),
            'app-store': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="15" y="15" width="30" height="30" rx="8" fill="url(#apple-grad)" />
                    <text x="30" y="38" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">A</text>
                    <defs>
                        <linearGradient id="apple-grad" x1="15" y1="15" x2="45" y2="45">
                            <stop offset="0%" stopColor="#007AFF" />
                            <stop offset="100%" stopColor="#5856D6" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            'samsung': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="12" y="20" width="36" height="20" rx="2" fill="none" stroke="#0080FF" strokeWidth="2" />
                    <text x="30" y="35" fontSize="14" fontWeight="bold" fill="#0080FF" textAnchor="middle">TV</text>
                </svg>
            ),
            'lg': (
                <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="22" fill="none" stroke="#E60012" strokeWidth="2" />
                    <text x="30" y="38" fontSize="20" fontWeight="bold" fill="#E60012" textAnchor="middle">LG</text>
                </svg>
            ),
            'microsoft': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="20" y="20" width="9" height="9" fill="#F35022" />
                    <rect x="31" y="20" width="9" height="9" fill="#81BC06" />
                    <rect x="20" y="31" width="9" height="9" fill="#05A6F0" />
                    <rect x="31" y="31" width="9" height="9" fill="#FFBA08" />
                </svg>
            )
        };
        return icons[type] || icons['apk'];
    };

    const categories = [
        {
            id: 'android',
            titleKey: 'downloads.categories.android',
            icon: '📱',
            stores: [
                { id: 'google-play', name: 'Google Play', url: '#', available: false },
                { id: 'amazon', name: 'Amazon Appstore', url: '#', available: true },
                { id: 'huawei', name: 'Huawei AppGallery', url: '#', available: false },
                { id: 'apk', name: 'تحميل مباشر (APK)', url: '#', available: true, badge: 'عام' },
                { id: 'apkpure', name: 'APKPure', url: '#', available: true },
                { id: 'uptodown', name: 'Uptodown', url: '#', available: true }
            ]
        },
        {
            id: 'apple',
            titleKey: 'downloads.categories.apple',
            icon: '🍎',
            stores: [
                { id: 'app-store', name: 'App Store', url: '#', available: false }
            ]
        },
        {
            id: 'smart-tv',
            titleKey: 'downloads.categories.smarttv',
            icon: '📺',
            stores: [
                { id: 'samsung', name: 'Samsung TV', url: '#', available: true },
                { id: 'lg', name: 'LG webOS', url: '#', available: true }
            ]
        },
        {
            id: 'windows',
            titleKey: 'downloads.categories.windows',
            icon: '💻',
            stores: [
                { id: 'microsoft', name: 'Microsoft Store', url: '#', available: true }
            ]
        }
    ];

    return (
        <section className="downloads" id="downloads">
            <div className="downloads-container">
                <div className="downloads-header">
                    <h2 className="downloads-title text-gradient-animate">
                        {t('downloads.title')}
                    </h2>
                    <p className="downloads-subtitle">
                        {t('downloads.subtitle')}
                    </p>
                </div>

                {categories.map((category) => (
                    <div key={category.id} className="download-category">
                        <h3 className="category-title">
                            <span className="category-icon">{category.icon}</span>
                            {t(category.titleKey)}
                        </h3>

                        <div className="stores-grid">
                            {category.stores.map((store) => (
                                <a
                                    key={store.id}
                                    href={store.url}
                                    className={`store-card ${!store.available ? 'store-disabled' : ''}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => !store.available && e.preventDefault()}
                                >
                                    <div className="store-logo">
                                        <StoreIcon type={store.id} />
                                    </div>

                                    <div className="store-info">
                                        <h4 className="store-name">{store.name}</h4>
                                        {store.badge && (
                                            <span className="store-badge">{store.badge}</span>
                                        )}
                                        {store.available ? (
                                            <p className="store-action">{t('downloads.downloadNow')}</p>
                                        ) : (
                                            <p className="store-status">{t('downloads.comingSoon')}</p>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Downloads;
