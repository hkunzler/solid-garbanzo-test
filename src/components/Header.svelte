<script>
    import {onMount} from "svelte";
    import {fade, slide} from "svelte/transition";
    import HamburgerMenu from "../assets/HamburgerMenu.svelte";
    import CloseMenu from "../assets/CloseMenu.svelte";

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

    const toggleMobileMenu = () => isMobileMenuOpen = !isMobileMenuOpen;
</script>

<nav class="bg-white shadow-md w-full fixed top-0 z-50">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <a class="font-heading text-primary font-extrabold py-3 " href="#landing">Kunzler Technology</a>
        <div class="hidden md:flex space-x-8">
            <a class="link" href="#about" class:active={activeSection === 'about'}>About
                Us</a>
            <a class="link" href="#services"
               class:active={activeSection === 'services'}>Services</a>
            <a class="link" href="#contact"
               class:active={activeSection === 'contact'}>Contact</a>
        </div>
        <button
                class="md:hidden"
                on:click={toggleMobileMenu}
        >
            <HamburgerMenu/>
        </button>
    </div>
    {#if isMobileMenuOpen}
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50" transition:fade on:click={toggleMobileMenu}></div>
        <div class="bg-white flex flex-col py-2 w-64 fixed right-0 top-0 h-full overflow-auto z-50 shadow-lg"
             transition:slide="{{delay: 100, duration: 300}}">
            <div class="flex justify-end p-4">
                <button class="p-4" on:click={toggleMobileMenu}>
                    <CloseMenu/>
                </button>
            </div>
            <a href="#about" class="link p-8"
               class:active={activeSection === 'about'}>About Us</a>
            <a href="#services" class="link  p-8"
               class:active={activeSection === 'services'}>Services</a>
            <a href="#contact" class="link  p-8"
               class:active={activeSection === 'contact'}>Contact</a>
        </div>
    {/if}
</nav>
