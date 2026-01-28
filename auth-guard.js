// Authentication Guard - מערכת הגנה על דפים פרטיים
class AuthGuard {
    constructor() {
        this.protectedPages = [
            'dashboard.html',
            'user-dashboard.html',
            'academy.html',
            'events.html',
            'ai-tools.html',
            'community.html',
            'investments.html',
            'services.html',
            'profile.html',
            'admin-panel.html'
        ];
        this.init();
    }

    init() {
        // בדיקה אוטומטית בכל טעינת דף
        const currentPage = window.location.pathname.split('/').pop();
        
        if (this.protectedPages.includes(currentPage)) {
            if (!this.isAuthenticated()) {
                this.redirectToLogin();
            } else {
                this.loadUserData();
            }
        }
    }

    isAuthenticated() {
        const user = localStorage.getItem('clubrrrr_user');
        const token = localStorage.getItem('clubrrrr_token');
        return user && token;
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('clubrrrr_user');
        return userStr ? JSON.parse(userStr) : null;
    }

    login(email, password) {
        // סימולציה של התחברות (בייצור יהיה API call לשרת)
        const users = JSON.parse(localStorage.getItem('clubrrrr_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // שמירת פרטי המשתמש והטוקן
            const token = this.generateToken();
            localStorage.setItem('clubrrrr_user', JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role || 'member',
                avatar: user.avatar || this.generateAvatar(user.name),
                memberSince: user.memberSince || new Date().toISOString(),
                phone: user.phone || '',
                stats: user.stats || { investments: 0, courses: 0, events: 0, connections: 0 }
            }));
            localStorage.setItem('clubrrrr_token', token);
            return { success: true, user };
        }

        return { success: false, message: 'אימייל או סיסמה שגויים' };
    }

    // התחברות/רישום דרך Google (סימולציה פרונטלית)
    loginWithGoogle(googleUser) {
        const users = JSON.parse(localStorage.getItem('clubrrrr_users') || '[]');
        let user = users.find(u => u.email === googleUser.email);

        if (!user) {
            user = {
                id: this.generateId(),
                name: googleUser.displayName || 'משתמש Google',
                email: googleUser.email,
                password: '',
                role: 'member',
                avatar: this.generateAvatar(googleUser.displayName || 'G'),
                memberSince: new Date().toISOString(),
                phone: googleUser.phone || '',
                stats: { investments: 0, courses: 0, events: 0, connections: 0 }
            };
            users.push(user);
            localStorage.setItem('clubrrrr_users', JSON.stringify(users));
        }

        const token = this.generateToken();
        localStorage.setItem('clubrrrr_user', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            memberSince: user.memberSince,
            phone: user.phone || '',
            stats: user.stats
        }));
        localStorage.setItem('clubrrrr_token', token);

        return { success: true, user };
    }

    register(userData) {
        const users = JSON.parse(localStorage.getItem('clubrrrr_users') || '[]');
        
        // בדיקה אם המשתמש כבר קיים
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: 'משתמש עם אימייל זה כבר קיים' };
        }

        // יצירת משתמש חדש
        const newUser = {
            id: this.generateId(),
            name: userData.name,
            email: userData.email,
            password: userData.password, // בייצור צריך להצפין!
            phone: userData.phone || '',
            role: 'member',
            avatar: this.generateAvatar(userData.name),
            memberSince: new Date().toISOString(),
            stats: {
                investments: 0,
                courses: 0,
                events: 0,
                connections: 0
            }
        };

        users.push(newUser);
        localStorage.setItem('clubrrrr_users', JSON.stringify(users));

        // התחברות אוטומטית אחרי רישום
        return this.login(userData.email, userData.password);
    }

    logout() {
        localStorage.removeItem('clubrrrr_user');
        localStorage.removeItem('clubrrrr_token');
        window.location.href = 'web_PM__index.html';
    }

    redirectToLogin() {
        const currentPage = window.location.href;
        localStorage.setItem('clubrrrr_redirect', currentPage);
        window.location.href = 'login.html';
    }

    redirectAfterLogin() {
        const redirectUrl = localStorage.getItem('clubrrrr_redirect');
        localStorage.removeItem('clubrrrr_redirect');
        window.location.href = redirectUrl || 'user-dashboard.html';
    }

    loadUserData() {
        const user = this.getCurrentUser();
        if (!user) return;

        // עדכון פרטי המשתמש בממשק
        const userNameElements = document.querySelectorAll('.user-name');
        const userAvatarElements = document.querySelectorAll('.user-avatar');
        const userEmailElements = document.querySelectorAll('.user-email');

        userNameElements.forEach(el => el.textContent = user.name);
        userAvatarElements.forEach(el => {
            if (el.tagName === 'IMG') {
                el.src = user.avatar;
            } else {
                el.style.backgroundImage = `url(${user.avatar})`;
            }
        });
        userEmailElements.forEach(el => el.textContent = user.email);
    }

    generateToken() {
        return 'token_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
    }

    generateId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generateAvatar(name) {
        const initial = name ? name.charAt(0).toUpperCase() : 'U';
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // יצירת אווטר עם אות ראשונה
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="${color}"/>
                <text x="50" y="50" text-anchor="middle" dy=".35em" font-size="40" fill="white" font-family="Arial, sans-serif" font-weight="bold">${initial}</text>
            </svg>
        `)}`;
    }

    // פונקציות עזר לבדיקת הרשאות
    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    }

    isMember() {
        const user = this.getCurrentUser();
        return user && (user.role === 'member' || user.role === 'admin');
    }
}

// יצירת instance גלובלי
const authGuard = new AuthGuard();

// יצירת משתמש admin ברירת מחדל אם לא קיים
function createDefaultAdmin() {
    const users = JSON.parse(localStorage.getItem('clubrrrr_users') || '[]');
    const adminExists = users.find(u => u.role === 'admin');
    
    if (!adminExists) {
        const admin = {
            id: 'admin_' + Date.now(),
            name: 'Admin',
            email: 'admin@clubrrrr.com',
            password: 'admin123',
            phone: '',
            role: 'admin',
            avatar: authGuard.generateAvatar('Admin'),
            memberSince: new Date().toISOString(),
            stats: {
                investments: 0,
                courses: 0,
                events: 0,
                connections: 0
            }
        };
        users.push(admin);
        localStorage.setItem('clubrrrr_users', JSON.stringify(users));
        console.log('Admin user created: admin@clubrrrr.com / admin123');
    }
}

// יצירת admin בטעינת הדף
createDefaultAdmin();

// פונקציות גלובליות לשימוש בדפים
function logout() {
    authGuard.logout();
}

function getCurrentUser() {
    return authGuard.getCurrentUser();
}

function isAdmin() {
    return authGuard.isAdmin();
}
