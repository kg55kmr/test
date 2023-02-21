<script>
  import Advices from "$c/advices.svelte";

  const advices = import.meta.glob("./advices/*.svelte", {
    eager: true,
  });
</script>

<Advices {advices} />
