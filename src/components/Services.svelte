<script>
    let services = [
        {
            title: "Web Development",
            description: "Crafting responsive and performant websites tailored to your needs.",
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>        </svg>
        `,
        },
        {
            title: "Responsive Design",
            description: "Ensuring your website’s optimal viewing experience across a wide range of devices.",
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
        </svg>
        `,
        },
        {
            title: "Ongoing Support",
            description: "Providing continuous support and maintenance services to keep your website running smoothly.",
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/>
        </svg>
        `,
        },
    ];
</script>

<section id="services" class="py-20 min-h-50vh">
    <div class="container p-8 my-8 mx-auto text-center">
        <h2 class="text-3xl font-extrabold mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {#each services as {title, description, icon}}
                <div class="flex flex-col items-center text-center">
                    {@html icon}
                    <h3 class="text-xl font-semibold mb-4">{title}</h3>
                    <p class="text-gray-600 mb-8">{description}</p>
                </div>
            {/each}
        </div>
        <a href="#contact"
           class="mt-16 inline-block px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition">Contact
            Us for Any Service</a>
    </div>
</section>
  