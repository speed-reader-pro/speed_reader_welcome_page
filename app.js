// Simple SPA Router
const routes = {
    '/': 'welcome',
    '/welcome': 'welcome',
    '/guide': 'guide'
};

const welcomeTemplate = `
    <section class="hero">
        <h1 class="title">Read faster with <span class="highlight">RSVP technology</span></h1>
    </section>

    <section class="steps">
        <div class="step">
            <div class="step-content">
                <h2>1. Pin the extension</h2>
                <p>Click the <strong>puzzle icon (1)</strong> in the top right of your browser, then click the <strong>pin icon (2)</strong> next to Speed Reader to keep it visible.</p>
            </div>
            <div class="step-image">
                <img src="images/step1-pin.png" alt="How to pin the extension">
            </div>
        </div>

        <div class="step">
            <div class="step-content">
                <h2>2. Click the extension icon to start</h2>
                <p>Click the <strong>Speed Reader icon (3)</strong> in your toolbar to start speed reading any text on the page.</p>
            </div>
            <div class="step-image">
                <img src="images/step2-open.png" alt="How to open the extension">
            </div>
        </div>
    </section>

    <div class="nav-actions">
        <a href="/guide" class="btn btn-secondary" data-link>
            View Guide
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
    </div>
`;

const guideTemplate = `
    <section class="hero">
        <h1 class="title">User <span class="highlight">Guide</span></h1>
        <p class="subtitle">Learn how to use Speed Reader effectively</p>
    </section>

    <section class="guide-content">
        <div class="guide-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <h2>Coming Soon</h2>
            <p>Detailed guide content will be added here.</p>
        </div>
    </section>

    <div class="nav-actions">
        <a href="/" class="btn btn-secondary" data-link>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
        </a>
    </div>
`;

const templates = {
    welcome: welcomeTemplate,
    guide: guideTemplate
};

function navigate(path) {
    const route = routes[path] || 'welcome';
    const content = document.getElementById('app-content');
    content.innerHTML = templates[route];

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '/' && href === '/welcome')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update browser history
    window.history.pushState({ path }, '', path);

    // Scroll to top
    window.scrollTo(0, 0);
}

function handleLinkClick(e) {
    const link = e.target.closest('[data-link]');
    if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        navigate(path);
    }
}

// Initialize router
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation clicks
    document.addEventListener('click', handleLinkClick);

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
        const path = e.state?.path || window.location.pathname;
        navigate(path);
    });

    // Initial route
    const initialPath = window.location.pathname;
    navigate(initialPath);
});
