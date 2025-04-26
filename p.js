// Certification Data
const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        category: "cloud",
        issuer: "Amazon Web Services",
        issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        date: "March 2024",
        credentialId: "AWS-123456",
        skills: ["AWS", "Cloud Architecture", "DevOps"],
        verificationUrl: "#",
        certificateUrl: "#"
    },
    {
        id: 2,
        title: "Full Stack Web Development",
        category: "development",
        issuer: "Meta",
        issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
        date: "January 2024",
        credentialId: "META-789012",
        skills: ["React", "Node.js", "MongoDB"],
        verificationUrl: "#",
        certificateUrl: "#"
    },
    {
        id: 3,
        title: "Python Programming Specialist",
        category: "technical",
        issuer: "Microsoft",
        issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        date: "December 2023",
        credentialId: "MS-345678",
        skills: ["Python", "Data Structures", "Algorithms"],
        verificationUrl: "#",
        certificateUrl: "#"
    },
    {
        id: 4,
        title: "Machine Learning Certification",
        category: "technical",
        issuer: "Google",
        issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        date: "February 2024",
        credentialId: "GOOGLE-901234",
        skills: ["TensorFlow", "Neural Networks", "Data Science"],
        verificationUrl: "#",
        certificateUrl: "#"
    }
];

// Function to render certifications
function renderCertifications(category = 'all') {
    const certificationsGrid = document.getElementById('certificationsGrid');
    certificationsGrid.innerHTML = ''; // Clear existing content

    certifications.forEach(cert => {
        if (category === 'all' || cert.category === category) {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card fade-in';
            certCard.innerHTML = `
                <div class="cert-header">
                    <h3>${cert.title}</h3>
                    <span class="cert-badge">${cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}</span>
                </div>
                <div class="cert-body">
                    <div class="cert-issuer">
                        <img src="${cert.issuerLogo}" alt="${cert.issuer}" class="issuer-logo">
                        <div class="cert-details">
                            <h4>${cert.issuer}</h4>
                            <span class="cert-date">Issued: ${cert.date}</span>
                        </div>
                    </div>
                    <div class="cert-skills">
                        ${cert.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                    <p class="cert-id">Credential ID: ${cert.credentialId}</p>
                </div>
                <div class="cert-footer">
                    <div class="cert-actions">
                        <a href="${cert.certificateUrl}" class="cert-btn view-cert" target="_blank">
                            <i class="fas fa-certificate"></i>
                            View Certificate
                        </a>
                        <a href="${cert.verificationUrl}" class="cert-btn verify-cert" target="_blank">
                            <i class="fas fa-check-circle"></i>
                            Verify
                        </a>
                    </div>
                </div>
            `;
            certificationsGrid.appendChild(certCard);
        }
    });
}

// Initialize and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderCertifications();

    // Filter buttons event listeners
    const filterButtons = document.querySelectorAll('.cert-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter certifications
            renderCertifications(button.getAttribute('data-filter'));
        });
    });
});
// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Add your newsletter subscription logic here
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    this.reset();
});

// Animate footer sections on scroll
const footerSections = document.querySelectorAll('.footer-section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

footerSections.forEach(section => observer.observe(section));


        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Typing Animation
        const typed = new Typed('.typed', {
            strings: ['Web Developer', 'Software Engineer', 'Problem Solver'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        // Project Data
        const projects = [
            {
                title: 'Myntra Colon',
                category: 'web',
                image: 'myntra colon.jpeg',
                description: 'A full-stack e-commerce platform built with HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
                demoLink: '#',
                githubLink: '#'
            },
            {
                title: 'Myntra Colon',
                category: 'web',
                image: 'myntra colon.jpeg',
                description: 'A full-stack e-commerce platform built with HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
                demoLink: '#',
                githubLink: '#'
            },
            {
                title: 'Myntra Colon',
                category: 'web',
                image: 'myntra colon.jpeg',
                description: 'A full-stack e-commerce platform built with HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
                demoLink: '#',
                githubLink: '#'
            },
            {
                title: 'Myntra Colon',
                category: 'web',
                image: 'myntra colon.jpeg',
                description: 'A full-stack e-commerce platform built with HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
                demoLink: '#',
                githubLink: '#'
            },
            // Add more projects
        ];

        // Render Projects
        function renderProjects(category = 'all') {
            const projectsGrid = document.querySelector('.projects-grid');
            const filteredProjects = category === 'all' 
                ? projects 
                : projects.filter(project => project.category === category);

            projectsGrid.innerHTML = filteredProjects.map(project => `
                <div class="project-card" data-aos="fade-up">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.demoLink}" class="btn btn-sm">Live Demo</a>
                            <a href="${project.githubLink}" class="btn btn-sm">GitHub</a>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Filter Projects
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                btn.classList.add('active');
                renderProjects(btn.getAttribute('data-filter'));
            });
        });

        // Initialize Projects
        renderProjects();

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Form Submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Message sent successfully!');
            e.target.reset();
        });
    // Event Data
    const eventsData = [
        {
            id: 1,
            title: "National Tech Hackathon 2024",
            category: "hackathons",
            date: "March 15-16, 2024",
            location: "ITS Engineering College",
            image: "https://via.placeholder.com/400x300",
            description: "Won first prize in the national level hackathon focused on AI solutions",
            tags: ["AI", "Machine Learning", "Innovation"],
            gallery: [
                "https://via.placeholder.com/800x600",
                "https://via.placeholder.com/800x600",
                "https://via.placeholder.com/800x600"
            ],
            achievement: "First Prize",
            team: ["Divyanshu Kumar", "Team Member 2", "Team Member 3"],
            technologies: ["Python", "TensorFlow", "React"]
        },
        // Add more events here
    ];
    
    // Initialize Events Gallery
    function initializeEventsGallery() {
        renderEvents('all');
        initializeEventFilters();
        initializeLightbox();
    }
    
    // Render Events
    function renderEvents(category) {
        const eventsGrid = document.querySelector('.events-grid');
        const filteredEvents = category === 'all' 
            ? eventsData 
            : eventsData.filter(event => event.category === category);
    
        eventsGrid.innerHTML = filteredEvents.map(event => `
            <div class="event-card" data-aos="fade-up" data-event-id="${event.id}">
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}" loading="lazy">
                    <div class="event-date">${event.date}</div>
                </div>
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <div class="event-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                        <span><i class="fas fa-trophy"></i> ${event.achievement}</span>
                    </div>
                    <p class="event-description">${event.description}</p>
                    <div class="event-tags">
                        ${event.tags.map(tag => `<span class="event-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Event Filters
    function initializeEventFilters() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Filter events
                renderEvents(button.dataset.category);
            });
        });
    }
    
    // Lightbox Functionality
    function initializeLightbox() {
        const lightbox = document.querySelector('.event-lightbox');
        const eventCards = document.querySelectorAll('.event-card');
        const closeLightbox = document.querySelector('.close-lightbox');
    
        eventCards.forEach(card => {
            card.addEventListener('click', () => {
                const eventId = parseInt(card.dataset.eventId);
                const event = eventsData.find(e => e.id === eventId);
                showEventDetails(event);
            });
        });
    
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    
        // Close lightbox when clicking outside
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Show Event Details in Lightbox
    function showEventDetails(event) {
        const lightbox = document.querySelector('.event-lightbox');
        const detailsContainer = lightbox.querySelector('.event-details');
    
        detailsContainer.innerHTML = `
            <div class="event-header">
                <h2>${event.title}</h2>
                <div class="event-meta">
                    <span><i class="fas fa-calendar"></i> ${event.date}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    <span><i class="fas fa-trophy"></i> ${event.achievement}</span>
                </div>
            </div>
            <div class="event-body">
                <p>${event.description}</p>
                <div class="event-team">
                    <h3>Team Members</h3>
                    <ul>
                        ${event.team.map(member => `<li>${member}</li>`).join('')}
                    </ul>
                </div>
                <div class="event-technologies">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${event.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="event-gallery">
                    ${event.gallery.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="Event Image" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Lazy Loading Images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
    
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Mouse Trail Effect
    function initializeMouseTrail() {
        const trails = Array.from({ length: 10 }, () => {
            const trail = document.createElement('div');
            trail.className = 'trail';
            document.body.appendChild(trail);
            return trail;
        });
    
        let index = 0;
        
        window.addEventListener('mousemove', (e) => {
            const trail = trails[index];
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
            trail.style.opacity = 1;
            
            setTimeout(() => {
                trail.style.opacity = 0;
            }, 100);
    
            index = (index + 1) % trails.length;
        });
    }
    
    // Mobile Menu Toggle
    function initializeMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
    
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Scroll Animations
    function initializeScrollAnimations() {
        const elements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });
    
        elements.forEach(element => observer.observe(element));
    }
    
    // Initialize Everything
    document.addEventListener('DOMContentLoaded', () => {
        initializeEventsGallery();
        initializeMouseTrail();
        initializeMobileMenu();
        initializeScrollAnimations();
        lazyLoadImages();
    });
    
    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const navLinks = document.querySelector('.nav-links');
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - close menu
            navLinks.classList.remove('active');
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - open menu
            navLinks.classList.add('active');
        }
    }
