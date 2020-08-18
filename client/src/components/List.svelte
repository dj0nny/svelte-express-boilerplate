<script>
  export let emojis;
</script>

<ul>
  {#each emojis as emoji}
    <li> {emoji} </li>
  {/each}
</ul>
