/**
 * ═══════════════════════════════════════════════════════════
 * SEO Configuration - Qanati Player
 * ═══════════════════════════════════════════════════════════
 */

export const seoConfig = {
    // الكلمات المفتاحية الرئيسية (B2B - موجهة لملاك السيرفرات)
    primaryKeywords: [
        'IPTV server activation',
        'Xtream codes white label player',
        'IPTV provider integration',
        'MediaKit player for providers',
        'Professional IPTV solutions',
        'Server management platform',
        'IPTV white label software',
        'Xtream API integration'
    ],

    // كلمات مفتاحية عربية قوية (منخفضة المنافسة - عالية القيمة)
    arabicKeywords: [
        // استهداف مباشر لملاك السيرفرات
        'تفعيل سيرفر IPTV احترافي',
        'تكامل Xtream Codes للمزودين',
        'مشغل وايت ليبل للسيرفرات',
        'حلول IPTV للمزودين',
        'بلاير احترافي لأصحاب السيرفرات',

        // كلمات طويلة الذيل (Long-tail)
        'تفعيل سيرفر xtream مع محرك MediaKit',
        'مشغل IPTV بتقنية Multiview للمزودين',
        'تكامل API xtream codes احترافي',
        'بنية تحتية IPTV متكاملة',

        // كلمات تقنية
        'محرك MediaKit للسيرفرات',
        'إدارة سيرفرات IPTV بالذكاء الاصطناعي',
        'مشغل IPTV بواجهة Glassmorphism',

        // استهداف المشاكل (Problem-solving keywords)
        'حل تقطيع البث IPTV',
        'تحسين أداء سيرفر xtream',
        'زيادة استقرار البث المباشر'
    ],

    // الكلمات المفتاحية طويلة الذيل (Low Competition)
    longTailKeywords: [
        'IPTV player with MediaKit engine for server owners',
        'White label IPTV solution with multiview support',
        'Professional Xtream codes integration platform',
        'IPTV server activation with AI recommendations',
        'Glassmorphism IPTV player for providers'
    ],

    // Meta descriptions للصفحات المختلفة
    metaDescriptions: {
        homepage: 'منصة تفعيل سيرفرات IPTV احترافية | دعم Xtream Codes | محرك MediaKit الثوري | حلول White Label للمزودين | تكامل كامل مع بنيتك التحتية',
        contact: 'تواصل مع فريق قناتي بلاير لتفعيل سيرفرك الاحترافي | دعم كامل لملاك السيرفرات | تكامل سريع وآمن',
        features: 'اكتشف مميزات قناتي بلاير الاحترافية: MediaKit Engine، Multiview، AI Recommendations، وأكثر من 13 ميزة حصرية'
    },

    // الروابط الكنسية (Canonical URLs)
    canonicalUrls: {
        production: 'https://player.qanati.site',
        staging: 'https://staging-player.qanati.site'
    },

    // Open Graph Images
    ogImages: {
        default: '/logo.jpg',
        features: '/og-features.jpg',
        contact: '/og-contact.jpg'
    },

    // اللغات المدعومة
    languages: {
        default: 'ar',
        supported: ['ar', 'en']
    },

    // معلومات الشركة (Structured Data)
    organization: {
        name: 'Qanati Tech - قناتي تِك',
        url: 'https://qanati.site',
        logo: 'https://qanati.site/logo.jpg',
        sameAs: [
            // روابط السوشيال ميديا (سيتم إضافتها لاحقاً)
        ]
    }
};

/**
 * دالة لتوليد Meta Tags ديناميكياً
 */
export const generateMetaTags = (page = 'homepage') => {
    const description = seoConfig.metaDescriptions[page] || seoConfig.metaDescriptions.homepage;

    return {
        title: page === 'homepage'
            ? 'قناتي بلاير - حلول IPTV الاحترافية لملاك السيرفرات | Qanati Player'
            : `${page} | قناتي بلاير`,
        description,
        keywords: [...seoConfig.primaryKeywords, ...seoConfig.arabicKeywords].join(', '),
        canonical: `${seoConfig.canonicalUrls.production}/${page === 'homepage' ? '' : page}`
    };
};
