<script context="module">
  import Advice, { title } from "../../advices-teachers/advices/16.svelte";

  export { title };
</script>

<script>
  import image from "./17.jpg";
</script>

<Advice />

<img src={image} alt="" class="w-[50rem] mx-auto" />
