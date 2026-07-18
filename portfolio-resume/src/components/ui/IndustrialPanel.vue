<script setup lang="ts">
import SignalOverlay from './SignalOverlay.vue';

</script>

<template>

<div class="industrial-panel">

    <svg
        class="panel-bg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
    >

        <defs>

            <!-- Сетка -->

            <pattern
                id="matrix-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
            >

                <line
                    x1="80"
                    y1="0"
                    x2="80"
                    y2="80"
                    class="grid-major"
                />

                <line
                    x1="0"
                    y1="80"
                    x2="80"
                    y2="80"
                    class="grid-major"
                />

            </pattern>

            <clipPath id="panel-clip">

                <path
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

            </clipPath>

        </defs>

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

        <!-- Сетка -->

        <g class="matrix-layer" clip-path="url(#panel-clip)">

            <rect
                width="1000"
                height="1000"
                fill="url(#matrix-grid)"
            />

        </g>

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

    </svg>

    <SignalOverlay
        :width="'85%'"
        :lines="10"
        :points="8"
        :crosses="6"
    />

    <div
        class="panel-content"
    >
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

    width:100%;
    height:100%;

}

.grid-major {

    fill: cover;

    stroke: var(--technical-grid);

    stroke-width: 3;

    opacity: .8;

}

</style>