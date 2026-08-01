<script setup lang="ts">

import { computed } from 'vue'

import type { Skill } from '@/types/skill'

import { groupSkills } from '@/utils/groupSkills'
import { getSkillLevelName } from '@/utils/skill'

import HexRating from '@/components/ui/HexRating.vue'


const props = defineProps<{
    skills:Skill[]
}>()


const groups = computed(() =>
    groupSkills(props.skills)
)

</script>


<template>

    <section class="skills">

        <header class="skills-header uppercase">
            // профессиональные навыки
        </header>

        <div class="skills-list">


            <section
                v-for="(items,type) in groups"
                :key="type"
                class="skill-group"
            >

                <header>

                    // {{type}}
                    
                    <span>
                        [{{items.length}}]
                    </span>

                </header>


                <article
                    v-for="skill in items"
                    :key="skill.name"
                    class="skill-item"
                >

                    <div>

                        {{skill.name}}

                    </div>


                    <div class="skill-rating">

                        <span>
                            {{getSkillLevelName(skill.level)}}
                        </span>


                        <HexRating
                            :value="skill.level"
                            :max="3"
                        />

                    </div>


                </article>


            </section>


        </div>

    </section>

</template>

<style scoped>

.skills {

    height:auto;

    padding:.75rem;


    font-family:
        var(--font-code);


    border:
        1px solid
        rgba(var(--signal-additional-rgb),.18);


    background:
        rgba(var(--industrial-black-rgb),.25);


    overflow:hidden;

}

.skills-header {

    display:flex;

    align-items:center;

    gap:.5rem;


    padding:
        .45rem
        .5rem;


    margin-bottom:.5rem;


    border-bottom:
        1px solid
        rgba(var(--signal-additional-rgb),.15);


    color:
        var(--signal-primary);


    font-size:.7rem;

    letter-spacing:.18em;

    text-transform:uppercase;

}


.skills-list {

    display:grid;

    grid-template-columns:
        repeat(2,minmax(0,1fr));

    gap:.75rem;


    font-family:
        var(--font-code);

    z-index:10;

}


.skill-group {

    border:
        1px solid
        rgba(var(--signal-additional-rgb),.18);


    background:
        rgba(var(--industrial-navy-rgb),.5);


    overflow:hidden;

    position:relative;

    break-inside: avoid;
    page-break-inside: avoid;

}

.skill-group > header {

    display:flex;

    justify-content: space-between;

    align-items:center;

    padding:
        .45rem
        .6rem;


    border-bottom:
        1px solid
        rgba(var(--signal-additional-rgb),.15);


    color:
        var(--signal-primary);


    font-size:.7rem;

    letter-spacing:.18em;

    text-transform:uppercase;

}

.skill-group > header > span {

    color:var(--signal-secondary);

}

/*
Элементы навыков
*/

.skill-item {

    display:flex;

    justify-content:space-between;

    align-items:center;


    padding:
        .35rem
        .55rem;


    margin:
        .35rem;


    border-left:
        1px solid
        rgba(var(--signal-secondary-rgb),.45);


    background:
        rgba(var(--signal-secondary-rgb),.04);


    min-height:34px;

}


.skill-item > div:first-child {

    overflow:hidden;

    text-overflow:ellipsis;

    white-space:nowrap;


    font-size:.75rem;

    letter-spacing:.1em;


    color:
        var(--paper);

}



/*
Рейтинг
*/

.skill-rating {

    display:flex;

    flex-direction:column;

    align-items:flex-end;

    gap:.15rem;

}


.skill-rating span {

    font-size:.5rem;

    letter-spacing:.12em;

    text-transform:uppercase;


    color:
        var(--signal-additional);


    opacity:.7;

}

</style>