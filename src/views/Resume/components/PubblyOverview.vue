<template>
  <company-overview companyName="Pubbly" companyDescription="Educational e-book publishing and distribution."
    workDates="2019 to 2015" :tabs="tabs">
    <template v-slot:overview>
      <div class="space-y-2">
        <p>
          Pubbly was an experimental offshoot of an established New York book publishing house. It was an attempt to
          quickly and cheaply digitize their owned intellectual properties, and bring childrens' education into the
          modern age.
        </p>
        <p>
          Our main focus was on the Global Learning XPrize competition, an Elon Musk charity project to further
          education in historically empoverished countries. Our open sourced entry allowed for rapid creation of
          interactive e-book templates, which could then be duplicated, translated, packaged and delivered via custom
          android system images.
        </p>
        <p>
          I was the only fulltime developer during most of the project. The workplace environment could best be
          described as "injecting literal gallons of black coffee into my veins". It was fun and rewarding, I am
          ultimately proud of what we were able to accomplish, and I never want to attempt something like it again.
        </p>
      </div>
    </template>

    <template v-slot:responsibilities>
      <list :items="[
        'Pubbly Design Tools - Desktop design tools that allowed non-developers to create custom gamified ebook experiences.',
        'Pubbly Engine - Custom JS runtime environment to run gamefied ebooks.',
        'Pubbly Console - CMS focused on translation, localization, and packaging books into andrid deployable structured lesson plans.',
        'Pubbly Market - An attempted subdomainable storefront licensed to US school districts.',
      ]">
        <p class="pb-2">My job responsibilities were:</p>
      </list>
    </template>

    <template v-slot:skills>
      <div class="grid grid-cols-3">
        <list class="text-center md:text-left" v-for="({ category, items }, index) in [
          {
            category: 'Frontend',
            items: ['Javascript', 'jQuery', 'Webix'],
          },
          {
            category: 'Backend',
            items: ['Laravel', 'Symphony', 'Python', 'Livecode'],
          },
          {
            category: 'Misc',
            items: ['MySQL', 'Cordova', 'AWS', 'Shell'],
          },
        ]" :items="items" :key="index">
          <p class="mx-5 border-b border-gray-500" v-text="category" />
        </list>
      </div>
    </template>
  </company-overview>
</template>

<script>
import List from "@/components/List.vue";
import CompanyOverview from "./CompanyOverview.vue";
export default {
  components: { List, CompanyOverview },
  setup() {
    return {
      tabs: [
        {
          key: "overview",
          title: "Overview",
        },
        {
          key: "responsibilities",
          title: `<span class="inline md:hidden">Repos</span><span class="hidden md:inline">Responsibilities</span>`,
        },
        {
          key: "skills",
          title: `<span class="inline md:hidden">Tech</span><span class="hidden md:inline">Technologies Used</span>`,
        },
      ],
    };
  },
};
</script>