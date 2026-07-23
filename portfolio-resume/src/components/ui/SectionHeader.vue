<script setup lang="ts">

    defineProps<{
        number:string;
        paper:string;
        code:string;
    }>()

</script>

<template>

    <header class="section-header">

        <span class="section-header-paper">
            {{ number }}. {{ paper }}
        </span>

        <span class="section-header-transition">
            _
        </span>

        <span class="section-header-code">
            {{ code }}
        </span>

    </header>

</template>

<style scoped>

.section-header{

    position:absolute;

    top:4px;
    left:-14px;

    display:flex;
    align-items:center;

    padding:
        .25rem
        1.35rem
        .25rem
        1.25rem;

    background:
        linear-gradient(
            90deg,
            var(--signal-primary) 0%,
            var(--industrial-navy) 55%,
            var(--industrial-navy) 80%,
            var(--industrial-black) 100%
        );

    box-shadow:
        0 3px 8px rgba(0,0,0,.18);

}

.section-header::before{

    content:"";

    position:absolute;

    inset:0 -24px 0 0;

    background:

        linear-gradient(
            var(--technical-grid-soft) 1px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            var(--technical-grid-soft) 1px,
            transparent 1px
        ),

        linear-gradient(
            var(--technical-grid-major) 2px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            var(--technical-grid-major) 2px,
            transparent 1px
        );

        background-size:

            8px 8px,
            8px 8px,

            16px 16px,
            16px 16px;

    mask-image:
        linear-gradient(
            90deg,
            transparent 0%,
            transparent 35%,
            black 65%,
            black 85%,
            transparent 90%,
            transparent 100%
        );

    opacity:.22;

    pointer-events:none;

}

.section-header::after{

    content:"";

    position:absolute;

    inset:0 -24px 0 auto;

    width:28px;

    background:
        linear-gradient(
            90deg,
            var(--industrial-black) 0 8px,
            transparent 8px 10px,
            var(--industrial-black) 10px 15px,
            transparent 15px 18px,
            var(--industrial-black) 18px 23px,
            transparent 23px 25px,
            var(--industrial-black) 25px 28px
        );

    clip-path:polygon(
        0 0,
        30% 0,
        35% 10%,
        50% 10%,
        60% 20%,
        85% 20%,
        88% 5%,
        100% 5%,
        100% 25%,
        88% 35%,
        85% 45%,
        60% 65%,
        55% 55%,
        30% 75%,
        25% 85%,
        15% 100%,
        0 100%
    );

    mask-image:
        linear-gradient(
            135deg,
            black 0%,
            black 45%,
            rgba(0,0,0,.7) 60%,
            transparent 100%
        );

}

.section-header-paper{

    @apply text-[.8rem] tracking-[.25rem];

    font-family:var(--font-paper);

    color:var(--paper);

    line-height:1;

}

.section-header-transition{

    @apply text-[.8rem] tracking-[.25rem] font-code;

    color: var(--signal-additional);

    line-height:1;

}

.section-header-code{

    @apply text-[.8rem] tracking-[.25rem] font-code;

    color:var(--signal-primary);

    line-height:1;

}

</style>