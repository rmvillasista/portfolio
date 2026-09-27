tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    900: '#0c4a6e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active', 'border-brand-500', 'text-brand-500', 'bg-brand-500/10');
        btn.classList.add('text-slate-500', 'dark:text-slate-400');
    });

    const targetContent = document.getElementById(`content-${tabId}`);
    if (targetContent) {
        targetContent.classList.remove('hidden');
    }

    const targetBtn = document.getElementById(`tab-${tabId}`);
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.classList.remove('text-slate-500', 'dark:text-slate-400');
    }
}

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

if (themeToggleBtn && themeIcon) {
    themeToggleBtn.addEventListener('click', () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeIcon.className = 'fas fa-sun text-amber-500 text-lg';
        } else {
            html.classList.add('dark');
            themeIcon.className = 'fas fa-moon text-lg';
        }
    });
}

let currentFilter = 'all';

function setProjectFilter(category, event) {
    currentFilter = category;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('bg-brand-500', 'text-white');
        btn.classList.add('bg-slate-200', 'dark:bg-slate-800');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.remove('bg-slate-200', 'dark:bg-slate-800');
        event.currentTarget.classList.add('bg-brand-500', 'text-white');
    }

    filterProjects();
}

function filterProjects() {
    const searchInput = document.getElementById('projectSearch');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const keywords = card.getAttribute('data-keywords') || '';
        const textContent = card.textContent.toLowerCase();

        const matchesCategory = currentFilter === 'all' || category.includes(currentFilter);
        const matchesSearch = textContent.includes(query) || keywords.includes(query);

        card.classList.toggle('hidden', !(matchesCategory && matchesSearch));
    });
}

function handleContactSubmit(event) {
    event.preventDefault();
    const alert = document.getElementById('formAlert');
    if (alert) {
        alert.classList.remove('hidden');
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
    }

    setTimeout(() => {
        if (alert) {
            alert.classList.add('hidden');
        }
    }, 4000);
}

function downloadResume() {
    const element = document.createElement('a');
    const file = new Blob([
        'Alex Rivera - Senior Software Engineer Resume\n\nExperience:\n- Staff Backend Architect @ CloudScale Systems\n- Senior Software Engineer @ FinTech Technologies\n\nSkills: Go, TypeScript, Python, AWS, Kubernetes, PostgreSQL'
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Alex_Rivera_Software_Engineer_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterProjects);
    }

    const projectButtons = document.querySelectorAll('.filter-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = button.getAttribute('data-filter') || 'all';
            setProjectFilter(value, event);
        });
    });
});
