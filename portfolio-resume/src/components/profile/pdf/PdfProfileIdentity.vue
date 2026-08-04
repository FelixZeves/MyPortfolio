<script setup lang="ts">

import { computed } from 'vue';

import type { Profile } from '@/types/profile'
import { getEmploymentFormatName, getEmploymentTypeName } from '@/utils/employment';

const props = defineProps<{
    profile: Profile
}>()

const employmentType = computed(
    () => getEmploymentTypeName(props.profile.employment.type)
)

const employmentFormat = computed(
    () => getEmploymentFormatName(props.profile.employment.format)
)

</script>


<template>

    <section class="profile-identity">

        <div class="photo-info">

            <div class="profile-summary">

                <span class="profile-title">
                    {{ profile.title }}
                </span>


                <ul class="knowledge-list">


                    <li
                        v-for="item in profile.knowledges"
                        :key="item"
                    >
                        {{ item }}
                    </li>


                </ul>

            </div>

            

            <div class="detail-group">


                <div class="font-poster uppercase text-sm">
                    предпочтения в работе
                </div>

                <div class="detail-col">
                    <span class="detail-key">Тип занятости</span>
                    <span class="detail-value">{{ employmentType }}</span>
                </div>

                <div class="detail-col">
                    <span class="detail-key">Формат работы</span>
                    <span class="detail-value">{{ employmentFormat }}</span>
                </div>

                <div class="detail-col">
                    <span class="detail-key">Желаемый доход</span>
                    <span class="detail-value">{{ profile.employment.salary }}</span>
                </div>


            </div>

            <div class="detail-group">


                <div class="font-poster uppercase text-sm">
                    доп. информация
                </div>

                <div class="detail-col">
                    <span class="detail-key">Семейное положение</span>
                    <span class="detail-value">{{ profile.personal.maritalStatus }}</span>
                </div>

                <div v-if="profile.personal.drivingLicense" class="detail-col">
                    <span class="detail-key">Водительские права</span>
                    <span class="detail-value">
                        {{  'Категории: ' + profile.personal.drivingLicense }}
                    </span>
                </div>


            </div>


        </div>


        <div class="photo-img">

            <img
                :src="profile.photo"
                alt="Profile photo"
            />

        </div>

    </section>

</template>

<style scoped>

.profile-identity {

    display:flex;

    flex-direction:row;

    justify-content:space-between;

    align-items:start;

    gap:1rem;

    height: auto;

}

.about-details{

    display: flex;

    flex-direction: row;

    justify-content: space-between;

    margin-inline: .25rem;

}

.detail-group{

    @apply flex flex-col gap-y-1 pt-2

}

.detail-group + .detail-group{
    border-top:
        1px solid
        rgba(var(--industrial-black-rgb), .3);
}

.detail-col{

    @apply flex flex-col

}

.detail-key{

    @apply text-sm font-semibold opacity-75

}

.detail-value{

    @apply text-sm

}


.photo-info {

    display:flex;

    flex-direction:column;

    gap:.5rem;

}


.profile-title {

    z-index: 10;

    margin:0;

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


.knowledge-list {

    display:flex;

    flex-direction:column;

    gap:.25rem;

    margin:0;

    padding:0;

    list-style:none;

}

.profile-summary + .detail-group{
    border-top:
        1px solid
        rgba(var(--industrial-black-rgb), .3);
}


.knowledge-list li {

    font-family:var(--font-paper);

    font-size:12px;

}


.knowledge-list li::before {

    content:"//";

    margin-right:.5rem;

    color:var(--signal-primary);

}

.photo-img {

    z-index: 2;

    align-self: center;

    width:220px;

    aspect-ratio:3 / 5;

    flex-shrink:0;

    background:var(--paper);

    padding: 10px;

    border:1px solid rgba(0,0,0,.15);

    transform:
        rotate(1.5deg)
        translateY(-2px);

}

.photo-img::before{

    content:"";

    position:absolute;

    top:-8px;
    left:50%;

    width:48px;
    height:14px;

    transform:
        translateX(-50%)
        rotate(-3deg);

    background: rgba(var(--paper-dark-rgb),.5)

}


.photo-img img {

    pointer-events: none;

    width:100%;

    height:100%;

    object-fit: cover;

    background:  #efe9dc;

    transform:
        scaleX(-1)
        rotate(1deg);

    filter:
        grayscale(.45)
        sepia(.18)
        contrast(.92)
        brightness(.97);

    border:
        1px solid
        rgba(var(--industrial-black-rgb),.4);

}

</style>