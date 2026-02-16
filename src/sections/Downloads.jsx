import { useTranslation } from '../i18n/useTranslation';
import './Downloads.css';

const Downloads = () => {
    const { t } = useTranslation();

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
            ),
            'xiaomi': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="15" y="15" width="30" height="30" rx="6" fill="#FF6700" />
                    <path d="M22 25V35M22 25H27M27 25V35M27 30H22M32 25V35M37 25V35M32 25H37" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            'linux': (
                <svg viewBox="0 0 60 60" fill="none">
                    <path d="M30 10C35 10 45 15 45 30C45 45 35 50 30 50C25 50 15 45 15 30C15 15 25 10 30 10Z" fill="#333" />
                    <circle cx="23" cy="25" r="3" fill="white" />
                    <circle cx="37" cy="25" r="3" fill="white" />
                    <path d="M25 40Q30 45 35 40" stroke="#FFD700" strokeWidth="3" fill="none" />
                </svg>
            ),
            'webapp': (
                <svg viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="22" stroke="url(#web-grad)" strokeWidth="3" />
                    <path d="M15 30H45M30 15V45M30 15Q38 30 30 45M30 15Q22 30 30 45" stroke="url(#web-grad)" strokeWidth="2" />
                    <defs>
                        <linearGradient id="web-grad" x1="15" y1="15" x2="45" y2="45">
                            <stop offset="0%" stopColor="#00F2FF" />
                            <stop offset="100%" stopColor="#0066FF" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            'palmstore': (
                <svg viewBox="0 0 60 60" fill="none">
                    <rect x="12" y="12" width="36" height="36" rx="10" fill="url(#palm-grad)" />
                    <path d="M24 22V38M30 18V38M36 24V38" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="palm-grad" x1="12" y1="12" x2="48" y2="48">
                            <stop offset="0%" stopColor="#FF6B35" />
                            <stop offset="100%" stopColor="#FF3E00" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        };
        return icons[type] || icons['apk'];
    };

    const CategoryIcon = ({ type }) => {
        const icons = {
            'android': (
                <svg viewBox="0 0 24 24" fill="#3DDC84">
                    <path d="M17.523 15.3414C17.0609 15.3414 16.6917 14.9721 16.6917 14.5101C16.6917 14.0481 17.0609 13.6788 17.523 13.6788C17.985 13.6788 18.3542 14.0481 18.3542 14.5101C18.3542 14.9721 17.985 15.3414 17.523 15.3414M6.47702 15.3414C6.01502 15.3414 5.64575 14.9721 5.64575 14.5101C5.64575 14.0481 6.01502 13.6788 6.47702 13.6788C6.93902 13.6788 7.30828 14.0481 7.30828 14.5101C7.30828 14.9721 6.93902 15.3414 6.47702 15.3414M17.9317 11.2319L19.5398 8.44192C19.658 8.23667 19.5873 7.97395 19.3815 7.85575C19.1758 7.73755 18.913 7.80873 18.7954 8.01449L17.1654 10.8415C15.7533 10.1917 13.9882 9.8313 12.0003 9.8313C10.0125 9.8313 8.2472 10.1917 6.83511 10.8415L5.20516 8.01449C5.08756 7.80873 4.82479 7.73755 4.6191 7.85575C4.41334 7.97395 4.34316 8.23667 4.46077 8.44192L6.06881 11.2319C3.12061 12.8687 1.09631 15.8675 0.844727 19.4172H23.1558C22.9042 15.8675 20.8799 12.8687 17.9317 11.2319" />
                </svg>
            ),
            'apple': (
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M17.05 20.28c-.96.95-2.22 1.5-3.34 1.5-1.12 0-2.45-.63-4.14-1.67C7.88 19.07 6.7 17.26 6.7 15.22c0-2.67 2.1-4.73 4.7-4.73 1.25 0 2.37.5 3.12 1.05.75.55 1.7.55 2.45 0 .75-.55 1.88-1.05 3.12-1.05 1.05 0 2.1.25 2.92.75l.13.08c-.68 1.1-.8 2.5-.33 3.8.35.95 1 1.7 1.83 2.22l.14.07c-.45 1.4-.95 2.6-1.5 3.55-.95 1.6-2.05 2.1-3.23 2.1-.2 0-.4 0-.6-.05zM12.03 9.47c-.02-2.12 1.52-3.95 3.48-4.47l.15-.03c.1-.02.2-.03.3-.03 2.22 0 4.02 1.8 4.02 4.02 0 .1 0 .2-.02.3l-.03.15c-.52 1.96-2.35 3.48-4.47 3.5-.02 0-.03 0-.05 0-2.1 0-3.9-1.63-4-3.72l-.02-.15.02-.07z" />
                </svg>
            ),
            'smart-tv': (
                <svg viewBox="0 0 24 24" fill="#00D6FF">
                    <path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3M21 17H3V5H21V17Z" />
                </svg>
            ),
            'windows': (
                <svg viewBox="0 0 24 24" fill="#0078D7">
                    <path d="M3 12V6.36L10.29 5.4V12H3M11.23 5.28L21.78 4L22 12H11.23V5.28M3 12.85H10.29V19.65L3 18.6V12.85M11.23 12.85H22V21L11.23 19.72V12.85Z" />
                </svg>
            ),
            'linux': (
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M12 2C10.5 2 9.2 2.6 8.3 3.6C7.5 4.5 7 5.7 7 7C7 8.3 7.5 9.5 8.3 10.4C9.2 11.4 10.5 12 12 12C13.5 12 14.8 11.4 15.7 10.4C16.5 9.5 17 8.3 17 7C17 5.7 16.5 4.5 15.7 3.6C14.8 2.6 13.5 2 12 2M12 14C8.7 14 6 16.7 6 20V22H18V20C18 16.7 15.3 14 12 14Z" />
                </svg>
            ),
            'palmstore': (
                <svg viewBox="0 0 24 24" fill="#FF6B35">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
            )
        };
        return icons[type] || null;
    };

    const categories = [
        {
            id: 'android',
            titleKey: 'downloads.categories.android',
            categoryIcon: 'android',
            stores: [
                { id: 'google-play', name: 'Google Play', url: '#', available: false },
                { id: 'amazon', name: 'Amazon Appstore', url: '#', available: false },
                { id: 'huawei', name: 'Huawei AppGallery', url: 'https://appgallery.huawei.com/app/C116877361', available: true },
                { id: 'xiaomi', name: 'Xiaomi GetApps', url: '#', available: false },
                { id: 'apk', name: t('downloads.directApk'), url: 'https://raw.githubusercontent.com/mamiVamora/qanati-downloads/main/qanati-player-sideload.apk', available: true, badge: t('downloads.badges.public') },
                { id: 'apkpure', name: 'APKPure', url: 'https://apkpure.com/p/com.qanati.player', available: true },
                { id: 'uptodown', name: 'Uptodown', url: '#', available: false },
                { id: 'palmstore', name: 'Palmstore (Tecno, Infinix, itel)', url: '#', available: false }
            ]
        },
        {
            id: 'apple',
            titleKey: 'downloads.categories.apple',
            categoryIcon: 'apple',
            stores: [
                { id: 'app-store', name: 'App Store', url: '#', available: false },
                { id: 'webapp', name: t('downloads.webApp'), url: 'https://qanatiplayer.vercel.app/', available: true }
            ]
        },
        {
            id: 'smart-tv',
            titleKey: 'downloads.categories.smarttv',
            categoryIcon: 'smart-tv',
            stores: [
                { id: 'samsung', name: 'Samsung TV', url: '#', available: false },
                { id: 'lg', name: 'LG webOS', url: '#', available: false }
            ]
        },
        {
            id: 'windows',
            titleKey: 'downloads.categories.windows',
            categoryIcon: 'windows',
            stores: [
                { id: 'microsoft', name: 'Microsoft Store', url: 'https://apps.microsoft.com/detail/9NH6MK4ZZRG7?hl=en-us&gl=SA&ocid=pdpshare', available: true }
            ]
        },
        {
            id: 'linux',
            titleKey: 'downloads.categories.linux',
            categoryIcon: 'linux',
            stores: [
                { id: 'linux', name: 'Linux (Generic)', url: '#', available: false }
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
                            <span className="category-icon">
                                <CategoryIcon type={category.categoryIcon} />
                            </span>
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
