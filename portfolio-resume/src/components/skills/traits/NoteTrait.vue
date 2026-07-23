<script setup lang="ts">

import { Icon } from '@iconify/vue'

import type { GeneratedTrait } from '@/types/generatedTrait'


defineProps<{

    item: GeneratedTrait

}>()

</script>


<template>

<article class="note-body note-box">


    <header class="note-header">


        <Icon
            icon="lucide:file-text"
            class="note-icon"
        />

        <span>
            PROFILE.TEXT
        </span>


    </header>

    <div class="note-content">


        <span class="note-label">
            README.md
        </span>

        <span class="note-title">
            {{ item.trait.title }}
        </span>

        <p class="note-description">

            {{ item.trait.description }}

        </p>


    </div>


</article>

</template>


<style scoped>


.note-body{

    display:flex;

    flex-direction:column;

    height:100%;

    gap:.75rem;

}


.note-box{

    position: relative;

    padding:.85rem;

    border:
        1px solid rgba(var(--signal-additional-rgb),.2);


    background:
        linear-gradient(
            rgba(var(--signal-additional-rgb),.075),
            rgba(var(--signal-additional-rgb),.05)
        ),
        rgba(var(--signal-additional-rgb), .04);

}

.note-box::before{

    content:"";

    position:absolute;

    bottom:0;

    right:0;


    width:25px;

    height:25px;


    border-bottom:
        1px solid rgba(var(--signal-additional-rgb),.6);

    border-right:
        1px solid rgba(var(--signal-additional-rgb),.6);

}


.note-header{

    display:flex;

    align-items:center;

    gap:.5rem;


    padding-bottom:.5rem;


    border-bottom:
        1px solid rgba(var(--signal-secondary-rgb),.5);


    font-size:.65rem;

    letter-spacing:.18em;

    color: var(--signal-additional);

}


.note-icon{

    width:16px;

    height:16px;

    color: var(--signal-secondary);

}



.note-content{

    display:flex;

    flex-direction:column;

    gap:.4rem;

    padding-left:.5rem;


    border-left:
        2px solid rgba(var(--signal-secondary-rgb),.35);

}



.note-label{

    font-size:.65rem;

    letter-spacing:.2em;

    color:
        rgba(var(--signal-secondary-rgb),.85);

}



.note-title{

    font-size:.85rem;

    line-height:1.4;


    color:
        var(--signal-additional);

}



.note-description{

    margin:0;

    padding-left:.5rem;

    font-family:
        var(--font-code);

    font-size:.7rem;

    line-height:1.6;


    color:
        rgba(var(--signal-additional-rgb),.8);

}

</style>