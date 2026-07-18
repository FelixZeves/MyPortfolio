<script setup lang="ts">

import type { UIPosition } from '@/types/uiPosition';

withDefaults(
defineProps<{
    position?: UIPosition
    direction?:'horizontal'|'vertical'
    length?:string
    thickness?:string
    color?:string
    flow?:boolean
    flowOffset?:string
}>(),
{
    direction:'horizontal',
    length:'100px',
    thickness:'1px',
    color:'var(--signal-primary)',
    flow:false,
    flowOffset: '20px'
}
)

</script>


<template>

<div
    class="signal-line"
    :class="[
        direction,
        {flow}
    ]"
    :style="position"
/>

</template>


<style scoped>

.signal-line {

    --signal-offset: v-bind(flowOffset);

    position: absolute;

    background:
        linear-gradient(
            90deg,
            transparent,
            v-bind(color),
            transparent
        );

}


.horizontal {

    width:v-bind(length);

    height:v-bind(thickness);

}


.vertical {

    height:v-bind(length);

    width:v-bind(thickness);

    background:
        linear-gradient(
            0deg,
            transparent,
            v-bind(color),
            transparent
        );

}

.flow.horizontal {

    animation:
        signal-flow-horizontal 3s infinite;

}

@keyframes signal-flow-horizontal {

    0%,100% {

        opacity:.5;

        transform:
            translateX(calc(var(--signal-offset) * -1));
            

    }


    50% {

        opacity:.9;

        transform:
            translateX(var(--signal-offset));

    }

}


.flow.vertical {

    animation:
        signal-flow-vertical 3s infinite;

}

@keyframes signal-flow-vertical {

    0%,100% {

        opacity:.5;

        transform:
            translateY(calc(var(--signal-offset) * -1));

    }


    50% {

        opacity:.9;

        transform:
            translateY(var(--signal-offset));
            

    }

}



</style>