<script>
    import Laptop from "../assets/Laptop.svelte";
    import Mobile from "../assets/Mobile.svelte";
    import Headset from "../assets/Headset.svelte";

    let services = [
        {
            title: "Web Development",
            description: "Crafting responsive and performant websites tailored to your needs.",
            icon: Laptop,
        },
        {
            title: "Responsive Design",
            description: "Ensuring your website’s optimal viewing experience across a wide range of devices.",
            icon: Mobile,
        },
        {
            title: "Ongoing Support",
            description: "Providing continuous support and maintenance services to keep your website running smoothly.",
            icon: Headset,
        },
    ];
</script>

<section id="services">
    <div class="container p-8 my-8 mx-auto text-center">
        <h2>Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {#each services as {title, description, icon: Icon}}
                <div class="flex flex-col items-center text-center">
                    <Icon/>
                    <h3>{title}</h3>
                    <p class="text-gray-600 mb-8">{description}</p>
                </div>
            {/each}
        </div>
        <a class="buttonLink" href="#contact">Contact Us for Any Service</a>
    </div>
</section>
  