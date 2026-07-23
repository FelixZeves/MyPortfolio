<script setup lang="ts">

import type { ProfessionalExperience as PE} from '@/types/professionalExperience.ts';
import type { Education } from '@/types/education.ts';
import SectionHeader from '../ui/SectionHeader.vue';
import EducationList from './EducationList.vue';
import ProfessionalExperience from './ProfessionalExperience.vue';

defineProps<{
    education: Education[],
    workExperience: PE[]
}>();

</script>

<template>

    <section class="experience-section">

        <SectionHeader
            :number="'03'"
            :paper="'Expe'"
            :code="'RIENCE'"
        />

        <div class="experience-content">

            <EducationList :education="education"/>

            <ProfessionalExperience :workExperience="workExperience"/>

        </div>

    </section>

</template>

<style scoped>

.experience-section{

    @apply relative ps-4 pe-3 pt-8 pb-4;

}

.experience-content{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:.75rem;

}

</style>