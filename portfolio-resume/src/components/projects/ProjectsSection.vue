<script setup lang="ts">
import type { Project } from '@/types/project.ts';
import SignalOverlay from '../ui/SignalOverlay.vue';
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Icon } from '@iconify/vue';

const props = defineProps<{
    projects: Project[]
}>()

const slide = ref(0);

const $q =useQuasar()
const projectsPerSlide = computed(() => {

    if ($q.screen.xs) return 1;

    if ($q.screen.sm) return 2;

    return 3;

});

const projectGroups = computed(() => {

    const groups: Project[][] = [];
    const groupSize = projectsPerSlide.value

    for (let i = 0; i < props.projects.length; i += groupSize) {
        groups.push(
            props.projects.slice(i, i + groupSize)
        );
    }

    return groups;
});

const nextSlide = () => {

    slide.value =
        (slide.value + 1) % projectGroups.value.length;

    };

    const prevSlide = () => {

    slide.value =
        (slide.value - 1 + projectGroups.value.length)
        % projectGroups.value.length;

};

const hasNavigation = computed(() =>
    projectGroups.value.length > 1
);

</script>

<template>

    <section class="projects-section">
        <SignalOverlay
            :lines="8"
            :points="6"
            :crosses="2"
        />

        <header class="projects-header">

            <span class="projects-index">
                02_PROJECTS
            </span>

        </header>

        <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            animated
            swipeable
            infinite
            control-color="signal-primary"
            class="projects-carousel"
        >

            <q-carousel-slide
                v-for="(group, index) in projectGroups"
                :key="index"
                :name="index"
                class="projects-slide"
            >

                <!-- <ProjectCard
                    v-for="project in group"
                    :key="project.name"
                    :project="project"
                /> -->
                {{ group }}

            </q-carousel-slide>

        </q-carousel>

        <div class="w-full content-center flex justify-between px-8">

            <button
                v-if="hasNavigation"
                class="nav-arrow"
                @click="prevSlide"
            >
                <Icon 
                    icon="mdi:chevron-left"
                    class="text-signal-primary"
                    width="24px"
                />
            </button>

            <button
                v-for="(_, index) in projectGroups"
                :key="index"
                class="nav-page"
                :class="{ active: slide === index }"
                @click="slide = index"
            >
                <{{ String(index + 1).padStart(2, '0') }}>
            </button>

            <button
                v-if="hasNavigation"
                class="nav-arrow"
                @click="nextSlide"
            >
                <Icon 
                    icon="mdi:chevron-right"
                    class="text-signal-primary"
                    width="24px"
                />
            </button>

        </div>
        
    </section>

</template>

<style scoped>

.projects-section{
    @apply w-full h-full bg-industrial-navy px-1 pt-2;

    display: grid;

    grid-template-rows:
        auto     /* Header */
        1fr      /* Carousel */
        auto;    /* Navigation */

    gap: .5rem;
}

.projects-header{

    @apply

        flex
        flex-row
        items-center
        text-[.8rem]
        tracking-[.25rem]
        gap-[12px];

}

.projects-header::after{

    content:"";

    flex:1;

    height:1px;

    background:
        linear-gradient(
            to right,
            var(--signal-primary),
            transparent
        );

    opacity:.5;

}

.projects-index{

    @apply text-signal-primary font-code;

}

.projects-carousel {
    @apply bg-transparent h-full;
}

.nav-page{

    @apply text-technical-code;

    padding:.3rem .6rem;

    transition:.25s;

    letter-spacing:.2em;

}

.nav-page.active{

    color:var(--signal-primary);

}

.nav-page.active::after{

    content:"";

    display:block;

    margin-top:4px;

    height:1px;

    background:var(--signal-primary);

}

</style>