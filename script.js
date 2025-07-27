// Initialize EmailJS
(function() {
    emailjs.init("nxzXBLtLz_RrrX1mv");
})();

// Global variables
let generatedRealOTP = "";

// OTP Generation and Sending Function
function sendRealOTP() {
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const course = document.getElementById("user_course").value;
    const mode = document.getElementById("user_mode").value;

    if (!name || !email || !course || !mode) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Generate 6-digit OTP
    generatedRealOTP = Math.floor(100000 + Math.random() * 900000).toString();

    const templateParams = {
        name: name,
        email: email,
        otp: generatedRealOTP,
        course: course,
        mode: mode
    };

    // Show loading state
    const sendButton = event.target;
    const originalText = sendButton.innerHTML;
    sendButton.innerHTML = '<div class="loading"></div> Sending...';
    sendButton.disabled = true;

    emailjs.send('service_sbijez1', 'template_qg809so', templateParams, 'nxzXBLtLz_RrrX1mv')
        .then(() => {
            alert("OTP sent to your email!");
            document.getElementById("verifySection").style.display = "block";
            document.getElementById("verifySection").scrollIntoView({ behavior: 'smooth' });
        })
        .catch((error) => {
            console.error("Failed to send OTP:", error);
            alert("Failed to send OTP. Please try again.");
        })
        .finally(() => {
            // Restore button state
            sendButton.innerHTML = originalText;
            sendButton.disabled = false;
        });
}

// OTP Verification Function
function verifyRealOTP() {
    const enteredOTP = document.getElementById("user_otp_input").value;
    const result = document.getElementById("otpResult");

    if (!enteredOTP) {
        result.textContent = "❌ Please enter the OTP.";
        result.style.color = "red";
        return;
    }

    if (enteredOTP === generatedRealOTP) {
        result.textContent = "✅ OTP verified! Redirecting...";
        result.style.color = "green";
        result.style.background = "rgba(40, 167, 69, 0.1)";
        result.style.padding = "10px";
        result.style.borderRadius = "5px";

        const name = document.getElementById("user_name").value;
        const email = document.getElementById("user_email").value;
        const course = document.getElementById("user_course").value;
        const mode = document.getElementById("user_mode").value;

        // Send confirmation to admin
        sendConfirmationToAdmin(name, email, course, mode);

        // Course redirect mapping
        const courseCodeMap = {
            "Pinduoduo": { page: "pinduoduo.html", code: "pinduoduo2025" },
            "1688": { page: "1688.html", code: "import1688" },
            "Alibaba": { page: "alibaba.html", code: "alibaba350" }
        };

        const target = courseCodeMap[course];
        if (target) {
            setTimeout(() => {
                window.location.href = `courses/${target.page}?code=${target.code}`;
            }, 2000);
        }
    } else {
        result.textContent = "❌ Incorrect OTP. Please try again.";
        result.style.color = "red";
        result.style.background = "rgba(220, 53, 69, 0.1)";
        result.style.padding = "10px";
        result.style.borderRadius = "5px";
    }
}

// Admin Notification Function
function sendConfirmationToAdmin(name, email, course, mode) {
    const time = new Date().toLocaleString();

    const params = {
        name,
        email,
        course,
        mode,
        time
    };

    emailjs.send('service_sbijez1', 'template_e0tz7jj', params, 'nxzXBLtLz_RrrX1mv')
        .then(() => {
            console.log("Admin notified successfully");
        })
        .catch((error) => {
            console.error("Admin notification error:", error);
        });
}

// Pre-order functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap modal
    const preorderModal = new bootstrap.Modal(document.getElementById('preorderModal'));
    
    // Add event listeners to pre-order buttons
    document.querySelectorAll('.btn-preorder').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            document.getElementById('selectedProduct').value = productName;
            document.querySelector('#preorderModal .modal-title').textContent = `Pre-Order: ${productName}`;
            preorderModal.show();
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to navigation items based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Pre-order form submission
function submitPreorder() {
    const form = document.getElementById('preorderForm');
    const formData = new FormData(form);
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const preorderData = {
        product: document.getElementById('selectedProduct').value,
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        quantity: document.getElementById('quantity').value,
        notes: document.getElementById('notes').value,
        timestamp: new Date().toLocaleString()
    };

    // You can integrate with EmailJS or your backend here
    console.log('Pre-order submitted:', preorderData);
    
    // For demo purposes, show success message
    alert('Pre-order submitted successfully! We will contact you soon.');
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('preorderModal')).hide();
    form.reset();
}

// Add loading animation to buttons
function addLoadingState(button, originalText) {
    button.innerHTML = '<div class="loading"></div> Processing...';
    button.disabled = true;
    
    return function() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Form input enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Auto-format phone numbers
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{1,3})/, '($1) $2');
            }
            this.value = value;
        });
    });

    // OTP input formatting
    const otpInput = document.getElementById('user_otp_input');
    if (otpInput) {
        otpInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
        
        otpInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyRealOTP();
            }
        });
    }
});

// Add visual feedback for form interactions
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });
    });
});
