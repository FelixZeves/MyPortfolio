<script setup lang="ts">

import { Icon } from '@iconify/vue'

import type { GeneratedTrait } from '@/types/generatedTrait'

defineProps<{

    item: GeneratedTrait

}>()

</script>

<template>

    <article class="property-body property-box">

        <header class="property-header">

            <Icon
                icon="oui:token-property"
                class="property-icon"
            />

            <span>
                PROPERTY
            </span>

        </header>


        <div class="property-field">

            <span class="property-label">

                VALUE

            </span>

            <span class="property-value">

                {{ item.trait.title }}

            </span>

        </div>


        <div class="property-field">

            <span class="property-label">

                DESCRIPTION

            </span>

            <span class="property-description">

                {{ item.trait.description }}

            </span>

        </div>

    </article>

</template>

<style scoped>

.property-body{

    display:flex;

    flex-direction:column;

    gap: 1rem;

    height:100%;

}

.property-box{

    position: relative;

    padding:.65rem .65rem;

    border:1px solid
        rgba(var(--signal-additional-rgb), .18);
    

    background:
        linear-gradient(
            rgba(var(--signal-additional-rgb), .05),
            rgba(var(--signal-secondary-rgb), .15)
        ),
        rgba(var(--industrial-black-rgb), .1);

}

.property-box::before{

    content:"";

    position:absolute;

    bottom:0;

    right:0;


    width:35px;

    height:35px;


    border-bottom:
        1px solid rgba(var(--signal-secondary-rgb),.6);

    border-right:
        1px solid rgba(var(--signal-secondary-rgb),.6);

}

.property-box::after{

content:"";

position:absolute;

top:0;

left:0;


width:35px;

height:35px;


border-top:
    1px solid rgba(var(--signal-secondary-rgb),.6);

border-left:
    1px solid rgba(var(--signal-secondary-rgb),.6);

}


.property-header{

    display:flex;

    align-items:center;

    gap:.5rem;

    padding-bottom:.5rem;

    border-bottom:
        1px solid rgba(var(--signal-additional-rgb),.15);

    font-size:.65rem;

    letter-spacing:.18em;

    color:var(--signal-secondary);

}


.property-icon{

    width:24px;

    height:24px;

    color:var(--signal-primary);

}


.property-field{

    display:flex;

    flex-direction:column;

    gap:.25rem;

}


.property-label{

    font-size:.65rem;

    text-transform:uppercase;

    letter-spacing:.2em;

    color:rgba(var(--signal-secondary-rgb),.75);

}


.property-value{

    font-size:.8rem;

    line-height:1.4;

    color:var(--signal-additional);

}


.property-description{

    font-size:.7rem;

    line-height:1.6;

    color:rgba(var(--signal-additional-rgb),.8);

}

</style>