// Typewriter 效果
const text = "Building the future, one line at a time...";
let i = 0;
const typewriter = document.getElementById('typewriter');

function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// 页面加载后启动打字机
window.addEventListener('load', () => {
    setTimeout(type, 1000);
});

// 导航滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 当前页面高亮
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
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

// 滚动显示动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.section-title, .project-card').forEach(el => {
    observer.observe(el);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// 卡片倾斜效果
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// 鼠标跟随光效
const mouseGlow = document.createElement('div');
mouseGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    transition: all 0.1s ease;
`;
document.body.appendChild(mouseGlow);

document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = `${e.clientX - 150}px`;
    mouseGlow.style.top = `${e.clientY - 150}px`;
});

// 页面加载动画
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 500);
});

console.log('🚀 Portfolio loaded successfully!');