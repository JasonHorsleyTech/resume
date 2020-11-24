<template>
    <div>
        <h2>Main Skills</h2>
        <div class="flex flex-wrap">
            <div v-for="category in this.skills" :key="category.name" class="w-1/2 md:w-1/3 lg:w-1/3 mb-8">
                <h3 v-html="category.name" class="border-b border-gray-500 pb-2 mb-2 mr-4 md:mr-20" />
                <ul v-for="skill in category.list" :key="skill" class="group cursor-pointer">
                    <bullet />
                    <li class="inline-block ml-2 py-1 text-sm" v-html="skill" />
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import bullet from '@/components/bullet.vue'

export default {
    components: {
        bullet,
    },

    data() {
        return {
            skills: [
                { name: 'Frontend code</span>', list: ['Vue', 'React', 'jQuery', 'Webix'] },

                { name: 'Frontend design', list: ['Tailwind', 'Bootstrap', 'Bulma', 'Scss'] },

                { name: 'Mobile & Desktop', list: ['Vue Native', 'Cordova', 'Livecode', 'Electron'] },

                {
                    name: 'Backend code',
                    list: ['Laravel', 'Wordpress', 'EmberJS', 'MySQL / Mongo'],
                },

                {
                    name: 'Infrastructure',
                    list: ['AWS / G-Suite', 'Apache / Nginx', 'MailChimp / Iterable', 'Paypal / Synapse'],
                },

                { name: 'Soft skills', list: ['Git', 'Agile', 'Shell', 'Vim'] },
            ],
        }
    },
}
</script>