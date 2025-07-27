// Course page access control and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Access code mapping for courses
    const accessCodes = {
        'pinduoduo.html': 'pinduoduo2025',
        '1688.html': 'import1688',
        'alibaba.html': 'alibaba350'
    };

    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    const requiredCode = accessCodes[currentPage];

    // Get code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const providedCode = urlParams.get('code');

    // Show loading screen initially
    document.getElementById('loadingScreen').style.display = 'flex';

    // Simulate loading and verify access
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        
        if (providedCode === requiredCode) {
            // Access granted
            document.getElementById('courseContent').style.display = 'block';
            
            // Store access in sessionStorage for this session
            sessionStorage.setItem(`access_${currentPage}`, 'granted');
            
            // Initialize course functionality
            initializeCourse();
        } else {
            // Check if user had previous access in this session
            const previousAccess = sessionStorage.getItem(`access_${currentPage}`);
            
            if (previousAccess === 'granted') {
                document.getElementById('courseContent').style.display = 'block';
                initializeCourse();
            } else {
                // Access denied
                document.getElementById('accessDenied').style.display = 'flex';
            }
        }
    }, 2000);
});

// Initialize course functionality after access is granted
function initializeCourse() {
    // Progress tracking
    initializeProgressTracking();
    
    // Video player functionality
    initializeVideoPlayers();
    
    // Module navigation
    initializeModuleNavigation();
    
    // Resource downloads
    initializeResourceDownloads();
    
    // Smooth scrolling for internal links
    initializeSmoothScrolling();
    
    // Course completion tracking
    initializeCourseCompletion();
}

// Progress tracking system
function initializeProgressTracking() {
    const courseProgressBar = document.getElementById('courseProgress');
    if (!courseProgressBar) return;

    // Get stored progress or start at 0
    const currentPage = window.location.pathname.split('/').pop();
    const storedProgress = localStorage.getItem(`progress_${currentPage}`) || 0;
    
    updateProgressBar(storedProgress);
    
    // Track lesson completion
    const lessons = document.querySelectorAll('.lesson-list li');
    lessons.forEach((lesson, index) => {
        lesson.addEventListener('click', function() {
            markLessonComplete(lesson, index);
            updateCourseProgress();
        });
    });
}

// Update progress bar
function updateProgressBar(progress) {
    const progressBar = document.getElementById('courseProgress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '% Complete';
        
        // Change color based on progress
        if (progress >= 100) {
            progressBar.className = 'progress-bar bg-success';
        } else if (progress >= 50) {
            progressBar.className = 'progress-bar bg-warning';
        } else {
            progressBar.className = 'progress-bar bg-primary';
        }
    }
}

// Mark lesson as complete
function markLessonComplete(lesson, index) {
    if (!lesson.classList.contains('completed')) {
        lesson.classList.add('completed');
        lesson.style.opacity = '0.7';
        lesson.style.textDecoration = 'line-through';
        
        // Add checkmark
        const icon = lesson.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-check-circle text-success me-2';
        }
        
        // Store completion
        const currentPage = window.location.pathname.split('/').pop();
        const completedLessons = JSON.parse(localStorage.getItem(`completed_${currentPage}`) || '[]');
        if (!completedLessons.includes(index)) {
            completedLessons.push(index);
            localStorage.setItem(`completed_${currentPage}`, JSON.stringify(completedLessons));
        }
    }
}

// Update overall course progress
function updateCourseProgress() {
    const currentPage = window.location.pathname.split('/').pop();
    const totalLessons = document.querySelectorAll('.lesson-list li').length;
    const completedLessons = JSON.parse(localStorage.getItem(`completed_${currentPage}`) || '[]');
    
    const progress = (completedLessons.length / totalLessons) * 100;
    updateProgressBar(progress);
    
    // Store progress
    localStorage.setItem(`progress_${currentPage}`, progress);
}

// Load completed lessons on page load
function loadCompletedLessons() {
    const currentPage = window.location.pathname.split('/').pop();
    const completedLessons = JSON.parse(localStorage.getItem(`completed_${currentPage}`) || '[]');
    
    completedLessons.forEach(index => {
        const lesson = document.querySelectorAll('.lesson-list li')[index];
        if (lesson) {
            markLessonComplete(lesson, index);
        }
    });
    
    updateCourseProgress();
}

// Initialize video players (if any)
function initializeVideoPlayers() {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        video.addEventListener('ended', function() {
            // Mark associated lesson as complete
            const lessonItem = this.closest('.lesson-list li');
            if (lessonItem) {
                const lessons = Array.from(document.querySelectorAll('.lesson-list li'));
                const index = lessons.indexOf(lessonItem);
                markLessonComplete(lessonItem, index);
                updateCourseProgress();
            }
        });
    });
}

// Module navigation enhancement
function initializeModuleNavigation() {
    const moduleButtons = document.querySelectorAll('.accordion-button');
    moduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track module opening
            const moduleId = this.getAttribute('data-bs-target');
            console.log(`Module opened: ${moduleId}`);
            
            // You can add analytics tracking here
        });
    });
}

// Resource download functionality
function initializeResourceDownloads() {
    const downloadButtons = document.querySelectorAll('button[class*="btn"]:contains("Download"), button[class*="btn"]:contains("Access")');
    
    // Since we can't use :contains in vanilla JS, we'll iterate through buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.includes('Download') || 
            button.textContent.includes('Access') || 
            button.textContent.includes('Join') ||
            button.textContent.includes('Contact') ||
            button.textContent.includes('Get')) {
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show download/access confirmation
                const action = this.textContent.trim();
                showResourceAccessModal(action);
            });
        }
    });
}

// Show resource access modal
function showResourceAccessModal(action) {
    // Create modal dynamically
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Resource Access</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>You are about to ${action.toLowerCase()}. This feature will be available once you complete the current module.</p>
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Complete more lessons to unlock additional resources!
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="continueToResource()">Continue Learning</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Remove modal after it's hidden
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

// Continue to resource function
function continueToResource() {
    // Close modal and scroll to modules
    const modal = bootstrap.Modal.getInstance(document.querySelector('.modal'));
    modal.hide();
    
    // Scroll to modules section
    document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Course completion tracking
function initializeCourseCompletion() {
    // Check if course is completed
    const currentPage = window.location.pathname.split('/').pop();
    const progress = localStorage.getItem(`progress_${currentPage}`) || 0;
    
    if (progress >= 100) {
        showCourseCompletionCelebration();
    }
}

// Show course completion celebration
function showCourseCompletionCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center';
    celebration.style.cssText = 'z-index: 10000; background: rgba(0,0,0,0.8);';
    celebration.innerHTML = `
        <div class="text-center text-white">
            <i class="fas fa-trophy text-warning mb-4" style="font-size: 5rem;"></i>
            <h2 class="mb-3">Congratulations!</h2>
            <p class="lead mb-4">You have successfully completed this course!</p>
            <button class="btn btn-warning btn-lg" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-certificate me-2"></i>Get Certificate
            </button>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (celebration.parentElement) {
            celebration.remove();
        }
    }, 10000);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load completed lessons after a short delay to ensure access is granted
    setTimeout(loadCompletedLessons, 2500);
    
    // Add click tracking for start learning buttons
    const startButtons = document.querySelectorAll('button[class*="btn"]:contains("Start")');
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Start')) {
            button.addEventListener('click', function() {
                // Scroll to first module
                const firstModule = document.querySelector('#modules .accordion-item');
                if (firstModule) {
                    firstModule.scrollIntoView({ behavior: 'smooth' });
                    
                    // Auto-expand first module
                    const firstButton = firstModule.querySelector('.accordion-button');
                    if (firstButton && firstButton.classList.contains('collapsed')) {
                        firstButton.click();
                    }
                }
            });
        }
    });
});

// Add keyboard shortcuts for course navigation
document.addEventListener('keydown', function(e) {
    // ESC to close any open modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            bootstrap.Modal.getInstance(openModal).hide();
        }
    }
    
    // Space to toggle first accordion item
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const firstAccordion = document.querySelector('.accordion-button');
        if (firstAccordion) {
            firstAccordion.click();
        }
    }
});

// Export functions for global access
window.continueToResource = continueToResource;
window.markLessonComplete = markLessonComplete;
window.updateCourseProgress = updateCourseProgress;
