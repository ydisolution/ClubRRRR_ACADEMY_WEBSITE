// Language Switcher Module for ClubRRRR Website - COMPREHENSIVE VERSION
(function() {
    'use strict';

    const LanguageSwitcher = {
        currentLang: 'he', // Default language
        
        init() {
            this.loadLanguage();
            this.createLanguageToggle();
            this.setupEventListeners();
            this.applyLanguage(this.currentLang);
        },

        loadLanguage() {
            // Load language from localStorage or default to Hebrew
            const savedLang = localStorage.getItem('clubrrrr_language') || 'he';
            this.currentLang = savedLang;
        },

        createLanguageToggle() {
            // Check if toggle already exists
            if (document.getElementById('language-toggle')) return;

            // Create language toggle button
            const toggleHTML = `
                <div id="language-toggle" class="language-toggle">
                    <button class="language-btn" id="languageBtn" aria-label="Switch Language">
                        <i class="fas fa-language"></i>
                        <span id="currentLangText">${this.currentLang === 'he' ? 'עברית' : 'English'}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="language-dropdown" id="languageDropdown">
                        <button class="language-option" data-lang="he">
                            <span class="flag">🇮🇱</span>
                            <span>עברית</span>
                        </button>
                        <button class="language-option" data-lang="en">
                            <span class="flag">🇺🇸</span>
                            <span>English</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', toggleHTML);
        },

        setupEventListeners() {
            const languageBtn = document.getElementById('languageBtn');
            const languageDropdown = document.getElementById('languageDropdown');
            const languageOptions = document.querySelectorAll('.language-option');

            // Toggle dropdown
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                languageDropdown.classList.remove('show');
            });

            // Language selection
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const selectedLang = option.getAttribute('data-lang');
                    this.switchLanguage(selectedLang);
                });
            });
        },

        switchLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('clubrrrr_language', lang);
            this.applyLanguage(lang);
            
            // Update button text
            const currentLangText = document.getElementById('currentLangText');
            if (currentLangText) {
                currentLangText.textContent = lang === 'he' ? 'עברית' : 'English';
            }

            // Close dropdown
            const languageDropdown = document.getElementById('languageDropdown');
            if (languageDropdown) {
                languageDropdown.classList.remove('show');
            }
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

            // Hebrew to English mapping - COMPREHENSIVE
            const contentMap = {
                // ========== NAVIGATION ==========
                'אזור אישי': 'Personal Area',
                'אודות': 'About',
                'הבוגרים שלנו': 'Our Graduates',
                'תוכן': 'Content',
                'פודקאסט': 'Podcast',
                'קלאברים מארחים': 'Clubbers Host',
                'קהילה': 'Community',
                'אירועים': 'Events',
                'צור קשר': 'Contact',
                'חזרה לדף הבית': 'Back to Homepage',
                
                // ========== ACADEMY DROPDOWN ==========
                'מסלולי הלימוד המלאים': 'Complete Learning Tracks',
                'מנטורינג - לימוד צמוד עם איתי ודרור': 'Mentoring - Personal Guidance with Itai & Dror',
                'ClubRRRR 360 - תכנית מקיפה': 'ClubRRRR 360 - Comprehensive Program',
                'קורס Wholesale - איתור עסקאות': 'Wholesale Course - Deal Finding',
                'Creative Financing - מימון יצירתי': 'Creative Financing',
                
                // ========== HERO SECTIONS ==========
                'ברוכים הבאים לאקדמיה הגדולה בישראל ללימודי יזמות נדל"ן בארה"ב': 'Welcome to Israel\'s largest academy for US real estate entrepreneurship',
                
                // ========== ABOUT SECTION ==========
                'אודות איתי ודרור': 'About Itai & Dror',
                'אנחנו איתי ודרור, ובחמש השנים האחרונות לקחנו הון עצמי של 250k והפכנו אותו לפורטפוליו של עשרות נכסים באמצעות יזמות נדל"ן בארה"ב.': 'We are Itai and Dror, and over the past five years we took $250k in equity and turned it into a portfolio of dozens of properties through real estate entrepreneurship in the USA.',
                'יצרנו את פודקאסט קלאברררר - נדל"ן בארה"ב, יזמות וטכנולוגיה שמספק טעימה מעולם היזמות נדל"ן ואסטרטגיות מתקדמות.': 'We created the ClubRRRR Podcast - US Real Estate, Entrepreneurship and Technology, providing a taste of the real estate entrepreneurship world and advanced strategies.',
                'והקמנו את תכנית קלאבר 360 - התכנית ללימודי יזמות נדל"ן בארה"ב המקיפה והמתקדמת ביותר. תכנית שמשלבת פרקטיקה, אסטרטגיות ואימוץ טכנולוגיות AI מתקדמות לאיתור וביצוע עסקאות נדל"ן בונזה!': 'And we established the Clubber 360 program - the most comprehensive and advanced program for US real estate entrepreneurship. A program that combines practice, strategies and adoption of advanced AI technologies for finding and executing real estate deals!',
                'קרא עוד על איתי ודרור': 'Read more about Itai & Dror',
                
                // ========== STATISTICS ==========
                'פרקים': 'Episodes',
                'בפודקאסט': 'in Podcast',
                'בוגרי': 'Graduates of',
                'BRRRR': 'BRRRR',
                'שעות תוכן': 'Hours of Content',
                'מוקלט': 'Recorded',
                'מחזורים': 'Cohorts',
                'מעל 200 אלף': 'Over 200K',
                'צפיות': 'Views',
                
                // ========== PROGRAMS SECTION ==========
                'קורסי': 'Courses by',
                'מנטורינג - לימוד צמוד': 'Mentoring - Personal Guidance',
                'ליווי אישי ומקצועי מאיתי ודרור. קבל הדרכה אישית, ייעוץ אסטרטגי ותמיכה ישירה בכל שלב בדרך להצלחה שלך בעולם הנדל"ן. למידה צמודה עם המומחים.': 'Personal and professional guidance from Itai and Dror. Get individual mentoring, strategic consultation and direct support at every step on your path to success in the real estate world. Intimate learning with the experts.',
                'למד עוד': 'Learn More',
                'התכנית המקיפה והמתקדמת ביותר ללימודי יזמות נדל"ן בארה"ב. תכנית שמשלבת פרקטיקה, אסטרטגיות ואימוץ טכנולוגיות AI מתקדמות לאיתור וביצוע עסקאות נדל"ן.': 'The most comprehensive and advanced program for US real estate entrepreneurship. A program that combines practice, strategies and adoption of advanced AI technologies for finding and executing real estate deals.',
                'קורס Wholesale': 'Wholesale Course',
                'איך להיות Wholesaler מצליח שמאתר עסקאות משתלמות, עולה על חוזים ומרוויח מהעברת זכויות. למד את כל השיטות לאיתור נכסים, ניתוח עסקאות, בניית רשת קונים ומערכות CRM.': 'How to be a successful Wholesaler who finds profitable deals, gets under contract and profits from assigning rights. Learn all the methods for finding properties, deal analysis, building a buyer list and CRM systems.',
                'אסטרטגיות מתקדמות לרכישת נכסים בצורה יצירתית ללא הון: Sub2, Seller Financing, Novation, Pad Split ועוד. למד איך לרכוש נדל"ן עם מינימום הון, פריסת תשלום ומבני עסקה חכמים.': 'Advanced strategies for acquiring properties creatively without capital: Sub2, Seller Financing, Novation, Pad Split and more. Learn how to purchase real estate with minimum capital, payment plans and smart deal structures.',
                
                // ========== COMMUNITY SECTION ==========
                'הצטרף לקהילה': 'Join the Community',
                '"קהילה" הפכה לאחת מהמילים כמו "סינרגיה" או "אופטימלי", אבל ברגע שתצטרף לקהילה הזו של Go-Givers, אתה באמת נכנס לרשת של אנשים בעלי חשיבה דומה שנמצאים במסלול מהיר להצלחה.': '"Community" has become one of those words like "synergy" or "optimal", but once you join this community of Go-Givers, you truly enter a network of like-minded people who are on the fast track to success.',
                
                // ========== NEWSLETTER SECTION ==========
                'קבל עדכונים מאיתי ודרור': 'Get Updates from Itai & Dror',
                'שם מלא': 'Full Name',
                'מייל': 'Email',
                'מספר טלפון': 'Phone Number',
                'קבל/י עדכונים': 'Get Updates',
                
                // ========== FOOTER ==========
                'בונים עושר, יוצרים הזדמנויות, משנים חיים.': 'Building wealth, creating opportunities, changing lives.',
                'כל הזכויות שמורות.': 'All rights reserved.',
                
                // ========== WHOLESALE PAGE ==========
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
                'מעוניין לקבל פרטים נוספים?': 'Interested in receiving more details?',
                'השאר פרטים ונחזור אליך לתיאום פגישת ייעוץ אישית': 'Leave details and we\'ll get back to you to schedule a personal consultation meeting',
                'הכנס את שמך המלא': 'Enter your full name',
                'כתובת אימייל': 'Email Address',
                'הכנס את כתובת האימייל שלך': 'Enter your email address',
                'הכנס את מספר הטלפון שלך': 'Enter your phone number',
                'מה מעניין אותך בקורס? (אופציונלי)': 'What interests you about the course? (Optional)',
                'שלח/י': 'Submit',
                
                // ========== ACADEMY PAGE ==========
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
                
                // ========== ADDITIONAL CONTENT ==========
                '4+ אסטרטגיות מימון': '4+ Financing strategies',
                'מבנה עסקאות מורכבות': 'Complex deal structures',
                'משא ומתן עם מוכרים': 'Negotiating with sellers',
                'דוגמאות וחישובים מעשיים': 'Practical examples and calculations',
                
                // ========== FORM PLACEHOLDERS ==========
                'שם': 'Name',
                'טלפון': 'Phone',
                'הודעה': 'Message',
                'תנאי שימוש': 'Terms of Use',
                'מדיניות פרטיות': 'Privacy Policy'
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
