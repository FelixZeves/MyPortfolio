<script setup lang="ts">

import { Icon } from '@iconify/vue';

import type { Profile } from '@/types/profile.ts';

import SignalIndicator from '../ui/SignalIndicator.vue';
import SignalPoint from '../ui/SignalPoint.vue';
import SignalLine from '../ui/SignalLine.vue';
import SignalCross from '../ui/SignalCross.vue';

const props = defineProps<{
    profile: Profile
}>()

</script>


<template>

    <div class="profile-photo">

        <div class="overflow-hidden w-full h-full grayscale-[85%] contrast-[1.1]">

            <img
                :src="profile.photo"
                alt="Profile photo"
                class="w-full h-full object-cover"
            />

        </div>

        <div class="signal-overlay">

            <SignalPoint
                :position="{
                    top: '11%',
                    left: '5%'
                }"
                :pulse="true"
                :size="'6px'"
            />

            <SignalLine
                direction="horizontal"
                :position="{
                    top: '11.5%',
                    left: '5%'
                }"
                :length="'65%'"
                :flow="true"
                :flowOffset="'0px'"
            />


            <SignalLine
                direction="vertical"
                :position="{
                    top: '10%',
                    left: '5.5%'
                }"
                :length="'55%'"
                :flow="true"
                :flowOffset="'40px'"
            />

            <SignalCross
            :position="{
                top: '10%',
                left: '3%'
                }"
            />
            

            <div class="coordinates">

                <span>
                    55.1644° N
                </span>

                <span>
                    61.4368° E
                </span>

                <span>
                    CHELYABINSK
                </span>

            </div>

        </div>


        <div class="role-panel">

            <div class="panel-header">

                <SignalIndicator/>
                <span>ENGINEER PROFILE</span>

            </div>

            <h2>
                
                {{ profile.title.toUpperCase() }}

            </h2>

            <div class="knowledge-list">

                <div
                    v-for="knowledge in profile.knowledges"
                    :key="knowledge"
                    class="knowledge-item"
                >

                    <Icon
                        icon="mdi:hexagon"
                        class="text-signal-secondary"
                        width="14px"
                    />

                    {{ knowledge.toUpperCase() }} //

                </div>

            </div>
            
        </div>

    </div>

</template>


<style scoped>


.profile-photo {

    position: relative;

    width: 100%;
    height: 100%;

    overflow: hidden;

    clip-path: polygon(
        0% 0%,
        68% 0%,
        84% 30%,
        68% 37%,
        92% 60%,
        82% 65%,
        92% 92%,
        88% 96%,
        64% 92%,
        64% 92%,
        44% 96%,
        50% 100%,
        0% 100%
    );

}

.signal-overlay {

    position:absolute;

    inset:0;

    pointer-events:none;

}

.coordinates {

    position:absolute;

    left:9%;
    top:1.5%;

    z-index: 10;

    display:flex;

    flex-direction:column;

    font-family:var(--font-code);

    font-size:.65rem;

    letter-spacing:.15em;

    color:var(--signal-primary);

    background-color: var(--industrial-black);

    opacity:.9;

}

.role-panel {

    position:absolute;

    bottom:0;
    left:0;

    width:100%;

    padding:16px;

    background:
        linear-gradient(
            90deg,
            rgba(8,13,18,.95),
            rgba(8,13,18,.65),
            transparent
        );

}


.panel-header {

    display:flex;

    align-items:center;

    gap:.5rem;

    font-family:var(--font-code);

    font-size:.65rem;

    letter-spacing:.35em;

    color:var(--signal-secondary);

    text-transform:uppercase;

}

h2 {

    margin:.5rem 0;

    font-size:1.15rem;

    line-height:1;

    text-transform:uppercase;

    letter-spacing:.08em;

    color:var(--signal-primary);

    position:relative;

}


h2::after {

    content:"";

    display:block;

    width:60px;

    height:2px;

    margin-top:8px;

    background:
        linear-gradient(
            90deg,
            var(--signal-primary),
            transparent
        );

}

.knowledge-list {

    display:flex;

    flex-direction:column;

    gap:4px;

}


.knowledge-item {

    display:flex;

    align-items:center;

    gap:8px;

    font-family:var(--font-code);

    font-size:.70rem;

    letter-spacing:.15em;

    color:var(--signal-primary);

}


.indicator {

    width:8px;

    height:4px;

    background:var(--signal-secondary);

}

</style>