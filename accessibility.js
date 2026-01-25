// Accessibility Module for ClubRRRR Website
(function() {
    'use strict';

    const AccessibilityModule = {
        settings: {
            fontSize: 100,
            contrast: 'normal',
            grayscale: false,
            highlightLinks: false,
            readableFont: false
        },

        init() {
            this.createWidget();
            this.loadSettings();
            this.attachEventListeners();
        },

        createWidget() {
            // Create accessibility button
            const accessBtn = document.createElement('button');
            accessBtn.id = 'accessibility-btn';
            accessBtn.innerHTML = '<i class="fas fa-universal-access"></i>';
            accessBtn.setAttribute('aria-label', 'פתח תפריט נגישות');
            accessBtn.title = 'נגישות';
            document.body.appendChild(accessBtn);

            // Create accessibility panel
            const panel = document.createElement('div');
            panel.id = 'accessibility-panel';
            panel.innerHTML = `
                <div class="accessibility-header">
                    <h3><i class="fas fa-universal-access"></i> נגישות</h3>
                    <button id="close-accessibility" aria-label="סגור תפריט נגישות">×</button>
                </div>
                <div class="accessibility-content">
                    <div class="accessibility-group">
                        <h4>גודל טקסט</h4>
                        <div class="accessibility-controls">
                            <button class="access-btn" data-action="decreaseFont" aria-label="הקטן טקסט">
                                <i class="fas fa-minus"></i> הקטן
                            </button>
                            <span id="font-size-display">100%</span>
                            <button class="access-btn" data-action="increaseFont" aria-label="הגדל טקסט">
                                <i class="fas fa-plus"></i> הגדל
                            </button>
                        </div>
                    </div>

                    <div class="accessibility-group">
                        <h4>תצוגה</h4>
                        <button class="access-toggle" data-action="toggleContrast">
                            <i class="fas fa-adjust"></i> ניגודיות גבוהה
                            <span class="toggle-indicator"></span>
                        </button>
                        <button class="access-toggle" data-action="toggleGrayscale">
                            <i class="fas fa-palette"></i> גווני אפור
                            <span class="toggle-indicator"></span>
                        </button>
                        <button class="access-toggle" data-action="toggleHighlightLinks">
                            <i class="fas fa-link"></i> הדגש קישורים
                            <span class="toggle-indicator"></span>
                        </button>
                        <button class="access-toggle" data-action="toggleReadableFont">
                            <i class="fas fa-font"></i> גופן קריא
                            <span class="toggle-indicator"></span>
                        </button>
                    </div>

                    <div class="accessibility-group">
                        <button class="access-btn reset-btn" data-action="reset">
                            <i class="fas fa-undo"></i> אפס הכל
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(panel);
        },

        attachEventListeners() {
            const btn = document.getElementById('accessibility-btn');
            const panel = document.getElementById('accessibility-panel');
            const closeBtn = document.getElementById('close-accessibility');

            btn.addEventListener('click', () => this.togglePanel());
            closeBtn.addEventListener('click', () => this.togglePanel());

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (!panel.contains(e.target) && !btn.contains(e.target)) {
                    panel.classList.remove('active');
                }
            });

            // Action buttons
            document.querySelectorAll('[data-action]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const action = e.currentTarget.dataset.action;
                    this[action]();
                });
            });

            // Keyboard accessibility
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.togglePanel();
                }
            });
        },

        togglePanel() {
            const panel = document.getElementById('accessibility-panel');
            panel.classList.toggle('active');
        },

        increaseFont() {
            if (this.settings.fontSize < 150) {
                this.settings.fontSize += 10;
                this.applyFontSize();
            }
        },

        decreaseFont() {
            if (this.settings.fontSize > 80) {
                this.settings.fontSize -= 10;
                this.applyFontSize();
            }
        },

        applyFontSize() {
            document.documentElement.style.fontSize = this.settings.fontSize + '%';
            document.getElementById('font-size-display').textContent = this.settings.fontSize + '%';
            this.saveSettings();
        },

        toggleContrast() {
            const body = document.body;
            const btn = document.querySelector('[data-action="toggleContrast"]');
            
            if (this.settings.contrast === 'normal') {
                this.settings.contrast = 'high';
                body.classList.add('high-contrast');
                btn.classList.add('active');
            } else {
                this.settings.contrast = 'normal';
                body.classList.remove('high-contrast');
                btn.classList.remove('active');
            }
            this.saveSettings();
        },

        toggleGrayscale() {
            const body = document.body;
            const btn = document.querySelector('[data-action="toggleGrayscale"]');
            
            this.settings.grayscale = !this.settings.grayscale;
            
            if (this.settings.grayscale) {
                body.classList.add('grayscale');
                btn.classList.add('active');
            } else {
                body.classList.remove('grayscale');
                btn.classList.remove('active');
            }
            this.saveSettings();
        },

        toggleHighlightLinks() {
            const body = document.body;
            const btn = document.querySelector('[data-action="toggleHighlightLinks"]');
            
            this.settings.highlightLinks = !this.settings.highlightLinks;
            
            if (this.settings.highlightLinks) {
                body.classList.add('highlight-links');
                btn.classList.add('active');
            } else {
                body.classList.remove('highlight-links');
                btn.classList.remove('active');
            }
            this.saveSettings();
        },

        toggleReadableFont() {
            const body = document.body;
            const btn = document.querySelector('[data-action="toggleReadableFont"]');
            
            this.settings.readableFont = !this.settings.readableFont;
            
            if (this.settings.readableFont) {
                body.classList.add('readable-font');
                btn.classList.add('active');
            } else {
                body.classList.remove('readable-font');
                btn.classList.remove('active');
            }
            this.saveSettings();
        },

        reset() {
            this.settings = {
                fontSize: 100,
                contrast: 'normal',
                grayscale: false,
                highlightLinks: false,
                readableFont: false
            };
            
            document.body.classList.remove('high-contrast', 'grayscale', 'highlight-links', 'readable-font');
            document.documentElement.style.fontSize = '100%';
            document.getElementById('font-size-display').textContent = '100%';
            
            document.querySelectorAll('.access-toggle').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.saveSettings();
        },

        saveSettings() {
            localStorage.setItem('accessibilitySettings', JSON.stringify(this.settings));
        },

        loadSettings() {
            const saved = localStorage.getItem('accessibilitySettings');
            if (saved) {
                this.settings = JSON.parse(saved);
                this.applySettings();
            }
        },

        applySettings() {
            // Apply font size
            document.documentElement.style.fontSize = this.settings.fontSize + '%';
            document.getElementById('font-size-display').textContent = this.settings.fontSize + '%';

            // Apply contrast
            if (this.settings.contrast === 'high') {
                document.body.classList.add('high-contrast');
                document.querySelector('[data-action="toggleContrast"]').classList.add('active');
            }

            // Apply grayscale
            if (this.settings.grayscale) {
                document.body.classList.add('grayscale');
                document.querySelector('[data-action="toggleGrayscale"]').classList.add('active');
            }

            // Apply highlight links
            if (this.settings.highlightLinks) {
                document.body.classList.add('highlight-links');
                document.querySelector('[data-action="toggleHighlightLinks"]').classList.add('active');
            }

            // Apply readable font
            if (this.settings.readableFont) {
                document.body.classList.add('readable-font');
                document.querySelector('[data-action="toggleReadableFont"]').classList.add('active');
            }
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => AccessibilityModule.init());
    } else {
        AccessibilityModule.init();
    }
})();
