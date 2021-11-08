<template>
  <div>
    <div class="col-span-1">
      <div class="text-gray-500 flex flex-col justify-top">
        <p
          class="
            inline-block
            whitespace-pre
            border-b
            last:border-0
            pb-1
            mb-1
            cursor-pointer
            hover:opacity-75
            text-left
          "
          v-for="{ title, key } in tabs"
          :key="key"
          :class="[selected == key ? 'text-black' : '']"
          @click="handle(key)"
        >
          {{ title }}
        </p>
      </div>
    </div>
    <div class="col-span-3">
      <div class="col-span-full font-semibold mb-4">
        <h2 class="text-xl">
          {{ companyName }} - {{ workDates }}
        </h2>
        <p v-html="companyDescription" />
      </div>
      <slot :name="selected" />
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
      console.log(key);
      this.selected = key;
    },
  },
};
</script>