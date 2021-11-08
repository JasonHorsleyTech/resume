<template>
  <company-overview
    class="grid grid-cols-4 gap-x-4"
    companyName="MicroVentures"
    companyDescription="Accredited and Crowdfunding investment platform"
    workDates="2019 to 2021"
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
          MicroVentures is an investment platform focused mainly on RegD and
          RegCF investments. It was a small company with a tiny team of 4
          engineers. We were all full stack and worked on anything required to
          facilitate the operations of the rest of the company.
        </p>
        <p>
          The company still operates inside an Austin office space in "The
          Domain". It was a typical fast paced startup environment, where
          requirements were "everything" and deadlines were "yesterday". It was
          enjoyable for a time, and I do feel like I learned many useful skills
          at a faster pace, but it was a difficult pace to maintain
          indefinitely.
        </p>
      </div>
    </template>

    <template v-slot:responsibilities>
      <list
        :items="[
          'MV API - Laravel backend, acting as single source of truth for company',
          'MV Invest - Investor facing vue spa. Presented offers based on eligibility, sold long term investments, gave regular portfolio updates.',
          'MV Manager - Internal platform for other teams in office (customer relations, due dilligence, marketing, and investor vetting teams).',
          'MV Native - Stripped down version of MV invest, ported to VueNative for mobile iOS app',
        ]"
      >
        My main job responsibilities were:
      </list>
    </template>

    <template v-slot:skills>
      <div class="grid grid-cols-3">
        <list
          v-for="({ category, items }, index) in [
            {
              category: 'Frontend',
              items: [
                'Vue2',
                'React',
                'Tailwind',
                'Bulma',
                'Bootstrap',
                'Jest',
                'Cypress',
              ],
            },
            {
              category: 'Backend',
              items: ['Laravel', 'Laravel Nova', 'PhpUnit'],
            },
            {
              category: 'Misc',
              items: ['MySQL', 'Docker', 'Vue Native', 'Swift', 'Synapse'],
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