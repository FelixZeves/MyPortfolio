<script setup lang="ts">
import { computed } from 'vue';
import type { CSSProperties } from 'vue';

import type { UIPosition } from '@/types/uiPosition.ts'
import { resolveUIPosition } from '@/utils/useUIPosition';


const props = withDefaults(
    defineProps<{

        position?: UIPosition
        size?: string
        thickness?: string
        color?: string

    }>(),
    {
        size:'16px',
        thickness:'1px',
        color:'var(--signal-primary)'
    }
)


const positionStyle = computed<CSSProperties>(() => {

    return resolveUIPosition(props.position)

})

</script>
<template>

    <div
        class="signal-cross"
        :style="positionStyle"
    >

        <div class="horizontal"/>

        <div class="vertical"/>

    </div>

</template>

<style scoped>

.signal-cross {

    position:absolute;

    width:v-bind(size);

    height:v-bind(size);

}

.horizontal {

    position:absolute;

    left:0;
    right:0;

    top:50%;

    height:v-bind(thickness);

    transform:translateY(-50%);

    background:v-bind(color);

}

.vertical {

    position:absolute;

    top:0;
    bottom:0;

    left:50%;

    width:v-bind(thickness);

    transform:translateX(-50%);

    background:v-bind(color);

}

</style>