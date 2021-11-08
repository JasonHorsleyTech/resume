<template>
  <div
    class="
      md:grid
      grid-cols-4
      print:grid-cols-3
      gap-x-4
      rounded-tl-3xl rounded-tr-3xl
      md:rounded-none
      overflow-hidden
      border
      md:border-none
    "
  >
    <div class="print:hidden w-full md:col-span-1">
      <div
        class="
          flex
          md:flex-col
          justify-around
          md:justify-top
          bg-gray-100
          md:bg-transparent
          py-2
          px-6
          md:p-0
        "
      >
        <div
          class="
            inline-block
            md:border-b
            last:border-0
            md:pb-1 md:mb-1
            w-full
            text-center
            md:text-left
          "
          v-for="{ title, key } in tabs"
          :key="key"
          :class="[
            selected == key
              ? 'text-logoBlue font-bold'
              : 'text-gray-800 cursor-pointer hover:opacity-75',
          ]"
          @click="handle(key)"
        >
          <p v-html="title" />
        </div>
      </div>
    </div>
    <div
      class="
        md:col-span-3
        border border-l-0 border-r-0
        md:border-none
        px-2
        pb-6
        bg-transparent-white-500
        md:bg-transparent
      "
    >
      <div
        class="
          col-span-full
          font-semibold
          my-4
          md:mt-0
          text-center
          md:text-left
        "
      >
        <h2 class="text-xl flex flex-col md:block mb-2">
          <span>{{ companyName }}</span>
          <span class="hidden md:inline"> - </span>
          <span>{{ workDates }}</span>
        </h2>
        <p v-html="companyDescription" />
      </div>
      <div class="print:hidden">
        <slot :name="selected" />
      </div>
      <div class="hidden print:block">
        <slot name="overview" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    workDates: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    let parentSpecified = props.tabs.filter((tab) => tab.selected);

    let selected = parentSpecified[0]
      ? parentSpecified[0]?.key
      : props.tabs[0].key;

    return {
      /**
       * Tab selected
       *    Defaults to any with .selected === true OR first in array
       *
       * @type {?String}
       */
      selected: ref(selected),
    };
  },

  methods: {
    handle(key) {
      this.selected = key;
    },
  },
};
</script>