import { useTranslation } from '../i18n/useTranslation';
import './WhyUs.css';

const WhyUs = () => {
    const { t } = useTranslation();

    const comparisons = [
        {
            feature: 'محرك التشغيل (Engine)',
            qanati: 'MediaKit Engine (4K HDR)',
            others: 'محركات Android الافتراضية',
            highlights: 'سلاسة مطلقة وبدون تقطيع',
            status: true
        },
        {
            feature: 'تعدد الشاشات (Multi-View)',
            qanati: '4 شاشات متزامنة بدقة كاملة',
            others: 'شاشة واحدة فقط',
            highlights: 'تحكم صوتي لكل شاشة',
            status: true
        },
        {
            feature: 'الأداء والعتاد',
            qanati: 'بيانات لحظية (Live Stats)',
            others: 'لا توجد إحصائيات',
            highlights: 'كشف سرعة الاستجابة والرام',
            status: true
        },
        {
            feature: 'توفير الموارد',
            qanati: 'معالجة ذكية (AV1/H.265)',
            others: 'استهلاك عالٍ للبطارية',
            highlights: 'الحفاظ على درجة حرارة الجهاز',
            status: true
        }
    ];

    return (
        <section className="why-us" id="why-us">
            <div className="why-us-container">
                <div className="why-us-header">
                    <span className="section-tag">المقارنة التقنية</span>
                    <h2 className="why-us-title text-gradient-animate">لماذا "قناتي بلاير"؟</h2>
                    <p className="why-us-subtitle">تحليل صريح يكشف الفرق بين البنية السيادية والحلول التجارية التقليدية</p>
                </div>

                {/* Desktop Table View */}
                <div className="comparison-table-wrapper desktop-only">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>الميزة</th>
                                <th className="qanati-column">قناتي بلاير</th>
                                <th>مشغلات أخرى</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, index) => (
                                <tr key={index} className="comparison-row">
                                    <td className="feature-name">
                                        <div className="feature-dot"></div>
                                        {item.feature}
                                    </td>
                                    <td className="qanati-value highlight">
                                        <div className="check-icon">✓</div>
                                        <span className="value-text">{item.qanati}</span>
                                        <div className="feature-highlight">{item.highlights}</div>
                                    </td>
                                    <td className="others-value">
                                        <div className="cross-icon">✕</div>
                                        {item.others}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards View */}
                <div className="why-us-mobile-cards mobile-only">
                    {comparisons.map((item, index) => (
                        <div key={index} className="comparison-mobile-card">
                            <div className="mobile-card-header">{item.feature}</div>
                            <div className="mobile-card-content">
                                <div className="mobile-qanati-side">
                                    <span className="side-label">قناتي بلاير</span>
                                    <p className="side-value">{item.qanati}</p>
                                    <span className="side-highlight">{item.highlights}</span>
                                </div>
                                <div className="vs-divider">VS</div>
                                <div className="mobile-others-side">
                                    <span className="side-label">مشغلات أخرى</span>
                                    <p className="side-value">{item.others}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="why-us-cards">
                    <div className="why-card card-cyan">
                        <div className="why-card-icon">⚡</div>
                        <h4>سرعة Instant-On</h4>
                        <p>تشغيل القناة في أقل من 0.5 ثانية بفضل تحسينات الكاش الذكية.</p>
                    </div>
                    <div className="why-card card-magenta">
                        <div className="why-card-icon">🛡️</div>
                        <h4>سيادة تقنية</h4>
                        <p>بنية تحتية مشفرة بالكامل تحمي بياناتك واتصالك من المتطفلين.</p>
                    </div>
                    <div className="why-card card-gold">
                        <div className="why-card-icon">📺</div>
                        <h4>دعم 8K والـ AV1</h4>
                        <p>دعم أحدث تقنيات الضغط لضمان أعلى جودة بأقل استهلاك إنترنت.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
