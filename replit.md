# Odisika Import - International Trade Solutions Website

## Overview

Odisika Import is a responsive business website for an international trade company that offers import/export services and professional courses on major Chinese e-commerce platforms (Pinduoduo, 1688, and Alibaba). The site features a modern design with course registration, OTP verification, and protected course content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Built with vanilla HTML, CSS, and JavaScript
- **Responsive Design**: Uses Bootstrap 5.3.0 for grid system and components, combined with TailwindCSS for utility classes
- **Single Page Application (SPA)**: Main landing page with smooth scrolling navigation
- **Protected Course Pages**: Separate HTML files with access control mechanisms

### Styling Framework
- **Bootstrap 5.3.0**: Primary framework for responsive grid, components, and utilities
- **TailwindCSS**: Utility-first CSS framework for custom styling
- **Font Awesome 6.4.0**: Icon library for visual elements
- **Custom CSS**: Additional styling in `styles.css` with CSS variables and animations

## Key Components

### 1. Main Landing Page (`index.html`)
- Hero section with company branding
- Products showcase section
- Course registration form with OTP verification
- Contact information and navigation

### 2. Course Registration System
- **Form Validation**: Client-side validation for email format and required fields
- **OTP Generation**: 6-digit random number generation
- **Email Integration**: EmailJS service for OTP delivery
- **Real-time Verification**: Instant OTP verification with user feedback

### 3. Protected Course Pages
- **Access Control**: URL parameter-based authentication (`?code=`)
- **Session Management**: Browser sessionStorage for maintaining access
- **Loading States**: Visual feedback during access verification
- **Access Codes**: 
  - Pinduoduo: `pinduoduo2025`
  - 1688: `import1688` 
  - Alibaba: `alibaba350`

### 4. Course Content Structure
Each course page (`courses/` directory) includes:
- Loading screen with verification process
- Access denied screen for unauthorized users
- Main course content (hidden until access granted)
- Consistent navigation and branding

## Data Flow

### Course Registration Flow
1. User fills registration form (name, email, course, mode)
2. Client-side validation checks all fields and email format
3. 6-digit OTP generated and stored in global variable
4. EmailJS sends OTP to user's email address
5. User enters OTP for verification
6. On successful verification, access code is provided
7. User redirected to course page with access code in URL

### Course Access Flow
1. User visits course page with `?code=` parameter
2. JavaScript checks provided code against required code
3. Loading screen displays during verification (2-second delay)
4. Access granted: Course content shows, session stored
5. Access denied: Error screen with registration link

## External Dependencies

### CDN Dependencies
- **Bootstrap 5.3.0**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- **TailwindCSS**: `https://cdn.tailwindcss.com`
- **Font Awesome 6.4.0**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- **EmailJS**: `https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`

### EmailJS Configuration
- **Service ID**: `service_sbijez1`
- **OTP Template ID**: `template_qg809so`
- **Admin Notification Template ID**: `template_e0tz7jj`
- **Pre-order Template ID**: `template_preorder` (needs to be created)
- **Public Key**: `nxzXBLtLz_RrrX1mv`

### Development Dependencies
- **http-server**: Local development server (Node.js package)

## Deployment Strategy

### Static Hosting
- **Architecture**: Static file hosting suitable for any web server
- **No Backend Required**: All functionality runs client-side
- **CDN Delivery**: External dependencies loaded from CDNs
- **SEO Optimized**: Meta tags, descriptions, and semantic HTML structure

### Development Setup
1. Install dependencies: `npm install`
2. Serve locally with http-server
3. All files can be deployed to any static hosting service

### File Structure
```
/
├── index.html              # Main landing page
├── styles.css              # Custom styling
├── script.js               # Main functionality
├── package.json            # Node.js dependencies
├── courses/                # Protected course content
│   ├── pinduoduo.html     # Pinduoduo course
│   ├── 1688.html          # 1688 course
│   ├── alibaba.html       # Alibaba course
│   └── course-script.js   # Course access control
└── attached_assets/        # Documentation
```

### Security Considerations
- **Client-side Access Control**: Access codes are hardcoded in JavaScript (not secure for production)
- **Session Storage**: Access maintained only during browser session
- **Email Verification**: OTP verification adds basic security layer
- **No Sensitive Data**: No backend database or user data storage

### Recommended Improvements for Production
- Implement server-side authentication
- Use secure token-based access control
- Add user database for registration tracking
- Implement proper course progress tracking
- Add payment integration for course purchases