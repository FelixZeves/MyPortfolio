<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

import type { Project } from '@/types/project';
import SignalLine from '../ui/SignalLine.vue';


const props = defineProps<{
    project: Project
}>()

const shortDescription = computed(() => {

const maxLength = 75;

const text = props.project.description;

if (text.length <= maxLength)
    return text;

const cut = text.slice(0,maxLength);

return cut.slice(
    0,
    cut.lastIndexOf(" ")
) + "...";

});

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
            {{ shortDescription || project.description }}
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

        <footer class="project-footer">
            <signal-line
                :position="{
                    top: '0%',
                    left:'0%'
                    }"
                :length="'100%'"
                :color="'var(--signal-additional)'"
                thickness='1px'
                :flow="true"
                flowOffset='15px'
            />
            <q-btn
                flat
                class="analyze-btn"
            >
                > ANALYZE_
            </q-btn>
        </footer>

    </div>

</template>

<style scoped>

.project-card{

    display: grid;

    height:100%;
    min-height:0;

    grid-template-columns:
        minmax(0,1fr)
        96px;

    grid-template-rows:
        auto
        1fr
        auto
        auto;

    grid-template-areas:
        "title image"
        "description image"
        "stack stack"
        "footer footer";

    gap: .75rem;

    border:1px solid var(--signal-additional);

    align-items: center;

    color: var(--signal-additional);

    position:relative;

    padding: 12px;

    background:

        linear-gradient(
            180deg,
            rgba(255,255,255,.02),
            transparent
        ),

        linear-gradient(
            90deg,
            rgba(255,255,255,.02),
            transparent 30%
        ),

        var(--industrial-navy);

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

.project-image::before{

    content:"";

    position:absolute;

    inset:0;

    opacity:.35;

    background:

        linear-gradient(
            to right,
            transparent 15px,
            var(--signal-secondary) 16px
        ),

        linear-gradient(
            to bottom,
            transparent 15px,
            var(--signal-secondary) 16px
        );

    mask-image:
        radial-gradient(
            ellipse 70% 35% at 45% 45%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.85) 40%,
            rgba(0,0,0,.6) 85%,
            transparent 100%
        );

    background-size:
        16px 16px;

}

.project-image::after{

    content: "";

    z-index: 1;

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: .6;

    background:
        radial-gradient(circle, var(--signal-primary) 1.5px, transparent 0px) 0 -8px / 32px 48px,
        radial-gradient(circle, var(--signal-primary) 1.5px, transparent 0px) 16px 24px / 32px 48px;
        

    mask-image:
        radial-gradient(
            ellipse 70% 45% at 45% 38%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.95) 40%,
            rgba(0,0,0,.6) 65%,
            transparent 100%
        );
}

.project-icon{

    color:var(--signal-secondary);

    z-index: 2;

    width:64px;
    height:64px;

}

.project-description,
.project-footer{

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

.project-footer{

    position:relative;

    padding-top:.75rem;

    grid-area:footer;

}

.analyze-btn{

    @apply
        font-code
        text-xs;

    color:var(--signal-primary);

    letter-spacing:.15em;

}

</style>