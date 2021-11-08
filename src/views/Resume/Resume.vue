<template>
  <div
    class="
      max-w-3xl
      mx-auto
      min-h-screen
      bg-lightBlue
      md:shadow-2xl md:rounded-lg md:mb-32 md:my-4
    "
  >
    <div class="p-4 space-y-4">
      <div class="flex items-center place-content-center space-x-4">
        <img class="rounded-full w-16" :src="logo" />
        <h2 class="text-3xl text-center">Jason Horsley - Developer</h2>
      </div>

      <flex-section>
        <template v-slot:icon>
          <person class="text-white" />
        </template>
        <template v-slot:title> Summay </template>
        <div class="space-y-2">
          <p>
            I am a full stack web developer in Austin Texas with
            {{ moment().years() - 2011 }} years experience.
          </p>
          <p>
            I have worked in many different environments, but feel happiest and
            most powerful with Laravel and Vue in a small and agile team. I
            communicate well with design, product, or marketing; But I can also
            handle longer term self directed work.
          </p>
        </div>
      </flex-section>

      <flex-section>
        <template v-slot:icon>
          <briefcase class="text-white" />
        </template>
        <template v-slot:title> Experience </template>
        <div class="space-y-6">
          <shelterluv-overview />

          <micro-ventures-overview />

          <pubbly-overview />

          <cciny-overview />
        </div>
      </flex-section>

      <flex-section>
        <template v-slot:icon>
          <bullseye class="text-white" />
        </template>
        <template v-slot:title> Objective </template>
        <div class="space-y-2">
          <p>
            My goal is complete financial independence within 10 years. To
            achieve this, I believe I need to stay relevant and powerful in a
            strong open sourced framework, and happy on any given work day to
            avoid early burnout.
          </p>
          <p>
            My ideal job is full stack Laravel+Vue, where the bulk of any given
            work day is spent writing or maintaining actual code.
          </p>
        </div>
      </flex-section>

      <flex-section>
        <template v-slot:icon>
          <couch class="text-white" />
        </template>
        <template v-slot:title> Personal </template>
        <div class="space-y-2">
          <p>
            Outside of software, I enjoy wordworking and playing overly
            complicated board games. I speak Spanish, and my wife and I have
            previously enjoyed living abroad in South American.
          </p>
          <p>
            We have a {{ howOldsMyKid }} son and have since become substantially
            more boring.
          </p>
        </div>
      </flex-section>

      <flex-section>
        <template v-slot:icon>
          <phone class="text-white" />
        </template>
        <template v-slot:title> Contact </template>

        <div class="grid md:grid-cols-2 md:gap-y-1">
          <p>
            <span class="inline-block md:hidden w-16 mr-2 text-right"
              >Name: </span
            >Jason Horsley
          </p>
          <p>
            <span class="inline-block md:hidden w-16 mr-2 text-right"
              >Git: </span
            ><a
              href="https://github.com/JasonHorsleyTech"
              class="text-blue-500 underline cursor-pointer hover:text-blue-700"
              ><span class="hidden md:inline">github.com/</span
              >JasonHorsleyTech</a
            >
          </p>
          <p>
            <span class="inline-block md:hidden w-16 mr-2 text-right"
              >Email: </span
            ><a
              href="mailto:Jason@JasonHorsley.tech"
              target="_blank"
              class="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >Jason@JasonHorsley.tech</a
            >
          </p>
          <p>
            <span class="inline-block md:hidden w-16 mr-2 text-right"
              >Phone: </span
            ><a
              href="tel:5122026952"
              class="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >512-202-6952</a
            >
          </p>
        </div>
      </flex-section>
    </div>
  </div>
</template>
<script>
import moment from "moment";

import logo from "@/assets/logo.png";
import FlexSection from "@/components/FlexSection.vue";
import List from "@/components/List.vue";

import Person from "@/icons/person.vue";
import Briefcase from "@/icons/briefcase.vue";
import Couch from "@/icons/couch.vue";
import Bullseye from "@/icons/bullseye.vue";
import Phone from "@/icons/phone.vue";
import ShelterluvOverview from "./components/ShelterluvOverview.vue";
import MicroVenturesOverview from "./components/MicroVenturesOverview.vue";
import PubblyOverview from "./components/PubblyOverview.vue";
import CcinyOverview from "./components/CcinyOverview.vue";

export default {
  components: {
    FlexSection,
    List,
    Person,
    Briefcase,
    Couch,
    ShelterluvOverview,
    MicroVenturesOverview,
    PubblyOverview,
    CcinyOverview,
    Bullseye,
    Phone,
  },

  setup() {
    return {
      moment,
      howOldsMyKid: `${moment().diff(moment("8/18/2020"), "y")} year old`,
      logo,
    };
  },
};
</script>