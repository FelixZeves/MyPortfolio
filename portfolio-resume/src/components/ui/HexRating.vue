<script setup lang="ts">

import { Icon } from '@iconify/vue';

const props = withDefaults(
    defineProps<{
        value: number
        max?: number
        size?: number
        color?: string
    }>(),
    {
        max: 6,
        size: 16,
        color: "text-signal-secondary",
    }
)

function getIcon(index: number) {

    if (index <= Math.floor(props.value)) {
        return 'mdi:hexagon'
    }

    if (
        index === Math.ceil(props.value) &&
        props.value % 1 !== 0
    ) {
        return 'bi:hexagon-half'
    }

    return 'mdi:hexagon-outline'
}

</script>

<template>
    <div class="flex items-center gap-1 ml-4">
        <Icon
            v-for="index in max"
            :key="index"
            :icon="getIcon(index)"
            :width="size"
            :class="color"
        />
    </div>
</template>

<style scoped>

</style>