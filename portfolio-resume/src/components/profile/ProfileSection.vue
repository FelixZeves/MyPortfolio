<script setup lang="ts">

import type { Profile } from '@/types/profile.ts';
import type { Language } from '@/types/language.ts';

import IndustrialPanel from '../ui/IndustrialPanel.vue';
import ProfileInfo from './ProfileInfo.vue';
import ProfilePhoto from './ProfilePhoto.vue';


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

                <profile-photo/>
            </div>

        </industrial-panel>

        <div class="about-block">
            <div class="about-title">
                ABOUT_PERSON
            </div>

            <p>
                Разрабатываю интерфейсы и программные системы,
                соединяя архитектуру, UX и инженерный подход.
            </p>
            <q-btn icon="arrow_left">MORE INFO</q-btn>
        </div>

    </section>
</template>

<style scoped>

.profile-section{
    display: flex;
    flex-direction: row;
}

.profile-layout {

    display: grid;

    grid-template-columns:
        2fr
        1fr;

    gap: 1rem;

    align-items: center;
    height: 100%;

}

@media(max-width:640px){

.profile-layout{
    grid-template-columns: 1fr;
}

}

.about-block {

    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    padding-top:20px;

}

.q-btn {

    background:
    transparent;

    border:
    1px solid var(--signal-primary);

    color:
    var(--signal-primary);

    padding:
    8px 16px;

}

</style>