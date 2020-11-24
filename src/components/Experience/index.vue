<template>
    <div>
        <h2>Professional experience</h2>
        <div class="flex flex-wrap">
            <div v-for="job in this.jobs" :key="job.time" class="w-full mb-10">
                <h3>{{ job.company }}, {{ job.role }}</h3>
                <component :is="job.descriptionComponent" />
                <span class="text-sm" v-html="job.time" />
            </div>
        </div>
    </div>
</template>
<script>
import mvDesc from '@/components/Experience/MicroVentures.vue'
import pubDesc from '@/components/Experience/Pubbly.vue'
import cciDesc from '@/components/Experience/CCI.vue'

export default {
    data() {
        return {
            jobs: [
                {
                    company: 'MicroVenture',
                    role: 'Web Developer',
                    descriptionComponent: mvDesc,
                    time: 'Early 2019 - Present',
                },
                {
                    company: 'Pubbly',
                    role: 'Lead Developer',
                    descriptionComponent: pubDesc,
                    time: '2015 - 2019',
                },
                {
                    company: 'CCI-NY',
                    role: 'Developer',
                    descriptionComponent: cciDesc,
                    time: '2012-2015',
                },
            ],
        }
    },
}
</script>