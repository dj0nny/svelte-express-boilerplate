<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

	import List from './components/List.svelte';
  let emojis = [];

  onMount(async () => {
    const { data } = await axios.get('http://localhost:5678/api/v1/emojis');
    console.log(data.emojis);
    emojis = data.emojis
  });
</script>

<List emojis={emojis} />wrf