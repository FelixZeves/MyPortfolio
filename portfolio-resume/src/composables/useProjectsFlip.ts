import { gsap } from "gsap";
import { nextTick } from "vue";


export function useProjectsFlip(){

    function getActiveSlide(container: HTMLElement){

        return container.querySelector(
            '.q-carousel__slide'
        ) as HTMLElement
    
    }

    async function animateExpand(
        container: HTMLElement,
        update:() => void
    ){
    
        let slide = getActiveSlide(container)
    
        const navigator = container.querySelector(
            '.projects-navigator'
        )
    
        const tl = gsap.timeline({
            defaults:{
                ease:"power2.inOut"
            }
        })
    
        tl.to(navigator,{
    
            opacity:0,
    
            duration:.2
    
        })
    
    
        tl.to(slide,{
    
            opacity:0,
    
            filter:"blur(6px)",
    
            scale:.98,
    
            duration:.3
    
        })
    
        await tl.then()

        update()
    
        await nextTick()
    
        slide = getActiveSlide(container)
    
        const expanded = slide.querySelector(
            '.project-card:not(.hidden)'
        )
    
        gsap.set(slide,{
    
            opacity:0,
    
            filter:"blur(6px)",
    
            scale:.98
    
        })
    
    
        tl.clear()
    
    
        tl.to(slide,{
    
            opacity:1,
    
            filter:"blur(0px)",
    
            scale:1,
    
            duration:.45,
    
            ease:"power3.out"
    
        })
    
        tl.from(expanded,{
    
            opacity:0,
    
            scale:.94,
    
            duration:.35,
    
            ease:"power3.out"
    
        },"-=.25")
    
    }


    async function animateCollapse(
        container: HTMLElement,
        update:() => void
    ){

        let slide = getActiveSlide(container)

        const navigator = container.querySelector(
            '.projects-navigator'
        )

        const tl = gsap.timeline({})

        tl.to(slide,{
            opacity:0,
            filter:"blur(6px)",
            scale:.98,
            duration:.3
        })

        await tl.then()

        update()

        await nextTick()

        slide = getActiveSlide(container)

        gsap.set(slide,{
            opacity:0
        })

        tl.to(slide,{
            opacity:1,
            filter:"blur(0px)",
            scale:1,
            duration:.45,
            ease:"power3.out"
        })

        tl.to(navigator,{

            opacity:1,

            duration:.2

        }, "-=.15")

    }


    return {
        animateExpand,
        animateCollapse
    }

}