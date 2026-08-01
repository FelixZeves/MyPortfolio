<script setup lang="ts">

import type { Project } from '@/types/project'

import ProjectCard from './PdfProjectCard.vue'
import SignalOverlay from '@/components/ui/SignalOverlay.vue';

defineProps<{
    projects: Project[]
}>()

</script>


<template>

    <section class="projects-section industrial-data-panel-light">

        <header class="projects-header section-title">
            02_ПРОЕКТЫ
        </header>

        <div class="projects-grid">

            <ProjectCard
                v-for="project in projects"
                :key="project.name"
                :project="project"
                :expanded="false"
                pdf
            />

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

.projects-grid {

    display:grid;

    grid-template-columns:
        repeat(2, minmax(0,1fr));
        
    align-items: start;

    gap:1rem;

}

</style>