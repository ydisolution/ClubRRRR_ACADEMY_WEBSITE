# הוראות ניהול צוות המרצים - Team ClubRRRR

## 📋 איך להוסיף או לערוך מרצה

### 1. הכנת תמונת המרצה
- **גודל מומלץ**: 300x300 פיקסלים מינימום (רזולוציה גבוהה)
- **פורמט**: JPG או PNG
- **סוג צילום**: תמונה של החלק העליון של הגוף (head & shoulders)
- **רקע**: רצוי רקע אחיד או מקצועי
- **שמירה**: שמור את התמונה בתיקייה `images/instructors/` עם שם תיאורי
  - דוגמה: `noam-ben-nun.jpg`, `brad-shelly-zarihan.jpg`

### 2. עריכת קובץ ה-HTML

פתח את הקובץ `web_PM__index.html` וחפש את הסקשן:
```html
<!-- Team ClubRRRR Section -->
<section class="team-section" id="team">
```

### 3. מבנה כרטיס מרצה

כל מרצה הוא div עם המבנה הבא:

```html
<div class="team-member">
    <div class="team-member-image">
        <img src="./images/instructors/שם-הקובץ.jpg" alt="שם המרצה" class="instructor-photo">
        <div class="team-overlay">
            <div class="team-social">
                <a href="לינק-לינקדאין" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="לינק-אינסטגרם" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <div class="team-member-info">
        <h3 class="instructor-name">שם המרצה</h3>
        <p class="instructor-course">שם הקורס</p>
        <p class="instructor-bio">תיאור קצר על המרצה והניסיון שלו</p>
    </div>
</div>
```

### 4. שדות לעריכה

#### תמונה:
```html
<img src="./images/instructors/noam-ben-nun.jpg" alt="נועם בן נון">
```
- `src`: הנתיב לתמונה
- `alt`: שם המרצה (חשוב לנגישות)

#### שם המרצה:
```html
<h3 class="instructor-name">נועם בן נון</h3>
```

#### שם הקורס:
```html
<p class="instructor-course">Wholesale</p>
```

#### תיאור ביוגרפי:
```html
<p class="instructor-bio">מומחה לאיתור עסקאות נדל"ן משתלמות עם ניסיון של עשרות עסקאות מוצלחות</p>
```

#### לינקים למדיה חברתית:
```html
<a href="https://linkedin.com/in/username" aria-label="LinkedIn">
<a href="https://instagram.com/username" aria-label="Instagram">
```

### 5. דוגמה מלאה - נועם בן נון

```html
<div class="team-member">
    <div class="team-member-image">
        <img src="./images/instructors/noam-ben-nun.jpg" alt="נועם בן נון" class="instructor-photo">
        <div class="team-overlay">
            <div class="team-social">
                <a href="https://linkedin.com/in/noam-ben-nun" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/noam_ben_nun" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="team-member-info">
        <h3 class="instructor-name">נועם בן נון</h3>
        <p class="instructor-course">Wholesale</p>
        <p class="instructor-bio">מומחה לאיתור עסקאות נדל"ן משתלמות עם ניסיון של עשרות עסקאות מוצלחות. נועם מלמד איך לזהות הזדמנויות ולבצע עסקאות רווחיות ללא צורך בהון רב.</p>
    </div>
</div>
```

### 6. להוסיף מרצה חדש

1. העתק את כל ה-div של `team-member`
2. הדבק אותו לפני ה-`</div>` הסוגר של `team-grid`
3. עדכן את כל השדות (תמונה, שם, קורס, תיאור, לינקים)
4. שמור את הקובץ

### 7. למחוק מרצה

מחק את כל ה-div של `team-member` הספציפי שתרצה להסיר.

### 8. תרגום לאנגלית

אם יש צורך להוסיף תרגום לאנגלית, פתח את `language-switcher.js` וחפש את הסקשן:
```javascript
// TEAM SECTION
```

הוסף את התרגומים בפורמט:
```javascript
'שם המרצה בעברית': 'Instructor Name in English',
'תיאור בעברית': 'Description in English',
```

### 9. טיפים נוספים

#### גודל התמונות
- וודא שכל התמונות באותו גודל לאחידות ויזואלית
- השתמש בכלי כמו Photoshop, GIMP, או online image resizer

#### איכות תמונה
- תמונות ברזולוציה גבוהה נראות מקצועיות יותר
- הימנע מתמונות מטושטשות או בעלות תאורה לא טובה

#### תיאור ביוגרפי
- שמור על אורך אחיד (2-3 שורות)
- הדגש את הניסיון והמומחיות
- השתמש בשפה מקצועית אך נגישה

#### לינקים חברתיים
- וודא שהלינקים תקינים ופעילים
- אפשר להוסיף עוד פלטפורמות (Facebook, Twitter, etc.)
- להסרת לינק: פשוט מחק את השורה המתאימה

### 10. בדיקה אחרי שינויים

1. שמור את הקובץ
2. רענן את הדפדפן (Ctrl+F5 למחיקת cache)
3. בדוק שהתמונות נטענות נכון
4. בדוק שהלינקים עובדים
5. בדוק את התצוגה גם במובייל

---

## 🎨 מבנה התיקיות המומלץ

```
website/
├── images/
│   └── instructors/
│       ├── noam-ben-nun.jpg
│       ├── brad-shelly-zarihan.jpg
│       ├── instructor-3.jpg
│       ├── instructor-4.jpg
│       ├── instructor-5.jpg
│       └── instructor-6.jpg
├── web_PM__index.html
└── language-switcher.js
```

---

## ❓ שאלות נפוצות

**ש: האם אני צריך לדעת קוד כדי לערוך?**
ת: לא! פשוט עקוב אחרי ההוראות והחלף את הטקסטים והנתיבים.

**ש: מה אם התמונה לא מופיעה?**
ת: בדוק שהנתיב נכון ושהתמונה באמת קיימת בתיקייה.

**ש: איך אני משנה את סדר המרצים?**
ת: פשוט גרור את כל ה-div של המרצה למקום אחר בין שאר המרצים.

**ש: כמה מרצים אפשר להוסיף?**
ת: ללא הגבלה! הגריד יתאים את עצמו אוטומטית.

---

## 📞 תמיכה טכנית

לשאלות נוספות או בעיות טכניות, צור קשר עם מפתח האתר.
