<script setup lang="ts">

import { Icon } from '@iconify/vue'

import type { Skill } from '@/types/skill'
import type { SoftSkill } from '@/types/softSkill'

import PdfProfessionalSkills from './PdfProfessionalSkills.vue'
import PdfProfessionalTraits from './PdfProfessionalTraits.vue'
import { generateClipPath } from '@/utils/generators/fractureGenerator.ts'

const skillsFracture = [
    [30, 0],
    [45, 2],
    [55, 1],
    [70, 8],
    [71, 10],
    [72, 11],
    [77, 11],
    [79, 12],
    [85, 12],
    [87, 15],
    [95, 16],
    [98, 20],
    [100,22]
]

defineProps<{
    skills: Skill[]
    softSkills: SoftSkill[]
}>()

</script>


<template>

    <section class="skills-section">


        <div class="skills-body industrial-data-panel-light">

            <header class="section-title skills-header">
                04_НАВЫКИ
            </header>

            <div class="skills-meta">

                <span class="font-code-ru">
                    <Icon
                        icon="mdi:hexagon"
                        class="text-signal-secondary"
                    />
                    АНАЛИЗ ПЕРСОНЫ
                </span>

                <span class="font-code-ru">
                    <Icon
                        icon="mdi:hexagon"
                        class="text-signal-secondary"
                    />
                    РЕЖИМ: УМЕНИЯ_И_НАВЫКИ
                </span>

            </div>


            <div class="skills-grid">

                <PdfProfessionalSkills
                    :skills="skills"
                />


                <PdfProfessionalTraits
                    :softSkills="softSkills"
                />

            </div>


        </div>


    </section>

</template>

<style scoped>

.skills-section {

    position:relative;

    min-height:0;

    overflow:hidden;

    color:var(--signal-primary);

}


.skills-body {

    @apply
        w-full
        h-full
        pe-1
        ps-2
        pt-3
        pb-2
        font-code;

    position:relative;

}

.skills-body > * {

    position: relative;

    z-index:10;

}


.skills-fracture {

    z-index:1 !important;

}

.skills-header {

    display:flex;

    align-items:center;

    gap:1rem;

}


.skills-header::after {

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

.skills-meta{

    display:flex;

    flex-direction:column;

    gap:2px;

    margin-top:.25rem;

    margin-left:0.25rem;

    font-size:.7rem;

    font-family: var(--font-code);

    letter-spacing:.18em;

    text-transform:uppercase;

    color:var(--signal-primary);

    opacity:.95;

}

.skills-meta span{

    display:flex;

    align-items:center;

    gap:.35rem;

}

.skills-meta svg{

    @apply w-[10px] h-[10px] shrink-0 mb-[.35rem] text-signal-secondary;

}

.skills-grid {
    
    display:grid;

    grid-template-columns:
        1.2fr
        1fr;

    gap: 0.5rem;

    margin-top: 1rem;

    position:relative;

    z-index: 3;
}

</style>