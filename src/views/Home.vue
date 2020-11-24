<template>
    <div class="container mx-auto max-w-4xl bg-gray-200 shadow-lg py-8 md:my-8 px-6 md:px-16">
        <div>
            <img class="block mx-auto md:inline-block align-middle h-12" src="~@/assets/logo.png" />
            <h1 class="md:inline-block align-middle md:ml-8 text-2xl md:text-3xl">
                Jason Horsley - Developer
            </h1>
        </div>

        <Summary />

        <Skills />

        <Experience />

        <Projects />

        <PersonalDetails />

        <Contact />
    </div>
</template>

<script>
import Summary from '@/components/Summary.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience/index.vue'
import Projects from '@/components/Projects.vue'
import PersonalDetails from '@/components/PersonalDetails.vue'
import Contact from '@/components/Contact.vue'

export default {
    components: {
        Summary,
        Skills,
        Experience,
        Projects,
        PersonalDetails,
        Contact,
    },

    mounted() {
        setTimeout(() => {
            this.pastFirstFew = true
        }, 1000)
    },

    data() {
        return {
            pastFirstFew: false,
        }
    },
}
</script>