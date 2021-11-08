<template>
  <company-overview
    companyName="CCINY"
    companyDescription="Old school book publishing house"
    workDates="2011 to 2015"
    :tabs="tabs"
  >
    <template v-slot:overview>
      <div class="space-y-2">
        <p>
          Curriculum Concepts International is a publishing house, focusing on
          educational content for children. I was originally hired as a bug
          tester for a contracted project, but brought on full time after the
          project ended.
        </p>
        <p>
          My job description was "catchall software guy". I developed and
          maintained some wordpress sites and internal company servers. I did
          some prototype game development using GameMaker8, Construct2, and
          Unity. I additionally developed a custom ePub3 compliant test maker.
        </p>
        <p>
          I toyed around with the idea of desktop design tools where you could
          scan a book, draw hidden actionable links, chain a sequence of events,
          and cheaply turn the original book into an interactive experience.
          This idea eventually became Pubbly.
        </p>
      </div>
    </template>

    <template v-slot:responsibilities>
      <list
        :items="[
          'Site admin - Add/maintain anything to their wordpress main page.',
          'Game developer - Prototype different ideas for educational games.',
          'Quiz exporter - Prototyped a custom desktop app to design simple quizes and eventually export to an ePub3 compliant online format.',
        ]"
      >
        <p class="pb-2">My job responsibilities were:</p>
      </list>
    </template>

    <template v-slot:skills>
      <div class="grid grid-cols-3">
        <list
          class="text-center md:text-left"
          v-for="({ category, items }, index) in [
            {
              category: 'Frontend',
              items: ['HTML', 'CSS', 'Javascript', 'jQuery'],
            },
            {
              category: 'Backend',
              items: ['CakePHP', 'Wordpress', 'Livecode'],
            },
            {
              category: 'Misc',
              items: ['MySQL', 'Construct2', 'Unity', 'GameMaker8'],
            },
          ]"
          :items="items"
          :key="index"
        >
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