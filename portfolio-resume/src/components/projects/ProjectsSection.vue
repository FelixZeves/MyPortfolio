<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Icon } from '@iconify/vue';

import type { Project } from '@/types/project.ts';

import SignalOverlay from '../ui/SignalOverlay.vue';
import ProjectCard from './ProjectCard.vue';


const props = defineProps<{
    projects: Project[]
}>()

const slide = ref(0);

const $q =useQuasar()
const projectsPerSlide = computed(() => {

    if ($q.screen.xs) return 1;

    return 2;

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

        <header class="projects-header section-title">
                02_PR0JECTS
        </header>

        <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
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

                <ProjectCard
                    v-for="project in group"
                    :key="project.name"
                    :project="project"
                />

            </q-carousel-slide>

        </q-carousel>

        <div class="projects-navigator px-8">

            <button
                v-if="hasNavigation"
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
    @apply
        w-full
        h-full
        bg-industrial-navy
        pe-1
        ps-2
        pt-2
        font-code;

    display: grid;

    grid-template-rows:
        auto
        1fr
        auto;

    gap: .5rem;

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

.projects-carousel {
    @apply bg-transparent h-full;
    

    min-height: 0;
}

.projects-slide{
    @apply flex flex-row gap-x-8 justify-center h-full;

}

.projects-slide > * {

    height:100%;
    flex:0 1 60%;

}

.projects-navigator{

    @apply flex items-center justify-center pb-2 gap-3;

}

.nav-page{

    @apply text-technical-code;

    padding:.3rem .6rem;

    transition:.25s;

    letter-spacing:.2em;

    color:var(--signal-secondary);

    z-index: 1;

}

.nav-page.active{

    color:var(--signal-primary);

    z-index: 1;

}

.nav-page.active::after{

    content:"";

    display:block;

    margin-top:4px;

    height:1px;

    background:var(--signal-primary);

    z-index: 1;

}

</style>