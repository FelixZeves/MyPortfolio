<script setup lang="ts">

import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';

import type { Skill } from '@/types/skill';
import type { SoftSkill } from '@/types/softSkill';

import SignalLine from '../ui/SignalLine.vue';

import ProfessionalSkills from './ProfessionalSkills.vue';
import ProfessionalTraits from './ProfessionalTraits.vue';


const props = defineProps<{
    skills: Skill[]
    softSkills: SoftSkill[]
}>()

const profile = defineModel<'professional' | 'personal'>('profile', {
    default: 'professional'
})

const emit = defineEmits<{
    (
        e:'profile-change',
        value:'professional' | 'personal'
    ):void
}>()

const currentUnits = computed(() =>
    profile.value === 'professional'
        ? props.skills.length
        : props.softSkills.length
)

const currentDatabase = computed(() =>
    profile.value === 'professional'
        ? 'PROFESSIONAL'
        : 'PERSONAL'
)
</script>

<template>

<div class="skills-console">

    <div class="skills-console-header">

        <span class="skills-console-title">
            PROFILE SCAN RESULT
        </span>

        <span class="skills-console-info">

            DATABASE:
            <span>
            {{ currentDatabase }}
            </span>
             
        </span>

        <span class="skills-console-info">
            <span>
                [{{ String(currentUnits + 1).padStart(5, '0') }}]
            </span>
             DATA UNITS
        </span>

        <signal-line
        :position="{
            top: '64px',
            left: '-1%'
        }"
        length="95%"
        color="var(--signal-additional)"
        :flow="true"
        flowOffset="15px"
        />

    </div>

    <q-tabs
        :model-value="profile"
        @update:model-value="emit('profile-change',$event)"
        class="skills-tabs"
        indicator-color="transparent"
    >

        <q-tab name="professional">

            <div class="skills-tab-content">

                <Icon
                :icon="
                    profile === 'professional'
                        ? 'mdi:hexagon'
                        : 'mdi:hexagon-outline'
                    "
                    class="skills-tab-icon"
                />

                <span class="uppercase">professional</span>

            </div>

        </q-tab>

        <q-tab name="personal">

            <div class="skills-tab-content">

                <Icon
                :icon="
                    profile === 'personal'
                        ? 'mdi:hexagon'
                        : 'mdi:hexagon-outline'
                    "
                    class="skills-tab-icon"
                />

                <span class="uppercase">personal</span>

            </div>

        </q-tab>

    </q-tabs>

    <q-separator dark />

    <q-tab-panels
        v-model="profile"
        animated
        class="skills-panels"
    >

        <q-tab-panel name="professional">

            <ProfessionalSkills :skills="skills"/>

        </q-tab-panel>

        <q-tab-panel name="personal">

            <ProfessionalTraits :softSkills="softSkills"/>

        </q-tab-panel>

    </q-tab-panels>

</div>

</template>

<style scoped>

.skills-console {
    
    position:relative;

    min-height:500px;

    border:
        1px solid rgba(224,238,250,.25);



    background:
        linear-gradient(
        135deg,
        rgba(var(--technical-grid-rgb), .18),
        rgba(0,0,0,.08)
        );

    backdrop-filter:
        blur(4px);


}

.skills-console::before,
.skills-console::after {

    content:"";

    position:absolute;


    width:24px;
    height:24px;


}


.skills-console::before {

    top:-2px;
    left:-2px;


    border-top:
        2px solid var(--signal-primary);

    border-left:
        2px solid var(--signal-primary);

}



.skills-console::after {

    bottom:-2px;
    right:-2px;


    border-right:
        2px solid var(--signal-primary);

    border-bottom:
        2px solid var(--signal-primary);

}

.skills-console-header{

    display:flex;

    font-family: var(--font-code);

    flex-direction:column;

    align-items:flex-start;

    gap:.1rem;

    padding:.6rem 1rem;

    border-bottom:1px solid rgba(var(--signal-additional-rgb),.08);

}

.skills-console-title{

    padding-bottom: .1rem;

    font-size:.75rem;

    letter-spacing:.25em;

    color:var(--signal-primary);

}

.skills-console-info{

    font-size:.65rem;

    letter-spacing:.2em;

    color:var(--signal-primary);

    opacity:.95;

}

.skills-console-info span{

    color:var(--signal-additional);

}

.skills-console-state{

    font-size:.65rem;

    color:var(--signal-primary);

}

.skills-tabs :deep(.q-tab){

    @apply min-h-[40px] text-signal-secondary flex-1;

    border:1px solid rgba(var(--signal-additional-rgb),.08);

}

.skills-tabs :deep(.q-tab--active){

    @apply text-signal-additional border-signal-additional;

    background:rgba(var(--signal-additional-rgb),.1);

}

.skills-tabs :deep(.q-tab:hover){

    background:rgba(var(--signal-secondary-rgb),.08);

}

.skills-tab-content{
    @apply flex flex-row gap-[.30rem]
}

.skills-tab-content svg {

    @apply w-[12px] h-[12px] shrink-0 mt-[.25rem] text-signal-primary;

}

.skills-tab-content svg{

    transition:
        transform .5s,
        color .5s;

}

.skills-tabs :deep(.q-tab--active) svg{

    transform:scale(1.15);

}

.skills-panels{

    background:transparent;

}

.skills-panels :deep(.q-tab-panel){

    padding: 0;

}

</style>