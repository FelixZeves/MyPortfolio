<script setup lang="ts">
import type { Education } from '@/types/education';

import { Icon } from '@iconify/vue';

defineProps<{
    education: Education[]
}>();

</script>

<template>

    <section class="education-list">

        <header class="education-title pb-4">
            Образование
        </header>

        <article
            v-for="item in education"
            :key="`${item.institution}-${item.startYear}`"
            class="education-item"
        >

            <div class="education-period">

                <span>
                    {{ item.startYear }} / {{ item.endYear }}
                </span>

            </div>

            <div class="education-body">

                <div class="flex flex-col gap-1 py-1">

                    <span class="education-institution">
                        {{ item.institution }}
                    </span>
    
                    <p class="education-faculty">
                        {{ item.faculty }}
                    </p>
    
                    <p class="education-specialization">
                        {{ item.specialization }}
                    </p>

                </div>

                <div class="pt-2">

                    <div class="education-degree-area">

                        <span class="education-degree">
                            {{ item.degree }}
                        </span>

                    </div>
    
                    <ul
                        v-if="item.achievements?.length"
                        class="education-achievements"
                    >
                        <span class="education-achievements-title">
                            ЗАМЕТКИ
                        </span>

                        <li
                            v-for="achievement in item.achievements"
                            :key="achievement"
                            class="education-achievements-item"
                        >
                            <Icon
                                icon="mdi:square-rounded-outline"
                                width="12"
                            />
                            {{ achievement }}
                        </li>
                    </ul>

                </div>

            </div>

        </article>

    </section>

</template>

<style scoped>

.education-item{

    position:relative;

    border:1px solid var(--paper-dark);

    padding: 8px;

}

.education-item + .education-item{

    margin-top:0.75rem;

}

.education-body{

    display:grid;

    grid-template-columns:2fr 1fr;

    gap: 1.25rem;

}

.education-title{

    position:relative;

    display:inline-block;

    font-family: var(--font-poster);

    padding:.5rem 1rem;

    font-weight: 600;

    font-size:1rem;

    border:

        1px solid var(--paper-dark);

    border-right:none;
    border-bottom:none;

}

.education-title::after{

    content:"";

    position:absolute;

    top:0;
    right:-10px;

    width:20px;
    height:100%;
    
    border-right:1px solid var(--paper-dark);

    transform:skewX(25deg);

    transform-origin:left;

}

.education-period{

    position:absolute;

    position:absolute;

    top:-.55rem;
    right:10%;
    left:auto;

    padding-inline:.35rem;

    background:var(--paper);
    font-family:var(--font-code);
    font-size: 0.75rem;

}

.education-institution{

    font-family:var(--font-poster);

    font-weight: 600;

    font-size:1rem;

    color:var(--industrial-black);

}

.education-faculty,
.education-specialization{

    font-family:var(--font-paper);

    color:var(--technical-code);

}

.education-faculty{

    font-size: 0.9rem;

    font-weight: 500;

    color:var(--technical-code);

}

.education-specialization{
    
    font-size: 0.8rem;

    font-weight: 400;

}

.education-degree-area{

    position:relative;

    display:flex;

    align-items:center;

    justify-content:center;

    min-height:80px;

    padding:1rem;

    border:1px dashed var(--industrial-black);

}

.education-degree-area::before{

    content:"СТЕПЕНЬ";

    position:absolute;

    top:-.6rem;
    left:24%;

    padding-inline:.25rem;

    background:var(--paper);

    font-family:var(--font-code);

    font-size:.75rem;

    letter-spacing:.25em;

}

.education-degree{

    @apply 
        inline-flex
        items-center
        justify-center
        px-4
        py-[.45rem]
        border-2
        border-signal-secondary
        uppercase
        text-signal-secondary
        font-bold
        font-poster
        tracking-[.08em]
        opacity-[.82]
        blur-[.15px];

    background:
        rgba(var(--signal-secondary-rgb), .05);

    transform:
        rotate(-4deg)
        translate(.15rem,.1rem);

    box-shadow:
        0 0 2px rgba(var(--signal-secondary-rgb), .15);

}

.education-achievements{

    @apply text-nowrap mt-[.65rem] list-none;

}

.education-achievements-title{

    @apply block mb-[.4rem] w-full font-code text-[.7rem] tracking-[.15em] text-technical-code;

}

.education-achievements-title + .education-achievements-item{

    border-top:1px solid rgba(var(--paper-shadow-rgb), .2);

}

.education-achievements-item{

    @apply flex items-start gap-2 py-[.45rem] px-0;
    
}

.education-achievements-item svg {

    @apply w-[10px] h-[10px] shrink-0 mt-[.35rem] text-signal-secondary;

}

.education-achievements-item + .education-achievements-item{

    border-top:1px solid rgba(var(--paper-shadow-rgb), .2);

}

</style>