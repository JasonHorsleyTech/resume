<template>
    <div class="pt-2 border-t">
        <div class="flex flex-no-wrap w-full justify-around hidden md:block">
            <div>
                <p>Name: Jason Horsley</p>
                <p>
                    Email:
                    <a
                        href="mailto:Jason@JasonHorsley.tech"
                        class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                        >Jason@JasonHorsley.tech</a
                    >
                </p>
            </div>
            <div>
                <p>
                    Git:
                    <a
                        href="https://github.com/JasonHorsleyTech"
                        class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                        >JasonHorsleyTech</a
                    >
                </p>
                <p>
                    Phone:
                    <a
                        href="tel:something"
                        class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                        >something</a
                    >
                </p>
            </div>
        </div>
        <div class="block md:hidden">
            <p>Name: Jason Horsley</p>
            <p>
                Email:
                <a
                    href="mailto:Jason@JasonHorsley.tech"
                    class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                    >Jason@JasonHorsley.tech</a
                >
            </p>
            <p>
                Git:
                <a
                    href="https://github.com/JasonHorsleyTech"
                    class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                    >JasonHorsleyTech</a
                >
            </p>
            <p>
                Phone:
                <a
                    href="tel:something"
                    class="text-blue-700 border-blue-700 border-b pb-px cursor-pointer hover:text-blue-main"
                    >something</a
                >
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    @apply m-0 px-0 py-1;
}
</style>