<script setup lang="ts">

</script>


<template>

<div class="w-full h-full relative content-center">


    <div class="photo-frame">

        <img
            src="@/assets/photo.jpg"
            alt="Profile photo"
        />

    </div>


    <div class="role-panel">

        <h2 class="text-signal-primary">
            SOFTWARE
            ENGINEER
        </h2>


        <p class="text-signal-secondary">
            WEB / BACKEND / SYSTEMS
        </p>

    </div>


</div>

</template>


<style scoped>


.profile-photo {

    position: relative;

    width: 180px;

}


.photo-frame {

    position: relative;

    width: 100%;

    aspect-ratio: 0.8;

    overflow: hidden;

    border:

        1px solid
        var(--technical-line);

}


.photo-frame img {

    width:100%;
    height:100%;

    object-fit: fill;

    filter:
        grayscale(75%)
        contrast(1.1);

}



.role-panel {


    position:absolute;

    bottom:30px;

    left:-25px;


    padding:
        0rem
        1.5rem;


}


h2 {

    margin:.5rem 0;

    font-size:1.4rem;

    line-height:1;

}


p {

    margin:0;

    font-size:.7rem;

}


</style>