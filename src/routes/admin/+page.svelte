<!-- src/routes/admin.svelte -->
<script>
  import { onMount } from 'svelte';

  onMount(() => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.init();
        
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });

            // Open the widget if the user is not logged in
          }
        });
      }
    });
            window.netlifyIdentity.open();

  </script>

<main>
              <div data-netlify-identity-menu></div>

</main>
