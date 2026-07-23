<script setup lang="ts">
import type { ProfessionalExperience } from '@/types/professionalExperience';
import { Icon } from '@iconify/vue';

defineProps<{
    workExperience: ProfessionalExperience[]
}>();
</script>

<template>

<section>

    <header class="professional-title">
        Опыт работы
    </header>

    <article
        v-for="item in workExperience"
        :key="`${item.company}-${item.startDate}`"
        class="professional-item"
    >

        <div class="professional-period">

            <span>
                {{ item.startDate }} / {{ item.endDate }}
            </span>

        </div>

        <div class="professional-body">

            <div>

                <span class="professional-company">
                    {{ item.company }}
                </span>

            </div>


            <div class="professional-position-area">

                <span class="professional-position">
                    {{ item.position }}
                </span>

            </div>


            <ul
                v-if="item.achievements.length"
                class="professional-achievements"
            >

                <span class="professional-achievements-title">
                    СПЕЦИФИКА
                </span>

                <li
                    v-for="achievement in item.achievements"
                    :key="achievement"
                    class="professional-achievements-item"
                >

                    <Icon
                        icon="mdi:square-rounded-outline"
                    />

                    {{ achievement }}

                </li>

            </ul>

        </div>

    </article>

</section>

</template>

<style scoped>

.professional-item{

    position:relative;

    padding:8px;
    padding-top: 16px;

    border:1px solid var(--paper-dark);

}

.professional-item + .professional-item{

    margin-top:.75rem;

}

.professional-body{

    display:grid;

    grid-template-columns:2fr 1fr;

    column-gap:1.25rem;
    row-gap: 0.75rem;

}

.professional-title {

    position:relative;
    display:block;

    width: max-content;

    margin-left:auto;

    padding:.5rem 1rem;

    font-family:var(--font-poster);
    font-weight:600;
    font-size:1rem;

    border:1px solid var(--paper-dark);
    border-left: none;
    border-bottom:none;

}

.professional-title::before{

    content:"";

    position:absolute;

    top:0;
    left:-10px;

    width:20px;
    height:100%;

    border-left:1px solid var(--paper-dark);

    transform:skewX(-25deg);

    transform-origin:right;

}

.professional-period{

    position:absolute;

    top:-.55rem;
    left:3%;
    right:auto;

    padding-inline:.35rem;

    background:var(--paper);
    font-family:var(--font-code);
    font-size: 0.75rem;

}

.professional-company{

    font-family:var(--font-poster);

    font-size:1rem;

    font-weight:600;
    color: var(--industrial-black)

}

.professional-position-area{

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

    min-height:80px;

    padding:1rem;

    border:1px dashed var(--industrial-black);

}

.professional-position-area::before{

    content:"ДОЛЖНОСТЬ";

    position:absolute;

    top:-.6rem;
    left:25%;

    padding-inline:.25rem;

    background:var(--paper);

    font-family:var(--font-code);

    font-size:.75rem;

    letter-spacing:.25em;

}

.professional-position{

    @apply 
        inline-flex
        items-center
        justify-center
        px-4
        py-[.45rem]
        border-2
        border-signal-primary
        uppercase
        text-signal-primary
        font-bold
        font-poster
        tracking-[.08em]
        opacity-[.82]
        blur-[.15px];

    background:
        rgba(var(--signal-primary-rgb), .05);

    transform:
        rotate(-4deg)
        translate(.15rem,.1rem);

    box-shadow:
        0 0 2px rgba(var(--signal-primary-rgb), .15);


}

.professional-achievements{

    grid-column: 1 / -1;

    list-style:none;

}

.professional-achievements-title{

    @apply block mb-[.4rem] w-full font-code text-[.7rem] tracking-[.15em] text-technical-code;

}

.professional-achievements-title + .professional-achievements-item{

    border-top:1px solid rgba(var(--paper-shadow-rgb), .2);

}

.professional-achievements-item{

    @apply flex items-start gap-2 py-[.45rem] px-0;

}

.professional-achievements-item svg {

    @apply w-[10px] h-[10px] shrink-0 mt-[.35rem] text-signal-primary;

}

.professional-achievements-item + .professional-achievements-item{

    border-top:1px solid rgba(var(--paper-shadow-rgb), .2);

}

</style>