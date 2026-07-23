<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { Icon } from '@iconify/vue';

import type { Skill } from '@/types/skill.ts';
import type { SoftSkill } from '@/types/softSkill.ts';
import type { OverlayController } from '@/types/systemOverlay.ts';

import { generateClipPath, generateSvgPath } from '@/utils/generators/fractureGenerator.ts';
import { useSkillsTransition } from '@/composables/useSkillsTransition.ts';


import SignalOverlay from '../ui/SignalOverlay.vue';

import SkillsConsole from './SkillsConsole.vue';
import SystemReconfigurationOverlay from './SystemReconfigurationOverlay.vue';


const props = defineProps<{
    skills: Skill[]
    softSkills: SoftSkill[]
}>()

const currentProfile = ref<'professional' | 'personal'>('professional')
const showOverlay = ref(false)

const skillsFracture = [
    [30, 0],
    [45, 2],
    [55, 1],
    [70, 8],
    [71, 10],
    [72, 12],
    [77, 12],
    [79, 14],
    [85, 14],
    [87, 18],
    [95, 20],
    [98, 28],
    [100,30]
]

const scanner = ref<HTMLElement|null>(null)

const fracture = ref<HTMLElement|null>(null)

const overlay = ref<InstanceType<typeof SystemReconfigurationOverlay> | null>(null)

const {
    repairProfile,
    corruptProfile,
    isTransitioning
} = useSkillsTransition()

async function onProfileChange(
    profile: 'professional' | 'personal'
) {

    
    if (profile === 'personal') {

        await repairProfile(
            scanner.value,
            fracture.value,
            () => {
                currentProfile.value = profile
            }
        )

    } else {

        showOverlay.value = true

        await nextTick()

        overlay.value?.reset()

        const overlayApi = <OverlayController>({
                reset: overlay.value!.reset,
                appendStep: overlay.value!.appendStep,
                updateStep: overlay.value!.updateStep,
                setPending: overlay.value!.setPending,
                completeStep: overlay.value!.completeStep
            })

        await corruptProfile(
            overlayApi,
            () => {
                currentProfile.value = profile
            }
        )

        showOverlay.value = false
    }

    

}

</script>


<template>
    <section class="skills-section">

        <SystemReconfigurationOverlay ref="overlay" v-model="showOverlay"/>

        <div class="
            skills-body
            industrial-data-panel"
            :class="[
                currentProfile === 'professional'
                    ? 'skills-corruption'
                    : 'skills-clean'
            ]"
        >

            <div class="skills-effects">

                <div ref="scanner" class="skills-scanner"/>

                <svg
                    ref="fracture"
                    class="skills-fracture"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >

                    <path
                        :d="generateSvgPath(skillsFracture)"
                        vector-effect="non-scaling-stroke"
                    />

                </svg>

            </div>

            <div>

                <signal-overlay
                    :lines="10"
                    :points="6"
                    :crosses="4"
                />
                
            </div>

            <header class="section-title skills-header">
                04_SK1LLS
            </header>

            <div class="skills-meta">

                <span>
                    <Icon
                        icon="mdi:hexagon"
                        class="text-signal-secondary"
                    />
                    PERSON_ANALYSIS
                </span>

                <span>
                    <Icon
                        icon="mdi:hexagon"
                        class="text-signal-secondary"
                    />
                    MODE: {{ currentProfile.toUpperCase() }}_SKILLS
                </span>

            </div>

            <div class="skills-content">

                <SkillsConsole
                    :profile="currentProfile"
                    @profile-change="onProfileChange"
                    :skills="skills"
                    :softSkills="softSkills"
                />

            </div>
        </div>

    </section>

</template>

<style scoped>

.skills-section {

    position:relative;

    min-height: 600px;

    overflow:hidden;

    color: var(--signal-primary);
        

}

.skills-body{

    @apply
        w-full
        h-full
        pe-1
        ps-2
        pt-3
        font-code;

    position:relative;

}

.skills-effects{

    position:absolute;

    inset:0;

    pointer-events:none;

    overflow:hidden;

}


.skills-scanner{

    position:absolute;

    top:0;

    left:-5%;

    width:2px;

    height:100%;

    background:
        var(--signal-primary);


    box-shadow:
        0 0 12px var(--signal-primary),
        0 0 30px var(--signal-primary);


    opacity:0;

}


.skills-fracture {

    position:absolute;

    inset:0;

    width:100%;
    height:100%;

    pointer-events:none;

    opacity:0;

}


.skills-fracture path {

    fill:none;


    stroke:
        var(--signal-primary);


    stroke-width:6;


    filter:
        drop-shadow(
            0 0 6px var(--signal-primary)
        );


    stroke-dasharray:1000;

    stroke-dashoffset:1000;

}

.skills-clean {

    clip-path: polygon(
        0 0,
        30% 0,
        45% 0,
        55% 0,
        70% 0,
        71% 0,
        72% 0,
        77% 0,
        79% 0,
        85% 0,
        87% 0,
        95% 0,
        98% 0,
        100% 0,
        100% 100%,
        0 100%
    );

    transition: clip-path .6s ease;

}

.skills-corruption{
    clip-path: v-bind(generateClipPath(skillsFracture));

    transition: clip-path .6s ease;
}

.skills-header::after{

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

.skills-content {

    position:relative;

    z-index:2;

    padding: 20px 24px 30px;

}

</style>