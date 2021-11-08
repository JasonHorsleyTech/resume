<template>
  <div>
    <div class="flex space-x-2 items-center border-b-2 border-logoBlue pb-2 mb-2">
      <div class="iconWrapperScope p-2 bg-logoBlue rounded">
        <slot name="icon" />
      </div>
      <h2 class="text-xl text-logoBlue">
        <slot name="title" />
      </h2>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.iconWrapperScope > svg {
  @apply h-5 w-5;
}
</style>
<script>
import List from "./List.vue";

export default {
  components: { List },
};
</script>