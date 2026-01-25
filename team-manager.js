// Team Manager - ClubRRRR Admin Panel
(function() {
    'use strict';

    // Storage key
    const STORAGE_KEY = 'clubrrrr_instructors';

    // Default instructors
    const defaultInstructors = [
        {
            name: 'נועם בן נון',
            course: 'Wholesale',
            bio: 'מומחה לאיתור עסקאות נדל"ן משתלמות עם ניסיון של עשרות עסקאות מוצלחות',
            image: 'https://via.placeholder.com/300x300/1a1a1a/DFB249?text=נועם+בן+נון',
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'ברד ושלי זריהן',
            course: 'Tax Sale',
            bio: 'מומחים בתחום Tax Sale עם ניסיון רב שנים ומאות עסקאות מוצלחות',
            image: 'https://via.placeholder.com/300x300/1a1a1a/DFB249?text=ברד+ושלי+זריהן',
            linkedin: '#',
            instagram: '#'
        }
    ];

    // Initialize storage if empty
    function initStorage() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultInstructors));
        }
    }

    // Get all instructors
    function getInstructors() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    // Save instructors
    function saveInstructors(instructors) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(instructors));
    }

    // Load and display instructors
    window.loadInstructors = function() {
        const grid = document.getElementById('instructorsGrid');
        const instructors = getInstructors();

        if (instructors.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-gray);">
                    <i class="fas fa-users" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <p>אין מרצים להצגה. לחץ על "הוסף מרצה" כדי להתחיל.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = instructors.map((instructor, index) => `
            <div class="instructor-item">
                <div class="instructor-image-preview">
                    ${instructor.image 
                        ? `<img src="${instructor.image}" alt="${instructor.name}">`
                        : `<i class="fas fa-user"></i>`
                    }
                </div>
                <div class="instructor-name">${instructor.name}</div>
                <div class="instructor-course">${instructor.course}</div>
                <div class="instructor-actions">
                    <button class="edit-btn" onclick="editInstructor(${index})">
                        <i class="fas fa-edit"></i> ערוך
                    </button>
                    <button class="delete-btn" onclick="deleteInstructor(${index})">
                        <i class="fas fa-trash"></i> מחק
                    </button>
                </div>
            </div>
        `).join('');
    };

    // Edit instructor
    window.editInstructor = function(index) {
        const instructors = getInstructors();
        const instructor = instructors[index];

        document.getElementById('modalTitle').textContent = 'ערוך מרצה';
        document.getElementById('instructorIndex').value = index;
        document.getElementById('instructorName').value = instructor.name;
        document.getElementById('courseName').value = instructor.course;
        document.getElementById('instructorBio').value = instructor.bio;
        document.getElementById('imageUrl').value = instructor.image;
        document.getElementById('linkedinUrl').value = instructor.linkedin || '';
        document.getElementById('instagramUrl').value = instructor.instagram || '';

        document.getElementById('instructorModal').classList.add('show');
    };

    // Delete instructor
    window.deleteInstructor = function(index) {
        const instructors = getInstructors();
        const instructor = instructors[index];

        if (confirm(`האם אתה בטוח שברצונך למחוק את ${instructor.name}?`)) {
            instructors.splice(index, 1);
            saveInstructors(instructors);
            loadInstructors();
            updateWebsite();
            
            // Show success message
            showNotification('המרצה נמחק בהצלחה!', 'success');
        }
    };

    // Form submission
    document.getElementById('instructorForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const index = document.getElementById('instructorIndex').value;
        const instructor = {
            name: document.getElementById('instructorName').value,
            course: document.getElementById('courseName').value,
            bio: document.getElementById('instructorBio').value,
            image: document.getElementById('imageUrl').value,
            linkedin: document.getElementById('linkedinUrl').value || '#',
            instagram: document.getElementById('instagramUrl').value || '#'
        };

        const instructors = getInstructors();

        if (index === '') {
            // Add new
            instructors.push(instructor);
            showNotification('המרצה נוסף בהצלחה!', 'success');
        } else {
            // Update existing
            instructors[parseInt(index)] = instructor;
            showNotification('המרצה עודכן בהצלחה!', 'success');
        }

        saveInstructors(instructors);
        loadInstructors();
        updateWebsite();
        closeModal();
    });

    // Update the main website
    function updateWebsite() {
        // This function would update the web_PM__index.html file
        // For now, we'll show instructions to the admin
        console.log('Website updated with new instructor data');
        
        // In a real implementation, this would use an API to update the HTML file
        // For this demo, we're using localStorage and manual updates
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? 'rgba(50, 255, 50, 0.9)' : 'rgba(255, 50, 50, 0.9)'};
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            z-index: 10001;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            animation: slideDown 0.3s ease;
        `;
        notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Initialize
    initStorage();
})();

// Export data (for manual HTML update)
window.exportInstructorsHTML = function() {
    const instructors = JSON.parse(localStorage.getItem('clubrrrr_instructors') || '[]');
    
    const html = instructors.map(instructor => `
                <!-- ${instructor.name} -->
                <div class="team-member">
                    <div class="team-member-image">
                        <img src="${instructor.image}" alt="${instructor.name}" class="instructor-photo">
                        <div class="team-overlay">
                            <div class="team-social">
                                <a href="${instructor.linkedin}" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                                <a href="${instructor.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="team-member-info">
                        <h3 class="instructor-name">${instructor.name}</h3>
                        <p class="instructor-course">${instructor.course}</p>
                        <p class="instructor-bio">${instructor.bio}</p>
                    </div>
                </div>
    `).join('\n');

    console.log('=== Copy this HTML to web_PM__index.html ===');
    console.log(html);
    console.log('=== End of HTML ===');
    
    // Copy to clipboard
    navigator.clipboard.writeText(html).then(() => {
        alert('ה-HTML הועתק ללוח! הדבק אותו ב-web_PM__index.html בתוך <div class="team-grid">');
    });

    return html;
};
