<script setup lang="ts">

import { computed } from 'vue'

import {
    generateSignalElements
} from '@/utils/generators/signals/generateSignalElements'

import type {
    SignalElement
} from '@/types/signals/signals'

import SignalLine from './SignalLine.vue'
import SignalPoint from './SignalPoint.vue'
import SignalCross from './SignalCross.vue'


const props = withDefaults(
    defineProps<{
        width?: string
        lines?: number
        points?: number
        crosses?: number

    }>(),
    {   
        width: '100%',
        lines:0,
        points:0,
        crosses:0
    }
)

const elements:SignalElement[] = generateSignalElements({
    lines:props.lines,
    points:props.points,
    crosses:props.crosses
})


</script>


<template>

<div class="signal-overlay">

    <template
        v-for="element in elements"
        :key="element.id"
    >

        <SignalLine
            v-if="element.type === 'line'"
            v-bind="element"
        />


        <SignalPoint
            v-else-if="element.type === 'point'"
            v-bind="element"
        />


        <SignalCross
            v-else-if="element.type === 'cross'"
            v-bind="element"
        />

    </template>

</div>

</template>


<style scoped>

.signal-overlay {

    width: v-bind(width);

    position:absolute !important;

    inset:0;

    pointer-events:none;

    overflow:hidden;

}

</style>