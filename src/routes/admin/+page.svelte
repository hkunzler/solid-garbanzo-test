<!-- src/routes/admin.svelte -->
<script>
  import { onMount } from 'svelte';

  onMount(() => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.init();
        
                   window.netlifyIdentity.open();

    });

  </script>

<main>
              <div data-netlify-identity-menu></div>

</main>
