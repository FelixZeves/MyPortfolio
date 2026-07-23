import { ref } from 'vue';
import { gsap } from 'gsap';

import type { OverlayController } from '@/components/ui/SignalOverlay.vue';

export function useSkillsTransition(){

    const isTransitioning = ref(false)


    function repairProfile(
        scanner: HTMLElement,
        fracture: HTMLElement,
        onRepair:()=>void
    ):Promise<void>{

        if(isTransitioning.value)
            return Promise.resolve()


        isTransitioning.value=true


        return new Promise<void>((resolve) => {

            const path = fracture.querySelector('path')

            if (!path){
                resolve()
                return
            }

            const timeline = gsap.timeline({
        
                onComplete() {
        
                    isTransitioning.value = false

                    resolve()
                }
        
            })
        
            timeline

                .set(scanner,{
                    opacity:1,
                    left:'-5%',
                    top:'0%',
                    scaleY:1
                })


                .to(scanner,{
                    left:'70%',
                    duration:.8,
                    ease:'power2.inOut'
                })


                .to(fracture,{
                    opacity:1,
                    duration:.1
                })

                .to(scanner,{
                    scaleY:.8,
                    duration:.6
                })

                .to(scanner,{
                    top: '-100%',
                    duration:.6,
                    ease:'power2.in'
                },"<")


                .to(path,{
                    strokeDashoffset:0,
                    duration:.8,
                    ease:'power2.out'
                })
                
                
                .to(path,{
                    opacity:.35,
                    repeat:5,
                    yoyo:true,
                    duration:.12
                })


                .to(scanner,{
                    opacity:0,
                    duration:.2
                })

                .call(()=>{
                    onRepair()
                })


                .to(fracture,{
                    opacity:0,
                    duration:.2
                })
        
        })

    }

    async function printStep(
        timeline:gsap.core.Timeline,
        overlay:OverlayController,
        text:string
    ){
    
        const id = overlay.appendStep(text)
    
    
        for(
            let i = 1;
            i <= text.length;
            i++
        ){
    
            timeline.call(()=>{
    
                overlay.updateStep(
                    id,
                    text.slice(0,i) + "_ "
                )
    
            })
    
    
            timeline.to({},{
                duration:.02
            })
    
        }
    
        timeline.call(()=>{

            overlay.setPending(id)
    
        })
    
    
        timeline.to({},{
            duration:.3
        })

        timeline.call(()=>{
    
            overlay.completeStep(id)
    
        })
    
    
        timeline.to({},{
            duration:.2
        })
    
    }

    function corruptProfile(
        overlay: OverlayController,
        onCorrupt:()=>void
    ):Promise<void>{
    
        return new Promise(resolve=>{
        
            const tl = gsap.timeline({
                onComplete() {
                    resolve()
                }
            })
            
            printStep(
                tl,
                overlay,
                "PAPER CORRUPTION DETECTION"
            )
            
            printStep(
                tl,
                overlay,
                "SEARCHING PAPER FRACTURE"
            )
            
            printStep(
                tl,
                overlay,
                "REBOOT DISPLAY STYLE"
            )
            
            tl.call(onCorrupt)
            
            printStep(
                tl,
                overlay,
                "LOAD PERSONAL PROFILE"
            )
            
            printStep(
                tl,
                overlay,
                "COMPLETE RECONFIGURATION"
            )

            tl.to({},
                {duration: .3}
            )
        
        })
    
    }


    return {
        isTransitioning,
        repairProfile,
        corruptProfile
    }

}