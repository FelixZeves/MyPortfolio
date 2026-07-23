<script setup lang="ts">

import { Icon } from '@iconify/vue'

import type { GeneratedTrait } from '@/types/generatedTrait'


defineProps<{

    item: GeneratedTrait

}>()

</script>


<template>

<article class="highlight-body highlight-box">


    <header class="highlight-header">


        <Icon
            icon="lucide:badge-check"
            class="highlight-icon"
        />


        <span>
            PROFILE.SIGNAL
        </span>


    </header>


    <div class="highlight-content">


        <span class="highlight-label">
            ACTIVE TRAIT
        </span>


        <h3 class="highlight-title">

            {{ item.trait.title }}

        </h3>


        <p class="highlight-description">

            {{ item.trait.description }}

        </p>


    </div>


</article>

</template>

<style scoped>

.highlight-body{

display:flex;

flex-direction:column;

height:100%;

gap:.75rem;

}


.highlight-box{

position:relative;

overflow:hidden;


padding:.85rem;


border:
    1px solid rgba(var(--signal-primary-rgb),.35);


background:
    linear-gradient(
        135deg,
        rgba(var(--signal-primary-rgb),.06),
        rgba(var(--industrial-black-rgb),.2)
    );

}



.highlight-box::before{

    content:"";

    position:absolute;

    top:-2px;
    right:-2px;

    width:20px;
    height:20px;

    background:rgba(var(--signal-primary-rgb),.6);

    z-index: 2;

    clip-path:polygon(
        100% 0,
        0 0,
        100% 100%
    );

    border-top:
        1px solid rgba(var(--signal-primary-rgb),.6);

    border-right:
        1px solid rgba(var(--signal-primary-rgb),.6);

}



.highlight-header{

    display:flex;

    align-items:center;

    gap:.5rem;


    padding-bottom:.5rem;


    border-bottom:
        1px solid rgba(var(--signal-primary-rgb),.35);


    font-size:.65rem;

    letter-spacing:.18em;


    color:
        var(--signal-primary);

}



.highlight-icon{

    width:16px;

    height:16px;

}



.highlight-content{

    display:flex;

    flex-direction:column;

    gap:.45rem;

}



.highlight-label{

    font-size:.65rem;

    letter-spacing:.22em;

    color:
        rgba(var(--signal-primary-rgb),.95);

}



.highlight-title{

    margin:0;

    font-size:.85rem;

    line-height:1.35;


    color:
        var(--signal-additional);
    
    font-family:
        var(--font-code);

}



.highlight-description{

    margin:0;

    font-size:.7rem;

    line-height:1.55;

    font-family:
        var(--font-code);

    color:
        rgba(var(--signal-additional-rgb),.85);

}

</style>