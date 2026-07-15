<script setup lang="ts">

</script>

<template>

<div class="industrial-panel">

    <svg
        class="panel-bg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
    >

        <!-- Основная форма -->

        <path
            class="panel-fill"
            d="
                M0,0
                L840,0
                L920,300
                L840,370
                L960,600
                L910,650
                L960,920
                L940,960
                L820,920
                L720,960
                L750,1000
                L0,1000
                Z
            "
        />

        <!-- Контур -->

        <path
            class="panel-border"
            d="
                M840,0
                L920,300
                L840,370
                L960,600
                L910,650
                L960,920
                L940,960
                L820,920
                L720,960
                L750,1000
                L0,1000
            "
        />

        <g class="panel-decoration"/>

    </svg>

    <div class="panel-content">
        <slot/>
    </div>

</div>

</template>

<style scoped>

.industrial-panel {

    position: relative;

    display: grid;

    width: 100%;

    min-height: 280px;

    isolation: isolate;

    z-index: 1;

}

.panel-bg,
.panel-content {

    grid-area: 1 / 1;

}

.panel-bg {

    width: 100%;
    height: 100%;

}

.panel-fill {

    fill: var(--industrial-black);

}

.panel-border {

    fill: none;

    stroke: var(--paper-dark);

    stroke-width: 1;

    vector-effect: non-scaling-stroke;

}

.panel-content {

    z-index: 1;

    padding-right: 2.5rem;

}

</style>