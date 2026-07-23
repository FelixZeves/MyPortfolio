<script setup lang="ts">

import { computed } from 'vue'
import { Icon } from '@iconify/vue';

import type { Skill } from '@/types/skill'

import { groupSkills } from '@/utils/groupSkills'
import { getSkillLevelName } from '@/utils/skill';

import HexRating from '@/components/ui/HexRating.vue';

const props = defineProps<{

    skills:Skill[]

}>()


const groups = computed(()=> 
    groupSkills(props.skills)
)

</script>


<template>

<div class="skills-list">


    <q-expansion-item
        v-for="(items, type) in groups"
        :key="type"
        default-opened
        class="skill-folder"
    >

        <template #header>


            <div class="skill-group-header">

                <span class="skill-group-marker">
                    //
                </span>

                <span>
                    {{ type }}
                </span>

                <span class="skill-group-count">
                    [{{items.length}}]
                </span>

            </div>

        </template>

        <div
            v-for="skill in items"
            :key="skill.name"
            class="skill-item"
        >


            <div class="skill-info">

                <Icon
                    :icon="skill.icon  || 'game-icons:skills'"
                    class="skill-icon"
                />

                <span>
                    {{skill.name}}
                </span>

            </div>


            <div class="skill-level">

                <span class="skill-level-name">
                    {{getSkillLevelName(skill.level)}}
                </span>


                <HexRating
                    :value="skill.level"
                    :max="3"
                />

            </div>


        </div>

    </q-expansion-item>


</div>

</template>

<style scoped>

@media(max-width:700px){

    .skills-list{

        grid-template-columns:1fr;

        align-content:start;

    }

}

.skills-list{

    display:grid;

    padding: .75rem;

    font-family: var(--font-code);

    width:100%;
    height:max-content;

    grid-template-columns:
        repeat(2,minmax(0,1fr));

    align-content:center;

    align-items:start;

    gap: 0.75rem;

}

.skill-folder{

    border:
        1px solid rgba(var(--signal-additional-rgb),.15);

    background:
        rgba(var(--industrial-black-rgb),.25);

    position:relative;

    overflow:hidden;

}

.skill-group{

    border-bottom:
        1px solid rgba(var(--signal-additional-rgb),.08);

}


.skill-group :deep(.q-item){

    min-height:40px;

    color:
        var(--signal-additional);

}


.skill-group-header{

    display:flex;

    align-items:center;

    gap:.5rem;

    width:100%;

    font-size:.7rem;

    letter-spacing:.2em;

    text-transform:uppercase;

}


.skill-group-marker{

    color:
        var(--signal-primary);

}


.skill-group-count{

    margin-left:auto;

    color:
        var(--signal-secondary);

}



.skill-items{

    display:flex;

    flex-direction:column;

    gap:.4rem;

    padding:
        .5rem 1rem 1rem;

}

.skill-item{

    min-width:0;
    padding:.45rem .5rem;

    display:flex;

    justify-content:space-between;
    align-items:center;

    border-left:
        1px solid rgba(var(--signal-secondary-rgb),.4);

    background:
        rgba(var(--signal-additional-rgb),.03);

}

.skill-info{

    display:flex;

    align-items:center;

    gap:.5rem;

}

.skill-info span{

    overflow:hidden;

    text-overflow:ellipsis;

    white-space:nowrap;

}


.skill-icon{

    width:16px;

    height:16px;

    color: var(--signal-secondary);

}

.skill-name{

    font-size: .75rem;

    letter-spacing: .12em;

}

.skill-level{

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: .6rem;

}

.skill-level-name{

    width: 100%;

    font-size: .5rem;
    letter-spacing: .1em;
    text-align: end;
    text-transform:  uppercase;

    color: var(--signal-additional);

    opacity: .55;

    white-space: nowrap;

}

</style>