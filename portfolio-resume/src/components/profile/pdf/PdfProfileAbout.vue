<script setup lang="ts">

import type { Profile } from '@/types/profile.ts';

import PdfProfileIdentity from './PdfProfileIdentity.vue';


const props = defineProps<{
    profile: Profile
}>()



</script>


<template>

<div class="about-block">

    <pdf-profile-identity :profile="profile"/>

</div>

</template>


<style scoped>


.about-block {

    position: relative;
    overflow: hidden;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;


    height:100%;
    padding-right: 6px;
    padding-top: 12px;
    padding-bottom: 12px;

}

</style>