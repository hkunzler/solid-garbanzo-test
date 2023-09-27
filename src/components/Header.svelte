<script>
    import {onMount} from "svelte";
    import {fade, slide} from "svelte/transition";

    let isMobileMenuOpen = false;
    let activeSection = '';

    onMount(() => {
        const smoothScroll = (e) => {
            const hash = e.currentTarget.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const navLinks = document.querySelectorAll('a');
        navLinks.forEach(link => link.addEventListener('click', smoothScroll));

        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, {threshold: 0.6});

        sections.forEach(section => observer.observe(section));

        const closeMobileMenu = () => {
            isMobileMenuOpen = false;
        };

        navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', smoothScroll);
                link.removeEventListener('click', closeMobileMenu);
            });
            sections.forEach(section => observer.unobserve(section));
        };
    });

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    };
</script>

<nav class="bg-gray-800 text-white p-4 w-full fixed top-0 z-50">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#landing" class="text-primary font-semibold text-lg">Kunzler Technology</a>
        <div class="hidden md:flex space-x-4">
            <a href="#about" class="text-white hover:text-primary transition" class:active={activeSection === 'about'}>About
                Us</a>
            <a href="#services" class="text-white hover:text-primary transition"
               class:active={activeSection === 'services'}>Services</a>
            <a href="#contact" class="text-white hover:text-primary transition"
               class:active={activeSection === 'contact'}>Contact</a>
        </div>
        <button
                class="md:hidden text-white focus:outline-none"
                on:click={toggleMobileMenu}
        >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    </div>
    {#if isMobileMenuOpen}
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50" transition:fade on:click={toggleMobileMenu}></div>
        <div class="bg-gray-800 py-2 w-64 fixed right-0 top-0 h-full overflow-auto z-50 shadow-lg"
             transition:slide="{{delay: 100, duration: 300}}">
            <div class="flex justify-end p-4">
                <button class="text-white focus:outline-none p-4" on:click={toggleMobileMenu}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <a href="#about" class="block px-4 py-2 text-white hover:text-primary transition"
               class:active={activeSection === 'about'}>About Us</a>
            <a href="#services" class="block px-4 py-2 text-white hover:text-primary transition"
               class:active={activeSection === 'services'}>Services</a>
            <a href="#contact" class="block px-4 py-2 text-white hover:text-primary transition"
               class:active={activeSection === 'contact'}>Contact</a>
        </div>
    {/if}
</nav>

<style>
    a.active {
        border-bottom: 2px solid white;
    }
</style>
