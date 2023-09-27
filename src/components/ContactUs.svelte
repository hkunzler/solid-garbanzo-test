<script>
    let phoneNumber = "+1 (307) 213-9537";
    let calendlyURL = "https://calendly.com/hkunzler";
</script>

<section id="contact" class="py-20 bg-gray-100 min-h-50vh">
    <div class="container p-8 my-8 mx-auto text-center">
        <h2 class="text-4xl font-extrabold mb-12 text-primary">Let's Connect!</h2>

        <div class="flex flex-col md:flex-row justify-center items-center mb-8">
            <div class="flex items-center mb-4 md:mb-0 md:mr-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     class="w-8 h-8 mr-3 text-primary stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 5.493a1 1 0 01-.502 1.21l-2.257 1.13a9.992 9.992 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l5.494 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z"/>
                </svg>
                <p class="text-lg">
                    Call or Text:
                    <a href="tel:{phoneNumber}" class="text-primary hover:underline">
                        {phoneNumber}
                    </a>
                </p>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     class="w-8 h-8 mr-3 text-primary">
                    <path fill-rule="evenodd"
                          d="M16 2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1V1a1 1 0 112 0v1h6V1a1 1 0 112 0v1h1zM4 5v11a1 1 0 001 1h10a1 1 0 001-1V5H4z"
                          clip-rule="evenodd"/>
                </svg>
                <a href="{calendlyURL}" target="_blank" rel="noopener noreferrer"
                   class="text-lg text-primary hover:underline">
                    Schedule a Meeting
                </a>
            </div>

        </div>
        <p class="text-lg mt-8">
            If you’re local, we’d be happy to arrange an in-person meet-up. Reach out to us, and let’s find a convenient
            time and place!
        </p>
        <div class="flex justify-center items-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="w-6 h-6 mr-3 text-primary stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"></path>
            </svg>
            <p class="text-lg text-primary">
                Cody, Wyoming
            </p>
        </div>
    </div>
</section>

<style>
    .text-primary {
        color: #1a202c;
    }
</style>
  