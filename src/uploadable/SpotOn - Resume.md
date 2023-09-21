# Jason Horsley - Developer

Veteran Full Stack Engineer boasting 11 years of hands-on experience in Laravel and Vue.js ecosystems. Proven expertise in Agile environments with a focus on delivering scalable solutions in SaaS, fintech, and edtech sectors.

---

# Experience

## ShelterLuv - Full Stack Engineer, 2021 to Present

Remote-first industry leader in animal shelter management software. Transitioned from commerce team to a cross-functional engineering role.

#### Organizational Dynamics

Flat hierarchy governed by Agile principles, daily scrums, and JIRA issue tracking. Regularly engage in pair programming for complex, multi-week initiatives. Maintain comprehensive test suites as a standard protocol.

#### Key Contributions

* **Platform Migration**: Spearheaded the migration of the core management platform from Drupal 8 to a Livewire stack, integrating Vue3 micro-SPAs to elevate modular design and higher deliverability.
  * **Kennel Card Builder**: Created a Vue3 SPA for designing print-friendly kennel cards, offering direct canvas and DOM manipulation.
  * **Application Manager**: Vue3 spa and *very lite* backend, allowing shelter workers to prioritize and process "adoption applications". Our attempt to collect additional user data pre-checkout (monetization step).
* **AdopterLuv**: Engineered a comprehensive payment and customer account management system, incorporating predictive analytics for product recommendations
* **Payment Processor**: Co-developed a PHP Composer package to transition from Stripe to Stax without eliminating Stripe as a fallback option.
* **MicrochipRegistry**: Led frontend architecture for this greenfield project using a Laravel, InertiaJS, and Vue3 stack, fortified with TypeScript.

## MicroVentures - Software Engineer, 2019 to 2021

Austin-based crowdfunding investment platform, focused on Reg D and Reg CF offerings.

Located at The Domain in Austin, MicroVentures operates as an accredited and crowdfunding investment platform with a primary focus on Regulation D and Regulation Crowdfunding investment opportunities. I was a pivotal member of a lean, four-person engineering team. Our environment epitomized startup culture: high-velocity, feature-rich, and deadline-driven.

#### Organizational Dynamics
We had a lean four-person engineering team, and about twice as many stacks to support. We were all cramped into a medium size private office, constantly scooting to someone elses monitor or drawing squares on a dirty window.

#### Key Contributions

* **API Architecture**: Developed and sustained the Laravel-based API, serving as the organization's data backbone.
* **Investment Portal**: Designed a responsive SPA with Vue.js to dynamically sell investment opportunities based on eligibility criteria, provided real-time portfolio analytics, and facilitate exits.
* **Operational Hub**: Engineered an all-in-one internal management system to optimize CRM, due diligence, and marketing workflows.
* **MV Native**: Pioneered a mobile-responsive iteration of the investment portal using Vue Native, and later Swift.

#### Technical Skillset

| Frontend   | Backend      | Finance |
| ---------- | ------------ | ------- |
| Vue2       | Laravel      | Stripe  |
| React      | Laravel Nova | Synapse |
| Tailwind   | PhpUnit      |         |
| Bulma      | MySQL        |         |
| Bootstrap  |              |         |
| Cypress    |              |         |
| Vue Native |              |         |
| Swift      |              |         |

## Pubbly - 2019 to 2015
Experimental edtech initiative by a New York-based publisher. Sole full-time developer for an ambitious, fast-paced venture.

Our main focus was on the Global Learning XPrize competition, an Elon Musk charity project to further education in historically empoverished countries. Our open sourced entry allowed for rapid creation of interactive e-book templates, which could then be duplicated, translated, packaged and delivered via custom android system images.

#### Responsibilities

* Design Suite - Developed a desktop application to enable non-tech users to create interactive e-books.
* Runtime Engine - Customized a JavaScript environment to render books and collect usage statistics, bundled with Cordova for Android deployment.
* Content Management - Built a CMS for book translation, localization, and Android-compatible packaging.
* E-commerce - Designed a scalable, district-licensable online storefront.

## CCINY - 2011 to 2015
Publishing house specialized in children's educational content. Hired as a QA tester and transitioned to a catch-all software developer role.

#### Responsibilities

* **Web Maintenance:** Managed and updated the company’s WordPress site.
* **Game Prototyping:** Developed proof-of-concept educational games using Unity and GameMaker8.
* **Interactive Design:** Conceptualized and created a desktop tool to transform static books into interactive e-books.


---

## Lessons

#### Be kind, not nice.

At Pubbly, I had the responsibility to manage an outsourced developer from the Philippines. While initial progress was smooth, the developer began to lag in productivity. Instead of confronting the issue head-on and providing targeted guidance, I chose to sidestep the issue to avoid conflict. He missed his deadlines and ultimately lost the job. The lesson: I purchased the luxury of "I don't want to upset him" at his own expense.

Choose kindness over mere niceness.

#### Data talks

At MicroVentures, we moved from Laravel monolith to a SPA and API. Hooking into vue-router and axios, all requests and navigation events were logged. Using only a few tables, we could reconstruct complete site journeys.

This level of granular tracking was absent when I transitioned ot Shelterluv, a startup with a less mature stack and fragmented tracking systems. Bugs were harder to isolate, slower to surface, and twice the time investment to fix.

We got approval for a "2 sprint rework". We prioritized tracking. A few months post release, it's clear the investment has paid off, and will only continue to compound.

#### There's more than you think

At MicroVentures, one of my early tasks was to decouple Vue pages from a Laravel monolith to create a SPA. Initial estimates were optimistic: "No more than a month," we said. I was excited to get started.

As I dug in, I discovered forgotten, yet critical, features that had complex backend dependencies. Each discovery inflated the timeline, turning my 'one-month' project into a two-month ordeal.

The lesson here is twofold: 

* First, no 5 year old codebase is "simple". There are features the owner hasn't thought about in years, but once reminded, won't be able to live without. An in-depth audit before writing the first line of code is non-negotiable.
* Second, if the initial scoping feels protracted, consider it a red flag that the project is under-budgeted. Scoping is an early warning system.

---

## Personal

#### Goal
My career objective is financial independence within a decade, leveraging in-depth skills and open-sourced tooling.

#### Life
Outside of software, I host game night, where I and the other neighborhood dads drink and play overly complicated board games. I also play accordion for a very unprofessional sea-shanty quartet.

I used to live in Latin America with my wife, but after two kids we became substantially more boring.

#### Contact

> GitHub: github.com/JasonHorsleyTech
>
> Email: Jason@JasonHorsley.tech
>
> Phone: 512-202-6952
