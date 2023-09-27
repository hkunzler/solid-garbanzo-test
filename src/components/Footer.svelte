<script>
    const currentYear = new Date().getFullYear();
    // const socialMedia = [];
</script>

<footer class="bg-gray-800 text-white py-4 sm:py-10">
    <div class="container mx-auto px-4 sm:px-0">
        <div class="mb-6">
            <h1 class="text-2xl font-bold mb-2">Kunzler Technology</h1>
            <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
        <nav class="mb-6">
            <ul class="flex space-x-6">
                <li><a href="#about" class="hover:underline">About Us</a></li>
                <li><a href="#services" class="hover:underline">Services</a></li>
                <li><a href="#contact" class="hover:underline">Contact</a></li>
            </ul>
        </nav>
<!--        <div class="flex space-x-4">-->
<!--            {#each socialMedia as {href, icon}}-->
<!--                <a href="{href}" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300">-->
<!--                    {@html icon}-->
<!--                </a>-->
<!--            {/each}-->
<!--        </div>-->
    </div>
</footer>