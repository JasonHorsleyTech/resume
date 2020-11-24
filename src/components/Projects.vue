<template>
    <div class="text-gray-800">
        <div class="pb-4">
            <h2 class="md:pb-0">Projects</h2>
            <span class="hidden md:block text-sm"
                >The following are projects I have been responsible for that I feel best exemplify my abilities.</span
            >
        </div>

        <div class="flex flex-col">
            <div class="mb-10">
                <h3>MicroVentures: Stack separation</h3>

                <p>
                    MicroVenture's core product, a client facing investment platform, was partially fragmented between a
                    full stack Laravel 4.2 and a backend API Laravel 5 server. The older project accessed the newer's
                    Eloquent models and database via a custom private composer SDK running guzzle commands. The SDK was
                    an attempt to partially rewrite the backend without having to fully finish before pushing to
                    production, but had been in the "temporary fix" state for quite some time.
                </p>

                <p>
                    My responsibility was to fully retire the Laravel 4.2 front end, served mostly through blade
                    template, by adapting the existing HTML and styles into a standalone Vue2 SPA which would talk
                    directly to the API server.
                </p>

                <p>
                    The project was much larger than originally anticipated. We were forced to change our authentication
                    methods from the somewhat built in session based laravel way to an oauth generated token, rewriting
                    much of the previous middleware. A lot of the old "front end" made assumptions about always having
                    fresh data, so we needed to be meticulous in our implementation of the vuex store. And while some of
                    the API calls were "working", the fact that it now ran on client machines meant that API calls
                    needed to bundle together to avoid long waits while sequential ajax requests resolved
                </p>

                <p>
                    The project did finish and has been live for some months. I am proud to say it significantly reduces
                    page to page load times, and code overhead for our team
                </p>
            </div>

            <div class="mb-10">
                <h3>MicroVentures: Future acquisition integration</h3>

                <p>
                    MicroVenture's new business model is in acquiring third party projects and integrating them into the
                    existing ecosystem. Adapting to this change required a large restructuring of the base user model.
                    Instead of people signing up as "investors" to make investments, they signup as "customers" with
                    "invest property access". While the change seemed somewhat pedantic at first, it soon became clear
                    that it would require much fiddling.
                </p>

                <p>
                    We decided to route all logins and singups through a "customer" subdomain, allowing for the shared
                    functionalities of account management and preferences to be accessible from any external site. We
                    then created a private NPM package, so that each independent project would start from the same base
                    "shell", abstracting away default server error handling and unifying our common components to create
                    a better brand image.
                </p>

                <p>
                    The work paid off, and our recently acquired "digital will" code base is now in use by our beta test
                    group of customers. While it was done in react with a scala backend, it is able to share the same
                    customer model and authentication logic.
                </p>
            </div>

            <div class="">
                <h3>Pubbly: Javascript engine</h3>

                <p>
                    Pubbly's main deliverable asset was a javascript based interactive book. It somewhat resembled the
                    old "escape the room" flash games, but more polish. Each "book" had pages filled with user
                    interaction zones, requiring a user touch gesture or a drag drop. Each zone would trigger a sequence
                    of timed events such as animating an image across the page, playing an audio file, starting a video,
                    or manipulating the visible objects.
                </p>

                <p>
                    As the project progressed, the authors and artists designing the books continued to push the
                    envelope. They would create extraordinarily large books, packed with hundreds or even thousands of
                    individual audio files. And since they were developing in a desktop environment, they were
                    blissfully unaware of potential load times.
                </p>

                <p>
                    We used a number of different tricks to keep things under control. We concatenated all the audio
                    files in a given book into a single file, and 'seeked' to different locations to play each unique
                    sounds. This cut down the number of network requests needed, and solved an additional audio timing
                    issue in safari. We also carefully chose which assets to load next based on what pages could be
                    quickly accessed.
                </p>

                <p>
                    I won't claim it was a perfect system. In hindsight, we should simulated network load times from
                    within the authoring tools, or simply worked more on communicating browser based limitations to the
                    rest of the team. But it did get the job done, and I am happy to say that Pubbly is still using much
                    of my original codebase.
                </p>
            </div>
        </div>
    </div>
</template>
