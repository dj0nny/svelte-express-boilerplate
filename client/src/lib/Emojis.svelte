<script>
  export let emojis;
</script>

<section>
  <ul>
    {#each emojis as emoji}
      <li>{emoji}</li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style-type: none;
  }

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
  }
</style>