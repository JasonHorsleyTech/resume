<template>
  <div class="">
    <slot />
    <div
      v-for="(item, index) in items"
      :key="index"
      class=""
    >
      <div class="mx-2 w-1.5 h-1.5 bg-black rounded-full inline-block align-middle" />
      <span class="align-middle" v-html="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>