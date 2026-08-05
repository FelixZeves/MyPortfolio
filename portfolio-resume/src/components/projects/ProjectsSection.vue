<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Icon } from '@iconify/vue';

import type { Project } from '@/types/project.ts';

import SignalOverlay from '../ui/SignalOverlay.vue';
import ProjectCard from './ProjectCard.vue';
import { useProjectsFlip } from '@/composables/useProjectsFlip';


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

const container = ref<HTMLElement|null>(null)

const {
    animateCollapse,
    animateExpand
} = useProjectsFlip()

const expandedProject = ref<string | null>(null)

async function toggleProject(name: string) {

    if (expandedProject.value === name) {

        await animateCollapse(container.value!, () => {
            expandedProject.value = null
        })

    } else {

        await animateExpand(container.value!, () => {
            expandedProject.value = name
        })

    }

}

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

    <section ref="container" class="projects-section">
        <SignalOverlay
            :lines="8"
            :points="6"
            :crosses="2"
        />

        <header class="projects-header section-title">
                02_ПРОЕКТЫ
        </header>

        <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            infinite
            control-color="signal-primary"
            class="projects-carousel"
            :swipeable="!expandedProject"
            :animated="!expandedProject"
        >

            <q-carousel-slide
                v-for="(group, index) in projectGroups"
                :key="index"
                :name="index"
                class="projects-slide"
                :class="{expanded : expandedProject}"
            >

                <ProjectCard
                    v-for="project in group"
                    :key="project.name"
                    :project="project"
                    :expanded="expandedProject === project.name"
                    @toggle="toggleProject(project.name)"
                    :class="{
                        hidden:
                            expandedProject &&
                            expandedProject !== project.name
                    }"
                />

            </q-carousel-slide>

        </q-carousel>

        <div v-show="!expandedProject" class="projects-navigator px-8">

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
    @apply gap-x-6 h-full;

    display:grid;

    grid-template-columns:
        repeat(2,minmax(0,1fr));

}

.projects-slide.expanded{

    grid-template-columns: 1fr;

}

.project-card.hidden{

    opacity:0;

    pointer-events:none;

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