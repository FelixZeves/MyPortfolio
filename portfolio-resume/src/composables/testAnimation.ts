import gsap from 'gsap'


export function useAnimation() {

    const expand = (
        element: HTMLElement
    ) => {

        gsap.to(
            element,
            {
                scale: 1.05,
                duration: 0.4,
                ease: "power3.out"
            }
        )

    }

    return {
        expand
    }
}