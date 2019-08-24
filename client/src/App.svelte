<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

	import List from './components/List.svelte';
  let listItems = [];

  onMount(async () => {
    const res = await axios.get('http://localhost:1000/api/test');
    listItems = await res.data;
  });
</script>

<List items={listItems} />