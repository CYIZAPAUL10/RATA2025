 // Toggle mobile nav
    const menuBtn = document.querySelector('.menu-icon');
    const mobileNav = document.getElementById('mobile-menu');

    function toggleMenu() {
      const isOpen = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function closeMenu() {
      if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }

    // Close mobile menu on resize (switch to desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close mobile nav if user clicks outside it
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        const clickedInside = mobileNav.contains(e.target) || menuBtn.contains(e.target);
        if (!clickedInside) closeMenu();
      }
    });