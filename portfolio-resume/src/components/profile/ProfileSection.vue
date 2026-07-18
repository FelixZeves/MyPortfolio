<script setup lang="ts">

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

</script>

<template>
    <section class="profile-section">

        <industrial-panel>
            <div class="profile-layout">
                <profile-info :profile="profile" :languages="languages"/>

                <profile-photo :profile="profile"/>
            </div>

        </industrial-panel>

        <profile-about :profile="profile"/>

    </section>
</template>

<style scoped>

.profile-section{
    display: grid;



    grid-template-columns:
        2fr
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

@media(max-width:640px){

.profile-layout{
    grid-template-columns: 1fr;
}

}

</style>