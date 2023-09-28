<script>
    import Phone from "../assets/Phone.svelte";
    import Calendar from "../assets/Calendar.svelte";
    import Location from "../assets/Location.svelte";

    let phoneNumber = "+1 (307) 213-9577";
    let calendlyURL = "https://calendly.com/hkunzler";
</script>

<section id="contact" class="bg-gray-100">
    <div class="container p-8 my-8 mx-auto text-center">
        <h2>Let's Connect!</h2>
        <div class="flex flex-col md:flex-row justify-center items-center mb-8">
            <div class="flex items-center mb-4 md:mb-0 md:mr-8">
                <Phone/>
                <p>
                    Call or Text:
                    <a href="tel:{phoneNumber}" class="link">
                        {phoneNumber}
                    </a>
                </p>
            </div>
            <div class="flex items-center">
                <Calendar/>
                <a href="{calendlyURL}" target="_blank" rel="noopener noreferrer"
                   class="link mb-12">
                    Schedule a Meeting
                </a>
            </div>
        </div>
        <p>
            If you’re local, we’d be happy to arrange an in-person meet-up. Reach out to us, and let’s find a convenient
            time and place!
        </p>
        <div class="flex justify-center items-center mt-8">
            <Location/>
            <span>Cody, Wyoming</span>
        </div>
    </div>
</section>
