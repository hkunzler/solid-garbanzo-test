<script>
    import { onMount } from 'svelte';

    import AboutUs from '../components/AboutUs.svelte';
    import ContactUs from '../components/ContactUs.svelte';
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte'
    import Landing from '../components/Landing.svelte';
    import Services from '../components/Services.svelte';

    onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.init();
      
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });

          // Open the widget if the user is not logged in
          window.netlifyIdentity.open();
        }
      });
    }
  });
</script>
<Header/>
<Landing/>
<AboutUs/>
<Services/>
<ContactUs/>
<Footer/>
