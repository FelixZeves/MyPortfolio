import type { CSSProperties } from "vue"
import type { UIPosition } from "@/types/uiPosition"


export function resolveUIPosition(
    position?: UIPosition
): CSSProperties {

    if(!position)
        return {}

    return {
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left
    }

}