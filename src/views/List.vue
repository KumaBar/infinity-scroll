<template>
  <div class="list">
    <Item v-for="item in items" :key="item.id" :item="item" />
  <div v-if="items.length" v-observe-visibility="fetch"></div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "../components/Item";
export default {
  name: "List",

  data() {
    return {
      items: [],
      page: 1,
    };
  },
  methods: {
    async fetchPosts() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=6`
      );
      this.items.push(...response.data)
    },
    fetch(isVisible){
            if(isVisible===false) return
            console.log(this.page)
            this.page++
            this.fetchPosts()
        }
  },
  mounted() {
    this.fetchPosts();
  },
  components: {
    Item,
  },
};
</script>
<style>
.list {
  margin: 0 auto;
  max-width: 600px;
}
</style>
