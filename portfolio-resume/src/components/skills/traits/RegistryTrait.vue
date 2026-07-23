<script setup lang="ts">

import { Icon } from '@iconify/vue'

import type { GeneratedTrait } from '@/types/generatedTrait'


defineProps<{

    item: GeneratedTrait

}>()


</script>


<template>

    <article class="registry-body registry-box">


        <header class="registry-header">


            <Icon
                icon="fluent-mdl2:database-view"
                class="registry-icon"
            />

            <span>
                PROFILE.REGISTRY
            </span>


        </header>


        <div class="registry-entry">


            <span class="registry-label">
                VALUE
            </span>

            <span class="registry-value">
                {{item.trait.title}}
            </span>


        </div>


        <div class="registry-entry">


            <span class="registry-label">
                DESCRIPTION
            </span>

            <p class="registry-description">
                {{item.trait.description}}
            </p>


        </div>


    </article>

</template>

<style scoped>

.registry-body{

    display:flex;

    flex-direction:column;

    gap:.75rem;

    height:100%;

}


.registry-box{

    position: relative;

    padding:.75rem;

    border:
        1px solid rgba(var(--signal-secondary-rgb),.3);


    background:
        linear-gradient(
            rgba(var(--signal-additional-rgb), .025),
            rgba(var(--signal-secondary-rgb), .075)
        ),
        rgba(var(--industrial-black-rgb), .1);


}

.registry-box::before{

    content:"";

    position:absolute;

    bottom:0;

    left:0;


    width:35px;

    height:35px;


    border-bottom:
        1px solid rgba(var(--signal-secondary-rgb),.6);

    border-left:
        1px solid rgba(var(--signal-secondary-rgb),.6);

}

.registry-box::after{

    content:"";

    position:absolute;

    top:0;

    right:0;


    width:35px;

    height:35px;


    border-top:
    1px solid rgba(var(--signal-secondary-rgb),.6);

    border-right:
    1px solid rgba(var(--signal-secondary-rgb),.6);

}



.registry-header{

    display:flex;

    align-items:center;

    gap:.5rem;


    padding-bottom:.5rem;


    border-bottom:
        1px dashed rgba(var(--signal-secondary-rgb),.35);


    font-size:.65rem;

    letter-spacing:.18em;


    color:
        var(--signal-secondary);

}



.registry-icon{

    width:16px;

    height:16px;

    color:
        var(--signal-primary);

}



.registry-entry{

    display:flex;

    flex-direction:column;

    gap:.25rem;

    padding-left:.5rem;


    border-left:
        1px solid rgba(var(--signal-secondary-rgb),.25);

}



.registry-label{

    font-size:.65rem;

    letter-spacing:.2em;

    color:
        rgba(var(--signal-secondary-rgb),.65);

}



.registry-key{

    font-family:
        var(--font-code);

    font-size:.75rem;

    color:
        rgba(var(--signal-additional-rgb),.75);

}



.registry-value{

    font-size:.85rem;

    color:
        var(--signal-additional);

}



.registry-description{

    margin:0;

    font-size:.7rem;

    line-height:1.5;


    color:
        rgba(var(--signal-additional-rgb),.8);

}

</style>