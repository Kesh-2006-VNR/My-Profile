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

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      const scrollIndicator = document.getElementById('scrollIndicator');
      
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Update scroll indicator
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollIndicator.style.width = scrolled + "%";
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate skill bars
          if (entry.target.classList.contains('skill-card')) {
            const progressBar = entry.target.querySelector('.skill-progress');
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            setTimeout(() => {
              progressBar.style.width = width;
            }, 200);
          }
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .skill-card, .project-card, .about-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      }
    });

    // Form submission handler
    function handleFormSubmit(event) {
      event.preventDefault();
      
      // Get form data
      const formData = new FormData(event.target);
      const name = event.target.querySelector('input[type="text"]').value;
      const email = event.target.querySelector('input[type="email"]').value;
      const subject = event.target.querySelectorAll('input[type="text"]')[1].value;
      const message = event.target.querySelector('textarea').value;
      
      // Create mailto link
      const mailtoLink = `mailto:keshavans074@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Thank you for your message! Your email client should now open with the pre-filled message.');
      
      // Reset form
      event.target.reset();
    }

    // Resume download handler
    function downloadResume() {
      alert('Resume download functionality would be implemented here. Please contact me directly for my latest resume.');
    }

    // Add typing effect to hero subtitle
    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = '';
      
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      
      type();
    }

    // Initialize typing effect after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const subtitle = document.querySelector('.hero .subtitle');
        if (subtitle) {
          const originalText = subtitle.textContent;
          typeWriter(subtitle, originalText, 80);
        }
      }, 1500);
    });

    // Add particle effect to hero section
    function createParticles() {
      const hero = document.querySelector('.hero');
      const particlesContainer = document.createElement('div');
      particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      `;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: float ${5 + Math.random() * 10}s infinite linear;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
      }
      
      hero.appendChild(particlesContainer);
    }

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Initialize particles
    createParticles();

    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-3px) scale(1)';
      });
    });

    // Mobile menu toggle (for future implementation)
    function toggleMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('mobile-open');
    }

    // Add loading animation
    window.addEventListener('load', () => {
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
      }, 100);
    });

    // Add cursor trail effect
    let mouseX = 0, mouseY = 0;
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.6), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 10 + 'px';
      cursor.style.top = mouseY - 10 + 'px';
    });

    // Hide cursor trail on mobile
    if (window.innerWidth <= 768) {
      cursor.style.display = 'none';
    }