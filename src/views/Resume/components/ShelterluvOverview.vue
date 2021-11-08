<template>
  <company-overview
    class="grid grid-cols-4 gap-x-4"
    companyName="ShelterLuv"
    companyDescription="Animal shelter management SAAS"
    workDates="2021 to Present"
    :tabs="[
      {
        key: 'overview',
        title: 'Overview',
      },
      {
        key: 'responsibilities',
        title: 'Responsibilities',
      },
      {
        key: 'skills',
        title: 'Technologies used',
      },
    ]"
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
      <list
        :items="[
          'Shelterluv rewrite - Porting the management platform, our main product, from Drupal 8 to multiple Laravel microservices and centralized API without interrupting service.',
          'AdopterLuv - Payment processing, customer account management, and substantial tracking and analytics work for predictive product recommendations (revenue soruce).',
        ]"
      >
        My main job responsibilities are:
      </list>
    </template>

    <template v-slot:skills>
      <!-- <p>Technical skills:</p> -->

      <div class="grid grid-cols-3">
        <list
          v-for="({ category, items }, index) in [
            {
              category: 'Frontend',
              items: [
                'Vue2 and 3',
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
              items: [
                'Laravel',
                'Laravel Dusk',
                'Laravel Nova',
                'PhpUnit',
                'Drupal',
              ],
            },
            {
              category: 'Misc',
              items: ['MySQL', 'Docker', 'AWS tools', 'Redshift'],
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
  setup() {},
};
</script>