<script setup lang="ts">

import type { Profile } from '@/types/profile.ts';


const props = defineProps<{
    profile: Profile
}>()


const previewText = props.profile.about.slice(0, 180)

</script>


<template>

<div class="about-block">


    <!-- Главный лозунг -->
    <h2 class="about-summary">
        {{ profile.summary }}
    </h2>


    <!-- Техническая выдержка -->
    <div class="about-preview">

        {{ previewText }}...

    </div>


    <div class="about-actions">

    <q-btn
        outline
        class="info-btn"
        icon-right="arrow_forward"
    >
        УЗНАТЬ БОЛЬШЕ
    </q-btn>


    <q-btn
        flat
        class="pdf-btn"
        icon="picture_as_pdf"
    >
        СКАЧАТЬ PDF
    </q-btn>

    </div>


</div>

</template>


<style scoped>


.about-block {

    position: relative;
    overflow: hidden;

    display:flex;
    flex-direction:column;
    justify-content:flex-end;


    height:100%;
    padding-right: 6px;
    padding-top: 12px;
    padding-bottom: 12px;

}

.about-block::before {

    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: .55;

    background:

        linear-gradient(
            to right,
            transparent 31px,
            var(--paper-dark) 32px
        ),

        linear-gradient(
            to bottom,
            transparent 31px,
            var(--paper-dark) 32px
        );

    mask-image:
        radial-gradient(
            ellipse 70% 45% at 45% 38%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.95) 40%,
            rgba(0,0,0,.6) 65%,
            transparent 100%
        );

    background-size:
        32px 32px;

}

.about-block::after {

    content: "";

    z-index: 1;

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: .6;

    background:
        radial-gradient(circle, var(--signal-primary-soft) 1.5px, transparent 0px) 0 0 / 64px 64px,
        radial-gradient(circle, var(--signal-primary-soft) 1px, transparent 0px) 32px 32px / 64px 64px;

    mask-image:
        radial-gradient(
            ellipse 70% 45% at 45% 38%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.95) 40%,
            rgba(0,0,0,.6) 65%,
            transparent 100%
        );

}


/*
    Агитационный заголовок
*/

.about-summary {

    z-index: 10;

    margin:0;

    max-width:90%;

    font-size:
        clamp(24px, 2vw, 42px);

    font-family: var(--font-poster);

    line-height:
        1.05;

    font-weight:
        900;

    text-transform:
        uppercase;

    letter-spacing:
        -0.03em;


    color:
        var(--industrial-black);


}

.about-preview {

    position:relative;

    margin-top:20px;

    font-size: 12px;

    font-family: var(--font-paper);

    line-height: 1.6;

    color:
        rgba(0,0,0,.65);


}


/*
    градиент исчезновения текста
*/

.about-preview::after {

    content:"";

    position:absolute;

    left:0;
    right:0;
    bottom:0;

    height:40px;


    background:
        linear-gradient(
            transparent,
            var(--paper)
        );

}


/*
    кнопки
*/

.about-actions {

    display:flex;
    justify-content:space-between;

    margin-top:20px;

}


.q-btn {

    min-height:32px;

    padding:
        4px 6px;


    font-size:
        10px;

    letter-spacing:
        .08em;

}


/*
Продолжение профиля
*/

.info-btn {

    font-family: var(--font-paper);
    
    color: var(--signal-primary);

}


/*
Артефакт / документ
*/

.pdf-btn {

    font-family: var(--font-paper);

    color: var(--industrial-black);

}






</style>