<script>
  import { sortKeys } from "$js/glob";

  export let advices;

  const keys = sortKeys(advices);
  keys.reverse();
</script>

{#each keys as key, i}
  <div>
    <div
      class="mb-7 p-3 border border-blue-200 bg-blue-100/40 flex justify-center items-center gap-4"
    >
      <iconify-icon icon="noto:information" class="text-3xl" />
      <h1>
        {advices[key].title}
      </h1>
    </div>
    <svelte:component this={advices[key].default} />
    {#if i !== keys.length - 1}
      <div class="mb-5">&nbsp;</div>
    {/if}
  </div>
{/each}
