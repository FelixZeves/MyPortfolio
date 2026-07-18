<script setup lang="ts">

import { Icon } from '@iconify/vue';


withDefaults(
    defineProps<{
        size?: number
    }>(),
    {
        size:16
    }
)

</script>


<template>

<Icon
    class="signal-indicator"
    icon="streamline-plump:loading-circle-solid"
    :width="size"
    :height="size"
/>

</template>


<style scoped>


.signal-indicator {

    color:var(--signal-primary);

    animation:
        signal-active 6s ease-in-out infinite;

}


@keyframes signal-active {

    0% {

        transform:
            rotate(0deg)
            scale(1);


        filter:
            drop-shadow(
                0 0 3px var(--signal-primary-soft)
            );

    }


    50% {

        transform:
            rotate(180deg)
            scale(1.12);


        filter:
            drop-shadow(
                0 0 8px var(--signal-primary-glow)
            );

    }


    100% {

        transform:
            rotate(360deg)
            scale(1);


        filter:
            drop-shadow(
                0 0 3px var(--signal-primary-soft)
            );

    }

}


</style>