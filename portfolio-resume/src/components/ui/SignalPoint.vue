<script setup lang="ts">

import type { UIPosition } from '@/types/uiPosition';

withDefaults(
    defineProps<{
        position?: UIPosition
        size?: string
        color?: string
        pulse?: boolean
    }>(),
    {
        size:'6',
        color:'var(--signal-primary)',
        pulse:false
    }
)

</script>


<template>

    <div
        class="signal-point"
        :class="{ pulse }"
        :style="position"
    />

</template>


<style scoped>

.signal-point {

    position: absolute !important;

    width:v-bind(size);
    height:v-bind(size);

    border-radius:50%;

    background:v-bind(color);

    box-shadow:
        0 0 6px v-bind(color),
        0 0 14px v-bind(color);


    position:relative;

}


.signal-point.pulse::after {

    content:"";

    position:absolute;

    inset:-5px;

    border-radius:25%;

    border:
        1px solid v-bind(color);

    animation:
        pulse 2s infinite;

}


@keyframes pulse {

    from {
        transform:scale(.5);
        opacity:.8;
    }

    to {
        transform:scale(2);
        opacity:0;
    }

}

</style>