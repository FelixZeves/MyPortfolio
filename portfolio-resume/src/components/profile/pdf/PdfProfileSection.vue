<script setup lang="ts">
import { ref } from 'vue';

import type { Profile } from '@/types/profile.ts';
import type { Language } from '@/types/language.ts';

import ProfileInfo from '@/components/profile/ProfileInfo.vue';
import ProfileAbout from '@/components/profile/pdf/PdfProfileAbout.vue';


defineProps<{
    profile: Profile
    languages:Language[]
}>()


</script>

<template>

    
    <section
        class="profile-section"
    >


        <profile-info :profile="profile" :languages="languages"/>

        <profile-about class="about-block" :profile="profile"/>


    </section>

    <section class="profile-about-text">


        <header class="about-header">
            О СЕБЕ
        </header>

        <div class="about-content">
            {{ profile.about }}
        </div>


    </section>

</template>

<style scoped>

.profile-section {

    display:grid;

    grid-template-columns:
        1fr
        1fr;

    column-gap:.5rem;

}

.profile-about-text{

    padding:.75rem 1.2rem 1rem;

    background:var(--paper);

    border-top:
        2px solid
        rgba(var(--paper-dark-rgb), .5);

}

.about-header{

    margin-bottom:0.5rem;

    font-size: 20px;

    font-family: var(--font-poster);

    font-weight:
        600;

    text-transform:
        uppercase;

    letter-spacing:
        -0.03em;

    color:
        var(--industrial-black);

}

.about-content{

    font-family:var(--font-paper);

    font-size: 1rem;

    line-height:1.8;

    text-align:justify;

    color:rgba(var(--industrial-black-rgb), .9);

}

</style>