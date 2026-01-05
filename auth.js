// auth.js - Authentication Management System for ClubRRRR ACADEMY

const Auth = {
    // Check if user is logged in
    isLoggedIn() {
        const userData = localStorage.getItem('clubrrrrUser');
        return userData !== null;
    },

    // Get current logged-in user
    getCurrentUser() {
        const userData = localStorage.getItem('clubrrrrUser');
        return userData ? JSON.parse(userData) : null;
    },

    // Save user data after login
    login(userData, rememberMe = false) {
        const storage = rememberMe ? localStorage : sessionStorage;
        
        // Create user object
        const user = {
            id: userData.id || Date.now(),
            email: userData.email,
            firstName: userData.firstName || 'תלמיד',
            lastName: userData.lastName || 'חדש',
            loginMethod: userData.loginMethod || 'email', // 'email' or 'google'
            loginDate: new Date().toISOString()
        };

        // Save to storage
        localStorage.setItem('clubrrrrUser', JSON.stringify(user));
        
        // Save session token
        localStorage.setItem('clubrrrrToken', this.generateToken());

        return user;
    },

    // Logout
    logout() {
        localStorage.removeItem('clubrrrrUser');
        localStorage.removeItem('clubrrrrToken');
        sessionStorage.clear();
    },

    // Generate simple token (for demo purposes - in production use JWT from backend)
    generateToken() {
        return btoa(Date.now() + Math.random().toString(36));
    },

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Validate password strength
    validatePassword(password) {
        // At least 6 characters
        if (password.length < 6) {
            return { valid: false, message: 'הסיסמה חייבת להכיל לפחות 6 תווים' };
        }
        return { valid: true, message: '' };
    },

    // Simulated registration (since no backend yet)
    async register(email, password, firstName, lastName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Check if user already exists
                const existingUsers = JSON.parse(localStorage.getItem('clubrrrrUsers') || '[]');
                const userExists = existingUsers.find(u => u.email === email);

                if (userExists) {
                    reject({ message: 'המשתמש כבר קיים במערכת' });
                    return;
                }

                // Create new user
                const newUser = {
                    id: Date.now(),
                    email: email,
                    password: btoa(password), // Base64 encode (NOT secure - just for demo)
                    firstName: firstName,
                    lastName: lastName,
                    registeredDate: new Date().toISOString()
                };

                // Save user to local storage
                existingUsers.push(newUser);
                localStorage.setItem('clubrrrrUsers', JSON.stringify(existingUsers));

                resolve(newUser);
            }, 500);
        });
    },

    // Simulated login with email/password
    async loginWithEmail(email, password, rememberMe = false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUsers = JSON.parse(localStorage.getItem('clubrrrrUsers') || '[]');
                const user = existingUsers.find(u => u.email === email && u.password === btoa(password));

                if (user) {
                    const userData = {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        loginMethod: 'email'
                    };
                    this.login(userData, rememberMe);
                    resolve(userData);
                } else {
                    reject({ message: 'אימייל או סיסמה שגויים' });
                }
            }, 500);
        });
    },

    // Simulated Google login (frontend only)
    async loginWithGoogle(googleUser) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = {
                    id: googleUser.uid || Date.now(),
                    email: googleUser.email,
                    firstName: googleUser.displayName?.split(' ')[0] || 'משתמש',
                    lastName: googleUser.displayName?.split(' ').slice(1).join(' ') || 'Google',
                    loginMethod: 'google'
                };
                this.login(userData, true);
                resolve(userData);
            }, 300);
        });
    },

    // Password reset (simulated)
    async resetPassword(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUsers = JSON.parse(localStorage.getItem('clubrrrrUsers') || '[]');
                const user = existingUsers.find(u => u.email === email);

                if (user) {
                    // In production, send email with reset link
                    resolve({ message: 'נשלח אליך אימייל עם הוראות לאיפוס הסיסמה' });
                } else {
                    reject({ message: 'האימייל לא קיים במערכת' });
                }
            }, 500);
        });
    },

    // Check authentication before page load
    requireAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    // Add protected page check
    protectPage() {
        document.addEventListener('DOMContentLoaded', () => {
            if (!this.isLoggedIn()) {
                window.location.href = 'login.html';
            }
        });
    }
};

// Auto-export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Auth;
}
