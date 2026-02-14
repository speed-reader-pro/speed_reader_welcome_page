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

    <section class="steps">
        <div class="step">
            <div class="step-content">
                <h2>Auto parse text</h2>
                <p>Click the extension icon and Speed Reader will <strong>automatically detect</strong> and parse the main text content on the page — no selection needed.</p>
            </div>
            <div class="step-image">
                <img src="images/guide1.png" alt="Auto parse text feature">
            </div>
        </div>

        <div class="step">
            <div class="step-content">
                <h2>Context menu</h2>
                <p>Select any text on the page, right-click and choose <strong>"Speed Reader select text"</strong> from the context menu to instantly start reading.</p>
            </div>
            <div class="step-image">
                <img src="images/guide2.png" alt="Context menu usage">
            </div>
        </div>

        <div class="step">
            <div class="step-content">
                <h2>Select element</h2>
                <p>Click the <strong>Select element</strong> button to pick any element on the page — like an entire article, paragraph, or section — and read it all at once.</p>
            </div>
            <div class="step-image">
                <img src="images/guide3.png" alt="Select element feature">
            </div>
        </div>
    </section>

    <section class="controls-section">
        <h2 class="section-title">Controls</h2>
        <div class="controls-showcase">
            <div class="control-item">
                <div class="control-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>
                    </svg>
                </div>
                <span>Play</span>
            </div>
            <div class="control-item">
                <div class="control-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
                    </svg>
                </div>
                <span>Restart</span>
            </div>
            <div class="control-item">
                <div class="control-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"/><path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"/>
                    </svg>
                </div>
                <span>Back</span>
            </div>
            <div class="control-item">
                <div class="control-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"/><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"/>
                    </svg>
                </div>
                <span>Forward</span>
            </div>
            <div class="control-item control-item-wide">
                <div class="control-slider">
                    <span class="slider-label">100</span>
                    <div class="slider-track"></div>
                    <span class="slider-label">1000</span>
                </div>
                <span>Speed</span>
            </div>
            <div class="control-item">
                <div class="control-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h2"/><path d="M14 3h1"/><path d="M3 9v1"/><path d="M21 9v2"/><path d="M3 14v1"/>
                    </svg>
                </div>
                <span>Select</span>
            </div>
        </div>
    </section>

    <section class="tip-section">
        <div class="tip-card">
            <div class="tip-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/>
                </svg>
            </div>
            <div class="tip-content">
                <h3>Drag to reposition</h3>
                <p>Grab the <strong>drag handle</strong> (grid icon) at the top left of the reader to move it anywhere on screen. Release near the bottom center to snap back to the default position.</p>
            </div>
        </div>
    </section>

    <section class="features-section">
        <h2 class="section-title">Settings</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🌙</div>
                <h3>Dark theme</h3>
                <p>Switch to dark mode for comfortable reading in low light</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📜</div>
                <h3>Auto-scroll</h3>
                <p>Page automatically scrolls to follow the current word</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔦</div>
                <h3>Text highlight</h3>
                <p>Highlights the current word in the source text</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔅</div>
                <h3>Dim background</h3>
                <p>Darkens the page while reading for better focus</p>
            </div>
        </div>
    </section>

    <section class="hotkeys-section">
        <h2 class="section-title">Keyboard shortcuts</h2>
        <div class="hotkeys-grid-guide">
            <div class="hotkey-item"><span class="hotkey-key">Space</span><span class="hotkey-desc">Play / Pause</span></div>
            <div class="hotkey-item"><span class="hotkey-key">R</span><span class="hotkey-desc">Restart</span></div>
            <div class="hotkey-item"><span class="hotkey-key">←</span><span class="hotkey-desc">Previous word</span></div>
            <div class="hotkey-item"><span class="hotkey-key">→</span><span class="hotkey-desc">Next word</span></div>
            <div class="hotkey-item"><span class="hotkey-key">↑</span><span class="hotkey-desc">Speed up (+50 wpm)</span></div>
            <div class="hotkey-item"><span class="hotkey-key">↓</span><span class="hotkey-desc">Slow down (-50 wpm)</span></div>
            <div class="hotkey-item"><span class="hotkey-key">E</span><span class="hotkey-desc">Select element</span></div>
            <div class="hotkey-item"><span class="hotkey-key">Esc</span><span class="hotkey-desc">Close reader</span></div>
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

    // Hide nav on /welcome and /guide pages, show on main page (/)
    const nav = document.querySelector('.nav');
    if (path === '/welcome' || path === '/guide') {
        nav.style.display = 'none';
    } else {
        nav.style.display = '';
    }

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
