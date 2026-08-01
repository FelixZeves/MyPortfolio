<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

import type { Project } from '@/types/project';

const props = defineProps<{
    project: Project
}>()


</script>

<template>

    <div class="project-card">

        <p class="project-title">
            {{ project.name }}
        </p>

        <div class="project-image">
            <Icon
                :icon="project.icon || 'arcticons:nothing-icon-pack'"
                class="project-icon"
            />
        </div>

        <p class="project-description">
            {{ project.description }}
        </p>

        <div class="project-stack">

            <q-chip
                v-for="tech in project.technologies"
                :key="tech"
                class="project-chip"
                outline
                square
            >
                {{ tech }}
            </q-chip>

        </div>

    </div>

</template>

<style scoped>

.project-card{

    display: grid;

    height:auto;
    min-height: 0;

    grid-template-columns:
        minmax(0,1fr)
        96px;

    grid-template-rows:
        auto
        1fr
        auto;

    grid-template-areas:
        "title image"
        "description image"
        "stack stack";

    gap: .75rem;

    border:1px solid var(--signal-additional);

    align-items: center;

    color: var(--signal-additional);

    position:relative;

    padding: 12px;

    background: var(--industrial-navy);

    break-inside: avoid;
    page-break-inside: avoid;
    
}

.project-card::before{

    content:"";

    position:absolute;

    top:-2px;
    right:-2px;

    width:24px;
    height:24px;

    background:var(--signal-primary);

    z-index: 2;

    clip-path:polygon(
        100% 0,
        0 0,
        100% 100%
    );

}

.project-card::after{

    content:"";

    position:absolute;

    inset:6px;

    border:1px solid rgba(255,255,255,.15);

    pointer-events:none;

}

.project-title{

    @apply font-heading text-signal-primary font-bold;

    grid-area:title;

}

.project-image{

    grid-area:image;

    width: 96px;
    aspect-ratio:1;

    justify-self:end;
    align-self:center;

    align-items:center;
    justify-content:center;

    display: flex;

    position:relative;

    overflow:hidden;
    
}

.project-icon{

    color:var(--signal-secondary);

    z-index: 2;

    width:64px;
    height:64px;

}

.project-description{

    @apply font-body;

}

.project-description{
    grid-area:description;
}

.project-stack{

    @apply font-code;

    grid-area:stack;

}

.project-chip{

    @apply !text-xs;

    color: var(--signal-secondary);
}


</style>