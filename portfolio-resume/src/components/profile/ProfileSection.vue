<script setup lang="ts">
import { ref } from 'vue';

import type { Profile } from '@/types/profile.ts';
import type { Language } from '@/types/language.ts';

import IndustrialPanel from '../ui/IndustrialPanel.vue';
import ProfileInfo from './ProfileInfo.vue';
import ProfilePhoto from './ProfilePhoto.vue';
import ProfileAbout from './ProfileAbout.vue';


defineProps<{
    profile: Profile
    languages:Language[]
}>()

const aboutExpanded = ref(false)

</script>

<template>
    <section
        class="profile-section"
        :class="{expanded: aboutExpanded}"
    >

        <industrial-panel class="identity-panel">
            <div
            class="profile-layout"
            :class="{expanded: aboutExpanded}"
            >
                <profile-info :profile="profile" :languages="languages"/>

                <profile-photo :profile="profile"/>
            </div>

        </industrial-panel>

        <profile-about class="about-block" :profile="profile" v-model:expanded="aboutExpanded"/>

    </section>
</template>

<style scoped>

.profile-section {

    display:grid;

    grid-template-columns:
        2fr
        1fr;

    column-gap: .5rem;

    transition:
        grid-template-columns
        .5s

}


.profile-section.expanded {

    grid-template-columns:
        1fr
        1fr;

}


.profile-layout {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    align-items: center;
    height: 100%;

}

.profile-layout.expanded {

grid-template-columns:
    1fr
    0fr;

}

@media(max-width:640px){

.profile-layout{
    grid-template-columns: 1fr;
}

}

</style>