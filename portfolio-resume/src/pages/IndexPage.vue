<script setup lang="ts">

import { resume } from '@/data/resume'
import ProfileSection from '@/components/profile/ProfileSection.vue'
import ProjectsSection from '@/components/projects/ProjectsSection.vue';

</script>


<template>

  <main
    class="
      min-h-screen
      flex
      justify-center
      items-start
      py-10
      cutting-mat
    "
  >

    <section
      class="
        w-[min(90vw,794px)]
        aspect-[210/297]
        resume-sheet
        shadow-2xl
        overflow-auto
      "
    >
    
    <profile-section
    :profile="resume.profile"
    :languages="resume.languages"
    />

    <projects-section :projects="resume.projects"/>

    </section>

  </main>
</template>

<style scoped>

@media(max-width:640px){

.resume-sheet{
  width:100%;
  aspect-ratio:auto;
}

}

.resume-sheet {

  background:
    linear-gradient(
      120deg,
      rgba(var(--paper-highlight-rgb), .25),
      transparent 40%
    ),

    linear-gradient(
      300deg,
      rgba(var(--paper-shadow-rgb), .04),
      transparent 50%
    ),

    var(--paper);

    position: relative;
    overflow: hidden;
    isolation: isolate;

    display: grid;

    grid-template-rows: 
    3fr
    2fr
    3fr
    2fr
    1fr;

}

.resume-sheet::before {

  content: "";

  position: absolute;
  inset: 0;
  z-index: 0;

  pointer-events: none;


  background:

    radial-gradient(
      rgba(var(--paper-grain-dark-rgb), .10) .5px,
      transparent .8px
    ),

    radial-gradient(
      rgba(var(--paper-grain-light-rgb), .18) .7px,
      transparent 1px
    );


  background-size:

    5px 5px,
    7px 7px;


  opacity: .35;

}

.resume-sheet > * {

position: relative;

z-index: 1;

}

</style>