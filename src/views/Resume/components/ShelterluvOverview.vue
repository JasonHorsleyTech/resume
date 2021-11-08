<template>
  <company-overview
    companyName="ShelterLuv"
    companyDescription="Animal shelter management SAAS"
    workDates="2021 to Present"
    :tabs="tabs"
  >
    <template v-slot:overview>
      <div class="space-y-2">
        <p>
          ShelverLuv provides management software to a majority of animal
          shelters in the United States.
        </p>
        <p>
          It's a small company with a heavy emphasis on engineering. I was
          originally hired full stack, but have slowly moved into a more
          front-end heavy role for the purposes of balance.
        </p>
        <p>
          The company is based in California, but all workers are remote. We
          follow a loose agile format with daily standups and tickets on a jira
          board, and have a very flat management structure. All engineers are
          experienced and full stack. We often pair up for a larger scale (>3
          weeks) projects, but most work is self directed and as such we have a
          healthy respect for writing and maintaining tests.
        </p>
      </div>
    </template>

    <template v-slot:responsibilities>
      <p class="pb-2">My main job responsibilities are:</p>
      <list
        class="text-left mt-2 space-y-2"
        :items="[
          'Shelterluv rewrite - Porting the management platform, our main product, from Drupal 8 to multiple Laravel microservices and centralized API without interrupting service.',
          'AdopterLuv - Payment processing, customer account management, and substantial tracking and analytics work for predictive product recommendations (revenue soruce).',
        ]"
      />
    </template>

    <template v-slot:skills>
      <div class="grid grid-cols-3">
        <list
          class="text-center md:text-left"
          v-for="({ category, items }, index) in [
            {
              category: 'Frontend',
              items: [
                'Vue2/3',
                'LiveWire',
                'AlpineJS',
                'Tailwind',
                'Bootstrap',
                'SCSS',
                'Jest',
                'Cypress',
              ],
            },
            {
              category: 'Backend',
              items: ['Laravel', 'Dusk', 'Nova', 'PhpUnit', 'Drupal'],
            },
            {
              category: 'Misc',
              items: ['MySQL', 'Docker', 'AWS tools', 'Redshift'],
            },
          ]"
          :items="items"
          :key="index"
        >
          <div class="mx-1.5 md:mx-5 border-b border-gray-500">
            <p v-text="category" />
          </div>
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