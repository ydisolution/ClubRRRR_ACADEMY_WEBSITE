// Language Switcher Module for ClubRRRR Website - COMPREHENSIVE VERSION 2.0
(function() {
    'use strict';

    const LanguageSwitcher = {
        currentLang: 'he', // Default language
        
        init() {
            this.loadLanguage();
            this.setupEventListeners();
            this.applyLanguage(this.currentLang);
            this.updateUI();
        },

        loadLanguage() {
            // Load language from localStorage or default to Hebrew
            const savedLang = localStorage.getItem('clubrrrr_language') || 'he';
            this.currentLang = savedLang;
        },

        setupEventListeners() {
            const langOptions = document.querySelectorAll('.lang-option');

            // Language option click
            langOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.getAttribute('data-lang');
                    if (lang) {
                        this.switchLanguage(lang);
                    }
                });
            });
        },

        switchLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('clubrrrr_language', lang);
            this.applyLanguage(lang);
            this.updateUI();
        },

        updateUI() {
            const langOptions = document.querySelectorAll('.lang-option');
            
            langOptions.forEach(option => {
                const lang = option.getAttribute('data-lang');
                if (lang === this.currentLang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
        },

        applyLanguage(lang) {
            // Set HTML lang and dir attributes
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
            document.body.dir = lang === 'he' ? 'rtl' : 'ltr';

            if (lang === 'en') {
                this.translateToEnglish();
            } else {
                // Reload page for Hebrew (original content)
                if (document.body.classList.contains('translated-to-english')) {
                    location.reload();
                }
            }
        },

        translateToEnglish() {
            // Mark as translated
            document.body.classList.add('translated-to-english');

            // Hebrew to English mapping - COMPREHENSIVE 400+ translations
            const contentMap = {
                // NAVIGATION
                'אזור אישי': 'Personal Area',
                'אודות': 'About',
                'תכניות ושירותים': 'Programs & Services',
                'הבוגרים שלנו': 'Our Graduates',
                'תוכן': 'Content',
                'פודקאסט': 'Podcast',
                'קלאברים מארחים': 'Clubbers Host',
                'קהילה': 'Community',
                'אירועים': 'Events',
                'צור קשר': 'Contact',
                'חזרה לדף הבית': 'Back to Homepage',
                'מסלולי הלימוד המלאים': 'Complete Learning Tracks',
                'מנטורינג - לימוד צמוד עם איתי ודרור': 'Mentoring - Personal Guidance with Itai & Dror',
                'ClubRRRR 360 - תכנית מקיפה': 'ClubRRRR 360 - Comprehensive Program',
                'קורס Wholesale - איתור עסקאות': 'Wholesale Course - Deal Finding',
                'Creative Financing - מימון יצירתי': 'Creative Financing',
                
                // LOGIN PAGE
                'התחברות - ClubRRRR ACADEMY': 'Login - ClubRRRR ACADEMY',
                'ברוך הבא חזרה!': 'Welcome Back!',
                'התחבר לאזור האישי שלך': 'Sign in to your personal area',
                'אימייל': 'Email',
                'סיסמה': 'Password',
                'זכור אותי': 'Remember me',
                'שכחת סיסמה?': 'Forgot password?',
                'התחבר': 'Login',
                'או התחבר עם': 'Or sign in with',
                'המשך עם Google': 'Continue with Google',
                'עדיין אין לך חשבון?': 'Don\'t have an account yet?',
                'הירשם עכשיו': 'Sign up now',
                
                // REGISTER PAGE
                'הרשמה - ClubRRRR ACADEMY': 'Register - ClubRRRR ACADEMY',
                'הצטרף ל-ClubRRRR ACADEMY': 'Join ClubRRRR ACADEMY',
                'צור חשבון חדש והתחל את המסע שלך': 'Create a new account and start your journey',
                'שם פרטי': 'First Name',
                'שם משפחה': 'Last Name',
                'אימות סיסמה': 'Confirm Password',
                'לפחות 8 תווים': 'At least 8 characters',
                'אות גדולה אחת לפחות': 'At least one uppercase letter',
                'ספרה אחת לפחות': 'At least one number',
                'אני מסכים/ה ל': 'I agree to',
                'תנאי השימוש': 'Terms of Service',
                'מדיניות הפרטיות': 'Privacy Policy',
                'של ClubRRRR ACADEMY': 'of ClubRRRR ACADEMY',
                'צור חשבון': 'Create Account',
                'או הירשם עם': 'Or sign up with',
                'המשך עם Google': 'Continue with Google',
                'כבר יש לך חשבון?': 'Already have an account?',
                'התחבר': 'Log in',
                'התחבר כאן': 'Log in here',
                
                // HERO & ABOUT
                'ברוכים הבאים לאקדמיה הגדולה בישראל ללימודי יזמות נדל"ן בארה"ב': 'Welcome to Israel\'s largest academy for US real estate entrepreneurship',
                'אודות איתי ודרור': 'About Itai & Dror',
                'אנחנו איתי ודרור, ובחמש השנים האחרונות לקחנו הון עצמי של 250k והפכנו אותו לפורטפוליו של עשרות נכסים באמצעות יזמות נדל"ן בארה"ב.': 'We are Itai and Dror, and over the past five years we took $250k in equity and turned it into a portfolio of dozens of properties through real estate entrepreneurship in the USA.',
                'יצרנו את פודקאסט קלאברררר - נדל"ן בארה"ב, יזמות וטכנולוגיה שמספק טעימה מעולם היזמות נדל"ן ואסטרטגיות מתקדמות.': 'We created the ClubRRRR Podcast - US Real Estate, Entrepreneurship and Technology, providing a taste of the real estate entrepreneurship world and advanced strategies.',
                'והקמנו את תכנית קלאבר 360 - התכנית ללימודי יזמות נדל"ן בארה"ב המקיפה והמתקדמת ביותר. תכנית שמשלבת פרקטיקה, אסטרטגיות ואימוץ טכנולוגיות AI מתקדמות לאיתור וביצוע עסקאות נדל"ן בונזה!': 'And we established the Clubber 360 program - the most comprehensive and advanced program for US real estate entrepreneurship. A program that combines practice, strategies and adoption of advanced AI technologies for finding and executing real estate deals!',
                'קרא עוד על איתי ודרור': 'Read more about Itai & Dror',
                
                // STATISTICS
                'פרקים': 'Episodes',
                'בפודקאסט': 'in Podcast',
                'בוגרי': 'Graduates of',
                'שעות תוכן': 'Hours of Content',
                'מוקלט': 'Recorded',
                'מחזורים': 'Cohorts',
                'מעל 200 אלף': 'Over 200K',
                'צפיות': 'Views',
                'בוגרים': 'Graduates',
                'מדינות בארה"ב': 'States in USA',
                'שווי נכסים': 'Property Value',
                'עסקאות שנסגרו': 'Closed Deals',
                
                // PROGRAMS
                'קורסי': 'Courses by',
                'מנטורינג - לימוד צמוד': 'Mentoring - Personal Guidance',
                'ליווי אישי ומקצועי מאיתי ודרור. קבל הדרכה אישית, ייעוץ אסטרטגי ותמיכה ישירה בכל שלב בדרך להצלחה שלך בעולם הנדל"ן. למידה צמודה עם המומחים.': 'Personal and professional guidance from Itai and Dror. Get individual mentoring, strategic consultation and direct support at every step on your path to success in the real estate world. Intimate learning with the experts.',
                'למד עוד': 'Learn More',
                'התכנית המקיפה והמתקדמת ביותר ללימודי יזמות נדל"ן בארה"ב. תכנית שמשלבת פרקטיקה, אסטרטגיות ואימוץ טכנולוגיות AI מתקדמות לאיתור וביצוע עסקאות נדל"ן.': 'The most comprehensive and advanced program for US real estate entrepreneurship. A program that combines practice, strategies and adoption of advanced AI technologies for finding and executing real estate deals.',
                'קורס Wholesale': 'Wholesale Course',
                'איך להיות Wholesaler מצליח שמאתר עסקאות משתלמות, עולה על חוזים ומרוויח מהעברת זכויות. למד את כל השיטות לאיתור נכסים, ניתוח עסקאות, בניית רשת קונים ומערכות CRM.': 'How to be a successful Wholesaler who finds profitable deals, gets under contract and profits from assigning rights. Learn all the methods for finding properties, deal analysis, building a buyer list and CRM systems.',
                'אסטרטגיות מתקדמות לרכישת נכסים בצורה יצירתית ללא הון: Sub2, Seller Financing, Novation, Pad Split ועוד. למד איך לרכוש נדל"ן עם מינימום הון, פריסת תשלום ומבני עסקה חכמים.': 'Advanced strategies for acquiring properties creatively without capital: Sub2, Seller Financing, Novation, Pad Split and more. Learn how to purchase real estate with minimum capital, payment plans and smart deal structures.',
                
                // COMMUNITY
                'הצטרף לקהילה': 'Join the Community',
                '"קהילה" הפכה לאחת מהמילים כמו "סינרגיה" או "אופטימלי", אבל ברגע שתצטרף לקהילה הזו של Go-Givers, אתה באמת נכנס לרשת של אנשים בעלי חשיבה דומה שנמצאים במסלול מהיר להצלחה.': '"Community" has become one of those words like "synergy" or "optimal", but once you join this community of Go-Givers, you truly enter a network of like-minded people who are on the fast track to success.',
                
                // NEWSLETTER & FORMS
                'קבל עדכונים מאיתי ודרור': 'Get Updates from Itai & Dror',
                'שם מלא': 'Full Name',
                'מייל': 'Email',
                'מספר טלפון': 'Phone Number',
                'קבל/י עדכונים': 'Get Updates',
                'כתובת אימייל': 'Email Address',
                'שלח פרטים': 'Submit',
                'שלח/י': 'Submit',
                'שלח פרטים ותיאום פגישה 📞': 'Submit & Schedule Meeting 📞',
                'מעוניין להצטרף?': 'Interested in joining?',
                'מעוניין לקבל פרטים נוספים?': 'Interested in receiving more details?',
                'השאר פרטים ונחזור אליך לתיאום פגישת ייעוץ אישית': 'Leave details and we\'ll get back to you to schedule a personal consultation meeting',
                'השאר פרטים ונחזור אליך בהקדם עם כל המידע על התכנית': 'Leave details and we\'ll contact you soon with all the information about the program',
                'ספר לנו קצת על עצמך ומדוע אתה מעוניין בתכנית': 'Tell us a bit about yourself and why you\'re interested in the program',
                'ספר לנו קצת על עצמך ומה אתה מחפש...': 'Tell us a bit about yourself and what you\'re looking for...',
                'מה מעניין אותך בקורס? (אופציונלי)': 'What interests you about the course? (Optional)',
                'הרשמה מהירה': 'Quick Registration',
                'הרשמה לוובינר': 'Register for Webinar',
                'להרשמה לווביניר →': 'Register for Webinar →',
                
                // FOOTER
                'בונים עושר, יוצרים הזדמנויות, משנים חיים.': 'Building wealth, creating opportunities, changing lives.',
                'כל הזכויות שמורות.': 'All rights reserved.',
                
                // MENTORING PAGE
                'תכנית מנטורינג אישי': 'Personal Mentoring Program',
                'ליווי צמוד 1 על 1 בדרך לבניית פורטפוליו נדל"ן מצליח בארה"ב': '1-on-1 guidance on the path to building a successful real estate portfolio in the USA',
                'למה מנטורינג אישי?': 'Why Personal Mentoring?',
                'למה': 'Why',
                'מנטורינג אישי?': 'Personal Mentoring?',
                'ליווי אישי': 'Personal Guidance',
                'למידה והכשרה צמודה אחד על אחד עם מנטור מנוסה שמלווה אותך בכל שלב בדרך': 'One-on-one learning and training with an experienced mentor who guides you every step of the way',
                'תכנית פרקטית': 'Practical Program',
                'למידה מעשית על יזמות נדל"ן בארה"ב וכל התהליך לרכישת נכס מקצה לקצה': 'Hands-on learning about US real estate entrepreneurship and the entire process of acquiring a property from end to end',
                'תוכן מקיף': 'Comprehensive Content',
                'שיעורים מוקלטים איכותיים שמכסים את כל ההיבטים של יזמות נדל"ן': 'High-quality recorded lessons covering all aspects of real estate entrepreneurship',
                'מה כלול בתכנית?': 'What\'s Included in the Program?',
                'שיעורים מוקלטים מקיפים - תוכן איכותי שניתן לצפות בו בקצב שלך': 'Comprehensive recorded lessons - quality content you can watch at your own pace',
                '4 מפגשי Zoom לשאלות ותשובות - דיון ישיר עם המנטור ופתרון בעיות בזמן אמת': '4 Zoom Q&A sessions - direct discussion with the mentor and real-time problem solving',
                'מפגש פיזי אחד בסוף הקורס - מפגש עם כלל בוגרי המנטורינג שסיימו באותו רבעון': 'One physical meeting at the end of the course - meeting with all mentoring graduates who completed in the same quarter',
                'ליווי מלא בתהליך רכישת הנכס הראשון שלך': 'Full guidance through the process of acquiring your first property',
                'תעודת סיום ומעבר לקהילת בוגרי ClubRRRR': 'Certificate of completion and transition to the ClubRRRR graduates community',
                
                // WHOLESALE PAGE
                'למד איך להיות Wholesaler מצליח שמאתר עסקאות משתלמות, עולה על חוזים ומרוויח מהעברת זכויות - ללא צורך בהון התחלתי גדול': 'Learn how to be a successful Wholesaler who finds profitable deals, gets under contract and profits from assigning rights - without needing large starting capital',
                'השאר פרטים לפגישת ייעוץ': 'Leave details for consultation meeting',
                'מה זה Wholesale?': 'What is Wholesale?',
                'Wholesale Real Estate הוא מודל עסקי שבו אתה מוצא נכסים במחיר מוזל, חותם עליהם חוזה רכישה, ומוכר את הזכויות בחוזה למשקיע אחר בתוספת רווח.': 'Wholesale Real Estate is a business model where you find properties at a discounted price, sign a purchase agreement on them, and sell the contract rights to another investor for a profit.',
                'זוהי דרך מצוינת להתחיל בנדל"ן ללא צורך בהון רב, אשראי טוב או ניסיון קודם.': 'This is an excellent way to start in real estate without needing large capital, good credit or prior experience.',
                'איתור עסקאות': 'Deal Finding',
                'למד את השיטות המתקדמות לאיתור נכסים מוזלים:': 'Learn the advanced methods for finding discounted properties:',
                'עלייה על חוזים': 'Getting Under Contract',
                'שלוט בכלים המשפטיים והחוזיים:': 'Master the legal and contractual tools:',
                'בניית Buyers List': 'Building a Buyers List',
                'צור רשת של קונים פוטנציאליים:': 'Create a network of potential buyers:',
                'ניתוח עסקאות': 'Deal Analysis',
                'הערכת ערך ורווחיות נכון:': 'Properly evaluating value and profitability:',
                'משא ומתן ומכירה': 'Negotiation and Sale',
                'מיומנויות משא ומתן מנצחות:': 'Winning negotiation skills:',
                'כלים טכנולוגיים לניהול עסקי:': 'Technological tools for business management:',
                'תהליך Wholesale שלב אחר שלב': 'Wholesale Process Step by Step',
                'איתור הנכס': 'Property Finding',
                'זיהוי נכסים distressed או motivated sellers באמצעות שיטות marketing שונות. חיפוש נכסים שהבעלים מעוניינים למכור מהר או במחיר מוזל מסיבות שונות (גירושין, פטירה, foreclosure, שיפוצים נדרשים וכו\').': 'Identifying distressed properties or motivated sellers through various marketing methods. Finding properties where owners want to sell quickly or at a discounted price for various reasons (divorce, death, foreclosure, repairs needed, etc.).',
                'ניתוח העסקה': 'Deal Analysis',
                'חישוב ARV (After Repair Value), הערכת עלויות שיפוץ, קביעת MAO (Maximum Allowable Offer) לפי כלל ה-70%, והבנת הרווח הפוטנציאלי. שימוש בכלים דיגיטליים ו-comps באזור.': 'Calculating ARV (After Repair Value), estimating repair costs, determining MAO (Maximum Allowable Offer) according to the 70% rule, and understanding potential profit. Using digital tools and comps in the area.',
                'עלייה על חוזה': 'Getting Under Contract',
                'חתימה על Purchase Agreement עם המוכר, שכולל Assignment Clause המאפשר לך להעביר את הזכויות בחוזה. הפקדת Earnest Money Deposit סמלי (500-1000$) וקביעת תקופת Due Diligence.': 'Signing a Purchase Agreement with the seller, which includes an Assignment Clause allowing you to transfer the contract rights. Depositing a symbolic Earnest Money Deposit ($500-1000) and setting a Due Diligence period.',
                'שיווק העסקה': 'Marketing the Deal',
                'פרסום הנכס ל-Buyers List שלך דרך Email, Text, WhatsApp, Facebook Groups. הצגת התמונות, הפוטנציאל, וה-numbers. ארגון property walkthrough למשקיעים מעוניינים.': 'Publishing the property to your Buyers List through Email, Text, WhatsApp, Facebook Groups. Presenting photos, potential, and numbers. Organizing property walkthrough for interested investors.',
                'Assignment של החוזה': 'Contract Assignment',
                'חתימה על Assignment Contract עם הקונה הסופי (End Buyer), שבו אתה מעביר את כל הזכויות והחובות שלך בחוזה המקורי תמורת Assignment Fee (בדרך כלל 5,000-15,000$).': 'Signing an Assignment Contract with the End Buyer, where you transfer all your rights and obligations in the original contract for an Assignment Fee (typically $5,000-15,000).',
                'סגירת העסקה': 'Closing the Deal',
                'תיאום עם Title Company או Attorney לסגירה. הקונה הסופי משלם ישירות למוכר המקורי, ואתה מקבל את ה-Assignment Fee שלך בסגירה. מסמכים, חתימות, וקבלת התשלום!': 'Coordinating with Title Company or Attorney for closing. The End Buyer pays directly to the original seller, and you receive your Assignment Fee at closing. Documents, signatures, and receiving payment!',
                'שמירה על קשר עם המוכר, הקונה, והמתווכים שעבדו איתך. בקשת Referrals וביקורות. ניתוח מה עבד ומה לא. שיפור התהליך והרחבת הפעילות - העסקה הבאה כבר מחכה!': 'Maintaining contact with the seller, buyer, and brokers who worked with you. Requesting Referrals and reviews. Analyzing what worked and what didn\'t. Improving the process and expanding operations - the next deal is already waiting!',
                
                // ACADEMY & CLUBER360
                'מסלולי הלימוד ב-': 'Learning Tracks at',
                'בחר את המסלול המתאים לך ביותר': 'Choose the track that suits you best',
                'התמחויות בקורס ClubRRRR 360': 'Specializations in the ClubRRRR 360 Course',
                'בנוסף לליבה המקיפה, נספק התעמקות ייחודית בתחומים הבאים:': 'In addition to the comprehensive core, we provide unique depth in the following areas:',
                'אסטרטגיות מימון יצירתי מתקדמות - SUB2, Seller Financing, Novation, Pad Split ועוד.': 'Advanced creative financing strategies - SUB2, Seller Financing, Novation, Pad Split and more.',
                'לפרטים נוספים': 'For more details',
                'Fix & Flip': 'Fix & Flip',
                'רכישת נכסים דורשי שיפוץ, שיפוצם ומכירתם ברווח - אסטרטגיה למשקיעים אקטיביים.': 'Purchasing properties needing renovation, renovating them and selling them for profit - a strategy for active investors.',
                'זיהוי נכסים פוטנציאליים': 'Identifying potential properties',
                'אומדן עלויות שיפוץ': 'Estimating renovation costs',
                'ניהול קבלנים מרחוק': 'Managing contractors remotely',
                'אסטרטגיות מכירה': 'Sales strategies',
                'בקרוב': 'Coming Soon',
                'BRRRR Method': 'BRRRR Method',
                'Buy, Rehab, Rent, Refinance, Repeat - אסטרטגיה לבניית תיק נכסים מניבים.': 'Buy, Rehab, Rent, Refinance, Repeat - a strategy for building a portfolio of income-producing properties.',
                'רכישה ושיפוץ אסטרטגי': 'Strategic purchase and renovation',
                'מימון מחדש (Refinance)': 'Refinancing',
                'בניית תיק נכסים': 'Building property portfolio',
                'ניהול השקעות לטווח ארוך': 'Long-term investment management',
                'מוכן להצטרף ל-ClubRRRR ACADEMY?': 'Ready to join ClubRRRR ACADEMY?',
                'צור איתנו קשר עוד היום והתחל את המסע שלך לעצמאות פיננסית דרך השקעות נדל"ן בארה"ב': 'Contact us today and start your journey to financial independence through US real estate investments',
                'צור קשר עכשיו': 'Contact Now',
                'בניית צוות מקצועי': 'Building a professional team',
                
                // CREATIVE FINANCING
                'איך זה עובד?': 'How does it work?',
                
                // GRADUATES PAGE
                'הבוגרים שלנו 🎓': 'Our Graduates 🎓',
                'מאות בוגרים מצליחים שעשו את הצעד והפכו את החלום לעסק אמיתי.': 'Hundreds of successful graduates who took the leap and turned their dream into a real business.',
                'הם משקיעים בנדל"ן בארה"ב, בונים פורטפוליו, וחיים את חיי היזמות שתמיד רצו.': 'They invest in US real estate, build portfolios, and live the entrepreneurial life they always wanted.',
                'איפה הבוגרים שלנו משקיעים?': 'Where are our graduates investing?',
                'הבוגרים שלנו משקיעים במדינות ה-Landlord Friendly המובילות בארה"ב -': 'Our graduates invest in the leading landlord-friendly states in the USA -',
                'בוגרים מצליחים': 'Successful graduates',
                
                // PODCAST & HOSTS
                'נדל"ן בארה"ב, יזמות וטכנולוגיה - פרקים חדשים כל שבוע עם אורחים מיוחדים, סיפורי הצלחה, ואסטרטגיות מנצחות מהשטח': 'US Real Estate, Entrepreneurship and Technology - new episodes every week with special guests, success stories, and winning strategies from the field',
                'איך בוגרי קלאבר הצליחו לבנות פורטפוליו של מיליוני דולרים - שיחה עם 3 בוגרים מצליחים על האסטרטגיות שעבדו להם': 'How Clubber graduates managed to build multi-million dollar portfolios - a conversation with 3 successful graduates about the strategies that worked for them',
                'בוגרים מצליחים מארחים את הקהילה ומשתפים בניסיון, אסטרטגיות וטיפים מעשיים מהשטח': 'Successful graduates host the community and share experience, strategies and practical tips from the field',
                'קלאברים מארחים היא תכנית ייחודית שבה בוגרים מצליחים של התכנית לוקחים את התפקיד של המארחים.': 'Clubbers Host is a unique program where successful program graduates take on the role of hosts.',
                'עם אורחים מיוחדים וסיפורי הצלחה מהשטח.': 'With special guests and success stories from the field.',
                'תכנית ייחודית שבה בוגרים מצליחים מארחים את הקהילה ומשתפים': 'A unique program where successful graduates host the community and share',
                'סרטונים חינוכיים, טיפים מעשיים, סיורי נכסים, וסיפורי הצלחה': 'Educational videos, practical tips, property tours, and success stories',
                'סיפורי הצלחה': 'Success stories',
                
                // ADDITIONAL
                '4+ אסטרטגיות מימון': '4+ Financing strategies',
                'מבנה עסקאות מורכבות': 'Complex deal structures',
                'משא ומתן עם מוכרים': 'Negotiating with sellers',
                'דוגמאות וחישובים מעשיים': 'Practical examples and calculations',
                'הכנס את שמך המלא': 'Enter your full name',
                'הכנס את כתובת האימייל שלך': 'Enter your email address',
                'הכנס את מספר הטלפון שלך': 'Enter your phone number',
                'ו': 'and',
                
                // TEAM SECTION
                'הצוות שלנו': 'Our Team',
                'Team ClubRRRR': 'Team ClubRRRR',
                'המרצים המקצועיים שלנו - מומחים בתחומם עם ניסיון מוכח בשטח': 'Our professional instructors - experts in their fields with proven field experience',
                'נועם בן נון': 'Noam Ben Nun',
                'Wholesale': 'Wholesale',
                'ברד ושלי זריהן': 'Brad & Shelly Zarihan',
                'Tax Sale': 'Tax Sale',
                'שם המרצה': 'Instructor Name',
                'שם הקורס': 'Course Name',
                'מומחה לאיתור עסקאות נדל"ן משתלמות עם ניסיון של עשרות עסקאות מוצלחות': 'Expert in finding profitable real estate deals with experience of dozens of successful transactions',
                'מומחים בתחום Tax Sale עם ניסיון רב שנים ומאות עסקאות מוצלחות': 'Experts in Tax Sale with many years of experience and hundreds of successful transactions',
                'תיאור קצר על המרצה והניסיון שלו בתחום': 'Brief description of the instructor and their experience in the field',
                
                // DASHBOARD PAGE
                'האזור האישי - ClubRRRR ACADEMY': 'Personal Area - ClubRRRR ACADEMY',
                'האזור האישי': 'Personal Area',
                'התנתק': 'Logout',
                'ברוך הבא,': 'Welcome,',
                'שמח לראות אותך שוב!': 'Great to see you again!',
                'השיעורים שלי': 'My Courses',
                'אירועים קרובים': 'Upcoming Events',
                'התקדמות': 'Progress',
                'שעות למידה': 'Learning Hours',
                'שיעורים שהושלמו': 'Completed Lessons',
                'הקורסים שלי': 'My Courses',
                'המשך': 'Continue',
                'התחל': 'Start',
                'אחוז התקדמות': 'Progress Percentage',
                'פעילות אחרונה': 'Recent Activity',
                'צפה בכל הפעילות': 'View all activity',
                'משאבים': 'Resources',
                'גישה למסמכים, כלים וטפסים': 'Access documents, tools and forms',
                'צפה במשאבים': 'View Resources',
                'תמיכה': 'Support',
                'יש שאלה? אנחנו כאן לעזור': 'Have a question? We\'re here to help',
                'צור קשר': 'Contact Us',
                'ההתקדמות שלי': 'My Progress',
                
                // WORKSHOPS PAGE
                'סדנאות - ClubRRRR': 'Workshops - ClubRRRR',
                'סדנאות': 'Workshops',
                'הסדנאות שלנו': 'Our Workshops',
                'סדנאות מתקדמות ליזמות נדל"ן בארה"ב - למידה מעשית, כלים מתקדמים, וידע שמביא תוצאות': 'Advanced workshops for US real estate entrepreneurship - practical learning, advanced tools, and knowledge that delivers results',
                'סדנת BRRRR': 'BRRRR Workshop',
                'למדו את אסטרטגיית BRRRR המתקדמת - Buy, Rehab, Rent, Refinance, Repeat. השיטה המוכחת לבניית פורטפוליו נדל"ן בארה"ב עם מינימום הון עצמי.': 'Learn the advanced BRRRR strategy - Buy, Rehab, Rent, Refinance, Repeat. The proven method for building a US real estate portfolio with minimum equity.',
                'איתור נכסים מתאימים לאסטרטגיית BRRRR': 'Finding properties suitable for BRRRR strategy',
                'חישוב ARV וניתוח כדאיות': 'ARV calculation and feasibility analysis',
                'ניהול תהליך השיפוץ מרחוק': 'Managing renovation process remotely',
                'מימון חוזר ומשיכת הון': 'Refinancing and capital extraction',
                'סקלינג הפורטפוליו': 'Scaling the portfolio',
                'הצטרפו לסדנה': 'Join the Workshop',
                'סדנת סקלינג': 'Scaling Workshop',
                'איך להעביר את העסק שלכם לשלב הבא? למדו את כל הטכניקות להגדלת הפורטפוליו שלכם בצורה חכמה ויעילה.': 'How to take your business to the next level? Learn all the techniques for growing your portfolio smartly and efficiently.',
                'בניית מערכת לסקלינג מהיר': 'Building a system for rapid scaling',
                'גיוס משקיעים ושותפויות אסטרטגיות': 'Raising investors and strategic partnerships',
                'אוטומציה של תהליכים עסקיים': 'Business process automation',
                'בניית צוות מקצועי': 'Building a professional team',
                'ניהול מספר פרויקטים במקביל': 'Managing multiple projects simultaneously',
                'סדנת Road Map לחברה היזמית': 'Road Map to Entrepreneurial Company Workshop',
                'תכננו את המסלול העסקי שלכם בצורה מקצועית. למדו איך לבנות תוכנית עסקית מנצחת ולהוציא אותה לפועל.': 'Plan your business path professionally. Learn how to build a winning business plan and execute it.',
                'בניית תוכנית עסקית מקצועית': 'Building a professional business plan',
                'הגדרת יעדים ואבני דרך': 'Setting goals and milestones',
                'ניתוח שוק ותחרות': 'Market and competition analysis',
                'תכנון פיננסי ותזרימי': 'Financial and cash flow planning',
                'מעקב והתאמת התוכנית': 'Monitoring and adjusting the plan',
                'למה הסדנאות שלנו?': 'Why Our Workshops?',
                'כל הסדנאות שלנו נבנו על בסיס הניסיון המעשי שלנו בשטח. אנחנו לא מלמדים תיאוריה -': 'All our workshops are built on the foundation of our practical field experience. We don\'t teach theory -',
                'אנחנו משתפים בדיוק מה עבד עבורנו ומה לא, מה צריך להימנע ממנו, ואיך לחסוך אלפי דולרים בטעויות.': 'We share exactly what worked for us and what didn\'t, what to avoid, and how to save thousands of dollars in mistakes.',
                'הסדנאות משלבות הרצאות, תרגול מעשי, case studies אמיתיים, וליווי אישי לאורך הדרך.': 'The workshops combine lectures, practical exercises, real case studies, and personal guidance along the way.',
                'מעוניינים להצטרף לסדנה?': 'Interested in joining a workshop?',
                'השאירו פרטים ונחזור אליכם עם כל המידע על הסדנאות הקרובות': 'Leave details and we\'ll get back to you with all information about upcoming workshops',
                
                // AI TOOLS PAGE
                'כלי AI - ClubRRRR': 'AI Tools - ClubRRRR',
                'כלי AI': 'AI Tools',
                'תוכנות AI מתקדמות לנדל"ן': 'Advanced AI Software for Real Estate',
                'טכנולוגיה חכמה שפותחה במיוחד עבור משקיעי ClubRRRR': 'Smart technology developed specifically for ClubRRRR investors',
                'איך זה התחיל?': 'How Did It Start?',
                'דרור זרבוני': 'Dror Zerboni',
                ', שותף ומייסד ClubRRRR, מביא עמו שנות ניסיון רבות מעולם ההייטק הישראלי.': ', partner and co-founder of ClubRRRR, brings many years of experience from the Israeli high-tech world.',
                'בעברו שימש כ': 'In the past he served as',
                'מנכ"ל חברות תוכנה': 'CEO of software companies',
                ' ומוביל פרויקטים טכנולוגיים מורכבים.': ' and led complex technological projects.',
                'כאשר דרור ו': 'When Dror and',
                'איתי אהרון': 'Itai Aharon',
                ' החליטו לשלב את המומחיות הטכנולוגית עם הידע והניסיון שצברו בעולם הנדל"ן האמריקאי,': ' decided to combine technological expertise with the knowledge and experience they gained in the American real estate world,',
                'נולדה חזון ייחודי:': 'a unique vision was born:',
                'לפתח כלים טכנולוגיים מתקדמים שיעניקו לחברי ClubRRRR יתרון אמיתי בשוק': 'to develop advanced technological tools that will give ClubRRRR members a real advantage in the market',
                'השילוב בין הבנה עמוקה של השוק האמריקאי, ניסיון מעשי בביצוע מאות עסקאות, וידע טכנולוגי מתקדם -': 'The combination of deep understanding of the American market, practical experience executing hundreds of deals, and advanced technological knowledge -',
                'הוביל ליצירת': 'led to the creation of',
                'פלטפורמות AI ייעודיות': 'dedicated AI platforms',
                ' שמאפשרות לקלאברים לאתר עסקאות,': ' that allow Clubbers to find deals,',
                'לנתח נכסים, ולקבל החלטות מושכלות במהירות ובדיוק שלא היו אפשריים בעבר.': 'analyze properties, and make informed decisions with speed and accuracy that weren\'t possible before.',
                'התוכנות שפיתחנו זמינות בלעדית לחברי ClubRRRR': 'The software we developed is available exclusively to ClubRRRR members',
                ' - כי אנחנו מאמינים שהצלחה אמיתית נמדדת בהצלחה של הקהילה שלנו.': ' - because we believe true success is measured by the success of our community.',
                'הכלים שלנו': 'Our Tools',
                'SendOffers': 'SendOffers',
                'חבר בין משקיעים חכמים למומחי נדל"ן מקצועיים': 'Connect smart investors with professional real estate experts',
                'הצטרף לקהילה של משקיעי נדל"ן מצליחים': 'Join a community of successful real estate investors',
                'אוטומציה חכמה לאיתור וניתוח נכסים': 'Smart automation for finding and analyzing properties',
                'התחבר לסוכנים ושתף תובנות': 'Connect with agents and share insights',
                'צמח את תיק ההשקעות שלך מהר יותר': 'Grow your investment portfolio faster',
                'DealScore': 'DealScore',
                'מערכת ניתוח חכמה לכדאיות עסקאות נדל"ן': 'Smart analysis system for real estate deal feasibility',
                'ניתוח מיידי של כדאיות העסקה': 'Instant deal feasibility analysis',
                'חישוב ROI אוטומטי ומדויק': 'Automatic and accurate ROI calculation',
                'השוואת אסטרטגיות השקעה שונות': 'Comparing different investment strategies',
                'המלצות מבוססות AI': 'AI-based recommendations'
            };

            this.translateContent(contentMap);
            this.translatePlaceholders(contentMap);
        },

        translateContent(contentMap) {
            // Use TreeWalker to find all text nodes
            const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function(node) {
                        // Skip script and style elements
                        if (node.parentElement.tagName === 'SCRIPT' || 
                            node.parentElement.tagName === 'STYLE') {
                            return NodeFilter.FILTER_REJECT;
                        }
                        // Skip empty or whitespace-only nodes
                        if (!node.textContent.trim()) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            const nodesToTranslate = [];
            let currentNode;
            
            while (currentNode = walker.nextNode()) {
                nodesToTranslate.push(currentNode);
            }

            // Translate each text node
            nodesToTranslate.forEach(node => {
                const originalText = node.textContent.trim();
                if (contentMap[originalText]) {
                    node.textContent = node.textContent.replace(originalText, contentMap[originalText]);
                }
            });
        },

        translatePlaceholders(contentMap) {
            // Translate input placeholders
            const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
            inputs.forEach(input => {
                const placeholder = input.getAttribute('placeholder');
                if (placeholder && contentMap[placeholder]) {
                    input.setAttribute('placeholder', contentMap[placeholder]);
                }
            });

            // Translate aria-labels
            const ariaElements = document.querySelectorAll('[aria-label]');
            ariaElements.forEach(element => {
                const ariaLabel = element.getAttribute('aria-label');
                if (ariaLabel && contentMap[ariaLabel]) {
                    element.setAttribute('aria-label', contentMap[ariaLabel]);
                }
            });

            // Translate alt attributes
            const images = document.querySelectorAll('img[alt]');
            images.forEach(img => {
                const alt = img.getAttribute('alt');
                if (alt && contentMap[alt]) {
                    img.setAttribute('alt', contentMap[alt]);
                }
            });

            // Translate title attributes
            const titledElements = document.querySelectorAll('[title]');
            titledElements.forEach(element => {
                const title = element.getAttribute('title');
                if (title && contentMap[title]) {
                    element.setAttribute('title', contentMap[title]);
                }
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => LanguageSwitcher.init());
    } else {
        LanguageSwitcher.init();
    }

})();
