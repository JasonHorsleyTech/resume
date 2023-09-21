<template>
  <company-overview
    companyName="MicroVentures"
    companyDescription="Accredited and Crowdfunding investment platform"
    workDates="2019 to 2021"
    :tabs="tabs"
  >
    <template v-slot:overview>
      <div class="space-y-2">
        <p>
          MicroVentures is an investment platform focused mainly on RegD and
          RegCF raises. I worked in a small team of 4 engineers.
        </p>
        <p>
          The company still operates inside an Austin office space in "The
          Domain". It was a typical fast paced startup environment, where
          deadlines were "yesterday" and requirements were "every feature". It
          was enjoyable for a time and I did learn a lot, but it was a difficult
          pace to maintain indefinitely.
        </p>
      </div>
    </template>

    <template v-slot:responsibilities>
      <list
        :items="[
          'MV API - Laravel backend, acting as single source of truth for company',
          'MV Invest - Investor facing vue spa. Presented offers based on eligibility, sold long term investments, gave regular portfolio updates.',
          'MV Manager - Internal platform for other teams in office (customer relations, due diligence, marketing, and investor vetting teams).',
          'MV Native - Stripped down version of MV invest, ported to VueNative for mobile iOS app',
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
              items: [
                'Vue2',
                'Vue Native',
                'Swift',
                'React',
                'Tailwind',
                'Bulma',
                'Bootstrap',
                'Cypress',
              ],
            },
            {
              category: 'Backend',
              items: ['Laravel', 'Laravel Nova', 'PhpUnit', 'MySQL'],
            },
            {
              category: 'Finance',
              items: ['Stripe', 'Synapse'],
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