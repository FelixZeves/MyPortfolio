<script setup lang="ts">

import { resume } from '@/data/resume';

import ProfileSection from '@/components/profile/ProfileSection.vue';

import ProjectsSection from '@/components/projects/ProjectsSection.vue';

import ExperienceSection from '@/components/experience/ExperienceSection.vue';

import SkillsSection from '@/components/skills/SkillsSection.vue';

import FooterSection from '@/components/FooterSection.vue';

import ResumeFrame from '@/components/ui/ResumeFrame.vue';

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


    <resume-frame :label="'DOC // RES'">


      <profile-section
        :profile="resume.profile"
        :languages="resume.languages"
      />

      <projects-section :projects="resume.projects"/>

      <experience-section :education="resume.education" :workExperience="resume.experience"/>

      <skills-section :skills="resume.skills" :softSkills="resume.softSkills"/>

      <footer-section :contacts="resume.contacts"/>


    </resume-frame>

  </main>
</template>

<style scoped>



</style>