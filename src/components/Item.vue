<template>
  <div class="item">
    <div class="item-title">{{ item.title }}</div>
    <div class="item-text">{{ item.body }}</div>
    <button class="item-button">read</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style>
.item {
  padding: 10px;
  margin-bottom: 20px;
  background: skyblue;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.item-title{
  font-size:20px;
  margin-bottom:20px;
  font-weight:bold;
}
.item-text{
  margin-bottom:10px;
}
.item-button {
  background: grey;
  border: none;
  font-size: 20px;
  padding:10px;
}
</style>
