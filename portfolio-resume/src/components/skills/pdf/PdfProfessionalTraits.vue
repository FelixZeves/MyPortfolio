<script setup lang="ts">

import type { SoftSkill } from '@/types/softSkill'

defineProps<{
    softSkills:SoftSkill[]
}>()

</script>

<template>


    <section class="traits">


        <header>
            // личные качества
        </header>

        <ul>


            <li
                v-for="item in softSkills"
                :key="item.title"
            >

                <span>
                    {{item.title}}
                </span>

            </li>


        </ul>


    </section>


</template>

<style scoped>

.traits {

    height: auto;

    padding:.75rem;


    font-family:
        var(--font-code);


    border:
        1px solid
        rgba(var(--signal-additional-rgb),.18);


    background:
        rgba(var(--industrial-black-rgb),.25);


    position:relative;

    overflow:hidden;

}

.traits > header {

    display:flex;

    align-items:center;

    gap:.5rem;


    padding:
        .45rem
        .5rem;


    border-bottom:
        1px solid
        rgba(var(--signal-additional-rgb),.15);


    color: var(--signal-primary);

    font-size:.7rem;

    letter-spacing:.18em;

    text-transform:uppercase;

}

.traits ul {

    list-style:none;

    margin:0;

    padding:.25rem;


    display:flex;

    flex-direction:column;

    gap:.35rem;

}

.traits li {

    display:flex;

    align-items:center;

    gap:.6rem;


    min-height:34px;


    padding:
        .35rem
        .5rem;


    border-left:

        1px solid

        rgba(var(--signal-secondary-rgb),.45);


    background:

        rgba(var(--signal-secondary-rgb),.04);


    color:
        var(--signal-additional);


    font-size:.7rem;

    letter-spacing:.1em;

    break-inside: avoid;
    page-break-inside: avoid;

}

.traits li span {

    color:
        var(--signal-additional);

    font-family: var(--font-code-ru);

    font-size:.7rem;

    opacity:.9;

}

</style>