<template>
    <div class="wrapper">
        <div class="bullet" :class="{ 'bg-green-700': selected }" />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    @apply inline-block bg-gray-300 rounded-full;
    padding: 3px;

    .bullet {
        height: 6px;
        width: 6px;
        @apply rounded-full bg-gray-600 transition-fast;
    }
}
</style>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>