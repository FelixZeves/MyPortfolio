<script setup lang="ts">

withDefaults(
    defineProps<{

        label?: string

    }>(),
    {

        label: "DOC // PDF"

    }
)

</script>

<template>

    <div
        class="resume-frame"
        :data-label="label"
    >

        <section
            class="
                resume-sheet
                shadow-2xl
            "
        >

            <slot />

        </section>

    </div>

</template>

<style scoped>

.resume-frame {

    position: relative;

    padding: 12px;

    background: var(--paper);

    border: 1px solid var(--industrial-black);

}

.resume-frame::before {

    content: "";

    position: absolute;

    inset: 11px;

    border: 2px solid rgba(var(--industrial-black-rgb), .4);

}

.resume-frame::after {

    content: attr(data-label);

    position: absolute;

    top: 10px;
    right: -2px;

    padding: 4px 8px;

    background: var(--signal-primary);

    color: var(--paper);

    font-family: var(--font-paper);

    font-size: 10px;

    letter-spacing: .15em;

}

.resume-sheet {

    width: 794px;

    min-height: 1123px;

    position: relative;
    isolation: isolate;

    display: grid;

    background:

        linear-gradient(
            120deg,
            rgba(var(--paper-highlight-rgb), .25),
            transparent 40%
        ),

        linear-gradient(
            300deg,
            rgba(var(--paper-shadow-rgb), .04),
            transparent 50%
        ),

        var(--paper);

}

.resume-sheet::before {

    content: "";

    position: absolute;

    inset: 0;

    z-index: 0;

    pointer-events: none;

    background:

        radial-gradient(
            rgba(var(--paper-grain-dark-rgb), .10) .5px,
            transparent .8px
        ),

        radial-gradient(
            rgba(var(--paper-grain-light-rgb), .18) .7px,
            transparent 1px
        );

    background-size:

        5px 5px,
        7px 7px;

    opacity: .35;

}

.resume-sheet::after {

    content: "";

    position: absolute;

    inset: 8px;

    border: 1px solid rgba(var(--signal-secondary-rgb), .25);

    clip-path: polygon(
        0 0,
        100% 0,
        100% 65%,
        98% 94%,
        98% 98%,
        0 95%
    );

}

.resume-sheet > * {

    position: relative;

    z-index: 1;

}

</style>